// cron.js
const cron = require("node-cron");
const users = require("./usersData");
const sendBirthdayEmail = require("./sendEmail");

cron.schedule("0 7 * * *", async () => {
  const today = new Date().toISOString().slice(5, 10); // 'MM-DD'
  console.log("Running birthday check...");

  for (let user of users) {
    const userDob = user.dob.slice(5, 10);
    if (userDob === today) {
      console.log(`🎉 Sending birthday email to ${user.name}`);
      await sendBirthdayEmail(user);
    }
  }
});
