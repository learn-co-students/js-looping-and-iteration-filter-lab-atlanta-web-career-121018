// Code your solution in this file
function findMatching (array, name) {
  return array.filter(function (element) {
    return element.toLowerCase().includes(name.toLowerCase());
  });
};

function fuzzyMatch (array, letters) {
  return array.filter(function (element) {
    return element.slice(0, 2).toLowerCase().includes(letters.toLowerCase());
  });
};

function matchName (array, name) {
  return array.filter(function (element) {
    return element['name'] === name;
  });
};
