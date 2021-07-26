Pencil Backend Assignment
-------------------------

Listed below are the requirements for the backend task and corresponding comments and things to note:

- Requirement 1: The script for storing all questions and their annotations from the sheet into the MongoDB
database can be found here in the Github repo: /functions/src/data_load/insertQuestionsToDb.ts.

The schema: Collection name: 'questions'
[ 
  {
    _id: string, // question number
    annotations: string[] // array of annotations (topic names) associated with the question
  } 
]

Example:
[
  { _id: "1", annotations: ["Lipids such as fats from glycerol and fatty acids", "Distribution of chloroplasts in photosynthesis"] },
  { _id: "2", annotations: ["Explain enzyme action in terms of the ‘lock and key’ hypothesis"] },
]

Reasoning behind schema choice: We store the questions and relevant annotations in the above schema format
so that the search operation on the 'questions' collection remains efficient and fast as it will involve an
array query on the 'annotations' array based on the array of relevant topics retrieved based on the search topic
using an 'in' operation. This way, the entire search function will always be 2 queries:
1. Retrieve all relevant topics based on a search topic from the topics collection.
2. Retrieve all relevant questions based on the topics array retrieved in (1) from the questions collection.


- Requirement 2: The script for storing all topics from the sheet into the MongoDB database 
can be found here in the Github repo: /functions/src/data_load/insertTopicsToDb.ts.

The schema: Collection name: 'topics'
[ 
  {
    _id: string, // topic name of the current node
    children: string[] // array of topic names (nodes) which are descendants (all children) of '_id' node
  } 
]

Example:
[
  {
    _id: "Endoplasmic reticulum",
    children: []
  },
  {
    _id: "Mitochondria",
    children: []
  },
  {
    _id: "Golgi body",
    children: []
  },
  {
    _id: "Ribosomes",
    children: []
  },
  {
    _id: "Identify the following membrane systems and organelles from diagrams and electron micrographs:",
    children: ["Endoplasmic reticulum", "Mitochondria", "Golgi body", "Ribosomes"]
  },
  {
    _id: "Cell Structure and Organisation",
    children: ["Endoplasmic reticulum", "Mitochondria", "Golgi body", "Ribosomes",
                "Identify the following membrane systems and organelles from diagrams and electron micrographs:"]
  }
]

Reasoning behind schema choice: We store all descendants (all children below current node) in the 'children' array
so as to ensure fast and efficient retrieval of all relevant topics for which question numbers need to be retrieved
based on the search topic. The trade-off here is that add and update operations of nodes will be slightly more
tedious since they will need to add and update in multiple node levels across a tree path.
The alternative approach can be to store only the immediate children nodes in the children array, in which case, 
the search logic will have to recursively find all relevant topics (children nodes) by traversing through multiple
tree paths which might lead to the Search API being slower and less efficient. And since, retrieval is a more common
use-case than add/update operation of nodes, I went with this chosen approach.


- Requirement 3: The GET /search API endpoint has been created using NodeJS + Express based server. This express server
has been wrapped inside a Firebase Function so that it can be hosted easily for access. The other approach could have
been to use GCP's Cloud Run or App Engine.
The API endpoint: https://us-central1-pencil-backend-assignment.cloudfunctions.net/assignment/search?q={queryTopic}


- Requirement 4: In terms of the code making efficient queries, the considerations while deciding the schema have already
been outlined above. During local testing, the range of response time was between 200ms - 600ms. This is slightly more when
the Firebase Functions HTTPS request endpoint is called because of the cold start behaviour of cloud functions in GCP.


- Requirement 5: As mentioned above, the API endpoint has been hosted and deployed using Firebase Functions.
For the database, I have invited Ayush using his email to the MongoDB Atlas project and an email should have been sent
for the same. In the MongoDB Atlas, one can click on 'Databases' in the left menu panel and then click on 
'Browse Collections' option next to the Cluster options to view the database (questions), collections
(questions and topics) and corresponding indices of the 2 collections.
One can query the collections using the Filter option, for example, for the 'questions' collection,
FILTER: {"annotations": "Golgi body"} returns 4 documents (question objects) which have 'Golgi body' as an annotation.


- Requirement 6:
    - Github repository: https://github.com/subhodeepb24/backend_assignment
    - Example request URLs:
        * https://us-central1-pencil-backend-assignment.cloudfunctions.net/assignment/search?q=

        Response:
        {
          "message": "Bad request, search topic cannot be empty!"
        }
        ---------------------------------------------------------

        * Browser address bar: https://us-central1-pencil-backend-assignment.cloudfunctions.net/assignment/search?q=Biological%20Molecules
          Postman: https://us-central1-pencil-backend-assignment.cloudfunctions.net/assignment/search?q=Biological Molecules 
        
        Response:
        {
          "message": "Fetched all relevant questions based on search topic!",
          "questions": ["2","5","9","10","14","19","20","26","33","37","38","45","55",
                        "61","64","66","67","76","77","78","92","107","111","112","116",
                        "120","127","128","129","134","146","153","166","171","174","176",
                        "178","181","182","183","188","197"]
        }
        ---------------------------------------------------------

        * Browser address bar: https://us-central1-pencil-backend-assignment.cloudfunctions.net/assignment/search?q=List%20the%20chemical%20elements%20which%20make%20up
          Postman: https://us-central1-pencil-backend-assignment.cloudfunctions.net/assignment/search?q=List the chemical elements which make up
        
        Response:
        {
          "message": "Fetched all relevant questions based on search topic!",
          "questions": ["14","37","61","92","111","116","120","128","134","182"] 
        }