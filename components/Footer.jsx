import Link from "next/link"
import { IoMdArrowForward } from "react-icons/io"
import { FaLinkedinIn } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaRegCopyright } from "react-icons/fa"
import { GrMail } from "react-icons/gr"

const Footer = () => {
    return (
        <div className=" bg-blue text-white">
            <div className="bg-blue-dark py-8 shadow-md">
                <div className="max-w-[70rem] mx-auto text-center shadow-sm">
                    <h2 className=" text-2xl font-semibold uppercase mb-2 ">Got a question?</h2>
                    <p>Do you have a question or enquiry?</p>
                    <div className="grid place-items-center">
                        <Link href="/contact">
                            <button className="bg-white text-blue font-bold flex items-center justify-center py-2 px-4 mt-2 gap-2 transition-all rounded hover:bg-blue hover:text-white">Contact Us
                                <IoMdArrowForward className="text-xl -rotate-45" /></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="max-w-[60rem] mx-auto py-8 p-2 ">
                <h2 className="text-2xl font-bold uppercase mb-2 ">KTS.</h2>
                <div className="flex gap-20">
                    <div>
                        <h3 className="uppercase font-semibold mb-1">specialization</h3>
                        <ul className="text-gray-200 text-sm">
                            <Link href="/"><li>Electrical and Electronics</li></Link>
                            <Link href="/"><li>Software/Embeded systems</li></Link>
                            <Link href="/"><li>Fabrication</li></Link>
                            <Link href="/"><li>Industrial Automation</li></Link>
                            <Link href="/"><li>Outdoor Services</li></Link>
                        </ul>
                    </div>
                    <div>
                        <h3 className="uppercase font-semibold mb-1">Links</h3>
                        <ul className="text-gray-200 text-sm">
                            <Link href="/"><li>Home</li></Link>
                            <Link href="/"><li>About</li></Link>
                            <Link href="/"><li>Services</li></Link>
                            <Link href="/"><li>Contact</li></Link>
                            <Link href="/"><li>Training</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-2xl font-bold uppercase mb-2 ">CONNECT</h2>
                    <div className="flex gap-8">
                        <div>
                            <Link href="/">
                                <button className="p-2 bg-white text-blue rounded transition-colors duration-300 hover:bg-sky hover:text-white "><FaLinkedinIn className="text-xl sm:text-2xl" /></button>
                            </Link>
                        </div>
                        <div>
                            <Link href="/">
                                <button className="p-2 bg-white text-blue rounded transition-colors duration-300 hover:bg-blue-dark hover:text-white"><FaFacebookF className="text-xl sm:text-2xl" /></button>
                            </Link>
                        </div>
                        <div>
                            <Link href="/">
                                <button className="p-2 bg-white text-blue rounded transition-colors duration-300 hover:bg-sky hover:text-white"><FaTwitter className="text-xl sm:text-2xl" /></button>
                            </Link>
                        </div>
                        <div>
                            <Link href="/">
                                <button className="p-2 bg-white text-blue rounded transition-colors duration-300 hover:bg-red-600 hover:text-white"><GrMail className="text-xl sm:text-2xl" /></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-t-gray-300 flex flex-col items-center justify-center py-2">
                <p className="flex items-center text-sm"><FaRegCopyright /> 2023 Ketanech Services. all rights reserved. </p>
                <p className="text-xs">site by <Link href="https://ayomide.me">
                    <button className="bg-white text-blue p-1 rounded hover:text-white hover:bg-purple-600">AioLabs</button>
                </Link></p>
            </div>
        </div>
    )
}

export default Footer