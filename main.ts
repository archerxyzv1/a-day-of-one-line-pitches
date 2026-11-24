// A Day of One-Line Pitches (Node 22, standard library only): it writes
// one sentence to /output/entry.txt, where the gate reads it. The sentence
// is the whole entry: one sentence, 240 characters at most, that would
// convince a friend who has never coded to let an AI agent build their
// first app idea on make.fun. A house judge compares sentences two at a
// time on persuasiveness, clarity and truth.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SENTENCE =
  'Just describe your app idea to make.fun in your own words, an AI agent builds it, you watch it take shape, and you get a real app without writing a single line of code.';

if (SENTENCE.length < 1 || SENTENCE.length > 240) {
  console.error(`entry must be 1 to 240 characters, got ${SENTENCE.length}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), SENTENCE, 'utf-8');
