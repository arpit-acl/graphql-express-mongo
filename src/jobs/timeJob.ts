import { Logger } from "@config/logger";

class time {
  static async init() {
    Logger.info(`${(new Date).toLocaleString()}`)
  }
}

export default time;