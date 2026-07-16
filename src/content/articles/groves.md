---
title: Groves
description: A brief introduction to GroveOS and the Ley Lines
date: "16-7-2026"
tags: [concept, self-hosting]
---

## The Problem

Current methods of self-hosting and decentralisation of infrastructure place a heavy burden on the invididual. A user must not only build but maintain software that may take specialist software to do so. My own undergrad thesis focused on attempting to make this easier with NixOS-based 'templates' for home servers.

## Proposed Solution

I propose an operating system named 'GroveOS'. It functions as:

- personal data store
- identity provider
- media server
- communications hub
- family archive
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
