import React from "react";
import { useSelector } from "react-redux";

export default function Modal() {
  const { total } = useSelector((state) => state.cart);
  return (
    <div className="flex flex-col">
      <h1 className="text-xl uppercase">Thank u for believing in us</h1>
      <form className="flex flex-col">
        <input type="text" placeholder="Enter ur address" />
        <input type="number" placeholder="Enter ur phone number" />
      </form>
      <span>Total : ${total}</span>
      <button>Confirm</button>
    </div>
  );
}
