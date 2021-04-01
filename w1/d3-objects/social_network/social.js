const biggestFollower = function(data) {
  let name = "";
  let myArr = Object.values(data);
  let k = 0;
  myArr.forEach(item => {
    if (item.follows.length > k ) {
      k = item.follows.length;
      name = item.name;
    }
  });
  return name;
};

const mostPopular = function(data) {
  let myArr = Object.values(data);
  const numOfFollowers = {};
  myArr.forEach(item => {
    for (const elem of item.follows) {
      if (numOfFollowers[elem]) {
        numOfFollowers[elem]++;
      } else {
        numOfFollowers[elem] = 1;
      }
    }
  });
  let indexOfMaxValue = Object.values(numOfFollowers).reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);
  return myArr[indexOfMaxValue].name;
}

const printAll = function(data) {
  let myArr = Object.values(data);
  const list = {};
  myArr.forEach(item => {
    for(let elm of item.follows) {
      if (list[item.name]) {
        list[item.name].follows.push(data[elm].name);
      } else {
        list[item.name] = {follows:[data[elm].name], followers:[]};
      }
      if (list[data[elm].name]) {
      list[data[elm].name].followers.push(item.name);
      }
    }
  });
  return list;
}


const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

console.log("The biggest Follower is:", biggestFollower(data));
console.log("The most popular person is:", mostPopular(data));
console.log("The list of followers and being followed for each person:", printAll(data));