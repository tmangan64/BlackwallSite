---
title: Personal App Suite
description: An Odoo-alternative for personal management
date: "31-7-2026"
tags: [self-hosting]
status: wip
---

Claude-code development notes for app project

# Project: Self-Hosted Personal Management Suite ("Personal Odoo")

## 1. Overview

A modular, self-hosted web application that replicates Odoo's app-installer
pattern (single kernel + installable modules) at a fraction of the
complexity, purpose-built for personal/household use.

## 2. Architecture

- **Kernel**: auth (passkeys/WebAuthn), session management, module
  registry, API router, audit log, settings/module manager.
- **Modules**: self-contained units, each owning its own DB tables, routes,
  and nav entry. Installed/enabled independently.
- **Data layer**: single Postgres instance, one ZFS dataset for DB, one for
  file/document storage.
- **Stack**: FastAPI (Python) + SQLAlchemy/Alembic backend; HTMX + Alpine.js
  frontend (server-rendered, no SPA build step); Postgres; deployed as a
  NixOS module/systemd service.

## 3. Security & Encryption

- **At rest**: native ZFS encryption on all datasets (DB, documents,
  backups); keys managed via sops-nix/agenix, never stored in plaintext.
  Field-level encryption (pgcrypto) on sensitive columns (finance,
  credentials) as defense-in-depth beyond ZFS.
- **In transit**: TLS via internal self-signed CA on every hop — client to
  app, app to DB, app to LLM runtime. No plaintext internal traffic.
- **Backups**: restic/borg, encrypted with a separate key from the ZFS
  dataset key, so a stolen backup is independently useless.
- **Secrets**: sops-nix/agenix for DB credentials, session signing keys,
  LLM API keys — decrypted only at NixOS activation.
- **Auth**: passkey-based login, opaque server-side sessions (no client-held
  JWTs), full audit log of writes (human and LLM-initiated).
- **Network**: no public exposure; Tailscale-only access.

## 4. Modules

### 4.1 Tasks & Projects
- Two entity types:
  - **Projects** — large-scale, kanban board view (customizable columns),
    support sub-tasks nested under project tasks.
  - **Tasks** — one-off, flat list, no kanban/sub-task overhead.
- Visual style: minimal, card/checkbox-driven, similar to Donetick.
- **LLM access**: full CRUD (read, write, add, delete) via MCP tool
  exposure.

### 4.2 LLM Integration
- **Chat panel**: conversational interface to the self-hosted LLM
  (Ollama/vLLM), with MCP-based tool access into other installed modules.
- **Config page**: define automated workflows — trigger (cron, module
  event, manual/chat-invoked) + ordered steps (LLM call, conditional
  branch, module read/write, notification).
- **Permission scoping**: per-module, per-action grants (e.g. Tasks &
  Projects = full CRUD; Shopping List = read/add/delete; Notes =
  read-only) configured in this module.
- Every LLM-initiated write requires explicit confirmation and is logged
  to the kernel audit log.

### 4.3 Notes
- Obsidian-inspired but fully web-based: markdown notes, backlinks/
  wikilinks, folder/tag organization.
- Read/render view for browsing and viewing notes.
- **Template config**: define reusable note templates for structured note
  creation.

### 4.4 Calendar
- CalDAV-compliant server — subscribable from any standard CalDAV client
  (phone, desktop, Thunderbird, etc.).
- **Subscription capability**: import external calendar feeds (ICS/webcal
  URLs) alongside natively created events.

### 4.5 Cupboard
- Tracks food/ingredient inventory across multiple storage locations
  (freezers, cupboards, fridges — supports more than one of each).
- Per-item: quantity, category, storage location, expiry date.
- Low-stock and expiry alerts.

### 4.6 Recipes
- Mealie-style recipe storage: ingredients, instructions, meal planning.
- **Cupboard integration**: recommends meals based on current Cupboard
  inventory.
- **Ingredient vocab matching** (e.g. "tomato" vs "cherry tomatoes")
  handled by the LLM Integration module when installed; falls back to
  exact/simple matching if the LLM module isn't installed.

### 4.7 Finance
- Actual Budget-style envelope/zero-based budgeting: accounts,
  transactions, categories, budget allocations.
- **Bank import**: CSV import with column mapping and de-duplication;
  OFX/QFX support as a possible stretch goal if banks support export.
- Reports: spending by category, net worth over time.

### 4.8 Maintenance
- Household maintenance schedules and reminders (recurring tasks).
- Warranty tracker: item, purchase date, expiry, receipt/document
  attachment.
- Vehicle service records: service history log, parts used.
- Vehicle documentation storage: manuals, registration, other docs
  (PDF/file attachments).

### 4.9 Shopping List
- One or more lists (e.g. groceries, hardware).
- **LLM access**: read, add, delete (via MCP tool exposure from the LLM
  Integration module).
- Optional integration point: auto-populate from Cupboard low-stock alerts
  or Recipes meal-plan gaps (flagged for later decision, not yet approved).

## 5. Cross-module integration points (for design phase)
- Recipes ↔ Cupboard: inventory-aware meal suggestions.
- Recipes/Cupboard → Shopping List: missing-ingredient auto-add
  (optional, pending approval).
- Maintenance → Notes/Documents: manuals and warranty docs storage.
- LLM Integration → Tasks & Projects (full CRUD), Shopping List
  (read/add/delete), Recipes/Cupboard (vocab matching), Notes (read-only).

## 6. Open decisions for next phase
- Exact permission model granularity per module (role-based vs. flat
  owner-only, given single/few-user household use).
- Whether Shopping List LLM access includes update, or stays strictly
  read/add/delete as specified.
- CSV import format targets (bank-specific column mapping presets vs.
  generic mapper UI).
- LLM runtime choice and hardware allocation (Ollama vs vLLM, GPU
  passthrough availability on host).
