import React, { useEffect, useState } from "react";
import patternBg from "../../../assets/images/login/pattern_bg.jpg";
import myAccountBg from "../../../assets/images/login/my_account_bg.png";
import { useLoginMutation } from "../../../features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
export default function LoginForm() {
  const [error, setError] = useState("");
  const [resLogin, { data, isLoading, error: loginError }] = useLoginMutation();
  console.log("Access Token:", data);

  const navigate = useNavigate();

  useEffect(() => {
    if (loginError?.data) {
      setError(loginError.data);
    }
    if (data?.data?.access?.token && data?.data?.user) {
      navigate("/");
    }
  }, [data, loginError, navigate]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    setError("");
    resLogin({
      email: formData.email,
      password: formData.password,
    });
  };

  return (
    <div
      className=" bg-cover bg-center"
      style={{ backgroundImage: `url(${patternBg})` }}
    >
      <div className="flex justify-center py-24 ">
        <div className="">
          <h1 className="text-center text-4xl font-bold ">
            <span className="text-loginColor">LOGIN </span>/ REGISTER
          </h1>

          <div
            className=" bg-cover bg-center bg-loginBg  md:w-[750px] w-full  mt-8"
            style={{ backgroundImage: `url(${myAccountBg})` }}
          >
            <div className="px-20 py-[83px]">
              <div className="pb-20">
                <p className="text-center text-black ">
                  Welcome TrendyCart Please Login Your{" "}
                  <span className="text-loginColor">Account</span>
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div className="">
                    <label className="text-black  text-sm">
                      USERNAME OR EMAIL ADDRESS *
                    </label>

                    <div className="pt-3">
                      <input
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="Type here"
                        className="input input-bordered-none  rounded-none w-full max-w"
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <label className="text-black  text-sm">PASSWORD *</label>
                    <div className="pt-3">
                      <input
                        {...register("password", { required: true })}
                        type="password"
                        placeholder="Type password"
                        className="input input-bordered-none  rounded-none w-full max-w"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="pt-6 flex  items-center ">
                      <input type="checkbox" className="checkbox w-4 h-4" />
                      <div>
                        <small className="text-sm text-black pl-2">
                          {" "}
                          Remember me
                        </small>
                      </div>
                    </div>

                    <div className="pt-6">
                      <small className="text-sm text-black pl-2 uppercase">
                        {" "}
                        FORGOT PASSWORD
                      </small>
                    </div>
                  </div>
                </div>
                <div className=" mt-8">
                  <button className="py-3 text-link bg-loginColor text-white w-32 flex justify-center items-center hover:bg-buttonHover">
                    LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
