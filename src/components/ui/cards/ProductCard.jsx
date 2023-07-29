import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({
  product
}) => {
  return (
    <Link href={`/product/${product._id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.productName}
          height={320}
          width={320}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">
            {product.productName}
          </h3>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="text-lg font-bold text-gray-900 mt-2">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500">{product.status}</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">{product.rating}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 2.293a1 1 0 011.414 0L10 4.586l2.293-2.293a1 1 0 111.414 1.414L11.414 6l2.293 2.293a1 1 0 01-1.414 1.414L10 7.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 6 6.293 3.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
