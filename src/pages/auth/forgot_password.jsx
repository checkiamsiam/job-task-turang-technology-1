import React, { useState } from "react";
import ReactDOM from "react-dom";
import Input from "../../components/form/input";
import { BtnBlock } from "../../components";
import { useNavigate } from "react-router-dom";
import * as ROUTES from "../../constant/routes";
import login_logo from "../../assets/images/login/login_logo.png";

export default function ForgotPassword() {
  const router = useNavigate();
  const [openPasswordSentModal,setOpenPasswordSentModal] = useState(false);

  return (
    <div className="min-w-screen flex min-h-screen box-border ">
      <div className="w-2/4 bg-secondary-purple rounded-r-[20px] flex justify-center items-center border-r-8  border-r-tertiary-yellow border-solid hidden sm:flex">
        <form className="flex justify-between flex-col md:w-[300px] xl:w-354 h-100 ">
          <h2 className=" mb-[20px] md:text-tablet-h1 lg:text-laptop-h1 xl:text-h2 text-primary-light font-semibold ">
            Forgot Password ?
          </h2>
          <p className=" mb-[24px] md:text-tablet-p lg:text-laptop-p xl:text-p text-primary-white ">
            A link will be sent to the registered email ID.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <Input
            label="Email address"
            type="text"
            placeholder="Enter your email address"
            name="email"
            required
          />
          <div className="relative mt-[20px] pt-[20px]"></div>
          <BtnBlock
            onClick={(e) => {
              setOpenPasswordSentModal(true);
              e.preventDefault();
            }}
          >
            Continue
          </BtnBlock>
          {openPasswordSentModal &&
            ReactDOM.createPortal(
              <React.Fragment>
                <div
                  className="bg-[#7D719270] w-full h-full left-[0px] top-[-3px] z-10 fixed"
                  onClick={() => setOpenPasswordSentModal(false)}
                ></div>
                <div
                  className="w-pop-up h-pop-up rounded-[15px] bg-primary-background border border-solid border-[#C4C4C4] box-border shadow-[10px_16px_30px_rgba(0,0,0,0.25)] flex
    flex-col justify-around px-6 py-4 fixed top-[40%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-20"
                >
                  <header className="flex items-center justify-between">
                    <h2 className="text-secondary-purple text-h3 leading-[24px] not-italic font-bold font-montserrat w-[422px] h-[24px] items-center">
                      A Link has been successfully sent to you
                    </h2>
                    <svg
                      className="relative bottom-2 cursor-pointer"
                      onClick={() => setOpenPasswordSentModal(false)}
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                    >
                      <path
                        d="M11.2181 12.8184C10.948 13.0885 10.5817 13.2402 10.1999 13.2402C9.81796 13.2402 9.4517 13.0885 9.18165 12.8184L6.00045 9.18245L2.81925 12.8172C2.68594 12.9528 2.52712 13.0605 2.35194 13.1343C2.17677 13.2082 1.98871 13.2466 1.79863 13.2473C1.60854 13.2481 1.42018 13.2112 1.24441 13.1388C1.06864 13.0665 0.908943 12.96 0.774529 12.8256C0.640115 12.6912 0.533644 12.5315 0.461257 12.3557C0.38887 12.1799 0.352 11.9916 0.352774 11.8015C0.353548 11.6114 0.391951 11.4233 0.465766 11.2482C0.539582 11.073 0.64735 10.9142 0.782855 10.7808L4.09245 7.00085L0.781655 3.21845C0.646151 3.08513 0.538382 2.92631 0.464567 2.75113C0.390751 2.57596 0.352348 2.38791 0.351574 2.19782C0.3508 2.00773 0.38767 1.81937 0.460057 1.6436C0.532444 1.46783 0.638915 1.30813 0.773329 1.17372C0.907743 1.03931 1.06744 0.932834 1.24321 0.860448C1.41898 0.788061 1.60734 0.751191 1.79743 0.751965C1.98751 0.752739 2.17557 0.791141 2.35074 0.864957C2.52592 0.938773 2.68474 1.04654 2.81806 1.18205L6.00045 4.81925L9.18165 1.18205C9.31497 1.04654 9.47379 0.938773 9.64897 0.864957C9.82414 0.791141 10.0122 0.752739 10.2023 0.751965C10.3924 0.751191 10.5807 0.788061 10.7565 0.860448C10.9323 0.932834 11.092 1.03931 11.2264 1.17372C11.3608 1.30813 11.4673 1.46783 11.5397 1.6436C11.612 1.81937 11.6489 2.00773 11.6481 2.19782C11.6474 2.38791 11.609 2.57596 11.5351 2.75113C11.4613 2.92631 11.3536 3.08513 11.2181 3.21845L7.90846 7.00085L11.2181 10.7808C11.3519 10.9146 11.4582 11.0734 11.5306 11.2482C11.6031 11.423 11.6404 11.6104 11.6404 11.7996C11.6404 11.9889 11.6031 12.1763 11.5306 12.3511C11.4582 12.5259 11.3519 12.6847 11.2181 12.8184Z"
                        fill="black"
                        fillOpacity="0.53"
                      />
                    </svg>
                  </header>
                  <div className="flex flex-col justify-around items-center">
                    <svg
                      width="107"
                      height="107"
                      viewBox="0 0 107 107"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M102.542 53.4997V49.4872C102.542 46.8122 100.759 45.0288 98.084 45.0288C95.409 45.0288 93.6256 46.8122 93.6256 49.4872V53.4997C93.6256 75.7913 75.7923 93.6247 53.5006 93.6247C31.209 93.6247 13.3757 75.7913 13.3757 53.4997C13.3757 31.208 31.209 13.3747 53.5006 13.3747C59.2965 13.3747 64.6465 14.7122 69.9965 16.9413C72.2256 17.833 74.9006 16.9413 75.7923 14.7122C76.684 12.483 75.7923 9.80801 73.5631 8.91634C67.3215 5.79551 60.1881 4.45801 53.5006 4.45801C26.3048 4.45801 4.45898 26.3038 4.45898 53.4997C4.45898 80.6955 26.3048 102.541 53.5006 102.541C80.6965 102.541 102.542 80.6955 102.542 53.4997ZM99.4215 10.2538C101.205 8.47051 103.88 8.47051 105.663 10.2538C107.446 12.0372 107.446 14.7122 105.663 16.4955L56.6215 65.5372C55.7298 66.4288 54.3923 66.8747 53.5006 66.8747C52.609 66.8747 51.2715 66.4288 50.3798 65.5372L37.0048 52.1622C35.2215 50.3788 35.2215 47.7038 37.0048 45.9205C38.7882 44.1372 41.4632 44.1372 43.2465 45.9205L53.5006 56.1747L99.4215 10.2538Z"
                        fill="#FFAC3F"
                      />
                      <mask
                        id="mask0_4445_12828"
                        maskUnits="userSpaceOnUse"
                        x="4"
                        y="4"
                        width="103"
                        height="99"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M102.542 53.4997V49.4872C102.542 46.8122 100.759 45.0288 98.084 45.0288C95.409 45.0288 93.6256 46.8122 93.6256 49.4872V53.4997C93.6256 75.7913 75.7923 93.6247 53.5006 93.6247C31.209 93.6247 13.3757 75.7913 13.3757 53.4997C13.3757 31.208 31.209 13.3747 53.5006 13.3747C59.2965 13.3747 64.6465 14.7122 69.9965 16.9413C72.2256 17.833 74.9006 16.9413 75.7923 14.7122C76.684 12.483 75.7923 9.80801 73.5631 8.91634C67.3215 5.79551 60.1881 4.45801 53.5006 4.45801C26.3048 4.45801 4.45898 26.3038 4.45898 53.4997C4.45898 80.6955 26.3048 102.541 53.5006 102.541C80.6965 102.541 102.542 80.6955 102.542 53.4997ZM99.4215 10.2538C101.205 8.47051 103.88 8.47051 105.663 10.2538C107.446 12.0372 107.446 14.7122 105.663 16.4955L56.6215 65.5372C55.7298 66.4288 54.3923 66.8747 53.5006 66.8747C52.609 66.8747 51.2715 66.4288 50.3798 65.5372L37.0048 52.1622C35.2215 50.3788 35.2215 47.7038 37.0048 45.9205C38.7882 44.1372 41.4632 44.1372 43.2465 45.9205L53.5006 56.1747L99.4215 10.2538Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_4445_12828)">
                        <rect width="107" height="107" fill="#F9BF7A" />
                      </g>
                    </svg>
                    <p className="text-[#00000080] text-[16px] leading-[24px] not-italic font-normal font-['Open_Sans'] mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Eget utvest-ibulum bibendum egestas.
                    </p>
                  </div>
                  <footer className="flex justify-end">
                    <button
                      className="text-[#171617] w-[120px] h-[45px] lg:w-[135px] lg:h-[50px] xl:w-[150px] xl:h-[54px] bg-[#FFFFFF] rounded-[15px] font-bold not-italic text-[16px] leading-[22px] box-border border border-solid border-[#CACACA] mr-4 font-['Cabin']"
                      onClick={() => setOpenPasswordSentModal(false)}
                    >
                      Back
                    </button>
                    <button
                      className="text-primary-white w-[120px] h-[45px] lg:w-[135px] lg:h-[50px] xl:w-[150px] xl:h-[54px] bg-secondary-purple rounded-[15px] font-bold not-italic text-[16px] leading-[22px] font-['Cabin']"
                      onClick={() => {
                        setOpenPasswordSentModal(false);
                        router(ROUTES.RESET_PASSWORD)
                      }}
                    >
                      Resend code
                    </button>
                  </footer>
                </div>
              </React.Fragment>,
              document.querySelector("body")
            )}
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
    </div>
  );
}
