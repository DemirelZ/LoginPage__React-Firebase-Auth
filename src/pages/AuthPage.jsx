import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [error, setError] = useState(true);
  const navigate = useNavigate();

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then(() => navigate("/userAccount"))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, errorCode);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (signUp) {
      createUserWithEmailAndPassword(auth, email, pass)
        .then(() => {
          toast.success("kullanıcı başarılı bir şekilde kaydedildi");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage, errorCode);
        });
    } else {
      signInWithEmailAndPassword(auth, email, pass)
        .then(() => {
          toast.success("kullanıcı başarılı bir şekilde giriş yaptı");
          navigate("/userAccount");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage, errorCode);
        });
    }
  };

  const resetPassword = () => {
    navigate('/resetPasswordPage')

   
  };

  return (
    <section className="h-screen grid place-items-center">
      <div className="bg-[#047857] flex flex-col gap-10 py-16 px-32 rounded-xl ">
        <h1 className="text-center font-bold text-xl">--Register or Log in--</h1>
        <button
          onClick={handleGoogle}
          className="flex items-center bg-white py-2 px-10 rounded-full text-black cursor-pointer gap-5 "
        >
          <img className="h-[20px]" src="./google-logo.svg" />
          <span className="whitespace-nowrap">Google ile giriş yap</span>
        </button>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <label>E-mail</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="text-black rounded mt-1 p-2 outline-none shadow-lg focus:shadow-[gray]"
            type="email"
            required
          />

          <label className="mt-5">Password</label>
          <input
            onChange={(e) => setPass(e.target.value)}
            className="text-black rounded mt-1 p-2 outline-none shadow-lg focus:shadow-[gray]"
            type="password"
            required
          />
          {error && (
            <div>
              <p
                onClick={resetPassword}
                className="text-red-500 float-right font-bold cursor-pointer mt-4"
              >
                Forgot Password?
              </p>
            </div>
          )}


          <div className="flex flex-col items-center  ">
            <button className="bg-white w-full text-black mt-10 rounded-full p-1 font-bold transition hover:bg-gray-300">
              {signUp ? "Kaydol" : " Giriş Yap"}
            </button>

            <p className="mt-4 flex gap-4 ">
              <span className="text-black ">
                {signUp ? "Hesabınız varsa" : "Hesabınız yoksa"}
              </span>
              <span
                className="cursor-pointer text-blue-900 text-xl underline hover:text-white"
                onClick={() => setSignUp(!signUp)}
              >
                {signUp ? "Giriş Yapın" : "Kaydolun"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AuthPage;
