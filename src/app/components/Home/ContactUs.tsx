"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { ThreeDots } from "react-loader-spinner";

import SuccessEmailModal from "../modals/SuccessEmailModal";
import ErrorModal from "../modals/ErrorModal";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactUs() {
  const [successSentEmail, setSuccessSentEmail] = useState(false);
  const [errorSentEmail, setErrorSentEmail] = useState(false);
  const [isLoadingEmail, setIsLoadingEmail] = useState(false);

  const { register, watch, reset, handleSubmit } = useForm<Inputs>();
  const name = watch("name", "");
  const email = watch("email", "");
  const subject = watch("subject", "");
  const message = watch("message", "");

  const onSubmit: SubmitHandler<Inputs> = ({
    name,
    email,
    subject,
    message,
  }) => {
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE as string,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE as string,
        {
          name,
          email,
          subject,
          message,
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string,
      )
      .then(
        (result) => {
          setIsLoadingEmail(false);
          setSuccessSentEmail(true);
          reset();
          console.log("Success Sent Email!", result.text);
        },
        (error) => {
          setIsLoadingEmail(false);
          setErrorSentEmail(true);
          console.log("Error Sent Email!", error.text);
        },
      );
  };

  return (
    <main>
      <div
        id="contact"
        className="flex flex-col items-center bg-orange-50 p-6 md:p-12"
      >
        <h1 className="mb-1 text-3xl font-bold text-orange-main md:text-4xl">
          Get In Touch
        </h1>
        <p className="mb-4 text-center text-sm leading-tight text-orange-main md:text-lg md:leading-6">
          We provide our Coffee Beans in small and bulk quantity. <br /> Looking
          forward to collaborating with you!
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto flex w-full flex-col space-y-2 md:w-fit md:px-6"
        >
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
            <input
              {...register("name")}
              className="contact-input"
              type="text"
              placeholder="Name"
              autoComplete="off"
            />
            <input
              {...register("email")}
              className="contact-input"
              type="email"
              placeholder="Email"
              autoComplete="off"
            />
          </div>
          <input
            {...register("subject")}
            className="contact-input"
            type="text"
            placeholder="Subject"
            autoComplete="off"
          />
          <textarea
            {...register("message")}
            className="contact-input scrollbar-thin scrollbar-track-transparent scrollbar-thumb-orange-main/50"
            placeholder="Message"
            autoComplete="off"
          ></textarea>
          <button
            type="submit"
            className="button-main"
            disabled={
              !name.length ||
              !email.length ||
              !/\S+@\S+\.\S+/.test(email) ||
              !subject.length ||
              !message.length
            }
          >
            {isLoadingEmail ? (
              <ThreeDots
                height="36"
                width="36"
                radius="9"
                color="#fff"
                ariaLabel="three-dots-loading"
                wrapperStyle={{ justifyContent: "center" }}
                visible={true}
              />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
      {successSentEmail && (
        <SuccessEmailModal setSuccessSentEmail={setSuccessSentEmail} />
      )}
      {errorSentEmail && <ErrorModal setErrorSentEmail={setErrorSentEmail} />}
    </main>
  );
}
