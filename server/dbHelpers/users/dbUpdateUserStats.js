require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectID;


module.exports = async ({userId, Exp, Strength, Vitality, Knowledge, Social, Willpower}) => {

  const dbKey = process.env.DB_KEY;
  const dbPass = process.env.DB_PASS;

  const uri = `mongodb+srv://${dbKey}:${dbPass}@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  await client.connect();

  try {
  
    const newData = {
      Exp,
      Strength,
      Vitality,
      Knowledge,
      Social,
      Willpower,
    }
    let document = await client
    .db("hypeHub")
    .collection("users")
    .updateOne(
      //Find user to be updated w/ unique _id
      { _id: ObjectId(userId) },
      //Update fields with passed in value.
      { $set: {
        attributes: newData
      }}
    );
    return {
      newData
    }
  } catch (err) {
    console.log(`ERROR`, err);
  } finally {
    await client.close();
  }
};
