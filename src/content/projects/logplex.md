---
title: "Distributed Log Aggregator"
description: "A lightweight, self-hosted log aggregation system using ClickHouse and a custom ingestion pipeline. Handles millions of events/sec with sub-second query latency."
date: "2024-09-03"
tags: ["rust", "clickhouse", "distributed", "infra"]
status: "stable"
github: "https://github.com/yourusername/logplex"
url: ""
---

## Why Another Log Aggregator?

Datadog is expensive. Elastic is a resource hog. I needed something that ran on a $20/mo VPS and could still handle the log volume from a handful of production services. `logplex` is the result.

## Architecture

```
services → UDP/TCP ingest → ringbuffer → batch writer → ClickHouse
                                           ↓
                                    dead-letter queue (S3)
```

The ingest layer is written in Rust and uses `tokio` for async I/O. A ring buffer absorbs traffic spikes, and a batch writer flushes to ClickHouse every 500ms or 10k events, whichever comes first.

## Performance

On a single `c3.small` instance:

- Ingest: ~2.1M events/sec
- p99 query latency: 180ms on 30-day windows
- Storage: ~0.8 GB/day per service (compressed)

## Deployment

Ships as a single binary with an embedded config schema. One `systemd` unit, zero dependencies.

```bash
./logplex --config /etc/logplex/config.toml
```
