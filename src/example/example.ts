import { SimpleFMTLogger } from "..";

const logger = new SimpleFMTLogger("trace");

logger.trace(new Error("This is an error trace").stack || "");
logger.debug("This is a debug message");
logger.info("This is an info message");
logger.warn("This is a warn message");
logger.error("This is an error message");
logger.critical("This is a critical message");
