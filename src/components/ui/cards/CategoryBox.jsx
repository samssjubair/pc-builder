import Image from "next/image";

const CategoryBox = ({ name }) => {
  return (
    <div className="group relative cursor-pointer inline-block mx-2">
      <div className=" h-40 w-40 bg-gray-200 flex flex-col items-center justify-center group-hover:bg-gray-300 pb-4">
        <Image
          src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
          alt={name}
          height={300}
          width={300}
        />
        <p className="text-center mt-2 text-gray-800 font-semibold">{name}</p>
      </div>
    </div>
  );
};

export default CategoryBox;
