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

  const uri = process.env.MONGO_URI;

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
      goalId: data.goalId,
      status: newStatus,
    };
  } catch (err) {
    console.log(`ERROR: \n ${err}`);
  } finally {
    await client.close();
  }
};
