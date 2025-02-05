function calculateTotal(
  price: number,
  quantity: number,
  discount: number = 0
): number {
  let totalPrice = (price - (price * discount) / 100) * quantity;
  return totalPrice;
}
console.log(calculateTotal(12, 3, 1));
console.log(calculateTotal(12, 3));

let id: string | number;
function displayId(x: string | number): void {
  if (typeof x === "string") {
    x.toUpperCase();
  } else x * 10;
  console.log(`Результат: ${x}`);
}
displayId(5);
displayId("Hello");

let orders: { orderId: string; amount: number; status: string }[];
function filterOrdersByStatus(
  array: { orderId: string; amount: number; status: string }[],
  status: string
): { orderId: string; amount: number; status: string }[] {
  return array.filter((item) => item.status === status);
}
orders = [
  {
    orderId: "1",
    amount: 5,
    status: "pending",
  },
  {
    orderId: "2",
    amount: 8,
    status: "shopped",
  },
  {
    orderId: "3",
    amount: 12,
    status: "delivered",
  },
  {
    orderId: "4",
    amount: 2,
    status: "pending",
  },
  {
    orderId: "5",
    amount: 3,
    status: "shopped",
  },
  {
    orderId: "6",
    amount: 6,
    status: "delivered",
  },
];
console.log(filterOrdersByStatus(orders, "delivered"));

let productInfo: [string, number, number] = ["Laptop", 1200, 3];

function updateStock(
  inventory: { [key: string]: number },
  productInfo: [string, number, number]
): { [key: string]: number } {
  const [name, , stock] = productInfo;
  inventory[name] = (inventory[name] || 0) + stock;
  return inventory;
}
console.log(updateStock({ Mouse: 5 }, productInfo));
