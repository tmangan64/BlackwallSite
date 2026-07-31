---
title: Blackwall
description: Not the website, the server host
date: "5-3-2026"
tags: [self-hosting]
status: wip
url: https://blackwall.cam
repo: https://github.com/tmangan64/Blackwall
---

# Introduction

```
'blackwall.cam' is named after the Blackwall server and is a separate project
```

The Blackwall is a network centralised around a single server. The goal is to increase digital independence by self-hosting. Each device on the network (inlcuding central node) runs NixOS.

There are three hosts on the network:

| Name | Hardware | Description|
|------|----------|------------|
| Elysia | Desktop | Development and productivity device |
| Canto | Laptop | Experimental and development device |
| Blackwall | Server | Service and data hosting device |

The names are drawn from Cyberpunk 2077. A rogue and talented hacker named Rache Bartmoss develops and releases viruses upon the internet. These viruses cause AIs across the world to go rogue and leads to the internet being overrun and made unusable. Elysia is the name of his personal cyberdeck (computer) and was his weapon against the corporations.

The Blackwall is also from Cyberpunk 2077 and is the name of the firewall that stops these AI from breaching the new internet. Given it sits between the old Internet, ravaged and made unusable by AI, it's a fitting name for this project.

Canto is the name of a Cyberdeck and gives the player the ability to 'open' the Blackwall and allow the rogue AIs of the old internet to hack and kill an opponent. It is my laptop and my most used method of accessing the Blackwall server.

Elysia is my desktop PC. It's name comes from Rache Bartmoss' cyberdeck, the device he used to release a virus that destroyed the old Internet. Given the conclusion of my academic studies, it's used more recreationally these days.

It currently hosts the following services:

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

## How it works

The server runs NixOS. It's config can be found <a href="https://www.github.com/tmangan64/Blackwall">here</a>.
