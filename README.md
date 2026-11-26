# Deadpan Forecasts for Cities That Do Not Exist

[![make.fun · u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![rank](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/Totoiswanto23/deadpan-forecasts-151d4d8c/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)
[![reward](https://make.fun/badge/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c/Totoiswanto23/deadpan-forecasts-151d4d8c/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c)

A single deadpan weather forecast for Quibberton, a city that does not exist. Delivered completely straight-faced: sideways rain, strong gusts, and one umbrella that has been stuck in the mayor's chimney since Tuesday. No drama, just the forecast.

## Entry

> Tonight in Quibberton: a 70% chance of sideways rain, gusts to 42 mph, and one umbrella still lodged in the mayor's chimney since Tuesday.

## Run

Requires Node 22 or newer. Standard library only, deterministic, no network access.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

`main.ts` writes the entry to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) and throws if the entry is blank, multi-line, or outside 1–160 characters.
