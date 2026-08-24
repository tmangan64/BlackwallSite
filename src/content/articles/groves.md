---
title: Groves
description: Proposal for dedicated Home Server operating system
date: "16-7-2026"
tags: [concept, self-hosting]
---

# Background

It is my firm belief that the seizure of digital sovereignty and responsibility from "big tech" is crucial for global wellbeing. Time and time again these companies have demonstrated that they cannot be trusted to protect our information or our best interests; the decline of physical media has handed corporations the ability to sell a product without transferring ownership to the buyer [See Sony] whilst our reliance on these companies has allowed them to disregard the regulations designed to protect us.

In response, some individuals have turned to hosting their own data on their own computers within their own homes. This is great for us few as we live our lives knowing our photos and emails live within our controlled domains but there remains a problem, being that a vocal minority is still a minority. 

"If everyone would just learn how to self-host a server, we may retake control of our digital lives"

At no point in time, in the history of humanity as "everyone just". The general public cannot be expected to reclaim that responsibility when we, the technical community, have not made it easy. Old Terry, down the road, is not going to open his BIOS and install a headless Ubuntu server to host his Nextcloud library. Given this, I conducted my undergrad thesis on home servers, specifically making a NixOS config generator, allowing for easy creation and distribution of secure NixOS flakes for home servers but this does not solve the underlying issue of technical complexity.

# Proposed Solution

I propose an Operating System called "Grove" (or GroveOS). It's goal is to make the installation, configuration and maintenance of a domestic home server as easy as possible for the end user.

***
**Unfinished content below**

It functions as:

- personal data store
- identity provider
- media server
- communications hub
- gateway to the Grove network via Ley Lines

## Ley Lines

Ley Lines are the name of the communication protocol used by Groves. They define:

- how groves are identified
- how groves discover one another
- how connections are established
- how data is encrypted
- how data is transmitted between groves

A Ley Line is not a relay network and does not route third-party software. Communications between two groves is never bounced through another.

## Grove Discovery

Discovery is only used to locate and verify another Grove's network presence. This is achieved by a distributed hash table (DHT) and is shared with other Groves, meaning the each Grove acts as a node in a greater discovery system.

Once discovered, a Ley Line is established. This verifies the identity of the intended Grove and establishes future communications. This is the only involvement third-parties have with communication between two Groves.

## Security

Ley Lines are end-to-end encrypted. Groves authenticate with each other before communication begins. This ensures data confidentiality, integrity, protection against impersonation and man-in-the-middle attacks.

## Clients and users

Upon setup, a Grove creates a VPN tunnel network based on the WireGuard protocol, similarly to how Tailscale works. This means users do not need to reconfigure their router to allow for port-forwarding.
