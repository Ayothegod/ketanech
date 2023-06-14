import james4 from "@/asset/james-kovin-qqLxF3M-MA8-unsplash-4.jpg"
import nuno4 from "@/asset/nuno-marques-0GbrjL3vZF4-unsplash-4.jpg"
import sidney4 from "@/asset/sidney-pearce-WRgKwttuP7A-unsplash-4.jpg"
import ahsanization4 from "@/asset/ahsanization-mJi2I9KJPQ8-unsplash-4.jpg"
import gower4 from "@/asset/christopher-gower-m_HRfLhgABo-unsplash-4.jpg"
import Image from "next/image"

const WhatWeDo = () => {
    return (
        <div className="mt-8 max-w-[70rem] mx-auto p-2">
            <h2 className="grid place-items-center text-xl text-blue font-semibold uppercase text-center mb-2">What we do.</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <div className=" relative" >
                    <Image src={james4} alt="first" className="h-24 sm:h-40 w-full object-cover object-center" />
                    <div className="absolute inset-0 bg-[rgba(0,0,0,.4)] grid place-items-center">
                        <p className="text-xl font-bold text-white">Electrical and Electronics</p>
                    </div>
                </div>

                <div className=" relative">
                    <Image src={nuno4} alt="absolute" className="h-24 sm:h-40 w-full object-cover object-center" />
                    <div className="absolute inset-0 bg-[rgba(0,0,0,.4)] grid place-items-center">
                        <p className="text-xl font-bold text-white">Industrial Automation</p>
                    </div>
                </div>

                <div className=" relative">
                    <Image src={sidney4} alt="absolute" className="h-24 sm:h-40 w-full object-cover object-center" />
                    <div className="absolute inset-0 bg-[rgba(0,0,0,.4)] grid place-items-center">
                        <p className="text-xl font-bold text-white">Fabrication</p>
                    </div>
                </div>
                <div className=" relative">
                    <Image src={ahsanization4} alt="absolute" className="h-24 sm:h-40 w-full object-cover object-center" />
                    <div className="absolute inset-0 bg-[rgba(0,0,0,.4)] grid place-items-center">
                        <p className="text-xl font-bold text-white">Outdoor Services</p>
                    </div>
                </div>
                <div className=" relative">
                    <Image src={gower4} alt="absolute" className="h-24 sm:h-40 w-full object-cover object-center" />
                    <div className="absolute inset-0 bg-[rgba(0,0,0,.4)] grid place-items-center">
                        <p className="text-xl font-bold text-white">Software/Embeded systems</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default WhatWeDo