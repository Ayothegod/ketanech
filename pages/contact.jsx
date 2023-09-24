import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { useState } from "react";
import { useForm } from "react-hook-form";
//
export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <Header />
      <div className="bg-[url('../asset/nuno-marques-0GbrjL3vZF4-unsplash-4.jpg')] w-full bg-cover bg-no-repeat bg-center h-[30vh] relative">
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] flex items-center justify-center flex-col px-4 gap-2">
          <h1 className="text-white font-semibold text-4xl border-2 border-blue px-4 py-2">
            Contact Us
          </h1>
        </div>
      </div>

      <div className="bg-gray-200 p-4 sm:p-10 shadow-md">
        <div className="max-w-[40rem] mx-auto">
          <p className="text-gray-500 text-lg ">
            we will love to hear from you, whether you have a specific project
            or would like to explore how we can work more in the future.
          </p>
          <div className="text-gray-700 font-medium flex flex-col sm:flex-row items-center justify-center gap-x-12 gap-y-4 mt-4">
            <p className="text-lg flex items-center gap-2">
              <FaPhoneAlt className="text-blue text-2xl sm:text-4xl" />
              +234 ( 0 ) 800 000 000
            </p>
            <p className="text-lg flex items-center gap-2">
              <GrMail className="text-blue text-2xl sm:text-4xl" />
              info@ketanech.com
            </p>
          </div>
          <p className="text-center text-lg flex items-center gap-2 mt-2">
            <MdLocationPin className="text-blue text-2xl sm:text-4xl" />
            73, Hammed Omidiran way, Kolabalogun area, Osogbo, Osun State
          </p>
        </div>
      </div>

      <div className="px-4 py-10">
        <h2 className="text-blue text-center font-semibold text-4xl ">
          Get in touch.
        </h2>
        <form
          onSubmit={handleSubmit(submitData)}
          className="max-w-[40rem] mx-auto mt-2 space-y-4"
        >
          <span className="flex flex-col gap-1">
            <label htmlFor="company-name" className="text-lg text-gray-500">
              Full Name <span className="absolute text-black text-xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Fullname"
              {...register("fullName", {
                required: "full name is required",
                minLength: 3,
              })}
              className={`border border-gray-400 rounded py-2 px-2 outline-blue focus:border-blue ${
                errors.fullName &&
                "border-red-600 focus:border-red-600 outline-red-600"
              }`}
            />
            {errors.fullName && (
              <p className="text-sm text-red-600 font-mono">
                {errors.fullName.message}
              </p>
            )}
          </span>
          <span className="flex flex-col gap-1">
            <label htmlFor="Email" className="text-lg text-gray-500">
              Email<span className="absolute text-black text-xl">*</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: "Email Address is required",
                minLength: 3,
              })}
              className={`border border-gray-400 rounded py-2 px-2 outline-blue focus:border-blue ${
                errors.email &&
                "border-red-600 focus:border-red-600 outline-red-600"
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-600 font-mono">
                {errors.email.message}
              </p>
            )}
          </span>
          <span className="flex flex-col gap-1">
            <label htmlFor="company-name" className="text-lg text-gray-500">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Company Name"
              {...register("companyName")}
              className={`border border-gray-400 rounded py-2 px-2 outline-blue focus:border-blue`}
            />
          </span>
          <span className="flex flex-col gap-1">
            <label htmlFor="company-name" className="text-lg text-gray-500">
              Enquiry<span className="absolute text-black text-xl">*</span>
            </label>
            <textarea
              name="enquiry"
              id=""
              rows="4"
              placeholder="Your enquiry here"
              {...register("details", {
                required: "Enquiry details is required",
                minLength: 10,
              })}
              className={`border border-gray-400 rounded py-2 px-2 outline-blue focus:border-blue ${
                errors.details &&
                "border-red-600 focus:border-red-600 outline-red-600"
              }`}
            ></textarea>
                        {errors.details && (
              <p className="text-sm text-red-600 font-mono">
                {errors.details.message}
              </p>
            )}
          </span>
          <div className="grid place-items-center mt-4">
            <button className="bg-blue py-2 px-12 text-white rounded font-semibold">
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
