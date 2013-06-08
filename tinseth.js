module.exports = function(
    postBoilGravity,
    boilSize,
    batchSize,
    aa,
    amount,
    time,
    maximumUtilizationValue
  ) {
  var sg = (postBoilGravity - 1.0) * batchSize / boilSize;
  if (typeof maximumUtilizationValue == 'undefined') maximumUtilizationValue = 4.15;
  return 1.65 * Math.pow(0.000125, sg) * ((1 - Math.pow(Math.E, -0.04 * time)) / maximumUtilizationValue) * ((aa * amount * 1000) / batchSize);
}
