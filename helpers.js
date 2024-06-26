function findMean(arr) {
  const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
  return +mean;
}

function findMedian(arr) {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

function findMode(arr) {
  return +arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
}

function convertStringToNumsArray(str) {
  return str.split(",").map((num) => {
    const parsedNum = parseFloat(num);
    if (isNaN(parsedNum)) {
      throw new ExpressError(`${num} is not a number`, 400);
    }
    return parsedNum;
  });
}

console.log(findMean([1, 3, 5, 7]));

module.exports = {
  findMean,
  findMedian,
  findMode,
  convertStringToNumsArray,
};
