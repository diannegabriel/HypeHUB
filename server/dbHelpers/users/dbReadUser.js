require("dotenv").config({ path: "../../.env" });
const { MongoClient } = require("mongodb");

async function returnData(client, email, password) {
  //Return all matches for email
  const data = await client.db("hypeHub").collection("users").find({ email });
  let userId;
  let userExp;
  let userStrength;
  let userVitality;
  let userKnowledge;
  let userSocial;
  let userWillpower;
  //Confirm password matches
  await data.forEach((el) => {
    if (el.password === password) {
      //set variables to return
      userId = el._id;
      userExp = el.attributes.Exp;
      userStrength = el.attributes.Strength;
      userVitality = el.attributes.Vitality;
      userKnowledge = el.attributes.Knowledge;
      userSocial = el.attributes.Social;
      userWillpower = el.attributes. Willpower;
    }
  });
  return {
    userId,
    userExp,
    userStrength,
    userVitality,
    userKnowledge,
    userSocial,
    userWillpower,
  }
}

module.exports = async (email, password) => {
  const dbKey = process.env.DB_KEY;
  const dbPass = process.env.DB_PASS;

  const uri = `mongodb+srv://${dbKey}:${dbPass}@cluster0.yr6aq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  let userData;
  try {
    await client.connect();
    console.log(`client connected`);
    //See helper function above
    userData = await returnData(client, email, password);
    // console.log(`======\n======\n${JSON.stringify(userData)}`)
    return userData;
  } catch (err) {
    console.log(`ERROR`, err);
  } finally {
    await client.close();
  }
};
