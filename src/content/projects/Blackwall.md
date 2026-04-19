---
title: Blackwall
description: All-in-one Homelab
date: "5-3-2026"
tags: [self-hosting]
status: wip
url: https://blackwall.cam
repo: https://github.com/tmangan64/Blackwall
---

Whenever I use the term 'Blackwall', I'm referring to this specific machine. It hosts this website, many services and terrabytes of media. It is my permanent presence on the Internet.

## Why?

In today's age of AI, advertising and data harvesting, I want to create my own data fortress.

## What it does

It hosts the following services:

- VPN Tunnel providing secure connection anywhere
- DNS sinkhole
- Media server (Jellyfin, Jellyseer, Radarr, Sonarr ,)
- NAS
- Git server
- vscode web server/coder
- Authentik
- n8n
- Outline
- Nextcloud
- Pterodactyl
- Home-Assistant
- Firefly III
- Uptime Kuma
- CyberChef
- Bookstack
- Kaizoku
- Homepage
- pad.ws
- fmhy clone
- Memos
- A few more TBA

## How it works

By using a hypervisor, we can create a segmented server, also providing dynamic resource adjustment.
The machine's OS, software etc is declared via an Ansible configuration meaning replicating an identical server is trivial.
Given that the Blackwall's Ansible template is public, anyone can create their own Blackwall.

The specification of the prototype machine is:

```
Brand               Beelink
OS                  Proxmox
CPU                 Intel Celeron 3.4GHz
RAM                 12GB
Memory Speed        4800MHz
Storage             1x 1TB
Storage Capacity    6x NVMe
```

## Software used

- **DNS Sinkhole** - AdGuard Home
- **Media Server** - Jellyfin stack

## Status

This project is also my undergrad thesis. It is a WIP.
