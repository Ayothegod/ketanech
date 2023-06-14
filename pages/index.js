// import { Inter } from 'next/font/google'
// import james4 from "@/asset/james-kovin-qqLxF3M-MA8-unsplash-4.jpg"
import nuno4 from "@/asset/nuno-marques-0GbrjL3vZF4-unsplash-4.jpg"
import Body from "@/components/Body";
import Header from "@/components/Header";

// const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <>
      <main className="">
        <Header/>
        <div className="bg-[url('../asset/nuno-marques-0GbrjL3vZF4-unsplash-4.jpg')] w-full bg-cover bg-no-repeat bg-center h-[70vh] md:h-[80vh] relative">
          <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center flex-col px-4 gap-2">
            <h1 className="text-white font-semibold text-4xl">Ketanech Services</h1>
            <p className="text-neutral-300 text-lg">The No. 1 Electrical, Electronic, Mechanical and Computer services center.</p>
            <p className="text-neutral-300 ">we 
            <span className="before:block before:absolute before:-inset-0 before:-skew-y-3 before:bg-blue relative inline-block">
              
            <span className="text-white capitalize text-xl font-semibold relative">design, create and deliver</span> 
            </span>
            engineering solutions.
            </p>
          </div>
        </div>
        <Body/>
      </main>
    </>
  )
}
