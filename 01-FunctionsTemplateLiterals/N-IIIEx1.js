const arr = new Array(10);

const num = () => {
    for (let i = 0; i < arr.length; i++) {
        console.log(i);
    }
    console.log("\n");
}

for (let i = 0; i < arr.length; i++) {
    arr[i] = num;
}

arr.forEach((value, index) => {
    if (value) {
        console.log(`Vuelta ${index}:`);
        value(index);
    }
});

