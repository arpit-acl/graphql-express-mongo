import { Logger } from "@config/logger";

class time {
  static async init() {
    console.log('started time cron');
    Logger.info(`${(new Date).toLocaleString()}`)
  }
}

export default time;