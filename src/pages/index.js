import Image from 'next/image'
import { Inter } from 'next/font/google'
import RootLayout from '@/components/layout/RootLayout';

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <div>
      <h2>
        h2
      </h2>
    </div>
  )
}

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
