require("dotenv").config();
const { MongoClient } = require("mongodb");

//Helper
async function returnData(client, email, password) {
  const data = await client.db("hypeHub").collection("users").find({ email });
  //fix this so it returns id
  console.log(`DATA: ${JSON.stringify(data)}`);
}

async function dbReadUser(email, password) {
  // const dbKey = DB_KEY
  // const dbPass = DB_PASS

  // const uri = `mongodb+srv://${dbKey}:${dbPass}@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  const uri = `mongodb+srv://dbUser:bestteamever@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();

    await returnData(client, email, password);
  } catch (err) {
    console.log(`ERROR: \n ${err}`);
  } finally {
    await client.close();
  }
}

module.export = dbReadUser;

dbReadUser("billy@jo.com", "password");
