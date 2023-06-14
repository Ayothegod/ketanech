import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { GrMail } from "react-icons/gr"
import { FaPhoneAlt, } from "react-icons/fa"
import { MdLocationPin } from "react-icons/md"
// 
export default function Contact() {
    return (
        <div>
            <Header />
            <div className="bg-[url('../asset/nuno-marques-0GbrjL3vZF4-unsplash-4.jpg')] w-full bg-cover bg-no-repeat bg-center h-[30vh] relative">
                <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center flex-col px-4 gap-2">
                    <h1 className="text-white font-semibold text-4xl border-2 border-blue px-4 py-2">Contact Us</h1>
                </div>
            </div>
            <div className="bg-gray-200 p-4 sm:p-10 shadow-md">
                <div className="max-w-[40rem] mx-auto">
                    <p className="text-gray-500 text-lg ">we will love to hear from you, whether you have a specific project or would like to explore how we can work more in the future.</p>
                    <div className="text-gray-700 font-medium flex flex-col sm:flex-row items-center justify-center gap-x-12 gap-y-4 mt-4">
                        <p className="text-lg flex items-center gap-2"><FaPhoneAlt className="text-blue text-2xl sm:text-4xl" />+234 ( 0 ) 800 000 000</p>
                        <p className="text-lg flex items-center gap-2"><GrMail className="text-blue text-2xl sm:text-4xl" />info@ketanech.com</p>
                    </div>
                    <p className="text-center text-lg flex items-center gap-2 mt-2"><MdLocationPin className="text-blue text-2xl sm:text-4xl"/>73, Hammed Omidiran way, Kolabalogun area, Osogbo, Osun State</p>
                </div>
            </div>
            <div className="h-40 p-10">
                <h2 className="text-blue text-center font-semibold text-4xl ">Get in touch.</h2>
            </div>
            <Footer />
        </div>
    )
}
