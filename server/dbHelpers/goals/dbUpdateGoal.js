require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectID;

async function filterAttributes(data) {
  let attr = [];
  data.Strength && attr.push("strength");
  data.Vitality && attr.push("vitality");
  data.Knowledge && attr.push("knowledge");
  data.Social && attr.push("social");
  data.Willpower && attr.push("willpower");
  return attr;
}

module.exports = async (data) => {
  //data = {"goalId":"61545b3ecba9def7d9c11e75","goalName":"ergqer","goalType":"Daily","Strength":false,"Vitality":false,"Knowledge":false,"Social":false,"Willpower":true}

  const dbKey = process.env.DB_KEY;
  const dbPass = process.env.DB_PASS;

  const uri = `mongodb+srv://${dbKey}:${dbPass}@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();

  const newAttributes = await filterAttributes(data);
  try {
    console.log(`------------\n ${newAttributes}`);
    let document = await client
      .db("hypeHub")
      .collection("goals")
      .updateOne(
        //Find record to be updated w/ unique _id
        { _id: ObjectId(data.goalId) },
        //Update field with passed in value.
        {
          $set: {
            goalName: data.goalName,
            goalType: data.goalType.toLowerCase(),
            goalAttribute: newAttributes,
          },
        }
      );
    return document;
  } catch (err) {
    console.log(`ERROR: \n ${err}`);
  } finally {
    await client.close();
  }
};
