---
title: My NixOS configuration
description: An opinionated NixOS config with home-manager and flakes
date: "10-3-2026"
tags: [computers]
---

## What is Nix?

Nix is:
```
declerative
purely functional
lazily evaluated
dynamically typed.
```
It is a programming language where you describe your intended final result and Nix will sort the rest. The idea is simple:
- Every package is defined by exactly what goes into it.
- Each package is stored in its own location.

Traditional package managers for Unix-like distros like apt, brew and npm , store their packages in a shared location like 
```
/usr/lib
```
This causes issues when upgrading one package can break another. Nix gives each package its own folder, based on a hash of *everything* that goes into it. This includes source code, compiler version, flags, dependencies etc. This means that a change to anything will result in a different hash meaning different versions of the same packages can coexist. 
This provides immense reproducability. A package built on one system will be identical on anyone else's. Switching to an old version is easy given the old package was never overwritten and installing/removing packages won't break other things.

## What is NixOS?

NixOS is an OS using the Linux kernel based around the aforementioned Nix package manager. On a normal Linux distro, you configure the system by running commands, editing configuration files and installing packages.
NixOS is configured by a single file, usually called 'configuration.nix'. When the user runs a 'rebuild' command, NixOS reads the configuration and creates the system based on that.

An example of a snippet from a NixOS config is:
```
{ config, pkgs, ... }:

{
  services.nginx.enable = true;
  users.users.rache.isNormalUser = true;
  environment.systemPackages = with pkgs; [ git firefox ];
  networking.hostName = "elysia";
}
```

## Flakes

Before flakes, NixOS suffered from an issue where depending on when two users last updated, the same package might be different versions. There was also no way to structure a Nix project or declare its dependencies.

A flake is a repository or folder that has a 'flake.nix' file with the following structure:
```
{
  description = "project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.05";
    home-manager.url = "github:nix-community/home-manager";
  };

  outputs = { self, nixpkgs, home-manager, ... }: {
    # NixOS configs, packages, dev shells, etc.
  };
}
```

The flake is split into two sections; inputs and outputs. In 'inputs' you declare where your dependencies come from such as git repos or other flakes. In 'outputs', you declare what your flake produces such as packages or NixOS configs.

When you use a flake, Nix automatically creates a flake.lock file that pins every input to an exact hash.

### Home Manager

NixOS manages packages at the system level. This means packages are installed here across all users. Home Manager brings the declerative philosophy to the home directory level. It allows you to declare your dotfiles and configs decleratively.
```
{ config, pkgs, ... }:

{
  home.packages = with pkgs; [ ripgrep fzf bat ];

  programs.git = {
    enable = true;
    userName = "Rache";
    userEmail = "rache@bartmoss.com";
  };
}
```

This means when you rebuild your system using a home-manager based NixOS config, not only will NixOS automatically reinstall the system's and each user's packages but it will also reapply each user's declared personal configs.

The best part about Home Manager is that it works on any system running Nix, not just NixOS. This includes macOS, WSL and any Linux distro.