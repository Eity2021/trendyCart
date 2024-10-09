import React, { useEffect, useState } from "react";
import patternBg from "../../../assets/images/login/pattern_bg.jpg";
import myAccountBg from "../../../assets/images/login/my_account_bg.png";
import SocialAuth from "../login/SocialAuth";
import { useForm } from "react-hook-form";
import { useRegisterMutation } from "../../../features/auth/authApi";
import { useNavigate } from "react-router-dom";
export default function RegistrationForm() {
  const [error, setError] = useState("");
  const [resRegister, { data, isLoading, error: loginError }] =
    useRegisterMutation();
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
    resRegister({
      firstName: formData.firstName,
      lastName: formData.lastName,
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
          <h1 className="text-center text-4xl font-bold">
            LOGIN / <span className="text-loginColor">REGISTER</span>
          </h1>

          <div
            className=" bg-cover bg-center bg-loginBg  [750px] w-full  mt-8"
            style={{ backgroundImage: `url(${myAccountBg})` }}
          >
            <div className="px-20 py-8">
              <SocialAuth></SocialAuth>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:px -0 px-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="">
                      <label className="text-black  text-sm">
                        FIRST NAME *
                      </label>

                      <div className="pt-2">
                        <input
                          {...register("firstName", { required: true })}
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered-none  rounded-none w-full max-w"
                        />
                      </div>
                    </div>
                    <div className="">
                      <label className="text-black  text-sm">LAST NAME *</label>

                      <div className="pt-2">
                        <input
                          {...register("lastName", { required: true })}
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered-none  rounded-none w-full max-w"
                        />
                      </div>
                    </div>
                  </div>

                  <div className=" mb-2">
                    <label className="text-black  text-sm">
                      EMAIL ADDRESS *
                    </label>

                    <div className="pt-2">
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
                    <div className="pt-2">
                      <input
                        {...register("password", { required: true })}
                        type="password"
                        placeholder="Type password"
                        className="input input-bordered-none  rounded-none w-full max-w"
                      />
                    </div>
                  </div>
                </div>
                <div className=" mt-8 lg:px -0 px-4">
                  <button
                    type="submit"
                    className="py-3 text-link bg-loginColor text-white w-32 flex justify-center items-center hover:bg-buttonHover"
                  >
                    SIGN UP
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
