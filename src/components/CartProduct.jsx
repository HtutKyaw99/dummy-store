import { FaTrash } from "react-icons/fa";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseAmount,
  increaseAmount,
  removeFromCart,
} from "../app/features/cartSlice";

export default function CartProduct({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="flex bg-slate-100 p-4 mb-4 flex-col sm:flex-row w-3/5 sm:w-fit mx-auto items-center sm:justify-center justify-between gap-4">
      <img className="w-[100px]" src={product.image} alt={product.title} />
      <div className="w-full sm:w-fit">
        <h3 className="text-nowrap w-full text-lg my-2 truncate overflow-hidden">
          {product.title}
        </h3>
        <span className="font-bold">${product.price}</span>
        <div className="my-3 flex justify-between">
          <FaTrash
            fontSize={18}
            onClick={() => dispatch(removeFromCart(product.id))}
          />
          <div className="flex items-center gap-3">
            <CiCirclePlus
              fontSize={24}
              onClick={() => dispatch(increaseAmount(product.title))}
            />
            <span className="text-lg font-bold">{product.amount}</span>
            <CiCircleMinus
              fontSize={24}
              onClick={() => {
                if (product.amount > 1) dispatch(decreaseAmount(product.title));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
