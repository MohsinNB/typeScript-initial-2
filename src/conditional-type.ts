{
  // Conditional Types

  type a1 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false; //conditional type
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type sheikh = {
    bike: string;
    ship: string;
    car: string;
  };

  //   type checkVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;
  type checkVehicle<T> = T extends keyof sheikh ? true : false;
  type HasCar = checkVehicle<"car">;
  type HasShip = checkVehicle<"ship">;
  //
}
