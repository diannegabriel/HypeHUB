require('dotenv').config()
const { MongoClient } = require('mongodb');

const dbCreateUser =  (name, password, email) =>{

  // const dbKey = DB_KEY 
  // const dbPass = DB_PASS

  // const uri = `mongodb+srv://${dbKey}:${dbPass}@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    const uri = `mongodb+srv://dbUser:bestteamever@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
    const collection = client.db("hypeHub").collection("users");
    collection.insertOne({
      name, 
      password, 
      email
    })
    .then(()=> console.log(`New users record has been created`))
    .catch((err) => console.log(`\nERROR: \n${err}`))
    .then (()=> client.close());
  });
}
module.export = dbCreateUser;

dbCreateUser("users", "billy jo", "password", "billy@jo.com");