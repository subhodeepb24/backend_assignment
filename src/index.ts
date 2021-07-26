import * as express from 'express';

import { fetchRelevantTopicsFromDb } from './fetchRelevantTopicsFromDb';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Check if PORT env variable is available. If not use 9010 at the port value.
// Note: 9010 is used for local developement as firebase emulators uses both 8080 and 8085.
let port = null;
if (process.env.PORT != null) {
  port = parseInt(process.env.PORT);
} else {
  port = 9010;
}

// /GET API endpoint for searching questions DB based on topics search string.
app.get('/search', async (req, res) => {
  const queryTopic = req.query.topic as string;
  const questionsList = await fetchRelevantTopicsFromDb(queryTopic);
  
  return res.status(200).json({
    statusCode: 200,
    message: "Fetched all relevant questions based on search topic!",
    questions: questionsList
  });
});

module.exports = app.listen(port, () => console.log('Starting Pencil Backend server on port ' + port));