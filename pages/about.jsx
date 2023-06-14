import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function About() {
    return (
      <>
        <main className="">
          <Header/>
          <div className="bg-[url('../asset/nuno-marques-0GbrjL3vZF4-unsplash-4.jpg')] w-full bg-cover bg-no-repeat bg-center h-[70vh] md:h-[80vh] relative">
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center flex-col px-4 gap-2">
              <h1 className="text-white font-semibold text-4xl border-2 border-blue px-4 py-2">About Us</h1>
            </div>
          </div>

          <div className="p-20 bg-gray-200">
            <div className="mx-auto max-w-[60rem]">

            </div>

          </div>

          <Footer/>
        </main>
      </>
    )
  }
  