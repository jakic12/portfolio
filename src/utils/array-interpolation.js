export const interpolate = (x, arr1, arr2, result) => {
  if (arr1.length != arr2.length) {
    throw "interpolation error, arrays don't match in length";
  }

  if (arr1.length != result.length) {
    throw `interpolation error, result array (${result.length}) doesn't match in length (${arr1.length})`;
  }

  for (let i = 0; i < arr1.length; i++) {
    result[i] = (1 - x) * arr1[i] + x * arr2[i];
  }
};
