import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChoiceCard = ({ product }) => {
  return (
    <Link href={`/product/${product._id}`}>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden flex m-6">
        {/* Image on the left */}
        <div className="w-1/4">
          <Image
            src={product.imageUrl}
            alt={product.productName}
            height={320}
            width={320}
            className="w-full h-40 object-cover"
          />
        </div>
        {/* Product details in the middle */}
        <div className="p-4 w-1/2">
          <h3 className="text-xl font-semibold text-gray-800">
            {product.productName}
          </h3>
          <p className="text-sm text-gray-500">{product.category}</p>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">{product.rating}</span>
          </div>
        </div>
        {/* Price and Add button on the right */}
        <div className="p-4 w-1/4 flex flex-col justify-center items-center">
          <p className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-sm text-gray-500">{product.status}</p>
          {/* Add button (you can customize this button further as needed) */}
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md">
            Add
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ChoiceCard;
