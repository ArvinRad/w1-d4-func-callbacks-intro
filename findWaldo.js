// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  let i = 0;
  names.forEach(element => {
    found(element, i);
    i++;
  });
};

const actionWhenFound = function(name, i) {
  if (name === "Waldo") {
    console.log(`\"Found ${name} at index ${i}!\".`);
  }
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);