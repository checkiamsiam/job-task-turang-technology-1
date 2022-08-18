import { useState, useEffect } from "react";
import Input from "../../components/form/input";
import { BtnBlock } from "../../components";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import * as ROUTES from "../../constant/routes";
import login_logo from "../../assets/images/login/login_logo.png";
import { handleLogin } from "../../assets/js/script";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  // login ..........

  const notify = (response) =>
    toast.warn(response, {
      position: "top-center",
    });

  const { setAuth } = useAuth();

  function handleChange({ target }) {
    const { name, value } = target;

    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  console.log(data);

  // Handle Submit

  async function handleSubmit(e) {
    setIsLoading(true)
    e.preventDefault();
    const { response } = await handleLogin(data);
    if (await response.status) {
      console.log("pikachu");
      setAuth(response.token);
    }
    notify(response.message);
    console.log(response);
    setIsLoading(false)
  }

  if(isLoading){
    return <Loader width="50" radius="20" dark={false}></Loader>
  }

  return (
    <div className="min-w-screen flex min-h-screen box-border ">
      <div className="w-2/4 bg-secondary-purple rounded-r-[20px] flex justify-center items-center border-r-8  border-r-tertiary-yellow border-solid hidden sm:flex">
        <form
          onSubmit={handleSubmit}
          className="flex justify-between flex-col md:w-[300px] xl:w-354 h-100 "
        >
          <h2 className=" mb-[20px] md:text-tablet-h1 lg:text-laptop-h1 xl:text-h2 text-primary-light font-semibold ">
            Welcome back
          </h2>
          <Input
            label="Email address"
            type="text"
            placeholder="Enter Email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
          />
          <div className="relative mt-[20px]">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              name="password"
              value={data.password}
              onChange={handleChange}
              required
            />
            <button
              className="absolute right-4 top-[60px]"
              onClick={(e) => {
                e.preventDefault();
                setShowPassword((prevState) => !prevState);
              }}
            >
              {showPassword ? (
                <svg
                  width="27"
                  height="12"
                  viewBox="0 0 27 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5465 5.99788C17.5465 7.58673 15.7315 8.87475 13.4927 8.87475C11.2538 8.87475 9.43889 7.58673 9.43889 5.99788C9.43889 4.40901 11.2538 3.12101 13.4927 3.12101C15.7315 3.121 17.5465 4.40903 17.5465 5.99788ZM13.5 0.0078125C11.1819 0.0154292 8.77919 0.433446 6.50466 1.23376C4.81586 1.85246 3.17003 2.72536 1.74137 3.80278C1.03968 4.35276 0.144698 5.14913 0 5.99881C0.0171 6.73483 1.08292 7.6433 1.74137 8.19486C3.08108 9.22996 4.68405 10.0785 6.50466 10.7645C8.62576 11.527 10.9735 11.966 13.5 11.9905C15.8203 11.9827 18.2225 11.5599 20.4945 10.7645C22.1833 10.1458 23.83 9.27228 25.2586 8.19486C25.9603 7.64488 26.8553 6.8485 27 5.99881C26.9829 5.2628 25.9171 4.3543 25.2586 3.80275C23.9189 2.76765 22.3151 1.91976 20.4945 1.23373C18.3745 0.471796 16.0209 0.0357958 13.5 0.0078125ZM13.4983 1.49528C17.011 1.49528 19.8585 3.51185 19.8585 5.99946C19.8585 8.48706 17.011 10.5036 13.4983 10.5036C9.98561 10.5036 7.1381 8.48705 7.1381 5.99946C7.1381 3.51185 9.98561 1.49528 13.4983 1.49528Z"
                    fill="#ADAAAA"
                  />
                </svg>
              ) : (
                <svg
                  width="27"
                  height="18"
                  viewBox="0 0 27 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.0689 3.55894C14.5538 3.51767 14.0305 3.49402 13.5 3.48814C11.1819 3.49575 8.77898 3.91342 6.50446 4.71374C4.81565 5.33244 3.17056 6.20589 1.74188 7.28331C1.04022 7.83331 0.144697 8.62968 0 9.47935C0.0171 10.2154 1.08344 11.1238 1.74188 11.6754C3.0816 12.7105 4.68385 13.559 6.50446 14.245C6.56633 14.2672 6.62843 14.2892 6.69067 14.3109L5.00155 16.4959L7.29666 17.5007L19.7035 1.50013L17.4943 0.5L15.0689 3.55894V3.55894ZM20.3077 4.65026L18.6218 6.81454C19.3974 7.56091 19.8578 8.48131 19.8578 9.47935C19.8578 11.967 17.011 13.9838 13.4983 13.9838C13.3465 13.9838 13.1993 13.9716 13.0501 13.9642L11.9344 15.3949C12.449 15.4357 12.9692 15.4654 13.5 15.4706C15.8202 15.4629 18.2218 15.0404 20.4939 14.245C22.1827 13.6263 23.8294 12.7528 25.2581 11.6754C25.9598 11.1254 26.8553 10.329 27 9.47935C26.9829 8.74333 25.9165 7.83486 25.2581 7.28329C23.9184 6.24819 22.3145 5.39974 20.4939 4.71371C20.4324 4.69164 20.3695 4.67179 20.3077 4.65026V4.65026ZM13.4984 4.97497C13.6524 4.97497 13.8052 4.97954 13.9565 4.98717L12.6497 6.66319C10.8156 6.93863 9.43945 8.09453 9.43945 9.47815C9.43945 9.82571 9.52587 10.1585 9.68499 10.4669C9.68517 10.4672 9.68481 10.4678 9.68499 10.4681L8.37486 12.149C7.59746 11.402 7.13889 10.4785 7.13889 9.47933C7.13891 6.99174 9.98568 4.97496 13.4984 4.97497V4.97497ZM17.3002 8.50889L14.3553 12.2882C16.1795 12.0076 17.5457 10.8569 17.5457 9.47815C17.5457 9.13691 17.4538 8.81249 17.3002 8.50889V8.50889Z"
                    fill="#ADAAAA"
                  />
                </svg>
              )}
            </button>
          </div>
          <RouterLink
            className="text-h4 mb-5 text-primary-white text-right font-semibold"
            to={ROUTES.FORGOT_PASSWORD}
          >
            Forgot Password ?
          </RouterLink>
          <BtnBlock>Login</BtnBlock>
        </form>
      </div>
      <div className=" w-full lg:w-2/5 h-full lg:h-screen justify-center items-center relative bg-primary-white flex">
        <div className="ml-[70px] bg-primary-white flex flex-col items-center w-11/12">
          <div className=" lg:w-4/6 xl:w-9/12">
            <img
              className=" px-3 lg:px-0 h-full block"
              src={login_logo}
              alt="login"
            />
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}
