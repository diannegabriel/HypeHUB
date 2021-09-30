require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectID;


module.exports = async (data) => {
  //data= { userId: 354afdsdf35, userExp: 10}
  const dbKey = process.env.DB_KEY;
  const dbPass = process.env.DB_PASS;

  const uri = `mongodb+srv://${dbKey}:${dbPass}@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  await client.connect();
  const calculateExp = data.userExp + 10
  try {
    //Change these null values
    const newData = {
      exp: calculateExp,
      Strength: null,
      Vitality: null,
      Knowledge: null,
      Social: null,
      Willpower: null,
    }
    let document = await client
    .db("hypeHub")
    .collection("users")
    .updateOne(
      //Find user to be updated w/ unique _id
      { _id: ObjectId(data.userId) },
      //Update field with passed in value.
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
