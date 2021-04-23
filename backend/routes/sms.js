// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "ACb521f80ec059dbd8a66d543f90dafc1b";
const authToken ="315d10bdf54ac44c279823204b5d434a";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Hello dubey!',
     from: '+12622397530',
     to: '+917380610101'
   })
  .then(message => console.log(message.sid));

