import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {FaCheck} from "react-icons/fa"


export default function About() {
    return (
        <main className="">
            <Header />
            <div className="bg-[url('../asset/nuno-marques-0GbrjL3vZF4-unsplash-4.jpg')] w-full bg-cover bg-no-repeat bg-center h-[30vh] relative">
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center flex-col px-4 gap-2">
                    <h1 className="text-white font-semibold text-4xl border-2 border-blue px-4 py-2">About Us</h1>
                </div>
            </div>

            <div className="px-2 py-10 bg-gray-200 shadow">
                <div className="mx-auto max-w-[50rem]">
                    <p className="sm:text-lg">Ketanech Services are Industry leaders in our area of specialization. Our focus is on electrical and electronic manufacture and repair, mechanical and mechatronics fabrication and control, control systems, on-shore and off-shore services and engineering for all types of industries.</p>
                </div>
            </div>

            <div className="px-4 py-10 bg-gray-100">
                <h2 className="text-center text-2xl text-blue font-semibold">Our Values</h2>
                <div className="mx-auto max-w-[50rem] mt-4">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4 text-gray-600"><FaCheck className="text-blue"/>jikewiekkwejl</li>
                        <li className="flex items-center gap-4 text-gray-600"><FaCheck className="text-blue"/>jikewiekkwejl</li>
                    </ul>
                </div>
            </div>

            <Footer />
        </main>
    )
}
