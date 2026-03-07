---
title: "Why I Stopped Using ORM Frameworks"
description: "After years of SQLAlchemy, Django ORM, and Prisma, I went back to raw SQL. Here's what I learned."
date: "2025-01-08"
tags: ["databases", "sql", "opinion"]
---

## The Honeymoon Phase

Every developer I know went through the same arc with ORMs. You discover them, feel liberated from writing SQL, ship features fast, and evangelize to your team. The abstraction feels like pure power.

Then the queries get complex.

## Where ORMs Break Down

### N+1 Queries

The classic failure mode. You fetch a list of users, then iterate and fetch their posts. The ORM makes this look clean in code while firing 1 + N database queries behind your back.

Some ORMs give you `eager_loading` or `select_related`. They work. But you have to *know* to use them, and reviewing someone else's ORM code for N+1 issues requires reading the generated SQL — which defeats the abstraction.

### Schema Drift

ORMs let you define your schema in two places: migration files and model definitions. They should stay in sync. They don't.

### The "Just Use Raw SQL" Escape Hatch

Every major ORM has one. SQLAlchemy has `text()`. Django has `raw()`. The moment you reach for it, you're writing SQL again, but now it's embedded in strings with no type checking.

## What I Use Instead

**`psycopg3`** with handwritten SQL and a thin query builder for dynamic conditions. The layer is maybe 200 lines of code.

```python
def get_users(active: bool = True, limit: int = 50) -> list[User]:
    q = "SELECT id, email, created_at FROM users WHERE 1=1"
    params = []
    if active:
        q += " AND active = %s"
        params.append(True)
    q += " ORDER BY created_at DESC LIMIT %s"
    params.append(limit)
    return db.execute(q, params).fetchall()
```

Is this more verbose? Yes. Do I know exactly what query runs? Also yes.

## The Trade-off Is Real

I'm not saying ORMs are bad. For CRUD-heavy applications with simple schemas, they're often the right call. But once you're joining five tables and doing window functions, the ORM is fighting you.

Know the trade-off. Make it consciously.
