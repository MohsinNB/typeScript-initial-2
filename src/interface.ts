{
  // Interface in typescript

  interface Object {
    name: string;
    age: number;
    address: {
      city: string;
      area: string;
      zipcode?: string | number;
    };
  }

  const object: Object = {
    name: "MOHSIN",
    age: 20,
    address: {
      city: "Sylhet",
      area: "Uposhohor",
      zipcode: 3100,
    },
  };
}
