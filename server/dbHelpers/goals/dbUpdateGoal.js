require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectID;


module.exports = async (data) => {
  //data = {"goalId":"61545b3ecba9def7d9c11e75","goalName":"ergqer","goalType":"Daily","Strength":false,"Vitality":false,"Knowledge":false,"Social":false,"Willpower":true}

  // The passed in data does not have current status. 
  //ENSURE existing status will persist


  console.log(`data in update function: ${data}`);
  const dbKey = process.env.DB_KEY;
  const dbPass = process.env.DB_PASS;

  const uri = `mongodb+srv://${dbKey}:${dbPass}@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  try {
 

    let document = await client
      .db("hypeHub")
      .collection("goals")
      .updateOne(
        //Find record to be updated
        { _id: ObjectId(data.goalId) },
        //Update status field to passed in value.
        { $set: { goalName: data.goalName } }
      );
      return document
  } catch (err) {
    console.log(`ERROR: \n ${err}`);
  } finally {
    await client.close();
  }
};