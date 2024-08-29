// 7-job_processor.js

import { createQueue } from 'kue';

const blackList = [4153518780, 415318781];

// function to send notification
function sendNotification(phoneNumber, message, job, done){
  // track job progress
  job.progress(0, 100)

  // abort job if phoneNumber is blacklisted
  if (phoneNumber in blackList) {
    return done(new Error(`Phone number ${phoneNumber} is blacklisted`));
  }

  job.progress(50, 100);

  console.log(`Sending Notification to ${phoneNumber}, with message: ${message}`);
  done();
}

const queue = createQueue();

queue.process('push_notification_code_2', 2, (job, done) => {
  const { phoneNumber, message } = job.data;
  sendNotification(phoneNumber, message, job, done);
});
