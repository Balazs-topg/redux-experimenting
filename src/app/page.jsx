"use client";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

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
      <p>Count: {count}</p>
    </div>
  );
}
