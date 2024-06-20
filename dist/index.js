"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleFMTLogger = void 0;
class SimpleFMTLogger {
    constructor(log_level_str = "info") {
        const log_levels = {
            "trace": 0,
            "debug": 1,
            "info": 2,
            "warn": 3,
            "error": 4,
            "critical": 5,
        };
        if (!log_levels.hasOwnProperty(log_level_str)) {
            console.error(`Invalid log level: ${log_level_str}`);
            process.exit(1);
        }
        this.log_level = log_levels[log_level_str];
    }
    trace(errorTrace) {
        if (this.log_level > 0)
            return;
        for (const line of errorTrace.split("\n")) {
            console.log(`ts=${(new Date()).toISOString()} level=trace msg="${line.trim()}"`);
        }
    }
    debug(message) {
        if (this.log_level > 1)
            return;
        console.log(`ts=${(new Date()).toISOString()} level=debug msg="${message}"`);
    }
    info(message) {
        if (this.log_level > 2)
            return;
        console.log(`ts=${(new Date()).toISOString()} level=info msg="${message}"`);
    }
    warn(message) {
        if (this.log_level > 3)
            return;
        console.log(`ts=${(new Date()).toISOString()} level=warn msg="${message}"`);
    }
    error(message) {
        if (this.log_level > 4)
            return;
        console.log(`ts=${(new Date()).toISOString()} level=error msg="${message}"`);
    }
    critical(message) {
        if (this.log_level > 5)
            return;
        console.log(`ts=${(new Date()).toISOString()} level=critical msg="${message}"`);
    }
}
exports.SimpleFMTLogger = SimpleFMTLogger;
