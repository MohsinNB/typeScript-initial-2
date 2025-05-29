{
  //Utility Types
  // Pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: number;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //Omit
  type contactInfo = Omit<Person, "name" | "age">;

  //Partial
  type PersonPartial = Partial<Person>;

  //Required
  type PersonRequired = Required<Person>;

  //Readonly
  type PersonReadOnly = Readonly<Person>;

  //Record
  type myObj = Record<string, string>;
  const EmptyObject: Record<string, unknown> = {};
  const object1: myObj = {
    name: "md",
    age: "12",
    clg: "spi",
    and: "so on",
  };
}
