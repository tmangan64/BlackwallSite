---
title: "Neural Network Visualizer"
description: "An interactive tool for visualizing and debugging neural network architectures in real-time, with layer inspection and gradient flow analysis."
date: "2024-11-15"
tags: ["python", "pytorch", "visualization", "ML"]
status: "active"
github: "https://github.com/yourusername/nn-visualizer"
url: ""
---

## Overview

This project started as a debugging aid for my own ML experiments and grew into a full visualization suite. The core idea is simple: when you're training deep networks, it's incredibly hard to intuit what's happening at each layer. This tool makes that invisible process visible.

## Features

- Real-time gradient flow visualization during training
- Layer activation heatmaps
- Weight distribution histograms per layer
- Attention map rendering for transformer architectures
- Export to SVG/PNG for papers and reports

## Technical Architecture

The system hooks into PyTorch's `register_forward_hook` and `register_backward_hook` APIs to intercept tensors at every layer boundary without modifying the original model code.

```python
def attach_hooks(model: nn.Module) -> list:
    hooks = []
    for name, layer in model.named_modules():
        h = layer.register_forward_hook(
            lambda m, i, o, n=name: capture(n, o)
        )
        hooks.append(h)
    return hooks
```

Data is streamed over a WebSocket to a browser-based renderer built with D3.js.

## Current Status

Working on adding support for ONNX model imports and a comparison mode for side-by-side architecture diffs.
