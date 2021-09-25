require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");

async function dbCreateGoal(
  userId,
  goalName,
  goalType,
  goalDescription,
  goalAttribute
) {
  const dbKey = process.env.DB_KEY;
  const dbPass = process.env.DB_PASS;

  const uri = `mongodb+srv://${dbKey}:${dbPass}@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const collection = client.db("hypeHub").collection("goals");
    //Create the goal w/ passed in values.
    await collection.insertOne({
      userId,
      goalName,
      goalType,
      goalDescription,
      goalAttribute,
      status: "incomplete"
    });
    console.log(`\nNew record created`);
  } catch (err) {
    console.log(`ERROR: \n ${err}`);
  } finally {
    await client.close();
  }
}

module.export = dbCreateGoal;
// TEST
// dbCreateGoal(
//   "614de5c4646237d2b991f65c",
//   "Get Vsmrt",
//   "quest",
//   "Read 50 books/year ",
//   ["Knowledge", "Vitality"]
// );
