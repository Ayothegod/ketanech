import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { FaCheck } from "react-icons/fa"
import ceo from "@/asset/ceo.jpg"
import taiwo from "@/asset/taiwo.png"
import odun from "@/asset/odun.png"



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
                    <p className="text-gray-600">Ketanech Services are Industry leaders in our area of specialization. Our focus is on electrical and electronic manufacture and repair, mechanical and mechatronics fabrication and control, control systems, on-shore and off-shore services and engineering for all types of industries.</p>
                </div>
            </div>

            <div className="px-4 py-10 bg-gray-100 shadow-md">
                <h2 className="text-center text-2xl text-blue font-semibold">Our Values</h2>
                <div className="mx-auto max-w-[50rem] mt-4">
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-4 text-gray-600"><FaCheck className="text-blue " />We apply the best of engineering and technology to help us solve complex challenges.</li>
                        <li className="flex items-center gap-4 text-gray-600"><FaCheck className="text-blue text-2xl" />We have an outstanding track record and reputation within the specialist domains in which we operate.</li>
                        <li className="flex items-center gap-4 text-gray-600"><FaCheck className="text-blue " />We are customer focused.</li> 
                    </ul>
                </div>
            </div>

            <div className="bg-white px-4 py-10">
                <h2 className="text-center text-2xl text-blue font-semibold">Our People</h2>
                <div className="mx-auto max-w-[50rem] mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <span className="">
                        <Image src={ceo} className="h-36 w-full object-cover rounded object-center" alt="ceo"/>
                        <h4 className="text-lg text-blue font-semibold">Eng. Babalola Bukola</h4>
                        <p className="text-sm text-gray-500">CEO at Ketanech Technology Services</p>
                    </span>
                    <span>
                        <Image src={odun} className="h-36 w-full object-cover object-center border rounded" alt="software dev  "/>
                        <h4 className="text-lg text-blue font-semibold">Odun Babs</h4>
                        <p className="text-sm text-gray-500">Software Developer</p>
                    </span>
                    <span>
                        <Image src={taiwo} className="h-36 w-full object-cover rounded object-center" alt="manager"/>
                        <h4 className="text-lg text-blue font-semibold">Mr Taiwo</h4>
                        <p className="text-sm text-gray-500">Supervising Manager</p>
                    </span>
                </div>
            </div>

            <Footer />
        </main>
    )
}
