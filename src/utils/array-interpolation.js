export const interpolate = (x, arr1, arr2, result) => {
  if (arr1.length != arr2.length) {
    throw "interpolation error, arrays don't match in length";
  }

  if (arr1.length != result.length) {
    throw "interpolation error, result array doesn't match in length";
  }

  for (let i = 0; i < arr1.length; i++) {
    result[i] = x * arr1 + (1 - x) * arr2;
  }
};
