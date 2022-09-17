const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (category) => {
  let result1 = await promiseTheaterIXX();
  let result2 = await promiseTheaterVGC();

  result1 = result1.filter(
    (val) => val.hasil.toLowerCase() === category.toLowerCase()
  );
  result2 = result2.filter(
    (val) => val.hasil.toLowerCase() === category.toLowerCase()
  );
  return result1.length + result1.length;
};

module.exports = {
  promiseOutput,
};
