import { HStack, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const { products } = useSelector((state) => state.cart);

  return (
    // <nav className="flex justify-evenly py-4">
    //   <Link to="/">
    //     <h1>DummyStore</h1>
    //   </Link>
    //   <Link to="/cart">
    //     Basket
    //     <span> {products.length}</span>
    //   </Link>
    // </nav>
    <HStack height="100px" justifyContent="space-evenly" padding="15px">
      <Link to="/">
        <Text>Dummy Store</Text>
      </Link>
      <Link to="/cart">
        <Text>
          Cart <span>{products.length}</span>
        </Text>
      </Link>
    </HStack>
  );
}
