const rawDataObject = require("./project-materials/stackoverfaux.json")

// console.log(rawDataObject)

/**
/////////////////////////////
// TODO //
//////////////////////////////

[] DB Design
[] Api Design
--show questions and answers for a specific user; for a single question show all answers; add a new answer to an existing question; delete a user and all their questions/answers/comments;
[] Simple front-end (if time)
[] Readme file with documentation on my thinking and process
[] Spin up on Docker?
[] Get it working with a normalized dataset, THEN you can decide whether some denormalization is needed for optimization
[] You can have a queue of jobs that get taken care of when you have availability which would look for denomalized data and reconcile them


//////////////////////////////////////
// TO REMEMBER //
///////////////////////////////////

[] Data modeling is important (o it elegantly)
[] Data normalization (user appears everywhere, nested inside stuff)
[] Don't duplicate data, it can be inconsistent and difficult to change
  [] Composite request in SQL -- retrieve multiple entries (all the user names associated with all the answers)
  [] Anything you need to be really fast you can cache, but often there are so many users that caching by userid is not a good idea, especially if there's millions of users, can't expect it'll always be up to date, etc
[] If you need to grab 30 answers to a question, you need to do 30 lookups for the usernames associated with those answers, add them to the answer objects and then sends them to the front end
[] Front end is always expecting the same thing no matter the end point
[] Decompose data properly
[] Table for each thing, series of lookups
[] Cut corners if you need to but explain them somewhere
[] Make easy to run with minimal setup
[] Tackle multiple components, make yourself look good in the code



/////////////////////////////
// DATA MODEL //
//////////////////////////////

the rawDataObject is an Array of Questions
I need to injest this data object into usable pieces and then place them into appropriate tables in the DB

Basic model ->
users
  --id
  --name
questions
  --comments
  --answers
    --comments


Comments ----->
  Adding fields into the DB
  Need to add three fields to the existing fields --
    - One is a reference to the parent (question id, answer is ---
    - One is the index number of the question in the array, since they are stricly ordered) --
    - One is the "type" of parent it has (whether it's an Answer comment or a Question comment)
  Put into two differenr tables -- Question comments and Answer comments

Questions ------>


/////////////////////////////
// API //
///////////////////////////

POTENTIAL ROUTES/ENDPOINTS

-> show questions and answers for a specific user
SELECT * From QUESTIONS Where USERID is ____
SELECT * From ANSWERS Where USERID is ____
Build an index on USERID (foreign key lookup)

-> for a single question show all answers;
SELECT * from ANSWERS Where QUESTIONID(Parent) is ____


-> DELETE a user and all their questions/answers/comments

* grab the minimal thing, asyncronously grab everything that is not currently expanded
* decide whether you want the api to accomdate paging


LEARN -------->
Hashing function
Tree map
How to spec out projects
How to manage other engineers
How to communicate to stakeholders (product managers, designers, other engineers who are consuming what you're building, basically anyone who cares about what you're building)
How to define requirements
How to estimate effort and time for completion
How to assess and communicate risks

*/

/////////////////////////////////////////
// INJEST DATA OBJECT //
///////////////////////////////////////
  // extract question object, save to questions array (injest -- only fields that we want)
  // extract user, save user object to users array
  // extract question comments, dump to array (injest question comments) (include an index value)
  // extract question answers, dump to answers array (injest answer) (make sure it has a timestamp)
  // extract answer comments, dump to answer comments array (injest answer comments) (save the index also)
  // all must have a reference to the owner (parent id)



// ARRAYS TO BE PUSHED TO DB
let questions = []
let users = []
let questionComments = []
let answers = []
let answerComments = []


///////////////////////////////////////////////////
// INGESTING QUESTIONS DATA
/////////////////////////////////////////////

function ingestQuestion(entireQuestion) {
  // logs for debug
  console.log("ingest question ran")
  console.log(entireQuestion)
  // extract question object, dump to array
  const {id, title, body, creation, score, user, comments, answers} = entireQuestion
  let questionToSave = {
    id: id,
    title: title,
    body: body,
    creation: creation,
    score: score
  }
  // Push to the questions array to later be added to db
  questions.push(questionToSave)
  // extract user object from question, call ingestUser
  let userToIngest = user
  ingestUser(userToIngest)
  // extract questionComments array, call ingest comments ingestQuestionComments(questionId, commentsArray)
  let commentsToIngest = comments
  let questionId = id
  ingestComments(questionId, commentsToIngest)
  // extract answers array, call ingestAnswers passing the questionId and  answers array
  let answersToIngest = answers
  ingestAnswers(questionId, answersToIngest)

}

function ingestQuestions(rawData) {
  // for question in questions {
    //inguestQuestion(question)
  //}
  // iterate over the array, call ingestQuestion on each
  rawData.forEach((question) => {
    ingestQuestion(question)}
    )
}

///////////////////////////////////////////////////
// INGESTING QUESTIONS-COMMENTS DATA
/////////////////////////////////////////////


// const ingestQuestionComments = (questionId, questionCommentsArray) => {
//   // iterate over the array, call ingestQuestionComment
//   //
// }

// const ingestQuestionComment = (questionId, questionCommentObject) => {
//   // extract user object, call ingestUser
//   // create the object you want to store, save it to the array
// }


// const ingestAnswer = (questionId, fullAnswer) = {

// }

///////////////////////////////////////////////////
// INGESTING USERS DATA
/////////////////////////////////////////////

// make a users MAP, key is the id, value is the username


// const ingestUser = (user) => {
//   // whenever it's called, you check whether the user id is already in the map of user ids you've added, if it is then do nothing
//   // puts in the array, conditions it first if necessary
// }

///////////////////////////////////////////////////
// INGESTING ANSWERS DATA
/////////////////////////////////////////////

///////////////////////////////////////////////////
// INGESTING ANSWERS-COMMENTS DATA
/////////////////////////////////////////////

// // GET QUESTION COMMENTS
// const getQuestionComments = () => {

// }

// filter redundant users

ingestQuestions(rawDataObject)
