"use strict";
{
    // type Assertion
    let anything;
    anything = "nex level web";
    anything = 123;
    anything;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const converted = parseFloat(value) * 1000;
            return `the converted value is ${converted}`;
        }
        else if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGm("1000");
    const result2 = kgToGm(1000);
}
