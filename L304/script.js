function enterNames() {
    let n = prompt("How many names do you want to enter?");
    let names = [];

    for (let i = 0; i < n; i++) {
        let name = prompt("Please enter student name: ");
        names.push(name);
    }

    return names;
}

console.log(enterNames());