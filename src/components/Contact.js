import React from "react";

const Contact = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse h-4/6 ">
      <div className="w-full md:w-1/2 mx-0 md:mx-10 p-2 md:pl-20 flex flex-col">
        <div className="flex gap-2 flex-col m-2 px-4 md:px-0 pl-6 md:pl-0">
          <h1 className="my-1 md:my-4 text-4xl md:text-5xl">
            Visit us or <b>call us today</b>
          </h1>
          <h1 className="text-2xl">
            Opening <b>Hours</b>
          </h1>
          <p>Tues- Thurs: 9am-5pm</p>
          <p>Fri: 9am-7pm / Sat: 8am-</p>
          <p>Sun - Mon: Closed</p>
          <p className="text-gray-400">contact@Developer.com</p>
        </div>
        <div className="flex flex-col gap-4 mt-2 md:mt-10 ml-4 md:ml-0 pl-2 md:pl-0">
          <form>
            <input
              className="p-2 m-2  border-blue-500 border-2 rounded-lg w-11/12 md:w-4/5"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="p-2 m-2  border-blue-500 border-2 rounded-lg w-11/12 md:w-4/5"
              type="email"
              size="30"
              placeholder="Email"
              required
            />
            <textarea
              className="p-2 m-2  border-blue-500 border-2 rounded-lg w-11/12 md:w-4/5 h-20 block"
              type="text"
              placeholder="Message"
            ></textarea>
            <button className="m-2 p-2 border-blue-500 border-2 bg-transparent rounded-lg text-blue-500 hover:text-white hover:bg-blue-500">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="w-full md:w-1/2 mr-4">
        <img
          className="w-full"
          src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1710917237~exp=1710917837~hmac=a0a44292e183b40d6bb1b7eda6c037ef9c931fe8fb9ca326f404f707b2c30f37"
          alt="contact-page-img"
        />
      </div>
    </div>
  );
};

export default Contact;
