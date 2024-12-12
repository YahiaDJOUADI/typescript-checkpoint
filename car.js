"use strict";
const myCar = {
    make: "Audi",
    model: "RS6",
    year: 2023,
    start: () => {
        return "Car engine started";
    },
};
const startMessage = myCar.start();
console.log(startMessage);
