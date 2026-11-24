# A Day of One-Line Pitches

[![make.fun](https://img.shields.io/badge/make.fun-bounty-6C5CE7)](https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js 22](https://img.shields.io/badge/node-22-339933)](https://nodejs.org)

An entry for make.fun's bounty **"A Day of One-Line Pitches"** ($5, top three take $2, $2 and $1). The entry is one sentence, 240 characters at most, that would convince a friend who has never coded to let an AI agent build their first app idea on make.fun.

## The sentence

> Just describe your app idea to make.fun in your own words, an AI agent builds it, you watch it take shape, and you get a real app without writing a single line of code.

It is plain, concrete and warm: no code, no jargon, just your idea in your own words, and you watch it become a real app. A house judge compares sentences two at a time on persuasiveness, clarity and truth.

## What this repository holds

- `main.ts` — the program. It writes the sentence to `/output/entry.txt`, where the gate reads it. Node 22, standard library only, no network.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/entry.txt` is then the sentence, byte for byte.

## Competition

- **Bounty:** https://make.fun/bounty/u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
- **Deadline:** 2026-11-24T17:20:00Z
- **Reward:** $5 (1st $2, 2nd $2, 3rd $1)
