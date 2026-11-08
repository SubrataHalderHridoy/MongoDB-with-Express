const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
   .then(() => {
       console.log("connection successful");
   })
   .catch((err) => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "subrata",
        to: "puja",
        message: "send me notes for the exam",
        created_at: new Date(),
    },
    {  from: "rohit",
        to: "tech me notes for the exam",
        message: "play football",
        created_at: new Date(),
    },
    {  from: "aomit",
        to: "sumit",
        message: "all the best",
        created_at: new Date(),
    },
    {  from: "anita",
        to: "shanta",
        message: "bring me some fruits",
        created_at: new Date(),
    },
    {  from: "tony",
        to: "peter",
        message: "love you 9000",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);