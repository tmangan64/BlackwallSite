---
title: Blackwall
description: Not this site, the Data Fortress
date: "5-3-2026"
tags: [self-hosting]
status: wip
repo: https://docs.blackwall.cam/
---

The Blackwall is my personal network, comprised of multiple servers, hosts and nodes coordinating to achieve digital soverignty. "blackwall.cam" (this website) is a separate project, named after this Network. The goal of the site is to generally document my progress with both this project, and those adjacent.

# Overview

The Blackwall is a self-hosted multi-host 'data fortress'. The goal is to increase digital independence by becoming reliant on services hosted, owned and managed by myself in response to an increasingly hostile, *Americanised* and corporate Internet. The project is currently in stage 1 but the subsequent 2 stages are fully planned out.

Version 1 of the project involves using a single host to achieve all goals with the intent of learning the underlying processes and technologies involved. Currently a single Beelink ME Pro N150 runs all services which introduced a 'jack of all trades, master of none' problem into the project.

The device currently runs services such as password manager, media library and development tools and lacks proper security hardening but this will change as I have FIDO2 hardware keys on the way and will produce a write-up on my experience with it. Some other technologies involved in this project include Nix/NixOS, Tailscale, SSH.


## Blackwall v2 - Mikoshi & Cynosure

Version 2 is the introduction of the multi-host setup, allowing each host to utilise its hardware to its best potential. The Beelink host will become 'Cynosure' and will continue to run the control, management and monitoring software.

A second host called 'Mikoshi' will be added, likely an enterprise server, with the purpose of hosting my services and storage. NixOS's multi-host capabilities will allow this second host to be entirely controlled from the same config as the first device, consolidating control. 

Enterprise-style hosts focus on data mangement and storage thanks to their vast memory and storage capacities as well as allowing me to upgrade the storage over time thanks to ZFS and RAID technologies. 

## Blackwall v3 - Elysia & Canto

Elysia is my Windows/NixOS desktop computer with an i7-12700KF, 32GB memory and a 4070TI GPU. It uses 2x NVMe drives dualbooted to run both OS' without conflicts. Windows only remains due to some games' anticheats still rejecting the Linux kernel, this is an industry-side problem.

Canto is my 1st generation Thinkpad X1 laptop, also running NixOS. The goal of the version 3 update to the Blackwall project is to merge these desktop configs with the main Blackwall NixOS config, alongside some architecture updates to bring these devices more in line with the other hosts on the network.

## Blackwall v4 - Izanagi

Izanagi is a planned host for AI hardware and computing, requiring large amounts of RAM and ideally 2x respectable GPUs to run a local LLM. The intention is to integrate a local LLM into monitoring and control systems to reduce maintenance complexity whilst maintaining oversight.

Combined with 'abliteration' and optimisation, this will be crucial for development.


### Naming system 

Some may have noticed the names are drawn from Cyberpunk 2077. The *Blackwall* is the name of a large firewall that sits between the old Internet (ravaged and made unusable by AI). It's a fitting name for this project. *Canto* is the name of an item in the game that allows the player to access the Blackwall. It is my laptop and likely the device I'll be accessing the Blackwall from the most.

*Elysia* is my desktop PC. It's named after the device a hacker used to release a virus that destroyed the old Internet. Given the conclusion of my academic studies, it's used more recreationally these days.

# That's it? This is your only project?

<a href="/articles/2026-Nov">No</a>