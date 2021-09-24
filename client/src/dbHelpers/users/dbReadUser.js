require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");

async function returnData(client, email, password) {
  //Return all matches for email
  const data = await client.db("hypeHub").collection("users").find({ email });
  //Confirm password matches
  await data.forEach((el) => {
    if (el.password === password) {
      console.log(`\n ID STRING: \n ${el._id}`);
    return el._id;
    }
    return -1
  });
}

export async function dbReadUser(email, password) {
  const dbKey = process.env.DB_KEY;
  const dbPass = process.env.DB_PASS;

  const uri = `mongodb+srv://${dbKey}:${dbPass}@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    //Check password and return id if there is a match
    return await returnData(client, email, password);
  } catch (err) {
    console.log(`ERROR: \n ${err}`);
  } finally {
    await client.close();
  }
}

// module.export = dbReadUser;
//TEST
dbReadUser("billy@jo.com", "password");
