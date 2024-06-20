export declare class SimpleFMTLogger {
    private log_level;
    constructor(log_level_str?: string);
    trace(errorTrace: string): void;
    debug(message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    critical(message: string): void;
}
