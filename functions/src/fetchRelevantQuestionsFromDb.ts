const { MongoClient } = require("mongodb");
// MongoDB credentials for logging in, connecting and performing operations
// on collections in the database.
const username = "subhodeep";
const password = "pencil";
const dbName = "questions";
const topicsCollectionName = "topics";
const questionsCollectionName = "questions";

// Function to search the questions database 
// containing relevant topic annotations
// based on the topic search string passed to the API 
// and retrieve all relevant questions numbers.
export async function fetchRelevantQuestionsFromDb(queryTopic: string)
  : Promise<string[]> {

  // Setting up the MongoDB Atlas connection string 
  // using credentials to connect to database.
  const url = `mongodb+srv://${username}:${password}@cluster1.8nhci.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  const client = new MongoClient(url);

  try {
    // Connecting to MongoDB databsee cluster.
    await client.connect();
    console.log("Connected to MongoDB server...");

    // Initialising the database object.
    const db = client.db(dbName);
    // Initialising the topics collection object.
    const topics = db.collection(topicsCollectionName);
    // Find the relevant topic object from the collection
    // based on the topic search string passed to the API.
    const topicObject = await topics.findOne({ _id: queryTopic });

    // Getting the children topics related to the query topic from database.
    const children: string[] = await topicObject.children;
    // Since we want to find questions based on the query topic as well,
    // we add it to the "children" array to make a complete list of topics
    children.push(queryTopic);

    // Initialising the questions collection object.
    const questionsCollection = db.collection(questionsCollectionName);
    // The questions collection has an array of topic annotations that it is
    // related to. Using the "in" operator to find questions whose annotations
    // array has any of the items in the relavant topics array ("children")
    // created above.
    const questionObjects = questionsCollection.find({ annotations: { $in: children } });
    const questionObjectsArray = await questionObjects.toArray();

    const questionNumbers: string[] = [];

    // Creating an array containing just the relevant question numbers.
    questionObjectsArray.forEach((questionObj) => {
      questionNumbers.push(questionObj._id);
    });

    // Sorting question numbers in ascending order.
    questionNumbers.sort(function(a, b) {
      return Number(a) - Number(b);
    });

    return questionNumbers;
  } catch (error) {
    console.log("Error retrieving relevant questions from database: " + error.stack);
    return [];
  } finally {
    await client.close();
  }
}