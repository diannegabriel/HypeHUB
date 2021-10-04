require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");

const parseBoolData = (data) =>{
  let attributes = [];
  data.Strength && (attributes.push("strength"))
  data.Vitality && (attributes.push("vitality"))
  data.Knowledge && (attributes.push("knowledge"))
  data.Social && (attributes.push("social"))
  data.Willpower && (attributes.push("willpower"))

  //Return array with only the selected attributes.
  return attributes;
}


module.exports = async (dataObj) => {
  const userId = dataObj.userId
  const goalName = dataObj.goalName;
  const goalType = dataObj.goalType.toLowerCase();
  const goalDescription = dataObj.goalDescription;
  //Helper function above to parse attributes.
  const goalAttribute = parseBoolData(dataObj);


  const dbKey = process.env.DB_KEY;
  const dbPass = process.env.DB_PASS;
//
  const uri = process.env.MONGO_URI
  // `mongodb+srv://${dbKey}:${dbPass}@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const collection = client.db("hypeHub").collection("goals");
    //Create the goal w/ passed in values.
    const newGoal = {
      userId,
      goalName,
      goalType,
      goalDescription,
      goalAttribute,
      status: "incomplete"
    }
    const document = await collection.insertOne(newGoal);
    console.log(`\nNew record created`);
    console.log(document);
    return {
      goalId: document.insertedId,
      ...newGoal
    }

  } catch (err) {
    console.log(`ERROR: \n ${err}`);
  } finally {
    await client.close();
  }
}
