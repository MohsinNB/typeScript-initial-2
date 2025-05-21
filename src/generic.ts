{
  // Generic means declare a type and reuse it again and again

  type GenericArray<T> = Array<T>;

  const countries: Array<string> = [
    "Pakistan",
    "Afganistan",
    "Bangladesh",
    "India",
  ];
  const age: Array<number> = [21, 35, 12, 54];

  // Generic Tuple
  type GenericTuple<x, y> = [x, y];
  const member: GenericTuple<string, string> = ["mr. X", "mr. Y"];
  const user: GenericTuple<
    number,
    { name: string; age: number; Email: string }
  > = [
    1234,
    { name: "Mohsin", age: 20, Email: "mohammadmohsin28012005@gmail.com" },
  ];
}
