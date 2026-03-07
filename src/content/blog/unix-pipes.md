---
title: "The Underrated Power of Unix Pipes"
description: "You don't need a data pipeline framework. You need grep, awk, and a good understanding of stdin/stdout."
date: "2025-03-01"
tags: ["unix", "cli", "productivity"]
---

## The Pipeline Philosophy

Every Unix tool does one thing and passes its output to the next. This isn't a limitation — it's the most powerful composition model in computing.

Consider: you have a 4GB JSON-lines log file and you need the top 10 user agents by request count for 5xx responses. You could write a Python script. Or:

```bash
grep '"status": 5' access.log \
  | jq -r '.user_agent' \
  | sort \
  | uniq -c \
  | sort -rn \
  | head -10
```

This runs in parallel across pipeline stages. `grep` is filtering while `jq` is parsing the already-filtered lines. On modern hardware, this saturates your disk I/O.

## Tools Worth Knowing Deeply

**`awk`** — People treat it as a curiosity. It's a complete data processing language.

```bash
awk -F',' '$3 > 1000 { sum += $3; count++ }
           END { print sum/count }' data.csv
```

**`parallel`** — GNU parallel is awk-for-the-multicore era.

```bash
find . -name '*.log' | parallel gzip {}
```

**`pv`** — pipe viewer. Adds a progress bar to any pipeline. Essential for long-running operations on large files.

## When to Reach for Python Instead

When you need:
- Complex business logic with branching
- Data that doesn't fit in memory (streaming with backpressure)
- Error handling that's more nuanced than "exit 1"
- Tests

The pipeline isn't the answer to everything. But it's the answer to more things than most developers realize.
