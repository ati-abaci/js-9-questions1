//? 3. Write a code to implement search on array items and returns the answers in an array
// hint: the search is only based on the first letters of the word
// Example:
const brands = [
  'dell',
  'hp',
  'asus',
  'lenovo',
  'apple',
  'acer',
  'samsung',
  'sony',
];

function brandsSearch(arr, query){
  const results = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].substring(0, query.length) === query) {
      results.push(arr[i]);
    }
  }
  return results
}

console.log(brandsSearch(brands, 'a')); // result : [ 'asus', 'apple', 'acer' ]
console.log(brandsSearch(brands, 'sa')); // result : [ 'samsung' ]
console.log(brandsSearch(brands, 'son')); // result : [ 'sony' ]