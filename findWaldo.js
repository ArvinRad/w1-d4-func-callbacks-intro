// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    found(names[i], i);
  };
};

const actionWhenFound = function(name, i) {
  if (name === "Waldo") {
    console.log(`Found ${name} at index ${i}!.`);
  }
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);