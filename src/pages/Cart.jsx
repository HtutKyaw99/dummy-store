import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import { useEffect } from "react";
import { calculateTotal } from "../app/features/cartSlice";
import ModalBox from "../components/ModalBox";

import { Button, Text } from "@chakra-ui/react";

export default function Cart() {
  const { products, total } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [products, dispatch]);

  if (products.length === 0)
    return (
      <Text fontSize="xl" textAlign="center">
        Your Cart is empty
      </Text>
    );
  return (
    <div className="flex flex-col">
      {products?.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
      <Text
        textAlign="center"
        fontSize="xl"
        marginTop="30px"
        marginBottom="10px"
      >
        Total : ${total.toFixed(2)}
      </Text>
      {/* <Button
        colorScheme="blue"
        variant="ghost"
        width="fit-content"
        marginX="auto"
        borderRadius="10px"
      >
        CheckOut
      </Button> */}
      <ModalBox />
      {/* <div className="absolute bg-blue-100 p-4 rounded-lg">
        <Modal />
      </div> */}
    </div>
  );
}
