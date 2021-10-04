require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");

async function dbCreateUser(name, password, email) {
  const uri = process.env.MONGO_URI;

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
        exp: null,
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
