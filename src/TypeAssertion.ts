{
  // type Assertion

  let anything: any;
  anything = "nex level web";
  anything = 123;
  anything as number;

  const kgToGm = (value: string | number): number | string | undefined => {
    if (typeof value === "string") {
      const converted = parseFloat(value) * 1000;
      return `the converted value is ${converted}`;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };
  const result1 = kgToGm("1000") as string;
  const result2 = kgToGm(1000) as number;
}
