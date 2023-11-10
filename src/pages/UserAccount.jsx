import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserAccount = () => {
  const [user, setUser] = useState();
  const navigate=useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      setUser(res);
    });
  }, []);

  const exitAccount = () => {
    
    signOut(auth)
      .then(() => {
        toast.success('successfully exited')
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, errorCode);
      });
  };

  console.log(user);

  return (
    <section className="w-1/2 mx-auto pt-[100px]">
      <div className="bg-[#044e78] flex flex-col gap-5 py-16 px-32 rounded-xl ">
        <h1 className="text-center font-bold text-2xl">
          --Welcome to your account--
        </h1>

        <div className="flex flex-col text-2xl mt-3">
          <span>Your e-mail:</span>
          <span className="font-bold mt-2">{user?.email}</span>
           
        </div>
        <button
          onClick={exitAccount}
          className="bg-white w-[100px] items-center  text-black mt-10 rounded-full p-1 font-bold transition hover:bg-gray-300"
        >
          {`<-- `}EXIT
        </button>
      </div>
    </section>
  );
};

export default UserAccount;
