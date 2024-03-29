import { FaTrash } from "react-icons/fa";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseAmount,
  increaseAmount,
  removeFromCart,
} from "../app/features/cartSlice";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function CartProduct({ product }) {
  const dispatch = useDispatch();
  return (
    // <div className="flex bg-slate-100 p-4 mb-4 flex-col sm:flex-row w-3/5 sm:w-fit mx-auto items-center sm:justify-center justify-between gap-4">
    //   <img className="w-[100px]" src={product.image} alt={product.title} />
    //   <div className="w-full sm:w-fit">
    //     <h3 className="text-nowrap w-full text-lg my-2 truncate overflow-hidden">
    //       {product.title}
    //     </h3>
    //     <span className="font-bold">${product.price}</span>
    //     <div className="my-3 flex justify-between">
    //       <FaTrash
    //         fontSize={18}
    //         onClick={() => dispatch(removeFromCart(product.id))}
    //       />
    //       <div className="flex items-center gap-3">
    //         <CiCirclePlus
    //           fontSize={24}
    //           onClick={() => dispatch(increaseAmount(product.title))}
    //         />
    //         <span className="text-lg font-bold">{product.amount}</span>
    //         <CiCircleMinus
    //           fontSize={24}
    //           onClick={() => {
    //             if (product.amount > 1) dispatch(decreaseAmount(product.title));
    //           }}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Card direction="row" overflow="hidden" variant="outline" marginX="auto">
      <Image
        marginY="25px"
        objectFit="cover"
        objectPosition="top"
        width="150px"
        height="150px"
        src={product.image}
        // src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />
      <Stack>
        <CardBody>
          <Heading size="md">{product.title}</Heading>
          <Text py="2">{product.description.slice(0, 70) + " ..."}</Text>
        </CardBody>

        <CardFooter>
          <HStack width="100%" justifyContent="space-evenly">
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
                  if (product.amount > 1)
                    dispatch(decreaseAmount(product.title));
                }}
              />
            </div>
          </HStack>
        </CardFooter>
      </Stack>
    </Card>
  );
}
