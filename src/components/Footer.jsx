import React from "react";
import {
  TiSocialInstagram,
  TiSocialFacebook,
  TiSocialLinkedin,
} from "react-icons/ti";

function Footer() {
  return (
    <div className="bg-gray-100 mx-auto">
      <div className="max-w-[1280px] mx-auto bg-[url('https://tshirtstore.centracdn.net/client/dynamic/articles/newsletter_3_2289_7426.jpg')] bg-cover">
        <div className="mx-auto py-10 space-y-8 ">
          <h1 className="font-bold">
            Get the latest T-shirt drops in your inbox! Sign up for our
            Newsletter!
          </h1>
          <div className="flex justify-center">
            <input
              className="rounded-l-full px-24 md:px-36 py-2 placeholder:text-gray-400 placeholder:text-center  outline-none"
              placeholder="Enter email for updates"
            />
            <button className="bg-black px-4 font-bold py-2 text-white rounded-r-full">
              SIGN UP
            </button>
          </div>
          <h3 className="text-gray-500">
            By registering you agree with our
            <span className="underline"> Integrity Policy.</span>
          </h3>
        </div>
        <div className="flex justify-center space-x-40 py-4">
          <TiSocialInstagram size={40} />
          <TiSocialLinkedin size={40} />
          <TiSocialFacebook size={40} />
        </div>
      </div>
      <div className="bg-gray-800 text-white p-2">
        <h3>© 2023 Tshirt Store. All rights reserved.</h3>
      </div>
    </div>
  );
}

export default Footer;
