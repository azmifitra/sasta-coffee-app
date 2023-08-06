import React from "react";
import { AiOutlineExclamationCircle, AiOutlineClose } from "react-icons/ai";

function ErrorModal({ setErrorSentEmail }) {
  return (
    <div className="modalbgdefault">
      <div className="modaldefault w-11/12 px-6 py-7 text-gray-600 md:w-1/3">
        <AiOutlineClose
          className="absolute right-2 top-2 h-10 w-10 cursor-pointer p-2 text-red-500 hover:opacity-75"
          onClick={() => setErrorSentEmail(false)}
        />
        <AiOutlineExclamationCircle className="mb-3 h-16 w-24 text-red-500" />
        <h3 className="mb-6 text-center text-lg md:text-2xl">
          Oops... Something went wrong <br /> Pleae try again later!
        </h3>
      </div>
    </div>
  );
}

export default ErrorModal;
