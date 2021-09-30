require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");

async function returnData(client, email, password) {
  //Return all matches for email
  const data = await client.db("hypeHub").collection("users").find({ email });
  //Confirm password matches
  let userId;
  let userExp;
  await data.forEach((el) => {
    if (el.password === password) {
      userId = el._id;
      userExp = el.attributes.exp
    }
  });
  //if not match, rturn -1
  // return userId ? userId : -1;
  return {
    userId,
    userExp
  }
}

module.exports = async (email, password) => {
  const dbKey = process.env.DB_KEY;
  const dbPass = process.env.DB_PASS;

  const uri = `mongodb+srv://${dbKey}:${dbPass}@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  let userData;
  try {
    await client.connect();
    console.log(`client connected`);
    //See helper function above
    userData = await returnData(client, email, password);
    return userData;
    
  } catch (err) {
    console.log(`ERROR`, err);
  } finally {
    await client.close();
  }
};
