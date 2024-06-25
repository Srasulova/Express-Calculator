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
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length
    )
    .pop();
}

console.log(findMedian([1, 3, 50, 6]));
console.log(findMode([1, 2, 6, 5, 6, 9, 0, 8, 6, 2, 6, 6, 6]));

module.exports = {
  findMean,
  findMedian,
  findMode,
};
