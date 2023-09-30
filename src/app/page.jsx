"use client";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementBy10,
  decrementBy10,
} from "./redux/counterSlice";

import { addToCart } from "./redux/cartSlice";

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <button
        className="bg-red-200 p-4 rounded-xl"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="bg-red-200 p-4 rounded-xl"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="bg-red-200 p-4 rounded-xl"
        onClick={() => dispatch(incrementBy10())}
      >
        Increment by 10
      </button>
      <button
        className="bg-red-200 p-4 rounded-xl"
        onClick={() => dispatch(decrementBy10())}
      >
        Decrement by 10
      </button>
      <p>Count: {count}</p>
      <br /> <br /> <br />
      <button
        className="bg-red-200 p-4 rounded-xl"
        onClick={() => dispatch(addToCart({ name: "black berry", price: 95 }))}
      >
        add to cart
      </button>
      {cart.items.map((item) => {
        return <div>{item.name}</div>;
      })}
      {JSON.stringify(cart.items)}
      <br /> <br /> {JSON.stringify(cart.totalValue)}
    </div>
  );
}
