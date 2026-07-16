---
title: Blackwall
description: All-in-one Homelab
date: "5-3-2026"
tags: [self-hosting]
status: wip
url: https://blackwall.cam
repo: https://github.com/tmangan64/Blackwall
---

The Blackwall is a network centralised around a single server. The goal is to increase digital independence by self-hosting. Each device on the network (inlcuding central node) runs NixOS.

The naming can be confusing intially but it's simple. There are three devices creating this network:

- Elysia, desktop
- Canto, laptop
- Blackwall, server

The names are drawn from Cyberpunk 2077. A rogue and talented hacker named Rache Bartmoss develops and releases viruses upon the internet. These viruses cause AIs across the world to go rogue and leads to the internet being overrun and made unusable. Elysia is the name of his personal cyberdeck (computer) and was his weapon against the corporations.

The Blackwall is also from Cyberpunk 2077 and is the name of the firewall that stops these AI from breaching the new internet. Given it sits between the internet, ravaged and made unusable by AI, it's a fitting name for this project. Given that the Blackwall is actually an AI itself, this is also ironic given that AI has been a useful troubleshooting tool in this project.

Canto is the name of a Cyberdeck and gives the player the ability to 'open' the Blackwall and allow the rogue AIs of the old internet to hack and kill an opponent. It is the device most used to access and maintain the Blackwall project making it a fitting name.

## Why?

In today's age of AI, advertising and data harvesting, I want to create my own 'data fortress' and carve out my pocket of the internet.

## What it does

It hosts the following services:

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
