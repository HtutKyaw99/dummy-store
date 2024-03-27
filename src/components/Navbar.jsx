import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { products } = useSelector((state) => state.cart);

  return (
    <nav className="flex justify-evenly py-4">
      <Link to="/">
        <h1>DummyStore</h1>
      </Link>
      <Link to="/cart">
        Basket
        <span> {products.length}</span>
      </Link>
    </nav>
  );
}
