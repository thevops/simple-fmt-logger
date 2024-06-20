export class SimpleFMTLogger {
  private log_level: number;

  constructor(log_level_str: string = "info") {
    const log_levels: {[key: string]: number} = {
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

  public trace(errorTrace: string) {
    if (this.log_level > 0) return;
    for (const line of errorTrace.split("\n")) {
      console.log(`ts=${(new Date()).toISOString()} level=trace msg="${line.trim()}"`);
    }
  }

  public debug(message: string) {
    if (this.log_level > 1) return;
    console.log(`ts=${(new Date()).toISOString()} level=debug msg="${message}"`);
  }

  public info(message: string) {
    if (this.log_level > 2) return;
    console.log(`ts=${(new Date()).toISOString()} level=info msg="${message}"`);
  }

  public warn(message: string) {
    if (this.log_level > 3) return;
    console.log(`ts=${(new Date()).toISOString()} level=warn msg="${message}"`);
  }

  public error(message: string) {
    if (this.log_level > 4) return;
    console.log(`ts=${(new Date()).toISOString()} level=error msg="${message}"`);
  }

  public critical(message: string) {
    if (this.log_level > 5) return;
    console.log(`ts=${(new Date()).toISOString()} level=critical msg="${message}"`);
  }
}
