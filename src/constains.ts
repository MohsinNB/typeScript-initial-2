{
  // Constrains
  type vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";

  type Owner2 = keyof vehicle;
  const person: Owner = "bike";
  const person2: Owner2 = "bike";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
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
