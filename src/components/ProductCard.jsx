import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../app/features/cartSlice";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);

  const item = products.find((el) => el.id === product.id);

  return (
    // <div className="border bg-slate-100 shadow-lg p-3">
    //   <img
    //     className="object-fill object-top mx-auto"
    //     src={product.image}
    //     alt={product.title}
    //   />
    //   <h3 className="truncate text-center text-lg mt-3">{product.title}</h3>
    //   <button
    //     disabled={item}
    //     onClick={() => {
    //       dispatch(addToCart(product));
    //     }}
    //     className={`${
    //       item ? "bg-slate-500" : "bg-blue-500"
    //     } text-white px-2 py-1 rounded float-end my-2`}
    //   >
    //     Add to cart
    //   </button>
    // </div>
    <Card maxW="sm">
      <CardBody>
        <Image
          marginX="auto"
          maxW="120%"
          height="120px"
          objectFit="cover"
          src={product.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading textAlign="center" size="sm">
            {product.title}
          </Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <HStack width="100%" justifyContent={"space-between"}>
          <Text color="blue.600" fontSize="2xl">
            $ {product.price}
          </Text>
          <Button
            isDisabled={item}
            variant="ghost"
            colorScheme="blue"
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            Add to cart
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
}
