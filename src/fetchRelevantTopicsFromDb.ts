const { MongoClient } = require("mongodb");
const username = "subhodeep";
const password = "pencil";
const dbName = "questions";

export async function fetchRelevantTopicsFromDb(queryTopic: string)
  : Promise<void> {
  const url = `mongodb+srv://${username}:${password}@cluster1.8nhci.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  const client = new MongoClient(url);
  
  try {
    await client.connect();
    console.log("Connected to MongoDB server...");
    const db = client.db(dbName);
    const topics = db.collection("topics");
    const topicObject = await topics.findOne({ _id: queryTopic });
    console.log(topicObject);

    const children: string[] = await topicObject.children;
    children.push(queryTopic);
    console.log(children);

    const questionsCollection = db.collection("questions");
    const questions = questionsCollection.find({ annotations: { $in: children } });
    const allValues = await questions.toArray();
    console.log(allValues);

  } catch (error) {
    console.log("Error ...: " + error.stack);
  }

  finally {
    await client.close();
  }
}