import { IoMdArrowForward } from "react-icons/io"

const Mission = () => {
    return (
        <div className="mt-2 ">
            <h2 className="grid place-items-center text-xl text-blue font-semibold uppercase text-center">Specialist engineering for every field</h2>
            <p className="text-neutral-500">Ketanech Services are Industry leaders in our area of specialization. Our focus is on electrical and electronic manufacture and repair, mechanical and mechatronics fabrication and control, control systems, on-shore and off-shore services and engineering for all types of industries.</p>
            <div className="flex items-center justify-center my-2">
                <button className="bg-blue text-white font-semibold rounded py-2 px-4 flex items-center gap-1">Our Mission <IoMdArrowForward/></button>
            </div>
        </div>
    )
}

export default Mission