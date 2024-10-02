const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
 .then(() => {
    console.log("connection successful");
 })
 .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Srk",
        to: "Salman",
        msg: "We should make a movie together",
        created_at: new Date(),
    },
    {
        from: "Virat",
        to: "Rohit",
        msg: "Come Join the RCB we will do open together",
        created_at: new Date(),
    },
    {
        from: "Pranay",
        to: "Ayush",
        msg: "Give me my money",
        created_at: new Date(),
    },
    {
        from: "Pranay",
        to: "Pratik",
        msg: "Hit the GYM",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);


