require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectID;

module.exports = async ({ goalId }) => {
  // console.log(`goalid from dbdeletegoal: ${goalId}`)

  const uri = process.env.MONGO_URI;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  try {
    let document = await client
      .db("hypeHub")
      .collection("goals")
      .deleteOne({
        _id: ObjectId(goalId),
      });

    // console.log(goalId)
    // console.log(document)
    return document;
  } catch (err) {
    console.log(`ERROR: \n ${err}`);
  } finally {
    await client.close();
  }
};
