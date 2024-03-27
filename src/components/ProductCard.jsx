import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../app/features/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);

  const item = products.find((el) => el.id === product.id);

  return (
    <div className="w-[200px] h-[260px] border bg-slate-100 shadow-lg p-3">
      <img
        className="w-[80%] h-[150px] object-fill object-top mx-auto"
        src={product.image}
        alt={product.title}
      />
      <h3 className="truncate text-center text-lg mt-3">{product.title}</h3>
      <button
        disabled={item}
        onClick={() => {
          dispatch(addToCart(product));
        }}
        className={`${
          item ? "bg-slate-500" : "bg-blue-500"
        } text-white px-2 py-1 rounded float-end my-2`}
      >
        Add to cart
      </button>
    </div>
  );
}
