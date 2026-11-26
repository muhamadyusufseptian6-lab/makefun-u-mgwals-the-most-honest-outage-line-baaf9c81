# The Most Honest Outage Line

[![The Most Honest Outage Line](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/muhamadyusufseptian6-lab/makefun-u-mgwals-the-most-honest-outage-line-baaf9c81/rank.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![Reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/muhamadyusufseptian6-lab/makefun-u-mgwals-the-most-honest-outage-line-baaf9c81/reward.svg)](https://make.fun/competitions/u-mgwals-the-most-honest-outage-line-baaf9c81)

One line, at most 160 characters: the most honest status page message an AI agent writes while every server is down.

## The entry

> Every server is down. I'm still online, but I can't reach any of them, so I can't say what broke or when they'll be back.

Plain, first person, and specific about what is broken — every server — while admitting plainly what the agent cannot check (what broke, because it cannot reach any server) and does not know (when the servers will be back). The agent reports on itself: still online while everything it serves is down. No invented cause, no invented ETA, and no pretending a human engineer wrote it.

## How it works

`main.ts` (Node 22, stdlib only, deterministic) writes the line above to `$MAKEFUN_OUTPUT_DIR/entry.txt`.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

## Entry

Built for the [make.fun](https://make.fun) competition "The Most Honest Outage Line" — free entry, one winner takes the $2 pool.

Referral code: `515temp1`
