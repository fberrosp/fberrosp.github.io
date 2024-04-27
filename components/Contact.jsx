import React from "react";
import {
  BsLinkedin,
  BsGithub,
  BsEnvelope,
  BsFileEarmarkText,
} from "react-icons/bs";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";

function ContactForm() {
  const [state, handleSubmit] = useForm("xeqwvaev");
  if (state.succeeded) {
    return (
      <div className="w-full py-2 text-center align-middle">
        <h2>Thanks for your submission!</h2>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Name</label>
        <input
          className="border-2 rounded-lg p-3 flex borded-gray-300"
          type="text"
          name="name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Email</label>
        <input
          className="border-2 rounded-lg p-3 flex borded-gray-300"
          type="email"
          name="email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="flex flex-col py-2">
        <label className="uppercase text-sm py-2">Message</label>
        <textarea
          className="border-2 rounded-lg p-3 border-gray-300"
          rows="10"
          name="message"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <div
        className="g-recaptcha"
        data-sitekey="6LcYo6AlAAAAACYZefAvgMx5mAEzRtcCPt-d8DDu"
      ></div>
      <br />
      <button className="btn-custom w-full" disabled={state.submitting}>
        Send Message
      </button>
    </form>
  );
}

export const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 pt-16 w-full">
        <h2 className="py-8">Contact</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/typing.jpg"
                ></img>
              </div>
              <div>
                <h2 className="py-2">Fernando Berrospi</h2>
                <p>Software Engineer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk!
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <Link
                    href="https://www.linkedin.com/in/fberrosp/"
                    target="_blank"
                    className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <BsLinkedin />
                  </Link>
                  <Link
                    href="https://github.com/fberrosp"
                    target="_blank"
                    className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <BsGithub />
                  </Link>
                  <Link
                    href="mailto:fberrosp@gmail.com"
                    target="_blank"
                    className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <BsEnvelope />
                  </Link>
                  <Link
                    href="../assets/resume/FernandoBerrospi.pdf"
                    target="_blank"
                    className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                  >
                    <BsFileEarmarkText />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-lg shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
