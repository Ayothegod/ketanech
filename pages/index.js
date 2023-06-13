// import { Inter } from 'next/font/google'
import nuno4 from "@/asset/nuno-marques-0GbrjL3vZF4-unsplash-4.jpg"
// import james4 from "@/asset/james-kovin-qqLxF3M-MA8-unsplash-4.jpg"
import Header from "@/components/Header";

// const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <main className="">
        <Header/>
        <div className="bg-[url('../asset/nuno-marques-0GbrjL3vZF4-unsplash-4.jpg')] w-full bg-cover bg-no-repeat bg-center h-[50vh] md:h-[80vh] relative">
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)]">

          </div>
        </div>
      </main>
    </>
  )
}
