import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

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
          navigate("");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage, errorCode);
        });
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <div className="bg-[#047857] flex flex-col gap-10 py-16 px-32 rounded-xl ">
        <h1 className="text-center font-bold text-xl">
          Hesabına giriş yap veya kaydol
        </h1>

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

          <div className="flex justify-center gap-4 font-bold text-xl">
            <button
              onClick={() => setSignUp(true)}
              className="bg-white text-black mt-10 rounded-full px-6 py-2 font-bold transition hover:bg-gray-300"
            >
              Kaydol
            </button>
            <button
              onClick={() => setSignUp(false)}
              className="bg-white text-black mt-10 rounded-full px-6 py-2 font-bold transition hover:bg-gray-300"
            >
              Giriş Yap
            </button>
          </div>

        </form>
        {error && (
          <p
            onClick={resetPassword}
            className="text-center text-red-500 cursor-pointer"
          >
            Şifrenizi mi unuttunuz?
          </p>
        )}
      </div>
    </section>
  );
};

export default AuthPage;
