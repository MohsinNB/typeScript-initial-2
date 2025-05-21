"use strict";
{
    // Generic function
    const getArray = (param) => {
        return [param];
    };
    const genericArray = (param) => {
        return [param];
    };
    const result1 = getArray("Bd");
    const result2 = genericArray("Bangladesh");
    const result3 = genericArray({
        name: "Shaon",
        isIelts: true,
    });
}
