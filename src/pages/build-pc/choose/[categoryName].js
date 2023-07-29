import RootLayout from "@/components/layout/RootLayout";
import ChoiceCard from "@/components/ui/cards/ChoiceCard";
import ProductCard from "@/components/ui/cards/ProductCard";
import { categories } from "@/data/category";
import Image from "next/image";
import React from "react";

const ProductDetailPage = ({ products, categoryName }) => {
  
  return (
    <>
      <h2 className="text-4xl font-bold text-center my-8">Choose Your {categoryName}</h2>
      <div className="container mx-auto ">
        {products.map((product) => (
          <ChoiceCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

// export const getStaticPaths = async () => {
//   const paths = categories.map((category) => ({
//     params: { categoryName: category },
//   }));
//   console.log(paths);

//   return { paths, fallback: false };
// };

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/products?category=${params.categoryName}`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
      categoryName: params.categoryName,
    },
  };
};
