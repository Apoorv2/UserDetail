const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');
app.use('/users',usersRouter);
 

const accountSid = "ACb521f80ec059dbd8a66d543f90dafc1b";
const authToken ="315d10bdf54ac44c279823204b5d434a";
const client = require('twilio')(accountSid, authToken);

 client.messages
  .create({
     body: 'Welcome! to my webpage',
     from: '+12622397530',
     to: '+917380610101'
   })
  .then(message => console.log(message.sid));




app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});