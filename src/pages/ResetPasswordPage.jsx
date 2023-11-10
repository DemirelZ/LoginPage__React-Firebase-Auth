import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/config";

const ResetPasswordPage = () => {
  const [passforEmail, setPassForEmail] = useState("");

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, passforEmail).then(() =>
      toast.info("password reset link sent to your email")
    );
  };

  return (
    <section className="w-1/2 mx-auto pt-[100px]">
      <div className="bg-[#780c04] flex flex-col gap-5 py-16 px-32 rounded-xl ">
        <h1 className="text-center font-bold text-xl">--Reset your e-mail--</h1>

        <div className="flex flex-col text-xl ">
          <form onSubmit={handleResetPassword} className="flex flex-col">
            <label>E-mail</label>
            <input
              onChange={(e) => setPassForEmail(e.target.value)}
              className="text-black rounded mt-1 p-2 outline-none shadow-lg focus:shadow-[gray]"
              placeholder="write your e-mail"
              type="email"
              required
            />
            <button className="bg-white w-full text-black mt-10 rounded-full p-1 font-bold transition hover:bg-gray-300">
              Send E-mail
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordPage;
