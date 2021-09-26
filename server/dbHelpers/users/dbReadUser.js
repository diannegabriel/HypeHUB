require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");

async function returnData(client, email, password) {
  //Return all matches for email
  const data = await client.db("hypeHub").collection("users").find({ email });
  //Confirm password matches
  let userId;
  await data.forEach((el) => {
    if (el.password === password) {
      userId = el._id;
    }
  });
  //if not match, rturn -1
  return userId ? userId : -1;
}

module.exports = async (email, password) => {
  const dbKey = process.env.DB_KEY;
  const dbPass = process.env.DB_PASS;

  const uri = `mongodb+srv://${dbKey}:${dbPass}@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  let id;
  try {
    await client.connect();
    console.log(`client connected`);
    //See helper function above
    id = await returnData(client, email, password);
    console.log(`---\n ${id}\n---`);
    return id;
  } catch (err) {
    console.log(`ERROR`, err);
  } finally {
    await client.close();
  }
};

