{
  // Promise in typescript
  type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
  const getToDo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
  };
  getToDo();

  type Something = { Something: string };

  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { Something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  //   calling Promise
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
  };
  showData();
}
