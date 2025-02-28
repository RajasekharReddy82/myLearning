```javascript


var c = {
fn:{
this.name = 'hello world';
console.log(this);

greet():{
this.name = "modified name';
}
greet();
console.log(this)
}
}

//convert this to async and await
Promise.resolve().then(()=> myfutureuse(false)).then((result) => console.log(result)).catch((error)=> console.log(error));

// create a function 
function sort(data) {
    return data.sort((a, b) => {
        if (a.mode === "sea" && b.mode === "sea") {
            return a.watchSea - b.watchSea;
        } else if (a.mode === "air" && b.mode === "air") {
            return a.watchair - b.watchair;
        }
        return 0; // Keep order unchanged between different modes
    });
}

const data = [
    { mode: 'air', watchair: 10, watchSea: 46 },
    { mode: 'sea', watchair: 15, watchSea: 26 },
    { mode: 'air', watchair: 5, watchSea: 30 },
    { mode: 'sea', watchair: 8, watchSea: 20 },
    { mode: 'air', watchair: 20, watchSea: 60 },
    { mode: 'sea', watchair: 12, watchSea: 35 },
    { mode: 'air', watchair: 2, watchSea: 40 },
    { mode: 'sea', watchair: 18, watchSea: 50 }
];

console.log(sort(data));
