const express = require("express");
const ExpressError = require("./expressError");
const {
  findMode,
  findMedian,
  findMean,
  convertStringToNumsArray,
} = require("./helpers");

const app = express();

app.get("/mean", function (req, res, next) {
  try {
    if (!req.query.nums) {
      throw new ExpressError("nums are required", 400);
    }

    let nums = convertStringToNumsArray(req.query.nums);

    let result = {
      operation: "mean",
      result: findMean(nums),
    };

    return res.send(result);
  } catch (err) {
    return next(err);
  }
});

app.get("/median", function (req, res, next) {
  try {
    if (!req.query.nums) {
      throw new ExpressError("nums are required", 400);
    }

    let nums = convertStringToNumsArray(req.query.nums);

    let result = {
      operation: "median",
      result: findMedian(nums),
    };

    return res.send(result);
  } catch (err) {
    return next(err);
  }
});

app.get("/mode", function (req, res, next) {
  try {
    if (!req.query.nums) {
      throw new ExpressError("nums are required", 400);
    }

    let nums = convertStringToNumsArray(req.query.nums);

    let result = {
      operation: "mode",
      result: findMode(nums),
    };

    return res.send(result);
  } catch (err) {
    return next(err);
  }
});
// handling not found errors

app.use(function (req, res, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError);
});

// handling global errors
app.use(function (err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;

  // set the status and alert the user
  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, function () {
  console.log("App on port 3000");
});
