function enterNames() {
    let n = prompt("How many names do you want to enter?");
    let names = [];

    for (let i = 0; i < n; i++) {
        let name = prompt("Please enter student name: ");
        names.push(name);
    }

    return names;
};

function filterUniques (arr) {
    arr.sort();
    let uniques = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i - 1]) {
            uniques.push(arr[i]);
        }
    };

    return uniques;
};

let list1 = enterNames();
let list2 = enterNames();
let sortedUnitedList = list1.concat(list2);

console.log(filterUniques(sortedUnitedList));

