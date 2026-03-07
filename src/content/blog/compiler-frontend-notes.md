---
title: "Notes on Building a Compiler Frontend"
description: "Practical observations from writing a lexer and recursive-descent parser from scratch, without a parser generator."
date: "2024-12-19"
tags: ["compilers", "parsing", "languages"]
---

## Why Write It By Hand?

Parser generators like ANTLR and tree-sitter are excellent. For production use, I'd probably use them. But writing a parser from scratch teaches you things no tutorial can.

## The Lexer

The lexer's job is straightforward: consume a stream of characters and emit a stream of tokens.

```rust
pub enum Token {
    Ident(String),
    Number(f64),
    Plus, Minus, Star, Slash,
    LParen, RParen,
    Eof,
}
```

The interesting part is handling whitespace, comments, and multi-character operators cleanly. I use a `Peekable<Chars>` iterator and a `peek_char()` helper that returns `Option<char>` without consuming.

## Recursive Descent

The grammar I implemented:

```
expr   → term (('+' | '-') term)*
term   → factor (('*' | '/') factor)*
factor → NUMBER | IDENT | '(' expr ')'
```

Each non-terminal maps directly to a method. The precedence falls out naturally from the call hierarchy.

```rust
fn parse_expr(&mut self) -> Node {
    let mut left = self.parse_term();
    while matches!(self.peek(), Token::Plus | Token::Minus) {
        let op = self.advance();
        let right = self.parse_term();
        left = Node::BinOp(op, Box::new(left), Box::new(right));
    }
    left
}
```

## Error Recovery

This is where most hand-rolled parsers fall down. If you bail on the first syntax error, debugging is miserable.

The standard technique is *synchronization*: when you hit an error, consume tokens until you find a safe recovery point (a semicolon, a newline, a keyword). Emit the error but keep parsing.

It's messy, but it's the difference between "1 error" and "47 cascading errors" in your output.

## What I'd Do Differently

Use `miette` for error reporting from day one. Pretty-printing source spans with `^^^` underlines is essential for a usable tool and retrofitting it is painful.
