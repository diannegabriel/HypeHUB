require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectID;

async function updateStatus(prevStatus) {
  if (prevStatus === "incomplete") return "in progress";
  if (prevStatus === "in progress") return "complete";
  if (prevStatus === "complete") return "incomplete";
  //Return -1 if bad data is passed in.
  return -1;
}

module.exports = async (data) => {
  //data = { goalId: sdsdf8759876, status: "complete"}
  console.log(`data in update function: ${data}`);
  const dbKey = process.env.DB_KEY;
  const dbPass = process.env.DB_PASS;

  const uri = `mongodb+srv://${dbKey}:${dbPass}@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  let newStatus;
  try {
    newStatus = await updateStatus(data.status);

    let document = await client
      .db("hypeHub")
      .collection("goals")
      .updateOne(
        //Find record to be updated
        { _id: ObjectId(data.goalId) },
        //Update status field to passed in value.
        { $set: { status: newStatus } }
      );
      return {
        goalId:data.goalId,
        status: newStatus
      }
  } catch (err) {
    console.log(`ERROR: \n ${err}`);
  } finally {
    await client.close();
  }
};
