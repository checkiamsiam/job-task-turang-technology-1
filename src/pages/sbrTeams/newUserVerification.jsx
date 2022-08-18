import { useState, useRef } from "react";
import Input from "../../components/form/input";
import { BtnBlock } from "../../components";
import { Link as RouterLink } from "react-router-dom";
import * as ROUTES from "../../constant/routes";
import login_logo from "../../assets/images/login/login_logo.png";

export default function NewUserVerification() {
  const [showPassword, setShowPassword] = useState(false);
  const [changedPassword, setChangedPassword] = useState(false);
  const [adddedImage, setAddedImage] = useState(false);
  const [image, setImage] = useState();

  const imagePickerRef = useRef();

  const setImageDataHandler = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const selectImageHandler = () => {
    imagePickerRef.current.click();
  };

  let form = (
    <form
      className="flex justify-between flex-col md:w-[300px] xl:w-354 h-100"
      onSubmit={(e) => {
        e.preventDefault();
        setChangedPassword(true);
      }}
    >
      <div className="w-[450px] mb-6">
        <h2 className=" mb-[10px] md:text-tablet-h1 lg:text-laptop-h1 xl:text-h2 text-primary-light font-semibold ">
          Welcome to heartz
        </h2>
        <p className="text-primary-white text-p font font-medium font-montserrat">
          Lorem ipsum dolor sit amet, consectetur adipicing elit
        </p>
        <ul className="list-disc text-primary-white px-7 text-p font font-medium font-montserrat">
          <li>sed do eiusmod </li>
          <li>temporary is</li>
          <li>incididunt ut laboreet</li>
          <li>dolore magna aliqua. fsdfsf</li>
        </ul>
      </div>
      <Input
        label="Enter New Password"
        type={showPassword ? "text" : "password"}
        placeholder="Enter new Password"
        name="new password"
        required
      />
      <div className="relative mt-[20px]">
        <Input
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          name="confirm password"
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
      <div className="flex flex-col mt-[40px]">
        <BtnBlock>Reset</BtnBlock>
        <RouterLink
          className="text-h4 mb-5 text-primary-white text-right font-semibold"
          to={ROUTES.LOG_IN}
        >
          Or Continue to login
        </RouterLink>
      </div>
    </form>
  );

  let upload = (
    <div className="flex flex-col items-center h-100">
      <h1 className="text-tertiary-yellow font-semibold text-[32px] font-montserrat">
        Upload a Profile picture
      </h1>
      <div className="flex flex-col items-center mt-5 mb-8">
        {image ? (
          <img
            className="w-[254px] h-[254px] rounded-full p-2 bg-primary-white"
            src={image}
            alt="preview"
          />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="254"
            height="254"
            viewBox="0 0 254 254"
            fill="none"
          >
            <g filter="url(#filter0_d_1935_12742)">
              <circle cx="127" cy="127" r="117" fill="white" />
              <circle cx="127" cy="127" r="117" stroke="#EDEDED" />
            </g>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M100.577 100.662C100.577 85.0618 112.822 72.8047 128.407 72.8047C143.992 72.8047 156.238 85.0618 156.238 100.662C156.238 116.262 143.992 128.519 128.407 128.519C112.822 128.519 100.577 116.262 100.577 100.662ZM178.502 167.519V178.662C178.502 182.005 176.276 184.233 172.936 184.233C169.596 184.233 167.37 182.005 167.37 178.662V167.519C167.37 158.048 160.134 150.805 150.672 150.805H106.143C96.6806 150.805 89.4447 158.048 89.4447 167.519V178.662C89.4447 182.005 87.2182 184.233 83.8786 184.233C80.5389 184.233 78.3125 182.005 78.3125 178.662V167.519C78.3125 151.919 90.5579 139.662 106.143 139.662H150.672C166.257 139.662 178.502 151.919 178.502 167.519ZM128.407 117.376C118.945 117.376 111.709 110.133 111.709 100.662C111.709 91.1904 118.945 83.9475 128.407 83.9475C137.87 83.9475 145.106 91.1904 145.106 100.662C145.106 110.133 137.87 117.376 128.407 117.376Z"
              fill="black"
            />
            <mask
              id="mask0_1935_12742"
              maskUnits="userSpaceOnUse"
              x="78"
              y="72"
              width="101"
              height="113"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M100.577 100.662C100.577 85.0618 112.822 72.8047 128.407 72.8047C143.992 72.8047 156.238 85.0618 156.238 100.662C156.238 116.262 143.992 128.519 128.407 128.519C112.822 128.519 100.577 116.262 100.577 100.662ZM178.502 167.519V178.662C178.502 182.005 176.276 184.233 172.936 184.233C169.596 184.233 167.37 182.005 167.37 178.662V167.519C167.37 158.048 160.134 150.805 150.672 150.805H106.143C96.6806 150.805 89.4447 158.048 89.4447 167.519V178.662C89.4447 182.005 87.2182 184.233 83.8786 184.233C80.5389 184.233 78.3125 182.005 78.3125 178.662V167.519C78.3125 151.919 90.5579 139.662 106.143 139.662H150.672C166.257 139.662 178.502 151.919 178.502 167.519ZM128.407 117.376C118.945 117.376 111.709 110.133 111.709 100.662C111.709 91.1904 118.945 83.9475 128.407 83.9475C137.87 83.9475 145.106 91.1904 145.106 100.662C145.106 110.133 137.87 117.376 128.407 117.376Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_1935_12742)">
              <rect
                x="61.6133"
                y="61.6621"
                width="133.586"
                height="133.714"
                fill="#6E6B7B"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1935_12742"
                x="0.928572"
                y="0.928572"
                width="252.143"
                height="252.143"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="4.28571" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1935_12742"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1935_12742"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        )}
        <input
          ref={imagePickerRef}
          style={{ display: "none" }}
          type="file"
          accept=".jpg,.png,.jpeg"
          onChange={setImageDataHandler}
        />
        <button
          className="text-primary-white underline underline-offset-4 my-4"
          onClick={selectImageHandler}
        >
          Add Photo/Change Photo
        </button>
      </div>
      <button
        className="w-[420px] h-[48px] rounded-[5px] text-primary-white bg-gradient-to-r from-[#FFCC6A] to-[#FF9B00]"
        onClick={() => setAddedImage(true)}
      >
        Skip and Continue
      </button>
    </div>
  );

  let updated = (
    <div className="flex flex-col  h-100">
      <h2 className="text-tertiary-yellow font-semibold text-h2 font-montserrat">
        Your account has been created
      </h2>
      <p className="text-[#BABABA] font-semibold text-p font-montserrat text-left my-5">
        Your profile has been successfully updated !!
      </p>
      <div className="flex flex-col items-center mt-10 mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="191"
          height="183"
          viewBox="0 0 191 183"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M182.708 91.4993V84.0368C182.708 79.0618 179.391 75.7452 174.416 75.7452C169.441 75.7452 166.124 79.0618 166.124 84.0368V91.4993C166.124 132.958 132.958 166.124 91.4993 166.124C50.041 166.124 16.8743 132.958 16.8743 91.4993C16.8743 50.041 50.041 16.8743 91.4993 16.8743C102.279 16.8743 112.229 19.3618 122.179 23.5077C126.324 25.166 131.299 23.5077 132.958 19.3618C134.616 15.216 132.958 10.241 128.812 8.58268C117.204 2.77852 103.937 0.291016 91.4993 0.291016C40.9202 0.291016 0.291016 40.9202 0.291016 91.4993C0.291016 142.079 40.9202 182.708 91.4993 182.708C142.079 182.708 182.708 142.079 182.708 91.4993ZM176.904 11.0702C180.22 7.75352 185.195 7.75352 188.512 11.0702C191.829 14.3868 191.829 19.3618 188.512 22.6785L97.3035 113.887C95.6452 115.545 93.1577 116.374 91.4993 116.374C89.841 116.374 87.3535 115.545 85.6952 113.887L60.8202 89.0118C57.5035 85.6952 57.5035 80.7202 60.8202 77.4035C64.1368 74.0868 69.1118 74.0868 72.4285 77.4035L91.4993 96.4743L176.904 11.0702Z"
            fill="#F8BD7A"
          />
        </svg>
      </div>
      <div className="flex flex-col mt-[35px] items-center">
        <RouterLink to={ROUTES.LOG_IN}>
          <BtnBlock>Continue to Login</BtnBlock>
        </RouterLink>
      </div>
    </div>
  );

  return (
    <div className="min-w-screen flex min-h-screen box-border ">
      <div className="w-2/4 bg-secondary-purple rounded-r-[20px] justify-center items-center border-r-8  border-r-tertiary-yellow border-solid hidden sm:flex">
        {!changedPassword ? form : !adddedImage ? upload : updated}
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
    </div>
  );
}
