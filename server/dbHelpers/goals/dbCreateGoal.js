require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");

module.exports = async (dataObj) => {

  //TEMP define information here
  const userId = "614de5c4646237d2b991f65c"
  const goalName = dataObj.goalName;
  const goalType = dataObj.goalType.toLowerCase();
  const goalDescription = dataObj.goalDescription;
  //Every goal has one attribute of knowledge atm - need to resolve check box issue.
  const goalAttribute = ["knowledge"]


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
