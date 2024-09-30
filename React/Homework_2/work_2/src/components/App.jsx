import Greeting from "./Greeting";
import ShoppingList from "./ShoppingList";
import OrderStatus from "./OrderStatus";

function App() {
  const items = ["Апельсины", "Хлеб", "Молоко"];
  const orders = [
    { orderId: 123, status: "в пути" },
    { orderId: 456, status: "доставлен" },
    { orderId: 789, status: "обрабатывается" },
  ];
  return (
    <div>
      <Greeting name="Андрей" />
      <Greeting />
      <ShoppingList elements={items} />
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  );
}

export default App;
