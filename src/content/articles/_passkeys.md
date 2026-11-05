---
title: Passkeys & YubiKeys
description: Guidance on authentication and personal security
date: "3-11-2026"
tags: [thoughts]
---

# Current Security Landscape

Current security recommendations include randomly generated passwords, stored in password managers, protected via MFA. For many years, this was acceptable security but with the rise of swarm AI working round the clock to exploit CVEs to install info-stealers on your devices, this is no longer the case.

(Note I said MFA, not 2FA; MFA specifically refers specifically to **different** types of authentication such as password + OTP while 2FA just means any authentication twice, such as 2 passwords)

While info stealers can be counteracted by simply using MFA, a cookie stealer bypasses this completely by tricking the server into thinking the attacker's device is simply your own already-authenticated device reconnecting.

As a result, this is no longer sufficient security. The rest of this document aims to highlight emerging technologies that solve significant security issues.

# Passkeys Explained

In 2012, an alliance called FIDO (Fast IDentity Online) was formed from a variety of tech companies such as Amazon, Apple, Intel, Microsoft, Paypal etc with the goal of eliminating the need for passwords. In 2022, Apple announced they will begin to support Passkeys as a method of signing in with the rest of the industry following suit.

Providing you understand private and public key systems, passkeys are very simple. When setting up a passkey, you give the service/website the public key and your device places the private key within a 'vault'. The joy of Passkeys is that the method of unlocking this vault could be as easy as Face ID, the website then authenticates you and provides access, instead of authenticating a password against a username maybe with MFA. 

It's much harder to perform a phishing attempt against this as a fake website would not hold the public key you created during setup and there's no password on your device that an info-stealer could access as the important stuff is locked within your devices' vault and unless you're a MOSSAD political opponent, I wouldn't worry about that being breached.

# Harware Keys

Hardware keys are a step above. They are physical devices that typically attached to a keychain that you plug into your client device when authenticating with a service. It allows you to use passkey technology on any device as long as you have the physical key. Hardware keys are FIDO2 compatible and there are many types.

I originally looked into Yubikeys but found some issues which I don't think are suited for individual users. They come with  

***

# Current state of security
Random unique passwords, per site stored in a manager and authofilled