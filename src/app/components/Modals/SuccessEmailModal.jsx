import React from "react";
import { AiOutlineCheckCircle, AiOutlineClose } from "react-icons/ai";

function SuccessEmailModal({ setSuccessSentEmail }) {
  return (
    <div className="modalbgdefault">
      <div className="modaldefault w-11/12 px-6 py-7 text-gray-600 md:w-1/3">
        <AiOutlineClose
          className="absolute right-2 top-2 h-10 w-10 cursor-pointer p-2 text-orange-main hover:opacity-75"
          onClick={() => setSuccessSentEmail(false)}
        />
        <AiOutlineCheckCircle className="mb-3 h-16 w-24 text-orange-main" />
        <h3 className="mb-6 text-center text-lg md:text-2xl">
          Form submitted <br /> Thanks for contacting us!
        </h3>
      </div>
    </div>
  );
}

export default SuccessEmailModal;
