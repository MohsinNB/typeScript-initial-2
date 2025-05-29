{
  const arrOfNumbers: number[] = [1, 2, 3, 4];

  const arrOfString: string[] = arrOfNumbers.map((number) => number.toString());
  console.log(arrOfString);

  // type AreaString = {
  //   hieght: string;
  //   width: string;
  // };
  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"]; // this line code called lookup type
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };
  // type AreaBoolean = {
  //   [key in keyof AreaNumber]: boolean;
  // };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "250",
    width: 850,
  };
}
