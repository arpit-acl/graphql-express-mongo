import time from './timeJob';
import { CronJob } from 'cron';
import config from '@config/config';

class Jobs {
  timeCron: CronJob;

  constructor() {
    this.timeCron = new CronJob(config.CRONS.TIME_CRON, time.init);   

    this.timeCron.start();
  }
}

export default new Jobs();