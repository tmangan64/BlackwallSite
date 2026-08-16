---
title: Blackwall
description: Not the website, the server host
date: "5-3-2026"
tags: [self-hosting]
status: wip
repo: https://docs.blackwall.cam/
---

'blackwall.cam' is a separate project, named after this Server.

# Introduction

The Blackwall is a self-hosting server project revolving around multiple hosts using NixOS. The goal is to increase digital independence by becoming reliant on services hosted, owned and managed by myself. The Server is comprised of a multiple 'hosts' (servers), all connected together. Enterprise-style hosts focus on data mangement and storage thanks to their vast memory and storage capacities as well as allowing the Blackwall to scale it's storage and resource capabilities easily. Other hosts include a Beelink ME Pro N150 which acts as the central node and will eventually host the network infrastructure of the server.

Here are the hosts:

| Name | Status | Hardware | Description |
|------|--------|----------|-------------|
| Blackwall | Active | Beelink ME Pro M150 | Prototype device and central node |
| Elysia | Active | Desktop | Development and productivity device |
| Canto | Active | Laptop | Experimental and development device |
|------|--------|----------|-------------|
| Cynosure | WIP | Enterprise Server | Data Fortress |
| Sapphire | Planned | TBD | Data Fortress |
| Kabuki | Planned | TBD | Data Fortress |

## Naming system 

The names are drawn from Cyberpunk 2077. A rogue and talented hacker named Rache Bartmoss develops and releases viruses upon the internet. These viruses cause AIs across the world to go rogue and leads to the internet being overrun and made unusable. Only the active hosts have their names explained.

The *Blackwall* is also from Cyberpunk 2077 and is the name of the firewall that stops these AI from breaching the new internet. Given it sits between the old Internet, ravaged and made unusable by AI, it's a fitting name for this project.

*Canto* is the name of a Cyberdeck and gives the player the ability to 'open' the Blackwall and allow the rogue AIs of the old internet to hack and kill an opponent. It is my laptop and my most used method of accessing the Blackwall server.

*Elysia* is my desktop PC. It's name comes from Rache Bartmoss' cyberdeck, the device he used to release a virus that destroyed the old Internet. Given the conclusion of my academic studies, it's used more recreationally these days.

The Blackwall currently hosts the following services:

- TailScale (with caddy addon)
- Arr* suite stack (Jellyseerr, Radarr, Sonarr & co)
- Homepage

## Planned potential services

| Service | Purpose |
|---------|---------|
| Adguard Home | DNS Sinkhole |
| Forgejo | Git repository hosting |
| code-server | Browser-hosted IDE |
| n8n | AI-powered automation and workflows |
| Outline | Document hosting |
| Nextcloud | File hosting |
| Pterodactyl | Game server hosting |
| Actual Budget | Finance tracking app |
| pad.ws | Browser whiteboard app |
