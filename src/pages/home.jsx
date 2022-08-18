import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Page } from "../components";
import FeedImageSmall from "../assets/images/feedImage-sm.png";
import Administartor from "../assets/images/admin.png";

import GenderDistributionChart from "./dashboard/genderDistributionChart";
import BarChartCountry from "./dashboard/barChartCountry";
import { ADMIN_PROFILE } from "../constant/routes";

const hastags = [
  "# Hastags",
  "# Hastags",
  "# Hastags",
  "# Hastags",
  "# Hastags",
  "# Hastags",
  "# Hastags",
  "# Hastags",
  "# Hastags",
  "# Hastags",
  "# Hastags",
  "# Hastags",
  "# Hastags",
  "# Hastags",
  "# Hastags",
  "# Hastags",
];

export default function Home() {
  const [modals, setModals] = useState({
    expandedMenu: true,
  });

  const [selectOption,setSelectOption] = useState("days")

  return (
    <Page active="HOME">
      <div className="flex justify-between">
        <div className="w-3/4">
          <div className="">
            <h1 className="text-heading text-h1 font-medium text-left font-montserrat">
              At a glance
            </h1>
            <h1 className="text-heading text-laptop-h3 font-medium text-left font-montserrat">
              Hello Chris, Welcome back
            </h1>
          </div>
          <div className="flex mb-3 justify-end">
            <div className="flex bg-primary-white border border-solid border-[#EBEBEB] rounded-[10px] px-1 py-1">
              <div className={` py-1 text-center font-montserrat text-p font-medium mr-1 rounded-[10px] w-[81px] ${selectOption === "days" ? "border-1 bg-secondary-purple text-primary-white " : "text-[#323232]"}`} onClick={() => setSelectOption("days")}>
                30 Days
              </div>
              <div className={` py-1 text-center font-montserrat text-p font-medium mr-1 rounded-[10px] w-[81px] ${selectOption === "years" ? "border-1 bg-secondary-purple text-primary-white " : "text-[#323232]"}`} onClick={() => setSelectOption("years")}>This Year</div>
              <div className={` py-1 text-center font-montserrat text-p font-medium mr-1 rounded-[10px] w-[81px] ${selectOption === "all" ? "border-1 bg-secondary-purple text-primary-white " : "text-[#323232]"}`} onClick={() => setSelectOption("all")}>All Time</div>
            </div>
          </div>
          <div className="w-full flex gap-x-2 justify-between mb-5">
            <div className="w-[194px] border-2 relative h-[109px] rounded-xl">
              <p className="text-h4 font-small font-montserrat absolute left-[25px] top-[15px] ">
                Users
              </p>
              <svg
                className="absolute top-[20px] left-[20px]"
                width="118"
                height="73"
                viewBox="0 0 118 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_468_763)">
                  <path
                    d="M4.95786 64.5557L14.2193 53.4886C15.1618 52.3623 16.4846 51.6208 17.9372 51.4046L28.6151 49.8151C29.9788 49.6122 31.231 48.9457 32.161 47.9279L36.2175 43.4885C37.5632 42.0159 39.5529 41.3083 41.5262 41.6007L47.2619 42.4505C48.9077 42.6943 50.5807 42.2439 51.8816 41.2068L59.8184 34.8793C60.909 34.0098 62.2684 33.5475 63.663 33.5717L71.4149 33.7065C73.8814 33.7494 76.1228 32.2782 77.0647 29.9982L79.9127 23.1038C80.7371 21.108 82.5704 19.7091 84.713 19.441L92.2831 18.4935C94.1679 18.2577 95.8296 17.1432 96.7632 15.489L101.057 7.88058C101.662 6.80846 102.583 5.94842 103.693 5.41712L113.081 0.92593"
                    stroke="#F8BD7A"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_468_763"
                    x="0.574219"
                    y="0.474609"
                    width="116.723"
                    height="72.4023"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_468_763"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_468_763"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p className="text-[30px] font-medium font-montserrat absolute right-[20px] bottom-[5px] ">
                342
              </p>
            </div>
            <div className="w-[194px] border-2 relative h-[109px] rounded-xl">
              <p className="text-h4 font-small font-montserrat absolute left-[25px] top-[15px] ">
                Posts
              </p>
              <svg
                className="absolute top-[20px] left-[20px]"
                width="118"
                height="73"
                viewBox="0 0 118 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_468_763)">
                  <path
                    d="M4.95786 64.5557L14.2193 53.4886C15.1618 52.3623 16.4846 51.6208 17.9372 51.4046L28.6151 49.8151C29.9788 49.6122 31.231 48.9457 32.161 47.9279L36.2175 43.4885C37.5632 42.0159 39.5529 41.3083 41.5262 41.6007L47.2619 42.4505C48.9077 42.6943 50.5807 42.2439 51.8816 41.2068L59.8184 34.8793C60.909 34.0098 62.2684 33.5475 63.663 33.5717L71.4149 33.7065C73.8814 33.7494 76.1228 32.2782 77.0647 29.9982L79.9127 23.1038C80.7371 21.108 82.5704 19.7091 84.713 19.441L92.2831 18.4935C94.1679 18.2577 95.8296 17.1432 96.7632 15.489L101.057 7.88058C101.662 6.80846 102.583 5.94842 103.693 5.41712L113.081 0.92593"
                    stroke="#F8BD7A"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_468_763"
                    x="0.574219"
                    y="0.474609"
                    width="116.723"
                    height="72.4023"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_468_763"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_468_763"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p className="text-[30px] font-medium font-montserrat absolute right-[20px] bottom-[5px] ">
                342
              </p>
            </div>
            <div className="w-[194px] border-2 relative h-[109px] rounded-xl">
              <p className="text-h4 font-small font-montserrat absolute left-[25px] top-[15px] ">
                Title
              </p>
              <svg
                className="absolute top-[20px] left-[20px]"
                width="118"
                height="73"
                viewBox="0 0 118 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_468_763)">
                  <path
                    d="M4.95786 64.5557L14.2193 53.4886C15.1618 52.3623 16.4846 51.6208 17.9372 51.4046L28.6151 49.8151C29.9788 49.6122 31.231 48.9457 32.161 47.9279L36.2175 43.4885C37.5632 42.0159 39.5529 41.3083 41.5262 41.6007L47.2619 42.4505C48.9077 42.6943 50.5807 42.2439 51.8816 41.2068L59.8184 34.8793C60.909 34.0098 62.2684 33.5475 63.663 33.5717L71.4149 33.7065C73.8814 33.7494 76.1228 32.2782 77.0647 29.9982L79.9127 23.1038C80.7371 21.108 82.5704 19.7091 84.713 19.441L92.2831 18.4935C94.1679 18.2577 95.8296 17.1432 96.7632 15.489L101.057 7.88058C101.662 6.80846 102.583 5.94842 103.693 5.41712L113.081 0.92593"
                    stroke="#F8BD7A"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_468_763"
                    x="0.574219"
                    y="0.474609"
                    width="116.723"
                    height="72.4023"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_468_763"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_468_763"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p className="text-[30px] font-medium font-montserrat absolute right-[20px] bottom-[5px] ">
                342
              </p>
            </div>
            <div className="w-[194px] border-2 relative h-[109px] rounded-xl">
              <p className="text-h4 font-small font-montserrat absolute left-[25px] top-[15px] ">
                Title
              </p>
              <svg
                className="absolute top-[20px] left-[20px]"
                width="118"
                height="73"
                viewBox="0 0 118 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_468_763)">
                  <path
                    d="M4.95786 64.5557L14.2193 53.4886C15.1618 52.3623 16.4846 51.6208 17.9372 51.4046L28.6151 49.8151C29.9788 49.6122 31.231 48.9457 32.161 47.9279L36.2175 43.4885C37.5632 42.0159 39.5529 41.3083 41.5262 41.6007L47.2619 42.4505C48.9077 42.6943 50.5807 42.2439 51.8816 41.2068L59.8184 34.8793C60.909 34.0098 62.2684 33.5475 63.663 33.5717L71.4149 33.7065C73.8814 33.7494 76.1228 32.2782 77.0647 29.9982L79.9127 23.1038C80.7371 21.108 82.5704 19.7091 84.713 19.441L92.2831 18.4935C94.1679 18.2577 95.8296 17.1432 96.7632 15.489L101.057 7.88058C101.662 6.80846 102.583 5.94842 103.693 5.41712L113.081 0.92593"
                    stroke="#F8BD7A"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_468_763"
                    x="0.574219"
                    y="0.474609"
                    width="116.723"
                    height="72.4023"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_468_763"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_468_763"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <p className="text-[30px] font-medium font-montserrat absolute right-[20px] bottom-[5px] ">
                342
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-8 gap-4 mb-[70px]">
            <div className="col-span-1">
              {/* <div> */}
                {/* <h1 className="font-montserrat font-small text-h4 mb-3">
                  Platform Users
                </h1> */}
                {/* <div className="border-2 border-[#ebebeb] rounded"> */}
                  {/* <p className="font-[14px] font-small text-[#8c8c8c]">
                    November 15 - August 15
                  </p> */}
                  {/* <div className="">
                  <GenderDistributionChart />
                </div> */}
                {/* </div> */}
              {/* </div> */}

              <div>
                <h1 className="font-montserrat font-small text-h4 mb-3">
                  Trending Hashtags
                </h1>
                <div className="grid grid-cols-3 grid-rows-6 xl:grid-cols-4 xl:grid-rows-4 gap-4 place-items-start">
                  {hastags.map((h) => {
                    return (
                      <span className="w-[86px] px-2 py-1 text-center rounded-[5px] border border-solid border-[#F5BD7E] font-montserrat text-[12px]  text-primary-dark">
                        {h}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* <div className="col-span-1"> */}
              {/* <h1 className="font-montserrat font-small text-h4 mb-3">
                Top 25 influencers
              </h1> */}
              {/* <div className="border-2 border-[#ebebeb] rounded">
                
              </div> */}
            {/* </div> */}
            <div className="col-span-1">
              <h1 className="font-montserrat font-small text-h4 mb-3">
                Gender Distribution
              </h1>
              <div className="border-2 border-[#ebebeb] rounded">
                <p className="font-[14px] font-small text-[#8c8c8c] p-2">
                  November 15 - August 15
                </p>
                <div className="">
                  <GenderDistributionChart />
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <h1 className="font-montserrat font-small text-h4 mb-3">
                Top 5 countries
              </h1>
              <div className="border-2 border-[#ebebeb] rounded">
                {/* <p className="font-[14px] font-small text-[#8c8c8c]">
                  November 15 - August 15
                </p> */}
                <div className="">
                  <BarChartCountry />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[23%] xl:w-[20%] bg-[#ffffff] absolute top-0 right-0 min-h-screen">
          <div className="my-4 py-6 mx-4">
            <div>
              <input
                className="w-[100%] h-[35px] p-3 bg-primary-white border border-solid border-[#F0F0F0] rounded-[10px] font-medium text-[12px] text-[#BBB6B6] font-['Catamaran'] placeholder:text-[#BBB6B6]"
                placeholder="Search Dashboard"
              />
              <div className="flex items-center justify-around my-6">
                <RouterLink to={ADMIN_PROFILE}>
                  <div className="flex">
                    <img src={Administartor} alt="admin" />
                    <span className="ml-2">
                      <p className="font-['Open_Sans'] text-[12px] lg:text-p text-[#323232]">
                        Christina Minal
                      </p>
                      <p className="font-['Catamaran'] text-[12px] lg:text-p text-[#979797]">
                        administrator login
                      </p>
                    </span>
                  </div>
                </RouterLink>
                <svg
                  width="22"
                  height="25"
                  viewBox="0 0 22 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <rect width="22" height="25" fill="url(#pattern7)" />
                  <defs>
                    <pattern
                      id="pattern7"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image20"
                        transform="translate(0 0.06) scale(0.0111111 0.00977778)"
                      />
                    </pattern>
                    <image
                      id="image20"
                      width="90"
                      height="90"
                      xlinkHref="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <hr className="w-full"></hr>
            </div>
            <div className="py-7">
              <h3 className="font-montserrat text-[16px] xl:text-h3 text-[#323232]">
                Top 10 Trending Videos
              </h3>
              <div>
                {/*1st Card*/}
                <div className="flex py-4 my-1 border-b border-dashed">
                  <div className="w-[59px] h-[41px] rounded-[5px] bg-[#3B2F4F] relative flex justify-center">
                    {/* <video src="..." /> */}
                    <img
                      className="max-w-none"
                      src={FeedImageSmall}
                      alt="Feed"
                    />
                    <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.1372 4.68624C11.2886 5.46698 11.311 7.15554 10.1807 7.96653L4.19271 12.2631C2.87925 13.2055 1.04836 12.2811 1.02692 10.6646L0.915099 2.23184C0.893664 0.615393 2.6994 -0.357276 4.03738 0.550004L10.1372 4.68624Z"
                          fill="#6C3AC2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="font-['Open_Sans'] text-[10px] lg:text-[12px] xl:text-p text-[#5B5B5B] mb-1">
                      Video Caption goes here
                    </p>
                    <div className="flex justify-between">
                      <span className="flex items-center">
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.75004 8.38673L4.74851 8.3883C4.60355 8.53752 4.40378 8.53778 4.25823 8.38579L4.25824 8.38578L4.25597 8.38344L4.20649 8.33244L4.20566 8.33158C3.01551 7.11073 2.07079 6.13893 1.42449 5.23061C0.786314 4.33373 0.476642 3.54888 0.501376 2.70833C0.524437 1.97106 0.858732 1.28777 1.35973 0.901032L1.36 0.900822C2.27978 0.189808 3.43805 0.487974 4.10056 1.36715L4.49988 1.89706L4.89919 1.36715C5.56286 0.486442 6.72048 0.186251 7.63869 0.900003L7.64002 0.901032C8.14111 1.28784 8.47543 1.9713 8.49839 2.70871L8.4984 2.70906C8.52513 3.54898 8.21589 4.33347 7.57689 5.23199C6.93008 6.14147 5.98475 7.11527 4.79496 8.3409L4.79337 8.34254L4.75004 8.38673Z"
                            stroke="#666666"
                          />
                        </svg>

                        <p className="text-[12px] font-['Catamaran'] text-secondary-dark ml-[2px]">
                          8.9k
                        </p>
                      </span>
                      <span className="flex items-center">
                        <svg
                          width="11"
                          height="9"
                          viewBox="0 0 11 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.11204 7.18639C1.28524 6.7073 -0.28566 5.35386 0.0450567 3.77286C0.458452 1.7966 2.11199 0 5.62585 0C7.11318 0 8.45902 0.390337 9.34642 1.07796C10.1362 1.68996 10.7933 2.33558 11 3.05422V4.13218C10.9311 5.15025 10.0078 7.29419 6.86604 7.72537C4.04986 8.11187 3.45905 8.04607 3.5157 7.94202C3.00966 8.3695 1.88155 9.1226 1.0785 8.98299L2.11204 7.18639Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M2.11204 7.18639C1.28524 6.7073 -0.28566 5.35386 0.0450567 3.77286C0.458452 1.7966 2.11199 0 5.62585 0C7.11318 0 8.45902 0.390337 9.34642 1.07796C10.1362 1.68996 10.7933 2.33558 11 3.05422V4.13218C10.9311 5.15025 10.0078 7.29419 6.86604 7.72537C4.04986 8.11187 3.45905 8.04607 3.5157 7.94202C3.00966 8.3695 1.88155 9.1226 1.0785 8.98299L2.11204 7.18639Z"
                            fill="#979797"
                          />
                        </svg>

                        <p className="text-[12px] font-['Catamaran'] text-secondary-dark ml-[2px]">
                          8.9k
                        </p>
                      </span>
                      <span className="flex items-center">
                        <svg
                          width="13"
                          height="11"
                          viewBox="0 0 13 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <rect width="13" height="11" fill="url(#pattern12)" />
                          <defs>
                            <pattern
                              id="pattern12"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            >
                              <use
                                xlinkHref="#image0_468_1344"
                                transform="translate(0.0769231) scale(0.00940171 0.0111111)"
                              />
                            </pattern>
                            <image
                              id="image0_468_1344"
                              width="90"
                              height="90"
                              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAFyElEQVR4nO2cb4gUZRzHv7/d2731+qOud+cdpVFBFNnrBJXeCCIip2JG/8TDjnZmD6sLKoVq6JWh3cXmurtQrGVIbFBm0CYFQYW+KaT3lgbKFbGnYuitczO/XtxCZjOzszvPzOzOPR+4N88z8zzf+zD3zPM8M3OARCKRSCQSiUQikUgkEkl0oLADBEGlUknOzMy8zcw7ARjMfHRubm7fnj176kFliAXVUZjUarX9zPwigDSAASKaSCQSn+dyud6gMiwI0QB2WpRtDFL2QhG9zKZ8YyKR+KJcLqf8DrBQRDuxYXZ29rjfsqXoeXyXLUX/i6+ypej/4ptsKfr/+CJbirZGuGwp2h6hsqVoZ4TJlqKbI0S2FO0Oz7KlaPd4kt3V26SHDh1aFo/HH2TmewCsIKK7AawEcCeAxY2fJZjftRNFVdf1ra1usXaN6Hw+P0RE6wCsJqJHAKwCMBxSnJZld6zoycnJRX19feuZeTMzP0ZED4Sd6RZakt1Rosvlcqper48w81MA1gPoCztTE1zL7gjRhUJhFRFlGoKXhp2nRVzJDlV0qVRaa5rmqwA2hZ3FIydTqdSW0dHRWbsDQvnlSqXSo6ZpHgCwLoz+fcLxyu4JMkk+n18Rj8ffMU1zO7r7CrZiYyKR0ADstaoMRLSmabHBwcHniOggM98RRJ8hMYqwRJdKpZWmaR4DsMbvvjoA067C1yV4sVgcMU3zDBaGZDDzEbu6uE8d0tDQ0OsAiuj8ubAoqnNzc0q1WjWsKoXfkBqvX33AzM+IbruDaTqXFiq6Uqkka7VaBcCIyHY7nKZzaEDg0JHL5Xrr9foJzC8+FgpVXde3ZDKZpktwIbMOTdNiyWTyKDNvENFel3AylUptUxTF1aaSkFnH8uXL32Pmx0W01SVUdV0faTZc3IznMbpYLGaYueC1nS7C1Zh8K55EN/YsvgeQ9NJOm9QBnCOiX5n5LDOfB3CFiC4DuMLMVwBcSiaTl3Vdrwnqs62nK4CHMXpycnKRYRgfEVEQkqeZ+TQRnQJwJhaLnZ2enr6gaZrtSuxmCgUhf3BtSwY8iE6lUm/5+NTjIoATzPwjEZ1SFOW8T/24xZNkoE3RjSHjpXY7teECgM+Y+cv+/v7vduzYYbnCCoGWZhd2tCw6l8v1mqZZhpg5+HUi+sQwjPdVVT1NRCygTZFUdV3f6lUy0IboZDKZYeaHPPZbAzBlGEZxfHy8BgDZbNZjk8LxPFzcTEui8/n87cy8z0N/V5l5PzPnstns3x7a8RuhkoEWRcdisRcADLbRDxPREcMw9mWz2T/aOD9IhEsGWhA9NTW1BMDLbfTxOxGNZTKZb9o4N2iE3PiscC06lUpl0PqrACeYeZeiKJdaPC8M2lrxucWVaE3TYgDGWmjXZObXFEU52IEzCSuEzS7scLWpNDAwsB7AfS7brAN4UlXVA90k2e/vwl2JJqLnXbZ3g4i2KYpS8ZDJD+z2OgKRDLgQffjw4aVEtNlFWwYzP5HJZL4SkEsozPyhRXFgkgF3V/QmAIlmBxHRK6qqHvceSTz9/f17AUxh/sr+k5kPBikZcLFNWigUPgWwvclhxxRFeVpMpGjieEU3/sVCs8dTF5l5XFykaOIoOpFIrAHg9AoXM/MuVVW7YZ4cKs3G6GZvGH2squq3osJEGUfRRLTWofoGM2uC80QWW9GapsWYebXDuUVVVX/zIVMksRU9PDx8L+Y/I7PC7OnpedefSNHEVrRhGA/b1RFRdWxs7Jw/kaKJrehYLGYr2jRNq5WWxAFb0aZp3m9TVe/t7f3apzyRxWnWcZdN+Q+7d+++6keYKGMruvFdtRU/+ZQl0jhd0YutConoZ5+yRBon0bfZlP/iR5Co4yTaco/j2rVrF3zKEmmcRP9lUXZxYmLiul9hoozTzfCoRbFVmcQFtk/B0+n0GzMzM2DmZ4F58el0+s3gokkkEolEIpFIJBKJRCKRSDqVfwDqRWo5Nyy79gAAAABJRU5ErkJggg=="
                            />
                          </defs>
                        </svg>
                        <p className="text-[12px] font-['Catamaran'] text-secondary-dark ml-[2px]">
                          8.9k
                        </p>
                      </span>
                      <span className="flex items-center">
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.76758 3.10006V1.2334H5.90091L7.76758 3.10006Z"
                            fill="#979797"
                          />
                          <path
                            d="M7.76758 1.2334V0.733398C8.04372 0.733398 8.26758 0.957256 8.26758 1.2334H7.76758ZM7.76758 3.10006H8.26758C8.26758 3.3023 8.14576 3.48461 7.95892 3.562C7.77208 3.6394 7.55702 3.59662 7.41402 3.45362L7.76758 3.10006ZM5.90091 1.2334L5.54736 1.58695C5.40436 1.44395 5.36158 1.22889 5.43897 1.04206C5.51636 0.85522 5.69868 0.733398 5.90091 0.733398V1.2334ZM7.1878 2.52029L1.5878 8.12028L0.880692 7.41318L6.48069 1.81318L7.1878 2.52029ZM8.26758 1.2334V3.10006H7.26758V1.2334H8.26758ZM7.41402 3.45362L5.54736 1.58695L6.25446 0.879845L8.12113 2.74651L7.41402 3.45362ZM5.90091 0.733398H7.76758V1.7334H5.90091V0.733398Z"
                            fill="#979797"
                          />
                        </svg>
                        <p className="text-[12px] font-['Catamaran'] text-secondary-dark ml-[2px]">
                          8.9k
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                {/*2nd Card*/}
                <div className="flex py-4 my-1 border-b border-dashed">
                  <div className="w-[59px] h-[41px] rounded-[5px] bg-[#3B2F4F] relative flex justify-center">
                    {/* <video src="..." /> */}
                    <img
                      className="max-w-none"
                      src={FeedImageSmall}
                      alt="Feed"
                    />
                    <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.1372 4.68624C11.2886 5.46698 11.311 7.15554 10.1807 7.96653L4.19271 12.2631C2.87925 13.2055 1.04836 12.2811 1.02692 10.6646L0.915099 2.23184C0.893664 0.615393 2.6994 -0.357276 4.03738 0.550004L10.1372 4.68624Z"
                          fill="#6C3AC2"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="font-['Open_Sans'] text-[10px] lg:text-[12px] xl:text-p text-[#5B5B5B] mb-1">
                      Video Caption goes here
                    </p>
                    <div className="flex justify-between">
                      <span className="flex items-center">
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.75004 8.38673L4.74851 8.3883C4.60355 8.53752 4.40378 8.53778 4.25823 8.38579L4.25824 8.38578L4.25597 8.38344L4.20649 8.33244L4.20566 8.33158C3.01551 7.11073 2.07079 6.13893 1.42449 5.23061C0.786314 4.33373 0.476642 3.54888 0.501376 2.70833C0.524437 1.97106 0.858732 1.28777 1.35973 0.901032L1.36 0.900822C2.27978 0.189808 3.43805 0.487974 4.10056 1.36715L4.49988 1.89706L4.89919 1.36715C5.56286 0.486442 6.72048 0.186251 7.63869 0.900003L7.64002 0.901032C8.14111 1.28784 8.47543 1.9713 8.49839 2.70871L8.4984 2.70906C8.52513 3.54898 8.21589 4.33347 7.57689 5.23199C6.93008 6.14147 5.98475 7.11527 4.79496 8.3409L4.79337 8.34254L4.75004 8.38673Z"
                            stroke="#666666"
                          />
                        </svg>

                        <p className="text-[12px] font-['Catamaran'] text-secondary-dark ml-[2px]">
                          8.9k
                        </p>
                      </span>
                      <span className="flex items-center">
                        <svg
                          width="11"
                          height="9"
                          viewBox="0 0 11 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.11204 7.18639C1.28524 6.7073 -0.28566 5.35386 0.0450567 3.77286C0.458452 1.7966 2.11199 0 5.62585 0C7.11318 0 8.45902 0.390337 9.34642 1.07796C10.1362 1.68996 10.7933 2.33558 11 3.05422V4.13218C10.9311 5.15025 10.0078 7.29419 6.86604 7.72537C4.04986 8.11187 3.45905 8.04607 3.5157 7.94202C3.00966 8.3695 1.88155 9.1226 1.0785 8.98299L2.11204 7.18639Z"
                            fill="#C4C4C4"
                          />
                          <path
                            d="M2.11204 7.18639C1.28524 6.7073 -0.28566 5.35386 0.0450567 3.77286C0.458452 1.7966 2.11199 0 5.62585 0C7.11318 0 8.45902 0.390337 9.34642 1.07796C10.1362 1.68996 10.7933 2.33558 11 3.05422V4.13218C10.9311 5.15025 10.0078 7.29419 6.86604 7.72537C4.04986 8.11187 3.45905 8.04607 3.5157 7.94202C3.00966 8.3695 1.88155 9.1226 1.0785 8.98299L2.11204 7.18639Z"
                            fill="#979797"
                          />
                        </svg>

                        <p className="text-[12px] font-['Catamaran'] text-secondary-dark ml-[2px]">
                          8.9k
                        </p>
                      </span>
                      <span className="flex items-center">
                        <svg
                          width="13"
                          height="11"
                          viewBox="0 0 13 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                          <rect width="13" height="11" fill="url(#pattern12)" />
                          <defs>
                            <pattern
                              id="pattern12"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            >
                              <use
                                xlinkHref="#image0_468_1344"
                                transform="translate(0.0769231) scale(0.00940171 0.0111111)"
                              />
                            </pattern>
                            <image
                              id="image0_468_1344"
                              width="90"
                              height="90"
                              xlinkHref="data:image/png;base64,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"
                            />
                          </defs>
                        </svg>
                        <p className="text-[12px] font-['Catamaran'] text-secondary-dark ml-[2px]">
                          8.9k
                        </p>
                      </span>
                      <span className="flex items-center">
                        <svg
                          width="9"
                          height="9"
                          viewBox="0 0 9 9"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.76758 3.10006V1.2334H5.90091L7.76758 3.10006Z"
                            fill="#979797"
                          />
                          <path
                            d="M7.76758 1.2334V0.733398C8.04372 0.733398 8.26758 0.957256 8.26758 1.2334H7.76758ZM7.76758 3.10006H8.26758C8.26758 3.3023 8.14576 3.48461 7.95892 3.562C7.77208 3.6394 7.55702 3.59662 7.41402 3.45362L7.76758 3.10006ZM5.90091 1.2334L5.54736 1.58695C5.40436 1.44395 5.36158 1.22889 5.43897 1.04206C5.51636 0.85522 5.69868 0.733398 5.90091 0.733398V1.2334ZM7.1878 2.52029L1.5878 8.12028L0.880692 7.41318L6.48069 1.81318L7.1878 2.52029ZM8.26758 1.2334V3.10006H7.26758V1.2334H8.26758ZM7.41402 3.45362L5.54736 1.58695L6.25446 0.879845L8.12113 2.74651L7.41402 3.45362ZM5.90091 0.733398H7.76758V1.7334H5.90091V0.733398Z"
                            fill="#979797"
                          />
                        </svg>
                        <p className="text-[12px] font-['Catamaran'] text-secondary-dark ml-[2px]">
                          8.9k
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="font-montserrat text-p lg:text-[16px] xl:text-h3 text-[#323232] p-2">
              View All
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
}
