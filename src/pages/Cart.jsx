import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import { useEffect } from "react";
import { calculateTotal } from "../app/features/cartSlice";
import Modal from "../components/Modal";

export default function Cart() {
  const { products, total } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [products, dispatch]);

  if (products.length === 0)
    return <h1 className="text-xl text-center my-3">Your Cart is empty</h1>;
  return (
    <div className="flex flex-col">
      {products?.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
      <h3 className="text-center my-3 text-xl">Total : ${total.toFixed(2)}</h3>
      <button className="text-center my-3 bg-blue-500 w-fit mx-auto px-3 py-3 rounded-lg text-white">
        Checkout
      </button>
      {/* <div className="absolute bg-blue-100 p-4 rounded-lg">
        <Modal />
      </div> */}
    </div>
  );
}
