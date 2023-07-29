import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChoiceCard = ({ product }) => {
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
            
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ChoiceCard;
