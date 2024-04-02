import React from "react";

function About() {
  return (
    <div className="w-10/12 md:w-7/12 mx-auto text-center">
      <h1 className="text-center text-5xl md:text-6xl mt-14 m-4 font-bold">
        About Us
      </h1>
      <h3 className="m-4">OUR STORY - FROM THE START</h3>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non quam
        itaque voluptates, vel at voluptate reprehender.
      </p>
      <p className="text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut impedit
        aspernatur eveniet.
      </p>
      <div className="flex md:flex-row flex-col justify-center items-center mt-16">
        <div className="w-4/5 md:w-2/5">
          <img
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Vwd2s2MTY2MTU3Ny13aWtpbWVkaWEtaW1hZ2Uta293YXBlZWouanBn.jpg"
            alt="about-page-img"
          />
        </div>
        <div className="w-4/5 md:w-3/5 p-4">
          <h2 className="font-bold">AN ATTRACTIVE SUBHEADING TO CONTINUE</h2>
          <p className="text-gray-500 mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
            repudiandae officia perferendis laboriosam ullam dignissimos
            possimus ad fugit, voluptas sequi et. Quibusdam, magnam! Facilis,
            quos enim exercitationem optio, libero laboriosam inventore beatae
            dolores illo veniam possimus deserunt cumque aliquid ratione vel
            voluptas explicabo suscipit fugit temporibus. Officia sunt ex
            tenetur!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
