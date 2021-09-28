require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");

async function returnData(client, userId, goalType) {
  //Return all matches for user and goal type.
  let goals = [];
  const data = await client.db("hypeHub").collection("goals").find({ userId });
  //Confirm password matches
  await data.forEach((el) => {
    if (el.goalType === goalType) {
      goals.push({
        goalId: el._id,
        goalName: el.goalName,
        goalType: el.goalType,
        goalDescription: el.goalDescription,
        goalAttribute: el.goalAttribute,
        status: el.status,
      });
    }
  });

  if (goals.length >= 1) {
    return goals;
  } else {
    return -1;
  }
}

module.exports = async (userId, goalType) => {
  const dbKey = process.env.DB_KEY;
  const dbPass = process.env.DB_PASS;

  const uri = `mongodb+srv://${dbKey}:${dbPass}@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  let goals;
  try {
    await client.connect();
    //Check password and return id if there is a match
    goals =  await returnData(client, userId, goalType);
    return goals
  } catch (err) {
    console.log(`ERROR: \n ${err}`);
  } finally {
    await client.close();
  }
}


