import React, { useState } from "react";
import ReactDOM from "react-dom";
import sbrTeamVector from "../assets/images/sbrTeamVector.png";

export default function SbrTeamCard({ data, onClick }) {
  const [openRemoveModal, setOpenRemoveModal] = useState(false);
  return (
    <div className="bg-primary-white w-[244px] h-[329px] rounded-[10px] flex flex-col justify-around items-center relative p-4 border border-solid border-[#E3E3E3]">
      <p
        className={`text-[16px] font-semibold leading-[21.79px] font-['Open_Sans'] ${
          data.role === "admin" || data.role === "Admin"
            ? "text-secondary-purple"
            : data.role === "Executive"
            ? "text-primary-light"
            : "text-secondary-dark"
        }`}
      >
        {data.role.charAt(0).toUpperCase() + data.role.slice(1)}
      </p>
      <div className="w-[254.94px] h-[183.5px] flex flex-col justify-center items-center">
        <img
          className="w-[80px] h-[80px] rounded-full bg-[#E1E0E0]"
          src={data.role !== "Pending invite" ? data.profile_image : sbrTeamVector}
          alt={data.name}
        />
        <p className="text-h3 text-[#323232] font-semibold leading-[22px] font-montserrat mt-5">
          {data.name}
        </p>
        <p className="text-p text-secondary-dark font-semibold leading-[19px] font-['Open_Sans'] mt-2">
          {data.email}
        </p>
      </div>
      <button
        className="bg-secondary-purple text-primary-white w-[125px] h-[45px] rounded-[12.5px] font-['Cabin'] disabled:bg-[#C4C4C4] mb-3"
        // disabled={data.role === "Admin" || data.role === "admin"}
        onClick={() => {
          setOpenRemoveModal(true);
        }}
      >
        Remove
      </button>
      {/* <div className="bg-[#DFC8FF] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rotate-[40.28deg] absolute top-[20px] right-[-15px]">
        <p className="font-montserrat font-semibold text-[13px] text-secondary-purple p-2">
          Recently joined
        </p>
      </div> */}
      {openRemoveModal &&
        ReactDOM.createPortal(
          <React.Fragment>
            <div
              className="bg-[#7D719270] w-full h-full left-[0px] top-[-3px] z-10 fixed"
              onClick={() => setOpenRemoveModal(false)}
            ></div>
            <div
              className="w-pop-up h-pop-up rounded-[15px] bg-primary-background border border-solid border-[#C4C4C4] box-border shadow-[10px_16px_30px_rgba(0,0,0,0.25)] flex
    flex-col justify-around px-6 py-4 fixed top-[40%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-20"
            >
              <header className="flex items-center justify-between">
                <h2 className="text-secondary-purple text-h3 leading-[24px] not-italic font-medium font-montserrat w-[422px] h-[24px] items-center">
                  Remove User
                </h2>
                <svg
                  className="relative bottom-2 cursor-pointer"
                  onClick={() => setOpenRemoveModal(false)}
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
              <div className="flex flex-col justify-around">
                <h4 className="text-heading-false text-[16px] leading-[20px] not-italic font-medium font-montserrat w-[437px] h-[20px] mb-6">
                  Are you sure you would like to remove this user?
                </h4>
                <p className="text-[#00000080] text-[16px] leading-[24px] not-italic font-normal w-[466px] h-[99px] font-['Open_Sans']">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
                  utvest-ibulum bibendum egestas. Enim mi arcu convallis enim
                  purus interdum. Ut neque at adipiscing tortor facilisis
                  sagittis libero.Ac bibendum vel blandit.
                </p>
              </div>
              <footer className="flex justify-end">
                <button
                  className="text-primary-white w-[150px] h-[54px] bg-secondary-purple rounded-[10px] font-['Open_Sans']"
                  onClick={() => {
                    onClick(data.id);
                    setOpenRemoveModal(false);
                  }}
                >
                  okay
                </button>
              </footer>
            </div>
          </React.Fragment>,
          document.querySelector("body")
        )}
    </div>
  );
}
