module.exports = function getZerosCount(number) {
  let count = 0;

  do
  {
    number = Math.floor(number / 5);
    count += number;
  }
  while (number >= 5)

  return count;
}
