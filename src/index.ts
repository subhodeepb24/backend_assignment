import * as express from 'express';

require('dotenv').config();

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

// Call function
app.get('/', async (req, res) => {
  return res.status(200).send('OK');
});

module.exports = app.listen(port, () => console.log('Starting OnLoop API server on port ' + port));