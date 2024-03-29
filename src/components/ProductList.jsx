import { SimpleGrid } from "@chakra-ui/react";
import { productApi, useGetAllProductsQuery } from "../app/services/apiSlice";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const { data, isError, isLoading, error } = useGetAllProductsQuery();

  if (isError) return <h1>Error{error}</h1>;

  if (isLoading) return <h1>Loading ... </h1>;

  return (
    // <main className="w-full mt-4">
    //   <div className="flex flex-wrap gap-4 justify-center">
    //     {data?.map((product) => (
    //       <ProductCard key={product.id} product={{ ...product, amount: 1 }} />
    //     ))}
    //   </div>
    // </main>
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing="10px">
      {data.map((product) => (
        <ProductCard key={product.id} product={{ ...product, amount: 1 }} />
      ))}
    </SimpleGrid>
  );
}
