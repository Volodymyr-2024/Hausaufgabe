// Task_1
function fnOne(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Function One");
    }, 1000);
  });
}
function fnTwo(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Function Two");
    }, 2000);
  });
}
function fnThree(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Function Three");
    }, 3000);
  });
}
async function resFn() {
  try {
    const data1 = await fnOne();
    const data2 = await fnTwo();
    const data3 = await fnThree();
    console.log(data1, data2, data3);
  } catch (error) {
    console.error("Error: ", error);
  }
}
resFn();

//Task_2
function fnArrStrToUpperCase(arr: string[]): Promise<string[]> {
  const promises = arr.map((item) => {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(item.toUpperCase());
      }, 1000);
    });
  });
  return Promise.all(promises);
}
fnArrStrToUpperCase(["hello", "world"]).then((result) => console.log(result));

//Task_3
async function getParallelPromise() {
  const promise1 = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("First promise is ok");
    }, 1000);
  });
  const promise2 = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Second promise is error"));
    }, 2000);
  });
  const promise3 = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Third promise is ok");
    }, 3000);
  });
  try {
    const result = await Promise.all([promise1, promise2, promise3]);
    console.log(result);
  } catch (error) {
    if (error instanceof Error) console.error("Error:", error.message);
  }
}
getParallelPromise();

//Task_4
async function fnArrNum(arr: number[]): Promise<void> {
  const promises = arr.map(
    (num) =>
      new Promise<number>((resolve) =>
        setTimeout(() => {
          resolve(num);
        }, num)
      )
  );
  const result = await Promise.all(promises);
  console.log(result);
}
fnArrNum([1000, 2000, 3000]);
