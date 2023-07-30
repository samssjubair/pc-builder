import RootLayout from '@/components/layout/RootLayout';
import Image from 'next/image';
import React from 'react';

const ProductDetailPage = ({product}) => {
  const { imageUrl, productName, category, price, status, rating } = product;
    return (
      <div className=" mx-auto bg-white rounded-md shadow-md p-4">
        <div className="relative h-96 w-96 mx-auto mb-4">
          <Image
            src={imageUrl}
            alt={productName}
            layout="fill"
            className="object-cover rounded-md"
          />
        </div>
        <h1 className="text-2xl font-bold mb-2">{productName}</h1>
        <p className="text-gray-600 mb-2">Category: {category}</p>
        <p className="text-gray-600 mb-2">Price: ${price}</p>
        <p className="text-gray-600 mb-2">Status: {status}</p>
        <p className="text-gray-600 mb-2">Rating: {rating}</p>
      </div>
    );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://pc-builder-psi.vercel.app/api/products`);
  
  const products = await res.json();
  

  const paths = products?.data.map((product) => ({
    params: { productId: product._id },
  }));
  // console.log(paths);

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  // console.log(process.env.BASE_URL);
  const res = await fetch(
    `https://pc-builder-psi.vercel.app/api/products/${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
};