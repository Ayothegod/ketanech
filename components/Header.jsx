import Link from "next/link"
import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import { GrClose } from "react-icons/gr"
import { IoMdArrowForward } from "react-icons/io"
import { AiFillContainer } from "react-icons/ai"

const Header = () => {
  const [menu, setMenu] = useState(false)
  return (
    <div className="flex relative sm:items-center sm:justify-between py-2 px-4 overflow-hidden max-w-[60rem] mx-auto">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <Link href="/">

        <nav className="text-2xl font-bold cursor-pointer">
          KTS.
        </nav>
        </Link>
        <div className="sm:hidden text-2xl" onClick={() => setMenu(!menu)}>
          <AiOutlineMenu />
        </div>
      </div>

      <div className={`${menu ? "fixed inset-0 bg-[rgba(0,0,0,.5)]" : "static"}`}></div>
      <div className={` overflow-hidden fixed inset-0 flex z-50 sm:relative sm:z-0 transition duration-500  ${menu ? "" : "translate-x-[100%] sm:translate-x-0"}`}>

        <ul className="bg-neutral-100 absolute sm:static right-0 top-0 sm:bg-white h-screen sm:h-auto w-[80vw] sm:w-auto ">
          <div className="bg-white grid place-items-end shadow p-3 sm:hidden">
            <GrClose className="text-2xl cursor-pointer text-blue" onClick={() => setMenu(!menu)} />
          </div>
          <div className=" gap-1 font-semibold flex flex-col sm:flex-row  px-2 py-2 sm:py-0 mt-4 sm:mt-0 text-neutral-500">
            <Link href="/"><li className="bg-white p-3 shadow-sm flex items-center justify-between">Home<IoMdArrowForward className="sm:hidden text-xl text-blue"/></li></Link>
            <Link href="/about"><li className="bg-white p-3 shadow-sm flex items-center justify-between">About <IoMdArrowForward className="sm:hidden text-xl text-blue"/></li></Link>
            <Link href="/"><li className="bg-white p-3 shadow-sm flex items-center justify-between">Services <IoMdArrowForward className="sm:hidden text-xl text-blue"/></li></Link>
            <Link href="/contact"><li className="bg-white p-3 shadow-sm flex items-center justify-between">Contact <IoMdArrowForward className="sm:hidden text-xl text-blue"/></li></Link>
            <Link href="/"><li className="bg-white p-3 shadow-sm flex items-center justify-between">Training <IoMdArrowForward className="sm:hidden text-xl text-blue"/></li></Link>
          </div>
          <div className="bg-white mt-4 shadow sm:hidden p-2 mx-2">
            <button className="bg-blue text-white w-full py-2 font-semibold rounded flex items-center gap-2 justify-center">Contact Us <AiFillContainer/></button>
          </div>
          <div className="sm:hidden bg-white mt-4 shadow p-2 mx-2">
            <button className="hover:bg-blue border border-blue text-blue hover:text-white w-full py-2 text-lg font-semibold rounded">Training Program</button>
          </div>
        </ul>
      </div>
    </div>
  )
}
// transition duration-500 hover:border-b-blue-dark hover:border-b 
export default Header