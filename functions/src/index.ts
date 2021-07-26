import * as express from 'express';
import * as functions from 'firebase-functions';

import { fetchRelevantQuestionsFromDb } from './fetchRelevantQuestionsFromDb';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// /GET API endpoint for searching questions DB based on topics search string.
app.get('/search', async (req, res) => {
  const queryTopic = req.query.q as string;

  if (queryTopic.length === 0) {
    return res.status(400).json({
      message: "Bad request, search topic cannot be empty!"
    });
  }

  // Invoke function to search the questions database 
  // containing relevant topic annotations based on the topic search string
  // and retrieve all relevant questions numbers.
  const questionsList = await fetchRelevantQuestionsFromDb(queryTopic.trim());

  return res.status(200).json({
    message: "Fetched all relevant questions based on search topic!",
    questions: questionsList
  });
});

exports.assignment = functions.https.onRequest(app);