"use strict";
{
    const person = "bike";
    const person2 = "bike";
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "mohsin",
        roll: 123,
        isFriends: true,
    };
    const cars = {
        car1: "RR",
        car2: "Marcedez",
        car3: "bmw",
    };
    const result = getPropertyValue(user, "name");
    const result1 = getPropertyValue(cars, "car1");
}
