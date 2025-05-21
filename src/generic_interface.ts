{
  interface Developer<T> {
    name: string;
    age: number;
    computer: {
      name: string;
      brand: string;
      releaseYear: number;
    };
    smartWatch: T;
  }
  type Watch = { name: string; model: string };

  const richUser: Developer<Watch> = {
    name: "Mohsin",
    age: 20,
    computer: {
      name: "hp",
      brand: "hp",
      releaseYear: 2023,
    },
    smartWatch: {
      name: "Cospet",
      model: "f31",
    },
  };
}
