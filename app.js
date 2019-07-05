const express = require("express");
const app = express();
const server = require("http").Server(app);
const compression = require("compression");
global.io = require("socket.io")(server);

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`App listening on port ${port}!`));

// set the template engine ejs
app.set("view engine", "ejs");

// middleware
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(compression());

// global variables
global.runningEvals = {};
global.evaluationUrl = `http://localhost:${port}/`;
global.availableDatasets = ["qald-8", "qald-9", "testData20", "smallTest"];
global.datasets = {}; //datasets are loaded only when they were used at least once
global.evaluatorVersion = "3.0.0";
// 1.0.0: evaluation dublicated answers are also answers,
// 2.0.0: evaluation only testing answers against vars[0], dublicated answers are only one answer
// 3.0.0: all vars are considered one answere

// routes and routers
const pages = require("./routes/pages");
const evaluations = require("./routes/evaluations");
const runningEvals = require("./routes/runningEvals");
const finishedEvals = require("./routes/finishedEvals");
const systemAnswers = require("./routes/systemAnswers");
const evaluatedAnswers = require("./routes/evaluatedAnswers");
const datasets = require("./routes/datasets");

app.use("/", pages);
app.use("/evaluations", evaluations);
app.use("/runningEvals", runningEvals);
app.use("/finishedEvals", finishedEvals);
app.use("/systemAnswers", systemAnswers);
app.use("/evaluatedAnswers", evaluatedAnswers);
app.use("/datasets", datasets);

process.on("unhandledRejection", (reason, p) => {
  console.log("Unhandled Rejection at: Promise", p, "reason:", reason);
  // application specific logging, throwing an error, or other logic here
});

module.exports = server;
