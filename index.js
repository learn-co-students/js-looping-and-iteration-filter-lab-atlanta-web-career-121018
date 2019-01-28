// Code your solution in this file


function findMatching(arr, str) {
    let matchArr = [];
    for (const element of arr) {
        if (element.toLowerCase() === str.toLowerCase()) {
            matchArr.push(element);
        };
    };
    return matchArr;
};
// findMatching(["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"], Bobby); => ["Bobby", "bobby"]
// findMatching(["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"], Sammy); => ["Sammy"]
// findMatching(["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"], Bobby); => ["Bobby", "bobby"]
// findMatching(["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"], Susan); => []



function fuzzyMatch(arr, str) {
    // console.log(arr);
    // console.log(str);
    let strLength = str.length;
    let matchArr = [];
    for (const element of arr) {
        if (element.startsWith(str)) {
            matchArr.push(element);
        };
    };
    return matchArr;
};
// fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"], 'Sa'); => ["Sammy", "Sally", "Sarah"]
// fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"], 'y'); => []
// fuzzyMatch(["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"], 'mm'); => []



function matchName(arr, str) {
    // console.log(arr);
    // console.log(str);
    let finalArr = [];
    for (const element of arr) {
        if (element.name === str) {
            finalArr.push(element);
        };
    };
    // console.log(finalArr);
    return finalArr;
};
// matchName([{name: "Bobby", hometown: "Pittsburgh"}, {name: "Sammy", hometown: "New York"}, {name: "Sally", hometown: "Cleveland"}, {name: "Annette", hometown: "Los Angeles"}, {name: "Bobby", hometown: "Tampa Bay"}], 'Bobby');
// => {name: "Bobby", hometown: "Pittsburgh"}, {name: "Bobby", hometown: "Tampa Bay"}]
