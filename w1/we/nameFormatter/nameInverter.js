const nameInverter = function(name) {
  if (name === "") {
    return "";
  } else if (name.charAt(0) === " ") {
    console.log("name");
    return name.trim();
  } else if (name.includes(" ")) {
    let n = name.indexOf(" ");
    name = name.slice(n+1, name.length) + ", " + name.slice(0, n);
    return name;
  }
return name;
}
module.exports = nameInverter;