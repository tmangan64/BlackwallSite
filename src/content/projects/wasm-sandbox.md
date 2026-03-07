---
title: "WASM-Powered Code Sandbox"
description: "Browser-based code execution environment using WebAssembly. Supports Python, Lua, and a custom scripting language. Zero server-side execution."
date: "2025-02-20"
tags: ["wasm", "typescript", "compilers", "web"]
status: "wip"
github: ""
url: ""
---

## Concept

Run code entirely in the browser. No backend. No Docker containers. No cold starts. Just WASM.

## Current Language Support

- **Python** via Pyodide — full stdlib, numpy, pandas
- **Lua** via a lightweight WASM port of PUC-Lua 5.4
- **SCRIPT-0** — a custom stack-based language I'm building for experimentation

## The Hard Parts

### Memory Isolation

Each sandbox gets its own WASM linear memory region. Cross-sandbox communication is explicitly forbidden at the VM level.

### Execution Limits

Infinite loops are a real problem in browser-based execution. I'm using a combination of:

1. Fuel metering (tick counting)
2. A watchdog Web Worker that kills stalled contexts
3. Async checkpointing for long-running computations

## Roadmap

- [ ] Persistent filesystem via OPFS
- [ ] Collaborative editing
- [ ] Language Server Protocol bridge for autocomplete
