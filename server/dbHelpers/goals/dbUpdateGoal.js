require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");
var ObjectId = require('mongodb').ObjectID;


// module.exports =
 async function updateGoal(goalId, status){
  const dbKey = process.env.DB_KEY;
  const dbPass = process.env.DB_PASS;

  const uri = `mongodb+srv://${dbKey}:${dbPass}@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  
  await client.connect();
  try {

    await client.db("hypeHub").collection("goals").updateOne(
      //record to be updated
      {_id: ObjectId("615322239db179698d74f704")},
      // {goalName: "j"},
      //Update status field to passed in value.
      {$set:{status}}
    )
  } catch (err) {
    console.log(`ERROR: \n ${err}`);
  } finally {
    await client.close();
  }
}

updateGoal("615322239db179698d74f704", "DONEEEE");
