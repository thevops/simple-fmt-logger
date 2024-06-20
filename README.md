# Simple FMT logger for TypeScript

This is a simple logger for TypeScript that uses the `console` object to log messages.
It supports different log levels and can be configured to log only messages with a certain level or higher.

Format used for log messages is known as FMT and is inspired by the `fmt` package in Go.

## Log levels

- trace
- debug
- info
- warn
- error
- critical

`trace` is a special level that is used to log stack traces.

## Example


```shell
❯ npm run example

ts=2024-06-20T15:12:02.767Z level=trace msg="Error: This is an error trace"
ts=2024-06-20T15:12:02.768Z level=trace msg="at Object.<anonymous> (/Users/............/simple-fmt-logger/src/example/example.ts:5:14)"
ts=2024-06-20T15:12:02.768Z level=trace msg="at Module._compile (node:internal/modules/cjs/loader:1376:14)"
ts=2024-06-20T15:12:02.768Z level=trace msg="at Module.m._compile (/Users/............/simple-fmt-logger/node_modules/ts-node/src/index.ts:1618:23)"
ts=2024-06-20T15:12:02.768Z level=trace msg="at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)"
ts=2024-06-20T15:12:02.768Z level=trace msg="at Object.require.extensions.<computed> [as .ts] (/Users/............/simple-fmt-logger/node_modules/ts-node/src/index.ts:1621:12)"
ts=2024-06-20T15:12:02.768Z level=trace msg="at Module.load (node:internal/modules/cjs/loader:1207:32)"
ts=2024-06-20T15:12:02.768Z level=trace msg="at Function.Module._load (node:internal/modules/cjs/loader:1023:12)"
ts=2024-06-20T15:12:02.769Z level=trace msg="at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)"
ts=2024-06-20T15:12:02.769Z level=trace msg="at phase4 (/Users/............/simple-fmt-logger/node_modules/ts-node/src/bin.ts:649:14)"
ts=2024-06-20T15:12:02.769Z level=trace msg="at bootstrap (/Users/............/simple-fmt-logger/node_modules/ts-node/src/bin.ts:95:10)"
ts=2024-06-20T15:12:02.769Z level=debug msg="This is a debug message"
ts=2024-06-20T15:12:02.769Z level=info msg="This is an info message"
ts=2024-06-20T15:12:02.769Z level=warn msg="This is a warn message"
ts=2024-06-20T15:12:02.769Z level=error msg="This is an error message"
ts=2024-06-20T15:12:02.769Z level=critical msg="This is a critical message"
```
