{
  // Generic function
  const getArray = (param: string): [string] => {
    return [param];
  };

  const genericArray = <T>(param: T): T[] => {
    return [param];
  };
  interface User {
    name: string;
    isIelts: boolean;
  }
  const result1 = getArray("Bd");
  const result2 = genericArray<string>("Bangladesh");
  const result3 = genericArray<User>({
    name: "Shaon",
    isIelts: true,
  });
}
