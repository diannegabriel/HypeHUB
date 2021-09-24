require("dotenv").config({ path: "../.env" });
const { MongoClient } = require("mongodb");

async function dbCreateUser(name, password, email) {
  const dbKey = process.env.DB_KEY;
  const dbPass = process.env.DB_PASS;

  const uri = `mongodb+srv://${dbKey}:${dbPass}@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const collection = client.db("hypeHub").collection("users");
    await collection.insertOne({
      name,
      password,
      email,
      attributes: {
        xp: null,
        Strength: null,
        Vitality: null,
        Knowledge: null,
        Social: null,
        Willpower: null,
      },
    });
    console.log(`\nNew record created`);
  } catch (err) {
    console.log(`ERROR: \n ${err}`);
  } finally {
    await client.close();
  }
}

module.export = dbCreateUser;
//TEST
// dbCreateUser("users", "billy jo", "password", "billy@jo.com");
