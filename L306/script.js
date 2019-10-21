function filterNames() {
    let names = [];
    let toCompare = prompt("Please enter string to compare: ");
    let n = prompt("How many names do you want to enter?");

    for (let i = 0; i < n; i++) {
        let name = prompt("Please enter student name: ");
        if(toCompare.includes(name)) {
            names.push(name);
        }  
    }

    return names;
}

console.log(filterNames());