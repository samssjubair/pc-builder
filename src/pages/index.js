import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layout/RootLayout';
import ProductCard from '@/components/ui/cards/ProductCard';
import CategoryBox from '@/components/ui/cards/CategoryBox';
import { categories } from '@/data/category';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage({products}) {

  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-8">Featured Products</h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <hr className="my-8" />
      <h2 className="text-4xl font-bold text-center my-8">
        Featured Categories
      </h2>
      <div className="my-8">
       
        <div className="container mx-auto mt-4 flex justify-between">
          {categories.map((category,ind) => (
            <CategoryBox
              key={ind}
              name={category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/products");
  const data = await res.json();
  return {
    props: {
      products: data.data
    }
  }
}