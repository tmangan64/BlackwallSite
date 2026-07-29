---
title: How to make a home Server secure
description: Guidance on security hardening for home servers
date: "27-7-2026"
tags: [self-hosting]
---

# 1. Introduction

For my Undergrad dissertation, I produced a study looking into how a declerative system would make sharing home server configurations easier. The goal was to assist with the decentralisation of the internet by offering a tool to make installing and configuring a server easier. This is because I reached the understanding that the general public does not have the technical ability to engage with the 'fight for the internet' (in Tim Burners-Lee's one words).

This article was originally a general framework for secure home servers but given the varying purposes of a home server, I thought it'd be best to instead produce a guide on security hardening for home servers. 

Any examples will attempt to remain OS-neutral but examples may be given from a NixOS POV. Sorry.

## 1.1 Terminology and definitions

| Term | Definition |
|-------|-----|
| Host | The physical device running the software and services |
| NAS | 'Network attached storage' - typically a device housing hard drives that become accessible over the internet |
| User | An individual with intentional access to a system |
| Attacker | A malicious individual with unintentional access to a system |
| Hypervisor | A special type of operating system capable of running multiple other operating systems as virtual machines |

# 2. Philosophies

All guidance in this document is informed from real-world Cyber Security philosophies. Why add a lock if you don't know who wants the key?

## 2.1 Access Controls

### 2.1.1 AAA

AAA stands for Authentication, Authorization, and Accounting. This model forms the foundation of access control by answering three fundamental questions: who are you, what are you allowed to do, and what have you done?

Without authentication, systems cannot distinguish legitimate users from attackers. Without authorization, authenticated users may gain excessive access. Without accounting, malicious or accidental actions may occur without any means of investigation or attribution. Together, these provide the basis for secure and accountable system operation.

### 2.1.2 Principle of Least Privilege

The Principle of Least Privilege states that users, applications, and services should only be granted the minimum permissions necessary to perform their intended functions. 

Every permission granted represents an opportunity for misuse, either through malicious activity or simple human error. When an account or service is compromised, the permissions available to that account determine the potential damage that can be inflicted. By limiting privileges, organisations reduce the likelihood that a single mistake, vulnerability, or stolen credential will result in widespread compromise.

## 2.2 Attack Surface

### 2.2.1 Least Functionality

Least Functionality holds that systems should be configured to provide only the capabilities required to fulfil their intended purpose, with all other services, features, and software disabled or removed.

An enabled feature that nobody uses still has to be patched, still runs code that could contain a flaw, and still gives an attacker one more thing to try. Cutting a system down to only what it functionally needs shrinks the number of components that must be tracked, patched, and defended.

### 2.2.2 Secure by Design

Secure by Design states that systems and software should ship with the most restrictive, safest configuration out of the box, requiring users to deliberately opt into weaker security postures rather than opt into stronger ones.

When the default configuration is weak, the safety of every deployment depends on the administrator knowing exactly what to change, an assumption that fails constantly in practice. A system that is safe from first boot doesn't rely on that knowledge existing at all and is one of the reason's I am such a huge proponent of NixOS and declarative systems.

### 2.2.3 Attack Surface Reduction

Attack Surface Reduction is the proactive identifying and closing off the points at which an attacker could enter or harm a system. This includes closing unused network ports, removing stale user accounts, restricting API endpoints and trimming unnecessary code.

An attacker only needs to be lucky once while a defender must be lucky every time. This means the size of that attack surface matters more than any single control on it. Reducing that surface deliberately, rather than letting it grow by accident, is what keeps the odds in the defender's favour.

## 2.3 Layered Security

### 2.3.1 Defence in Depth

Defence in Depth is the practice of stacking multiple, independent security controls throughout a system, so that the failure of any one control doesn't hand an attacker the whole thing. These layers might span network segmentation, firewalls, authentication, encryption, and monitoring, each potentially catching something the others might miss.

Spreading protection across several layers instead of leaning on one strong barrier means a bypass of any individual layer still leaves the system standing. It's the difference between a resilient system and one that folds the moment its single line of defence is crossed.

### 2.3.2 Assume Breach

Assume Breach is the operating principle that a system should be designed and monitored as though an attacker already has some level of internal access, rather than trusting the perimeter to keep threats out entirely.

A security model built purely around the perimeter means one breach grants free rein internally, since nothing behind the front door was built to stop anyone. Treating compromise as inevitable, given enough time and motivation on the attacker's part, pushes defenders to segment internal networks, log internal activity, and cap what any single compromised account or service can reach.

### 2.3.3 Fail Secure

Fail Secure states that when a system, control, or component fails, it should default to a state that denies access, rather than one that grants it.

A control that fails open turns any fault, accidental or deliberately provoked, into a way past that control entirely. Building systems to fail secure means an error results in something being unavailable, not something being wide open.

## 2.4 Verification

### 2.4.1 Trust but Verify

Trust but Verify holds that even trusted users, systems, and processes should be subject to ongoing checks, rather than being granted unconditional confidence the moment that trust is established.

Trust that's granted once and never revisited becomes a blind spot, exactly the kind that insider threats, stolen credentials, and configuration drift rely on going unnoticed. Checking on trusted access on an ongoing basis means misuse or compromise gets caught early, rather than surfacing only once the damage is already done.

### 2.4.2 Security Through Transparency

Security Through Transparency argues that a system's security shouldn't depend on the secrecy of its design or source code, in contrast to security through obscurity. Tools like sops-nix allow a NixOS configuration to keep it's secrets encrypted meaning it's perfectly fine to upload the configuration to a public repository.

A design that's only secure because nobody knows how it works falls apart the moment that secrecy leaks. Open review by a wider community catches flaws an internal team alone would miss.

## 2.5 Other

### 2.5.1 CIA Triad

The CIA Triad (Confidentiality, Integrity, and Availability) defines the three core properties that security controls exist to protect: information accessible only to those authorised, data that stays accurate and unaltered, and systems that remain accessible when needed.

Most security decisions come down to a trade-off among these three, and most real-world incidents trace back to a failure of at least one.

### 2.5.2 Risk-Based Security

Risk-Based Security holds that security investment should be prioritised according to the actual likelihood and impact of the threats a system faces, rather than applied uniformly.

Time and budget for securing a system are limited, so treating every asset and threat as equally important over-protects what doesn't matter and under-protects what does. Why spend thousands preparing for an issue that will realistically never occur?

### 2.5.3 Security and Usability

Security and Usability recognises that controls too burdensome for legitimate users tend to get circumvented or abandoned.

A control that's technically sound but unworkable gets worked around, whether through shared passwords or people finding tools outside the sanctioned ones, and ends up providing less protection than a slightly weaker control people actually follow.
