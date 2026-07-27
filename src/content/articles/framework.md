---
title: Home Server Framework
description: A generic framework for a domestic home server using NixOS
date: "27-7-2026"
tags: [self-hosting]
---

## 1. Introduction

For my Undergrad dissertation, I produced a study looking into how a declerative system would make sharing home server configurations easier. The goal was to assist with the decentralisation of the internet by offering a tool to make installing and configuring a server easier. This is because I reached the understanding that the general public does not have the technical ability to engage with the 'fight for the internet' (in Tim Burners-Lee's one words).

To help take power from big tech corporations and assist with the installation and configuring of a self-hosted server, I have written a general guide for how to configure a secure home-server. The framework uses NixOS as, once the user understands the ecosystem and syntax, managing a system state becomes significantly easier and more reliable than imperative systems.

### 1.1 Terminology and definitions

| Term | Definition |
|-------|-----|
| Host | The physical device running the software and services |
| NAS | 'Network attached storage' - typically a device housing hard drives that become accessible over the internet |
| User | An individual with intentional access to a system |
| Attacker | A malicious individual with unintentional access to a system |
| Hypervisor | A special type of operating system capable of running multiple other operating systems as virtual machines |

### 1.2 Purpose

The purpose of a home server is to self-host a service or funtion usually provided by a third-party such as replacing cloud storage (OneDrive, Google Drive) with a NAS or Nextcloud. It shifts resposiblilty of data storage and safety from a regulated provider to an individual. The purpose of this framework is to assist with managing that responsibility and understanding the role of 'system administrator'.

### 1.3 Scope

This framework describes techniques and systems used to create, install and maintain a home server. It does not dictate what services a server may host but instead, how the service should be hosted.

Within the context of a home server, a user will typically be a family member or at the very least, an occupant of the household.

### 1.4 Design principles

## 2. Threat model

### 2.1 Assets

### 2.2 Common Attack Scenarios

### 2.3 Security Policies

## 3. Architecture Principles

### 3.1 Simplicity

### 3.2 Least privilege

### 3.3 Data and recovery

## 4. Hardware

### 4.1 Processing requirements

### 4.2 Storage requirements

### 4.3 Power efficiency

### 4.4 Longevity and repairs

## 5. Storage architecture

### 5.1 Drive types

### 5.2 Filesystem

### 5.3 Redundancy

## 6. Physical security

### 6.1 Device placement

### 6.2 Access control

### 6.3 Hardware disposal

## 7. Power

### 7.1 UPS

### 7.2 Surges and safety

## 8. Operating system

### 8.1 NixOS

### 8.2 Configuration management

### 8.3 Secret keeping

### 8.4 OS deployment

## 9. System hardening

***

This document is unfinished
