import React, { useState, useEffect,useRef } from "react";
import ReactDOM from "react-dom";
import { Page } from "../../components";
import FeedImage from "../../assets/images/feedImage.png";
import FeedImageLarge from "../../assets/images/feedImage-lg.png";
import ProfileImage from "../../assets/images/profile.png";

const Data = [
  {
    id: 1,
    image: FeedImage,
    time: "3 hours ago",
    content:
      "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Fusce vel felis nisi.In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 171,
    forwarded: 5,
  },
  {
    id: 2,
    image: FeedImage,
    time: "3 hours ago",
    content:
      "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Fusce vel felis nisi.In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 171,
    forwarded: 5,
  },
  {
    id: 3,
    image: FeedImage,
    time: "3 hours ago",
    content:
      "Lorem ipsum dolor sit amet, consecteturadipiscing elit. Fusce vel felis nisi.In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    likes: 171,
    forwarded: 5,
  },
];

export default function ProfileFeed() {
  const [feed, setFeed] = useState([]);
  const [showOrderDropdown, setShowOrderDropdown] = useState(false);
  const [showReportDropDown, setShowReportDropDown] = useState(false);
  const [openMoreDetailsModal, setOpenMoreDetailsModal] = useState(false);
  const [openFlagModal, setOpenFlagModal] = useState(false);
  const [openCreateTicketModal, setOpenCreateTicketModal] = useState(false);
  const [openTicketConfirmModal, setOpenTicketConfirmModal] = useState(false);
  const [mainTab, setMainTab] = useState("Profile");
  const [accountIsDisabled, setAccountIsDisabled] = useState(false);
  const [activeTab, setActiveTab] = useState("commentsTab");
  const [readMore, setReadMore] = useState(true);
  const [playVideo,setPlayVideo] = useState(false);
  const [liked,setLiked] = useState(false);
  const [openFilterDropDown,setOpenFilterDropDown] = useState(false);
  const [filterTab,setFilterTab] = useState("Last Updated");
  const [selectCustomDate,setSelectCustomDate] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {
    setFeed(Data);
    const checkClickOutside = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setOpenFilterDropDown(false);
      }
    };
    document.addEventListener("mousedown", checkClickOutside);
    return () => {
      document.removeEventListener("mousedown", checkClickOutside);
    };
  },[]);

  const openReportDropDownHandler = (id) => {
    setShowReportDropDown((visible) => (visible === id ? null : id));
  };

  const readMoreHandler = (id) => {
    setReadMore((r) => (r === id ? null : id));
  };

  const likeBtnHandler = (index, value) => {
    setFeed((feed) =>
      feed.map((item, i) =>
        i === index ? { ...item, likes: item.likes + value } : item
      )
    );
  };

  const forwardedBtnHandler = (index, value) => {
    setFeed((feed) =>
      feed.map((item, i) =>
        i === index ? { ...item, forwarded: item.forwarded + value } : item
      )
    );
  };

  const openCreateTicketHandler = () => {
    setOpenFlagModal(false);
    setOpenCreateTicketModal(true);
  };

  const openTicketConfirmHander = () => {
    setOpenCreateTicketModal(false);
    setOpenTicketConfirmModal(true);
  };

  return (
    <>
      <Page active="wallet">
        <div className="relative">
          {/*Account Sidebar*/}
          <div className="w-[25%] min-h-screen bg-primary-white float-left fixed top-0 left-[85px] flex flex-col justify-center">
            <div className="flex flex-col items-center justify-center mt-4">
              <div className="relative">
                <img
                  className="w-[170px] h-[170px] rounded-[20px] mb-2"
                  src={ProfileImage}
                  alt="user"
                />
                {accountIsDisabled && (
                  <div className="top-0 right-0 absolute bg-[#ffffffa0] w-[170px] h-[170px] -ml-10 rounded-lg flex items-center">
                    <p className="text-[#F41515] text-[18px] font-['Open_Sans'] font-bold text-center">
                      This Profile is currently deactivated
                    </p>
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-[#323232] text-h3 xl:text-h3 font-['Catamaran']">
                  Michelle Mill
                </h2>
                <h3 className="text-[#323232] text-[16px] xl:text-h3 font-['Open_Sans']">
                  @michellemiller
                </h3>
              </div>
            </div>
            <div className="flex items-center justify-between lg:px-5 xl:px-8 lg:py-2 xl:py-4 my-2">
              <span className="flex flex-col items-center">
                <h2 className="text-[#323232] text-h3 xl:text-h2 font-medium font-montserrat">
                  80
                </h2>
                <h3 className="text-[#AFAFB1] text-[14px] xl:text-h3 font-medium font-['Catamaran']">
                  Posts
                </h3>
              </span>
              <span className="flex flex-col items-center">
                <h2 className="text-[#323232] text-h3 xl:text-h2 font-medium font-montserrat">
                  100
                </h2>
                <h3 className="text-[#AFAFB1] text-[14px] xl:text-h3 font-medium font-['Catamaran']">
                  Followers
                </h3>
              </span>
              <span className="flex flex-col items-center">
                <h2 className="text-[#323232] text-h3 xl:text-h2 font-medium font-montserrat">
                  100
                </h2>
                <h3 className="text-[#AFAFB1] text-[14px] xl:text-h3 font-medium font-['Catamaran']">
                  Following
                </h3>
              </span>
            </div>
            <div className="flex flex-col items-start lg:px-5 xl:px-8 lg:py-2 xl:py-4">
              <h3 className="font-['Open_Sans']  text-[14px] xl:text-h3 text-[#858585] leading-5 xl:leading-7 mb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vel felis nisi. In hac habitasse platea dictumst. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Fusce vel felis
                nisi. In hac habitasse platea dictumst. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Fusce vel felis nisi. In hac
                habitasse platea dictumst.s
              </h3>
              <button
                className="text-secondary-purple text-[16px] xl:text-h3 font-['Open_Sans'] underline underline-offset-2 mt-2"
                onClick={() => setAccountIsDisabled((prevState) => !prevState)}
              >
                {accountIsDisabled ? "Activate Account" : "Deactivate Account"}
              </button>
            </div>
          </div>
          {/*Main Content*/}
          <div className="absolute p-3 w-[70%] left-[27%]">
            {/*Menu Nav buttons*/}
            <div>
              <button
                className={` ${
                  mainTab === "Feed"
                    ? "text-secondary-purple w-[60px] border-b border-solid border-[#6C3AC2]"
                    : "text-secondary-dark"
                } text-[18px] font-semibold mx-3 font-['Open_Sans']`}
                onClick={() => setMainTab("Feed")}
              >
                Feed
              </button>
              <button
                className={`${
                  mainTab === "Profile"
                    ? "text-secondary-purple w-[80px] border-b border-solid border-[#6C3AC2]"
                    : "text-secondary-dark"
                } text-[18px] font-semibold font-['Open_Sans'] mx-3`}
                onClick={() => setMainTab("Profile")}
              >
                Profile
              </button>
            </div>
            {/*Main Tab*/}
            {mainTab === "Profile" ? (
              <>
                <div className="flex flex-col justify-between my-4">
                  <div className="px-0 py-2">
                    <span className="flex items-center my-2 p-1 lg:w-[75%] xl:w-[50%] justify-between">
                      <h3 className="font-['Open_Sans'] text-h3 text-[#323232]">
                        First Name
                      </h3>
                      <h3 className="font-['Open_Sans'] text-h3 text-[#8A8A8A]">
                        Michelle
                      </h3>
                    </span>
                    <span className="flex items-center my-2 p-1 lg:w-[75%] xl:w-[50%] justify-between">
                      <h3 className="font-['Open_Sans'] text-h3 text-[#323232]">
                        Last Name
                      </h3>
                      <h3 className="font-['Open_Sans'] text-h3 text-[#8A8A8A]">
                        Miller
                      </h3>
                    </span>
                    <span className="flex items-center my-2 p-1 lg:w-[75%] xl:w-[50%] justify-between">
                      <h3 className="font-['Open_Sans'] text-h3 text-[#323232]">
                        Username
                      </h3>
                      <h3 className="font-['Open_Sans'] text-h3 text-[#8A8A8A]">
                        @michellemiller
                      </h3>
                    </span>
                    <span className="flex items-center my-2 p-1  xl:w-[70%] justify-between">
                      <h3 className="font-['Open_Sans'] text-h3 text-[#323232]">
                        Date of Birth
                      </h3>
                      <span className="flex items-center">
                        <h3 className="font-['Open_Sans'] text-h3 text-[#8A8A8A]">
                          01/01/1999
                        </h3>
                        <h3 className="font-['Open_Sans'] text-h3 text-[#8A8A8A] ml-2">
                          (format dd/mm/yyyy)
                        </h3>
                      </span>
                    </span>
                    <span className="flex items-center my-2 p-1 lg:w-[75%] xl:w-[50%] justify-between">
                      <h3 className="font-['Open_Sans'] text-h3 text-[#323232]">
                        Country
                      </h3>
                      <h3 className="font-['Open_Sans'] text-h3 text-[#8A8A8A]">
                        India
                      </h3>
                    </span>
                  </div>
                  <div className="px-0 py-2">
                    <span className="flex  items-center my-3">
                      <h3 className="font-['Open_Sans'] text-h3 text-[#C5C5C5] mr-2">
                        Contact Information
                      </h3>
                      <hr className="w-[60%]"></hr>
                    </span>
                    <span className="flex items-center my-2 lg:w-[75%] xl:w-[50%] justify-between p-1">
                      <h3 className="font-['Open_Sans'] text-h3 text-[#323232]">
                        Email
                      </h3>
                      <h3 className="font-['Open_Sans'] text-h3 text-[#8A8A8A]">
                        xyz@gmail.com
                      </h3>
                    </span>
                    <span className="flex items-center my-2 lg:w-[75%] xl:w-[50%] justify-between p-1">
                      <h3 className="font-['Open_Sans'] text-h3 text-[#323232]">
                        Phone
                      </h3>
                      <h3 className="font-['Open_Sans'] text-h3 text-[#8A8A8A]">
                        999999999999
                      </h3>
                    </span>
                  </div>
                  <div className="px-0 py-2">
                    <span className="flex  items-center my-3">
                      <h3 className="font-['Open_Sans'] text-h3 text-[#C5C5C5] mr-2">
                        Account Information
                      </h3>
                      <hr className="w-[60%]"></hr>
                    </span>
                    <span className="flex items-center my-2 lg:w-[75%] xl:w-[50%] justify-between p-1">
                      <h3 className="font-['Open_Sans'] text-h3 text-[#323232]">
                        Account Status
                      </h3>
                      <h3 className="font-['Open_Sans'] text-h3 text-[#8A8A8A]">
                        Enabled
                      </h3>
                    </span>
                    <span className="flex items-center my-2 lg:w-[75%] xl:w-[50%] justify-between p-1">
                      <h3 className="font-['Open_Sans'] text-h3 text-[#323232]">
                        Account Created
                      </h3>
                      <h3 className="font-['Open_Sans'] text-h3 text-[#8A8A8A]">
                        01/01/1999
                      </h3>
                    </span>
                    <span className="flex items-center my-2 lg:w-[75%] xl:w-[50%] justify-between p-1">
                      <h3 className="font-['Open_Sans'] text-h3 text-[#323232]">
                        Last Updated
                      </h3>
                      <h3 className="font-['Open_Sans'] text-h3 text-[#8A8A8A]">
                        01/01/1999
                      </h3>
                    </span>
                    <span className="flex items-center my-2 xl:w-[78%] justify-between p-1">
                      <h3 className="font-['Open_Sans'] text-h3 text-[#323232]">
                        Topics Subscribed
                      </h3>
                      <h3 className="font-['Open_Sans'] text-h3 text-secondary-purple">
                        Sports, Fashion, Cricket, Marvel, animals
                      </h3>
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-between my-4">
                  <div className="flex items-center justify-start px-4 relative">
                    <input className="w-[350px] h-[46px] xl:w-[456px] px-4 mt-3 rounded-[8px] bg-primary-white box-border border border-solid border-[#EDEDED] mr-3" />
                    <button
                      className="w-[150px] xl:w-[173px] h-[46px] px-4 mt-3 rounded-[8px] bg-primary-white box-border border border-solid border-[#EDEDED] flex items-center"
                      onClick={() =>
                        setOpenFilterDropDown((prevState) => !prevState)
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24"
                        height="23"
                        viewBox="0 0 24 23"
                        fill="none"
                      >
                        <rect width="24" height="23" fill="url(#pattern0)" />
                        <defs>
                          <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_820_6477"
                              transform="translate(0.0208333) scale(0.0106481 0.0111111)"
                            />
                          </pattern>
                          <image
                            id="image0_820_6477"
                            width="90"
                            height="90"
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAC30lEQVR4nO3cvY7TQBQF4DNmpaxIJCj5EU9A6S3oeQF6BFUUICziR6LP0iIlBRRJbEoaUtDwAJEolmITiYK8ACDRQRNREGUoFpA1sNiyx3dmrPPVk9nJ0e493tgKQERERERERETUHKrIol6vd1op9VRrfR3AmZrPFIpvAF622+3Ho9Hoe97inYKbDrXWt6qdq3HOAri7Xq93ANzOWxzlLRgMBhGAmxYO1lQ3fmX0X7kLyI5TeQvm87mO4/gSgD2B8wRHa/1iOBy+yVtX6De63W4/BPAcxwVAx75qrZ91Op1HRRYXuur4l263eyWKojmAVtk9AvNju91eTdP0bZkX546OkyyXy09xHH8EcK3sHiHRWt9J0/R12deXDhoAFovF+ziOz6Ph81trPU6S5EmVPWxcddxTSpX6cwrE4e7u7oOqm5Se0Vn9fv/cZrM5AnDRxn4e+RJF0d54PP5cdSMrQQONLMdK5WeqNKOzmlaOVcvPZC1o4E85XgAQ29zXgUnV8jPV8S/4fuDleNhqte7b3tTajM4KuBytlZ+plqCBIMvRavmZrM7orNDK0Xb5mWoLGgiqHK2Xn0ni82jfy7GW8jPVNqOzPC7H2srPJBI04GU51lp+JrFbWWmavgPgzQ1epdS+VMhAzWVo8qgcJ9Pp9EDyB7q4Oeu6HEXKzyQ2o7MclqNY+ZmcBA04KUfR8jM5e65Duhyly88kWoYmwXIULz+TD08q1V2OTsrP5GxGZ9VYjs7Kz+RF0EAt5ei0/Ew+jA4A9svRdfkRERERueHNdfRvvV5P29hnOp169d68uY5uOgYthEELYdBCGLQQBi2EQQth0EIYtBAGLYRBC2HQQhi0EAYthEELYdBCGLQQBi2EQQth0EKaFvQKwIFS6rLrg5iKfjepz1YAZkqpV5PJZOX6MCcJNeggws0KKejgws3yPeigw83yMegVgJnWepYkyQfXhyEiIiIiIiIior/9BNsGEKMUckuPAAAAAElFTkSuQmCC"
                          />
                        </defs>
                      </svg>
                      <div className=" w-[116px] h-[30px] flex items-center justify-around ml-1">
                        <p className="text-h3 text-heading leading-[30px] font-[Catamaran] not-italic font-normal">
                          Filter
                        </p>
                        <p className="w-[20px] h-[20px] border border-solid border-[#666666] rounded-full font-montserrat font-medium text-[14px] leading-[17px] text-[#666666]">
                          2
                        </p>
                      </div>
                    </button>
                    {openFilterDropDown && (
                      <div
                        className="absolute w-[302px] h-[292px] flex bg-primary-white -bottom-[300px] right-[2%] z-50 rounded-[10px] shadow-[16px_16px_30px_rgba(0,0,0,0.25)]"
                        ref={dropdownRef}
                      >
                        <div className="flex flex-col border-r border-solid border-[#C4C4C4] w-[35%] pt-8">
                          <button
                            className={`font-['Open_sans'] text-[12px] text-[#7D7D7D]  hover:bg-[#F9F8FD] p-1 py-2 ${
                              filterTab === "Last Updated"
                                ? "bg-[#F9F8FD]"
                                : "bg-primary-white"
                            }`}
                            onClick={() => setFilterTab("Last Updated")}
                          >
                            Last Updated
                          </button>
                          <button
                            className={`font-['Open_sans'] text-[12px] text-[#7D7D7D]  hover:bg-[#F9F8FD] p-1 py-2 ${
                              activeTab === "Type"
                                ? "bg-[#F9F8FD]"
                                : "bg-primary-white"
                            }`}
                            onClick={() => setFilterTab("Type")}
                          >
                            Type
                          </button>
                        </div>
                        {filterTab === "Last Updated" ? (
                          <div className="flex flex-col p-6 pr-0 items-start justify-between">
                            <div className="flex flex-col">
                              <span className="mx-1 my-[1px]">
                                <input
                                  type="checkbox"
                                  className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                                  value="Last day"
                                />
                                <label className="text-[12px] font-['Open_Sans'] text-[#7D7D7D]">
                                  Last day
                                </label>
                              </span>
                              <span className="mx-1 my-[1px]">
                                <input
                                  type="checkbox"
                                  className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                                  value="Last 15 days"
                                />
                                <label className="text-[12px] font-['Open_Sans'] text-[#7D7D7D]">
                                  Last 15 days
                                </label>
                              </span>
                              <span className="mx-1 my-[1px]">
                                <input
                                  type="checkbox"
                                  className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                                  value="Last 30 days"
                                />
                                <label className="text-[12px] font-['Open_Sans'] text-[#7D7D7D]">
                                  Last 30 days
                                </label>
                              </span>
                              <span className="mx-1 my-[1px]">
                                <input
                                  type="checkbox"
                                  className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                                  value="Last Quarter"
                                />
                                <label className="text-[12px] font-['Open_Sans'] text-[#7D7D7D]">
                                  Last Quarter
                                </label>
                              </span>
                              <span className="mx-1 my-[1px]">
                                <input
                                  type="checkbox"
                                  className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                                  value="Last year"
                                />
                                <label className="text-[12px] font-['Open_Sans'] text-[#7D7D7D]">
                                  Last year
                                </label>
                              </span>
                              <span className="mx-1 my-[1px]">
                                <input
                                  type="checkbox"
                                  className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                                  value="Custom Date"
                                  onChange={() => setSelectCustomDate(prevState => !prevState)}
                                />
                                <label className="text-[12px] font-['Open_Sans'] text-[#7D7D7D]">
                                  Custom Date
                                </label>
                              </span>
                              {selectCustomDate ? (
                                <span className="my-1 flex justify-center">
                                  <input
                                    type="text"
                                    className="bg-primary-white font-['Open_sans'] text-[12px] text-[#7D7D7D] border border-solid border-secondary-purple px-1 rounded-[3px] w-[50%] mr-1 placeholder:text-secondary-purple"
                                    placeholder="DD/MM/YYY"
                                  />
                                </span>
                              ) : (
                                <span className="m-1 flex justify-end">
                                  <p className="font-['Open_sans'] text-[12px] text-[#7D7D7D] border border-solid border-[#7D7D7D] rounded-[3px] py-[1px] px-1">
                                    Select date
                                  </p>
                                </span>
                              )}
                            </div>
                            <button className="font-['Cabin'] text-primary-white text-[12px] bg-secondary-purple rounded-[9px] w-[87px] p-2">
                              Done
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-col p-6 pr-0 items-start justify-between">
                            <div className="flex flex-col">
                              <span className="m-1">
                                <input
                                  type="checkbox"
                                  className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                                  value="Video"
                                />
                                <label className="text-[12px] font-['Open_Sans'] text-[#7D7D7D]">
                                  Video
                                </label>
                              </span>
                              <span className="m-1">
                                <input
                                  type="checkbox"
                                  className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                                  value="Audio"
                                />
                                <label className="text-[12px] font-['Open_Sans'] text-[#7D7D7D]">
                                  Audio
                                </label>
                              </span>
                              <span className="m-1">
                                <input
                                  type="checkbox"
                                  className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                                  value="All"
                                />
                                <label className="text-[12px] font-['Open_Sans'] text-[#7D7D7D]">
                                  All
                                </label>
                              </span>
                            </div>
                            <button className="font-['Cabin'] text-primary-white text-[12px] bg-secondary-purple rounded-[9px] w-[87px] p-2">
                              Done
                            </button>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <span className="relative inline-block">
                    <button
                      className="flex items-center mr-4"
                      onClick={() => {
                        setShowOrderDropdown((prevState) => !prevState);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="39"
                        viewBox="0 0 15 39"
                        fill="none"
                      >
                        <path
                          d="M7.5 3V39M7.5 3L14 8.76M7.5 3L1 8.76"
                          stroke="#666666"
                          strokeWidth="3"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="39"
                        viewBox="0 0 19 39"
                        fill="none"
                      >
                        <path
                          d="M9.5 36V0M9.5 36L17.5 29M9.5 36L2 29"
                          stroke="#666666"
                          strokeWidth="3"
                        />
                      </svg>
                    </button>
                    {/*Dropdown Menu*/}
                    {showOrderDropdown && (
                      <div className="flex flex-col items-end absolute right-5 top-10 z-10">
                        <span className="mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="11"
                            viewBox="0 0 14 11"
                            fill="none"
                          >
                            <path
                              d="M6.16533 1.26499C6.56057 0.665977 7.43943 0.665977 7.83467 1.26499L12.905 8.94926C13.3437 9.61411 12.8668 10.5 12.0703 10.5H1.9297C1.13315 10.5 0.65633 9.61411 1.09502 8.94926L6.16533 1.26499Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                        <ul className="bg-primary-white w-[120px] h-[73px] shadow-[12px_12px_30px_rgba(0,0,0,0.25)]">
                          <li className="text-[12px] text-[#2F2F2F] font-['Open_Sans'] block p-2">
                            Most Recent
                          </li>
                          <li className="text-[12px] text-[#2F2F2F] font-['Open_Sans'] block p-2">
                            Most Commented
                          </li>
                        </ul>
                      </div>
                    )}
                  </span>
                </div>
                {feed.map((data, key) => {
                  return (
                    <div key={key}>
                      <div className="flex px-4 py-6 justify-between items-start my-6">
                        <div className="flex">
                          <div
                            className="w-[189px] h-[132px] rounded-[10px] bg-primary-white mr-10 relative cursor-pointer"
                            onClick={() => setOpenMoreDetailsModal(true)}
                          >
                            {/* <video src="..." /> */}
                            <img
                              className="max-w-none"
                              src={data.image}
                              alt="Feed"
                            />
                            <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="48"
                                viewBox="0 0 36 48"
                                fill="none"
                              >
                                <path
                                  d="M33.9031 20.1474C36.5883 22.1467 36.5883 26.1687 33.9031 28.1681L8.80779 46.854C5.50946 49.3099 0.821686 46.9559 0.821686 42.8436L0.821686 5.47184C0.821686 1.35959 5.50947 -0.994462 8.8078 1.46147L33.9031 20.1474Z"
                                  fill="#51459F"
                                />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <p className="text-p xl:text-[16px] text-[#585858] font-['Open_Sans'] mb-4 relative">
                              {readMore === data.id
                                ? data.content
                                : data.content.slice(0, 120)}
                              <button
                                className="text-sky-700 underline decoration-sky-700"
                                onClick={() => readMoreHandler(data.id)}
                              >
                                {readMore === data.id
                                  ? " Read Less"
                                  : " Read More"}
                              </button>
                              <p className="absolute right-0 top-[65%] xl:top-[55%] text-p text-[#5A5A5A99] font-['Open_Sans']">
                                {data.time}
                              </p>
                            </p>
                            {/*Like/Comment/Forward Section*/}
                            <div className=" w-[338px] flex justify-between">
                              <span className="flex items-center">
                                <button onClick={() => likeBtnHandler(key, 1)}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                  >
                                    <path
                                      d="M10.635 18.715L10.6319 18.7181C10.2661 19.0947 9.74956 19.0953 9.38249 18.7119L9.38251 18.7119L9.37796 18.7072L9.268 18.5939L9.26634 18.5922C6.62365 15.8813 4.51729 13.715 3.07499 11.688C1.64895 9.68386 0.947144 7.9161 1.00311 6.01513C1.05523 4.34793 1.81079 2.79661 2.95373 1.91434L2.95427 1.91392C5.05772 0.287889 7.70014 0.979422 9.20109 2.97125L9.99973 4.03106L10.7984 2.97125C12.3016 0.976357 14.9427 0.279642 17.0431 1.91228L17.0457 1.91434C18.1888 2.79675 18.9445 4.34841 18.9964 6.01591L18.9964 6.0166C19.0568 7.9163 18.3559 9.68334 16.9281 11.691C15.4858 13.719 13.3802 15.8881 10.7412 18.6066L10.735 18.613L10.7317 18.6164L10.635 18.715Z"
                                      stroke="#666666"
                                      strokeWidth="2"
                                    />
                                  </svg>
                                </button>
                                <h3 className="text-h3 font-medium font-montserrat text-secondary-dark ml-2">
                                  {data.likes}
                                </h3>
                              </span>
                              <span className="flex items-center">
                                <button>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="23"
                                    height="23"
                                    viewBox="0 0 23 23"
                                    fill="none"
                                  >
                                    <rect
                                      width="23"
                                      height="23"
                                      fill="url(#pattern1)"
                                    />
                                    <defs>
                                      <pattern
                                        id="pattern1"
                                        patternContentUnits="objectBoundingBox"
                                        width="1"
                                        height="1"
                                      >
                                        <use
                                          xlinkHref="#image0_820_6555"
                                          transform="scale(0.0111111)"
                                        />
                                      </pattern>
                                      <image
                                        id="image0_820_6555"
                                        width="90"
                                        height="90"
                                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACe0lEQVR4nO3cPW4TURiF4fMN2BMJCtOzAkBQImUNqSkiIRnJMuJ3ARQsgNbVzBgCRtCkZhEUWLFEWAGioIitKEGKi7k0FKNA8cWTnBlfzlNa19bRq9F10hgQERERERERERER+a/ZWQ73+/2NTqfzEMC2md0EcOViZrXWMYCvAD6maZqNRqMT7xvdoQeDwfUkST4BuL3CwBjNyrLcGo/H3z2HXaH7/f5Gt9v9DEU+bZam6V3Pk514Pu3PdaHIf7uzXC6HnoOu0AC2a4yJnauNK7SZ3ai3JV4hhFuec94n+mqNLbFztfGGlpoUmkShSRSaRKFJFJpEoUkUmkShSRSaRKFJFJpEoUkUmkShSRSaRKFJFJpEoUkUmkShSRSaRKFJFJpEoUkUmkShSRSaRKFJFJpEoUkUmkShSRSaRKFJFJpEoUkUmkShSRSaRKFJFJpEoUkUmsQb+uhCV6y3Q88hV+gQwrd6W+JlZq423t/r+FBvTrxCCK42rtBpmmYAZrUWxWlvPp/nnoOu0KPR6KQsyy0odtVekiRbu7u7S8/hS95PnU6nh5ubmztlWf40s2sAegC6q65cU0cAvgB4NZ/PH00mk4X3jWf6gcG6hsNhWPW9IYQHRVG8Pc89TOvyd/TOOkcG1iP0PoCnTY+oq+2hj83sXp7nv5oeUlfbQz/JsiyKf5baHPpNnufvmh5xXtoaeh/As6ZHnKc2ho7mXq5qY+ho7uWqy00PqAohvC6KIpp7uapNT/S+mT1vesRFaUvoKO/lKnboH/960cwex3gvV1FDhxDen37NzIosyybMHU2gfhkuFouXvV4PZnYfwAaAnYODgxfMDSIia+Q3OQyJCXSvhaUAAAAASUVORK5CYII="
                                      />
                                    </defs>
                                  </svg>
                                </button>
                                <h3 className="text-h3 font-medium font-montserrat text-secondary-dark ml-2">
                                  171
                                </h3>
                              </span>
                              <span className="flex items-center">
                                <button className="flex flex-col justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="13"
                                    viewBox="0 0 28 13"
                                    fill="none"
                                  >
                                    <path
                                      d="M1.28516 9.43588L8.74927 4.94903L16.8919 10.7178L25.7132 1.74414"
                                      stroke="#666666"
                                      strokeWidth="3"
                                    />
                                    <ellipse
                                      cx="1.28568"
                                      cy="9.43625"
                                      rx="1.28568"
                                      ry="1.28196"
                                      fill="#666666"
                                    />
                                    <ellipse
                                      cx="16.7154"
                                      cy="10.7175"
                                      rx="1.28568"
                                      ry="1.28196"
                                      fill="#666666"
                                    />
                                    <ellipse
                                      cx="25.7154"
                                      cy="1.74485"
                                      rx="1.28568"
                                      ry="1.28196"
                                      fill="#666666"
                                    />
                                    <ellipse
                                      cx="9.00053"
                                      cy="4.3093"
                                      rx="1.28568"
                                      ry="1.28196"
                                      fill="#666666"
                                    />
                                  </svg>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="13"
                                    viewBox="0 0 28 13"
                                    fill="none"
                                  >
                                    <path
                                      d="M1.28516 9.43588L8.74927 4.94903L16.8919 10.7178L25.7132 1.74414"
                                      stroke="#666666"
                                      strokeWidth="3"
                                    />
                                    <ellipse
                                      cx="1.28568"
                                      cy="9.43625"
                                      rx="1.28568"
                                      ry="1.28196"
                                      fill="#666666"
                                    />
                                    <ellipse
                                      cx="16.7154"
                                      cy="10.7175"
                                      rx="1.28568"
                                      ry="1.28196"
                                      fill="#666666"
                                    />
                                    <ellipse
                                      cx="25.7154"
                                      cy="1.74485"
                                      rx="1.28568"
                                      ry="1.28196"
                                      fill="#666666"
                                    />
                                    <ellipse
                                      cx="9.00053"
                                      cy="4.3093"
                                      rx="1.28568"
                                      ry="1.28196"
                                      fill="#666666"
                                    />
                                  </svg>
                                </button>
                                <h3 className="text-h3 font-medium font-montserrat text-secondary-dark ml-2">
                                  171
                                </h3>
                              </span>
                              <span className="flex items-center">
                                <button
                                  onClick={() => forwardedBtnHandler(key, 1)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="24"
                                    height="27"
                                    viewBox="0 0 24 27"
                                    fill="none"
                                  >
                                    <rect
                                      width="24"
                                      height="27"
                                      fill="url(#pattern2)"
                                    />
                                    <defs>
                                      <pattern
                                        id="pattern2"
                                        patternContentUnits="objectBoundingBox"
                                        width="1"
                                        height="1"
                                      >
                                        <use
                                          xlinkHref="#image0_820_6556"
                                          transform="translate(0 0.0555556) scale(0.0111111 0.00987654)"
                                        />
                                      </pattern>
                                      <image
                                        id="image0_820_6556"
                                        width="90"
                                        height="90"
                                        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAFy0lEQVR4nO2bb4gUZRzHv7/9M3NepbtJUaZGBVFkL3qloNIbQUTkVDwCK9mgm1vXltqCSqGaemVkXHR4e7t72YUh4UGaQZcUBBX6prDeWxp4u0WIK+bdzTI3v16cwXHtzM7uPDO7O/d8Xj7PzPP78uG5Z+Z5dg6QSCQSiUQikUgkEolEIgkP1O4AQdDf368kk8l3AewDMMfMx3t6eg4NDw8bQWWIBFWonSSTycMAXgJwJ4C7iOhlwzBOZbNZNagMS0I05mfyYrYFKXupiF5p076tVqt9kUqlevwOsFRE28LMW1VVPe237CUvGghGthR9C79lS9EL8FO2FL0Iv2RL0XXwQ7YUbYNo2VK0AyJlS9ENECVbinaBCNlStEu8yu7qY9IDBw6snJube8SyrPuJaA0zrwawlpmXE9EKACsAJDB/aieKSVVVdzV7xNo1ojOZzD2maW5m5g0AHieidQDubVOcpmV3rOhcLrdsenp6C4AdzPwkgIfbnWkRTcnuKNGpVKpHVdU+Zt4LYAuA3nZnaoBr2R0hOp1Or7MsKw1gL4Bku/M0iSvZbRWtadomInqNmbe3O4sXiOisYRg7x8fHZ22vCTLQf2iatp6I3mPmze2o7xOOMzsWZJJMJrPGNM33Aexh5q6dwTZsMwxDB3CwXmcgonVdj1QqledN0zwC4I4garaJ59Au0ZqmrZ2amjpBRBv9rtUBWHYdvm7BBwcH+wBcWCKSQUTjdn1+iSZN095g5lMQu/3tZCYVRXnbrlP4A+nW51cfAXhG9NgdTMN3aaGi+/v7lUQicZKI+kSO28m4eYcGgKiogtlsVlUU5QyA7aLG7AImVVXdWSwWG27BhazRuq5HDMM4zsxbRYzXDRDR2VqtttvtoZIQ0ZVKZRhAv4ixuoRJRVH6Gi0XC/G8Rg8ODqaZOe91nG7B7Zr8v/u8FNU0bT2A7wEoXsZpEQPAJQC/EdFFZr5MRNcty6oy83UA1+Px+LVarVaNRqNXBdVs6dcVwIPoXC637ObNm78gmAP5CoDzAM5ZlnUhEolcXLVq1RVd1213YgvRNI0FZGhZMuBhCz49Pf0O/JM8BeAMgB8jkci50dHRyz7VcYsnyUCLojVNW8/MuVaL2nAFwOfM/GW1Wv1uYmJiTvD4LXFrTd7t5hXOiaZFZ7NZ1TCMjyHmHXwGwGfMPFYqlc4DEPEnLpJJRVF2FQoFz/9U1LTo2dnZNBE96rHuVQBD8Xh89OjRo6IeVKLxvFwspCnRmUzmdtM0D3modwPA4Vgs9uHIyMg/HsbxG6GSgSZFm6b5IoC7W6jDAMZjsdihkZGRP1u4P0iESwaaEJ1KpRIAXmmhxh9ENFAoFL5p4d5AEfXgq4frLbiiKGk0/ynAmWg0+kQXSW56x+cWVzNa1/VIuVweaGJcC8DrxWLxCDrvTaIewt4u7HAlulwubwHwoMsxDWbeVyqVTrYeK1B8WZMX43bpGHR5XY2IdnegZLtXyEAkAy5E79+/Pwlgh4ux5gA8VSgUvvKcSjDM/Emd5sAkAy5EW5a1HUC80XVE9GqxWDwtJJVgqtXqQQBDmJ/ZfxHRkSAlAy5O7wYGBiaIaE+Dy04Ui8WnBWUKJY4zOpvNqkTU6OepqWg0+oLATKHEUfTMzMxGOH/Cxcycyufz18TGCh+OoiORSKMvjD4tlUrfCswTWho9DDc59NWi0aguMkyYsRWt63oEwAaHe0fz+fzv4iOFE1vR5XL5AQDLbboty7I+8CdSOLEVzcyPOdw3OTY2dsmHPKHFaY12El1vpyVxwEn0QzbthmmaX/sRJszYiiai+2y6fjh27NgNn/KEFqcZvdqm/Sc/goQdJ9Er6jUS0c8+ZQk1TqJvs2n/1Y8gYcdJdN0zjt7e3is+ZQk1TqL/rtM2NTQ0NONXmDDjtGE5Xqe5XpvEBbY/zlar1TcTiQSI6FlgXny1Wn0ruGgSiUQikUgkEolEIpFIJJJO5V/59jPipEdpIAAAAABJRU5ErkJggg=="
                                      />
                                    </defs>
                                  </svg>
                                </button>
                                <h3 className="text-h3 font-medium font-montserrat text-secondary-dark ml-2">
                                  {data.forwarded}
                                </h3>
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="relative inline-block mx-4">
                          <button
                            onClick={() => openReportDropDownHandler(data.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                            >
                              <rect
                                width="26"
                                height="26"
                                fill="url(#pattern3)"
                              />
                              <defs>
                                <pattern
                                  id="pattern3"
                                  patternContentUnits="objectBoundingBox"
                                  width="1"
                                  height="1"
                                >
                                  <use
                                    xlinkHref="#image0_820_6463"
                                    transform="scale(0.0111111)"
                                  />
                                </pattern>
                                <image
                                  id="image0_820_6463"
                                  width="90"
                                  height="90"
                                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACGElEQVR4nO3aQYoTQRSH8f8zJ9Ct49YrjAsNyDBrxYVewFBXMnTlADMrDzCoYzbeQcHF4E7iCbrKTQQZhPSkK69f5PstQ3fxeITQaT4JAAAAAADg/2FTDzBESum81vpa0jNJJ9uPb8xsXUq57LruasLxBgm96MVi8djMOknzHZdem9liuVx+9ZhrH2EXnVKa11rfS7o/8JZfpZQXOef1IefaV8hFb7/JXzR8yX9s+r4/Xa1W3w4x1xj3ph7gX8zsne6+ZEl6MJvNVq3naSHcolNK55KejzhinlI6azVPK+EWXUp5M/aM7RNKKOEWbWZPGxyz6ynFXbhFS3rY4IyT3Zf4irjoFsrUA9wWcdE/gpzRVMRFt/jD8bnBGU2FW3St9WLsGaWUyxaztBRu0V3XXZnZhxFHXOecx9x/EOEWLUl937+V9HOPWzfbe8MJueic8/dSyitJmzvctimlvIz4nkMKumhJyjmvzexJrfXTgMs/9n1/GvXNnRT07d1tKaWzv178P9p+fCNpXUq5iPibDAAAMI1jebyj6zgkug4HdB0O6Dqc0HU4oOtwQtfhhK7DD13HEaHrGICuwwldhwe6Did0HY7oOpzQdTii65gAXQcAAMBQx/J4R9dxSHQdDug6HNB1OKHrcEDX4YSuwwldhx+6jiNC1zEAXYcTug4PdB1O6Doc0XU4oetwRNcxAboOAAAAAACAWH4Db0dlDWtUNVIAAAAASUVORK5CYII="
                                />
                              </defs>
                            </svg>
                          </button>
                          {/*Report Menu*/}
                          {showReportDropDown === data.id && (
                            <div className="flex flex-col items-end absolute right-0 top-8">
                              <span className="mr-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="11"
                                  viewBox="0 0 14 11"
                                  fill="none"
                                >
                                  <path
                                    d="M6.16533 1.26499C6.56057 0.665977 7.43943 0.665977 7.83467 1.26499L12.905 8.94926C13.3437 9.61411 12.8668 10.5 12.0703 10.5H1.9297C1.13315 10.5 0.65633 9.61411 1.09502 8.94926L6.16533 1.26499Z"
                                    fill="white"
                                  />
                                </svg>
                              </span>
                              <span className="bg-primary-white w-[120px] h-[35px] shadow-[12px_12px_30px_rgba(0,0,0,0.25)]">
                                <button
                                  className="text-[12px] text-[#515151] font-['Open_Sans'] block p-2 cursor-pointer"
                                  onClick={() => setOpenFlagModal(true)}
                                >
                                  Report Video
                                </button>
                              </span>
                              {openFlagModal &&
                                ReactDOM.createPortal(
                                  <React.Fragment>
                                    <div
                                      className="bg-[#FBFBFBCC] w-full h-full left-[0px] top-[-3px] z-10 fixed"
                                      onClick={() => setOpenFlagModal(false)}
                                    ></div>
                                    <div
                                      className="w-pop-up h-[390px] rounded-[15px] bg-primary-background border border-solid border-[#C4C4C4] box-border shadow-[10px_16px_30px_rgba(0,0,0,0.25)] flex
                  flex-col justify-around px-6 py-4 fixed top-[40%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-20"
                                    >
                                      <header className="flex items-center justify-between">
                                        <h3 className="text-secondary-purple text-h3 leading-[24px] not-italic font-bold font-montserrat w-[422px] h-[24px] items-center">
                                          Why are you flagging this video?
                                        </h3>
                                        <svg
                                          className="relative bottom-2 cursor-pointer"
                                          onClick={() =>
                                            setOpenFlagModal(false)
                                          }
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
                                      <div className="flex flex-col justify-around p-1">
                                        <span className="m-1">
                                          <input
                                            type="checkbox"
                                            className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                                            value="Nudity/Pornographic"
                                          />
                                          <label className="text-[16px] font-['Open_Sans'] text-[#7D7D7D]">
                                            Nudity/Pornographic
                                          </label>
                                        </span>
                                        <span className="m-1">
                                          <input
                                            type="checkbox"
                                            className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                                            value="Hurts religious sentiments: Threatens communal harmony"
                                          />
                                          <label className="text-[16px] font-['Open_Sans'] text-[#7D7D7D]">
                                            Hurts religious sentiments:
                                            Threatens communal harmony
                                          </label>
                                        </span>
                                        <span className="m-1">
                                          <input
                                            type="checkbox"
                                            className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                                            value="False information/ fake news: Spreads misinformation"
                                          />
                                          <label className="text-[16px] font-['Open_Sans'] text-[#7D7D7D]">
                                            False information/ fake news:
                                            Spreads misinformation
                                          </label>
                                        </span>
                                        <span className="m-1">
                                          <input
                                            type="checkbox"
                                            className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                                            value="Profanity/ use of abusive language"
                                          />
                                          <label className="text-[16px] font-['Open_Sans'] text-[#7D7D7D]">
                                            Profanity/ use of abusive language
                                          </label>
                                        </span>
                                        <span className="m-1">
                                          <input
                                            type="checkbox"
                                            className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                                            value="Political Agenda"
                                          />
                                          <label className="text-[16px] font-['Open_Sans'] text-[#7D7D7D]">
                                            Political Agenda
                                          </label>
                                        </span>
                                        <span className="m-1">
                                          <input
                                            type="checkbox"
                                            className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                                            value="Anti-national sentiments"
                                          />
                                          <label className="text-[16px] font-['Open_Sans'] text-[#7D7D7D]">
                                            Anti-national sentiments
                                          </label>
                                        </span>
                                      </div>
                                      <footer className="flex justify-end">
                                        <button
                                          className="text-heading w-[150px] h-[54px] bg-primary-white rounded-[15px] border-[0.5px] border-solid border-[#CACACA] font-['Cabin'] mr-4"
                                          onClick={() =>
                                            setOpenFlagModal(false)
                                          }
                                        >
                                          Cancel
                                        </button>
                                        <button
                                          className="text-primary-white w-[150px] h-[54px] bg-secondary-purple rounded-[10px] font-bold font-['Open_Sans'] text-[16px] leading-[22px]"
                                          onClick={openCreateTicketHandler}
                                        >
                                          Create
                                        </button>
                                      </footer>
                                    </div>
                                  </React.Fragment>,
                                  document.querySelector("body")
                                )}
                              {openCreateTicketModal &&
                                ReactDOM.createPortal(
                                  <React.Fragment>
                                    <div
                                      className="bg-[#FBFBFBCC] w-full h-full left-[0px] top-[-3px] z-10 fixed"
                                      onClick={() =>
                                        setOpenCreateTicketModal(false)
                                      }
                                    ></div>
                                    <div
                                      className="w-pop-up h-pop-up rounded-[15px] bg-primary-background border border-solid border-[#C4C4C4] box-border shadow-[10px_16px_30px_rgba(0,0,0,0.25)] flex
                  flex-col justify-around px-6 py-4 fixed top-[40%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-20"
                                    >
                                      <header className="flex items-center justify-between">
                                        <h3 className="text-secondary-purple text-h3 leading-[24px] not-italic font-bold font-montserrat w-[422px] h-[24px] items-center">
                                          Flag Video
                                        </h3>
                                        <svg
                                          className="relative bottom-2 cursor-pointer"
                                          onClick={() =>
                                            setOpenCreateTicketModal(false)
                                          }
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
                                        <h4 className="text-[#7D7D7D] text-[15px] leading-[22px] not-italic font-semibold font-montserrat w-[437px] h-[20px] mb-5">
                                          Are you sure you want to continue
                                          flagging this video?
                                        </h4>
                                        <p className="text-[#7D7D7D] text-[16px] leading-[22px] not-italic font-normal w-[473px] h-[84px] font-['Open_Sans']">
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit. Fusce vel
                                          felis nisi. In hac habitasse platea
                                          dictumst. Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit.
                                        </p>
                                      </div>
                                      <footer className="flex justify-end">
                                        <button
                                          className="text-heading w-[150px] h-[54px] bg-primary-white rounded-[15px] border-[0.5px] border-solid border-[#CACACA] font-['Cabin'] mr-4"
                                          onClick={() =>
                                            setOpenCreateTicketModal(false)
                                          }
                                        >
                                          Cancel
                                        </button>
                                        <button
                                          className="text-primary-white w-[150px] h-[54px] bg-secondary-purple rounded-[10px] font-bold font-['Open_Sans'] text-[16px] leading-[22px]"
                                          onClick={openTicketConfirmHander}
                                        >
                                          Create Ticket
                                        </button>
                                      </footer>
                                    </div>
                                  </React.Fragment>,
                                  document.querySelector("body")
                                )}
                              {openTicketConfirmModal &&
                                ReactDOM.createPortal(
                                  <React.Fragment>
                                    <div
                                      className="bg-[#FBFBFBCC] w-full h-full left-[0px] top-[-3px] z-10 fixed"
                                      onClick={() =>
                                        setOpenTicketConfirmModal(false)
                                      }
                                    ></div>
                                    <div
                                      className="w-pop-up h-pop-up rounded-[15px] bg-primary-background border border-solid border-[#C4C4C4] box-border shadow-[10px_16px_30px_rgba(0,0,0,0.25)] flex
                  flex-col justify-around px-6 py-4 fixed top-[40%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-20"
                                    >
                                      <header className="flex items-center justify-between">
                                        <h3 className="text-secondary-purple text-h3 leading-[24px] not-italic font-bold font-montserrat w-[422px] h-[24px] items-center">
                                          Support ticket confirmation
                                        </h3>
                                        <svg
                                          className="relative bottom-2 cursor-pointer"
                                          onClick={() =>
                                            setOpenTicketConfirmModal(false)
                                          }
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
                                        <h4 className="text-[#303030] text-[16px] leading-[22px] not-italic font-semibold font-montserrat w-[266px] h-[20px] mb-5">
                                          Your Ticket number is{" "}
                                          <span className="underline">
                                            SU2313313
                                          </span>
                                        </h4>
                                        <p className="text-[#7D7D7D] text-[16px] leading-[22px] not-italic font-normal w-[466px] h-[99px] font-['Open_Sans']">
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit. Eget
                                          utvest-ibulum bibendum egestas. Enim
                                          mi arcu convallis enim purus interdum.
                                          Ut neque at adipiscing tortor
                                          facilisis sagittis libero. Ac bibendum
                                          vel blandit.
                                        </p>
                                      </div>
                                      <footer className="flex justify-end">
                                        <button
                                          className="text-primary-white w-[150px] h-[54px] bg-secondary-purple rounded-[10px] font-bold font-['Open_Sans'] text-[16px] leading-[22px]"
                                          onClick={() =>
                                            setOpenTicketConfirmModal(false)
                                          }
                                        >
                                          Back
                                        </button>
                                      </footer>
                                    </div>
                                  </React.Fragment>,
                                  document.querySelector("body")
                                )}
                            </div>
                          )}
                        </span>
                      </div>
                      {openMoreDetailsModal &&
                        ReactDOM.createPortal(
                          <React.Fragment>
                            <div
                              className="bg-[#fbfbfb5c] w-full h-full left-[0px] top-[-2px] z-10 fixed"
                              onClick={() => setOpenMoreDetailsModal(false)}
                            ></div>
                            <div className="w-[70%] xl:w-[65%] h-[90%] rounded-[20px] bg-[#FEFEFE] shadow-[12px_12px_30px_rgba(0,0,0,0.25)] px-6 py-4 fixed top-[48%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-20 overflow-y-scroll flex flex-col scrollbar">
                              {/*Tab Section*/}
                              <div className="flex justify-between items-center py-6 px-4">
                                <span>
                                  <button
                                    className={`font-['Open_Sans'] mx-5 ${
                                      activeTab === "commentsTab"
                                        ? "font-semibold border-b border-[#6C3AC2] text-secondary-purple"
                                        : "text-secondary-dark border-none"
                                    }`}
                                    onClick={() => setActiveTab("commentsTab")}
                                  >
                                    Comments
                                  </button>
                                  <button
                                    className={`font-['Open_Sans'] mx-5 ${
                                      activeTab === "auditTab"
                                        ? "font-semibold border-b border-[#6C3AC2] text-secondary-purple"
                                        : "text-secondary-dark border-none"
                                    }`}
                                    onClick={() => setActiveTab("auditTab")}
                                  >
                                    Audit Trail
                                  </button>
                                </span>
                                <span className="relative z-50 flex items-center">
                                  <button
                                    className="cursor-pointer mr-2"
                                    onClick={() =>
                                      openReportDropDownHandler(data.id)
                                    }
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      width="26"
                                      height="26"
                                      viewBox="0 0 26 26"
                                      fill="none"
                                    >
                                      <rect
                                        width="26"
                                        height="26"
                                        fill="url(#pattern3)"
                                      />
                                      <defs>
                                        <pattern
                                          id="pattern3"
                                          patternContentUnits="objectBoundingBox"
                                          width="1"
                                          height="1"
                                        >
                                          <use
                                            xlinkHref="#image0_820_6463"
                                            transform="scale(0.0111111)"
                                          />
                                        </pattern>
                                        <image
                                          id="image0_820_6463"
                                          width="90"
                                          height="90"
                                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACGElEQVR4nO3aQYoTQRSH8f8zJ9Ct49YrjAsNyDBrxYVewFBXMnTlADMrDzCoYzbeQcHF4E7iCbrKTQQZhPSkK69f5PstQ3fxeITQaT4JAAAAAADg/2FTDzBESum81vpa0jNJJ9uPb8xsXUq57LruasLxBgm96MVi8djMOknzHZdem9liuVx+9ZhrH2EXnVKa11rfS7o/8JZfpZQXOef1IefaV8hFb7/JXzR8yX9s+r4/Xa1W3w4x1xj3ph7gX8zsne6+ZEl6MJvNVq3naSHcolNK55KejzhinlI6azVPK+EWXUp5M/aM7RNKKOEWbWZPGxyz6ynFXbhFS3rY4IyT3Zf4irjoFsrUA9wWcdE/gpzRVMRFt/jD8bnBGU2FW3St9WLsGaWUyxaztBRu0V3XXZnZhxFHXOecx9x/EOEWLUl937+V9HOPWzfbe8MJueic8/dSyitJmzvctimlvIz4nkMKumhJyjmvzexJrfXTgMs/9n1/GvXNnRT07d1tKaWzv178P9p+fCNpXUq5iPibDAAAMI1jebyj6zgkug4HdB0O6Dqc0HU4oOtwQtfhhK7DD13HEaHrGICuwwldhwe6Did0HY7oOpzQdTii65gAXQcAAMBQx/J4R9dxSHQdDug6HNB1OKHrcEDX4YSuwwldhx+6jiNC1zEAXYcTug4PdB1O6Doc0XU4oetwRNcxAboOAAAAAACAWH4Db0dlDWtUNVIAAAAASUVORK5CYII="
                                        />
                                      </defs>
                                    </svg>
                                  </button>
                                  <button
                                    className="cursor-pointer"
                                    onClick={() =>
                                      setOpenMoreDetailsModal(false)
                                    }
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="21"
                                      height="21"
                                      viewBox="0 0 21 21"
                                      fill="none"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10.6418 0.808594C5.20944 0.808594 0.845703 5.17233 0.845703 10.6047C0.845703 16.0371 5.20944 20.4009 10.6418 20.4009C16.0742 20.4009 20.438 16.0371 20.438 10.6047C20.438 5.17233 16.0742 0.808594 10.6418 0.808594ZM10.642 18.6194C6.18922 18.6194 2.62699 15.0572 2.62699 10.6044C2.62699 6.1516 6.18922 2.58937 10.642 2.58937C15.0948 2.58937 18.657 6.1516 18.657 10.6044C18.657 15.0572 15.0948 18.6194 10.642 18.6194ZM11.8885 10.6051L13.9367 8.55679C14.293 8.20056 14.293 7.66623 13.9367 7.31001C13.5805 6.95378 13.0462 6.95378 12.69 7.31001L10.6417 9.35829L8.59339 7.31001C8.23716 6.95378 7.70283 6.95378 7.34661 7.31001C6.99038 7.66623 6.99038 8.20056 7.34661 8.55679L9.39489 10.6051L7.34661 12.6534C6.99038 13.0096 6.99038 13.5439 7.34661 13.9001C7.52472 14.0782 7.70283 14.1673 7.97 14.1673C8.23716 14.1673 8.41528 14.0782 8.59339 13.9001L10.6417 11.8519L12.69 13.9001C12.8681 14.0782 13.0462 14.1673 13.3133 14.1673C13.5805 14.1673 13.7586 14.0782 13.9367 13.9001C14.293 13.5439 14.293 13.0096 13.9367 12.6534L11.8885 10.6051Z"
                                        fill="#515151"
                                      />
                                    </svg>
                                  </button>
                                  {/*Report Menu*/}
                                  {showReportDropDown && (
                                    <div className="flex flex-col items-end absolute right-0 top-8">
                                      <span className="mr-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14"
                                          height="11"
                                          viewBox="0 0 14 11"
                                          fill="none"
                                        >
                                          <path
                                            d="M6.16533 1.26499C6.56057 0.665977 7.43943 0.665977 7.83467 1.26499L12.905 8.94926C13.3437 9.61411 12.8668 10.5 12.0703 10.5H1.9297C1.13315 10.5 0.65633 9.61411 1.09502 8.94926L6.16533 1.26499Z"
                                            fill="white"
                                          />
                                        </svg>
                                      </span>
                                      <span className="bg-primary-white w-[120px] h-[35px] shadow-[12px_12px_30px_rgba(0,0,0,0.25)]">
                                        <p className="text-[12px] text-[#515151] font-['Open_Sans'] block p-2 cursor-pointer">
                                          Report Video
                                        </p>
                                      </span>
                                    </div>
                                  )}
                                </span>
                              </div>
                              {activeTab === "commentsTab" ? (
                                <React.Fragment>
                                  {/*Image/Video Section */}
                                  <div className="w-[95%] h-[388px] rounded-[10px] bg-[#C4C4C4] relative cursor-pointer ml-6 xl:ml-10">
                                    {/* <video src="..." /> */}
                                    <img src={FeedImageLarge} alt="Feed" />
                                    <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
                                      {playVideo ? (
                                        <button
                                          className="flex"
                                          onClick={() =>
                                            setPlayVideo(
                                              (prevState) => !prevState
                                            )
                                          }
                                        >
                                          <svg
                                            style={{ marginRight: "20px" }}
                                            width="31"
                                            height="153"
                                            viewBox="0 0 31 153"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <line
                                              x1="15.75"
                                              y1="152.5"
                                              x2="15.75"
                                              stroke="#686868"
                                              stroke-opacity="0.6"
                                              stroke-width="30.5"
                                            />
                                          </svg>
                                          <svg
                                            width="31"
                                            height="153"
                                            viewBox="0 0 31 153"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <line
                                              x1="15.75"
                                              y1="152.5"
                                              x2="15.75"
                                              stroke="#686868"
                                              stroke-opacity="0.6"
                                              stroke-width="30.5"
                                            />
                                          </svg>
                                        </button>
                                      ) : (
                                        <>
                                          <button
                                            onClick={() =>
                                              setPlayVideo(
                                                (prevState) => !prevState
                                              )
                                            }
                                          >
                                            <svg
                                              width="125"
                                              height="143"
                                              viewBox="0 0 125 143"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M116.276 58.5972C126.076 64.4076 126.076 78.5924 116.276 84.4028L24.1497 139.022C14.1507 144.95 1.5 137.743 1.5 126.119L1.5 16.8812C1.5 5.25694 14.1507 -1.94979 24.1497 3.97831L116.276 58.5972Z"
                                                fill="#6C3AC2"
                                                stroke="#AFAFAF"
                                                stroke-width="2"
                                              />
                                            </svg>
                                          </button>
                                        </>
                                      )}
                                    </div>
                                    {playVideo && (
                                      <div className="flex flex-col items-center absolute bottom-0 w-[100%]">
                                        <div className="w-[100%] flex justify-between mb-2">
                                          <h3 className="font-['Open_sans'] text-h3 text-primary-white ml-2">
                                            1:30
                                          </h3>
                                          <h3 className="font-['Open_sans'] text-h3 text-primary-white mr-2">
                                            4:47
                                          </h3>
                                        </div>
                                        <div className="bg-[#403F3D] rounded-[10px] w-[100%] h-[12px] z-30 relative margin-[0px 20px] flex">
                                          <div className="flex w-[100%] items-center">
                                            <div className="rounded-[10px] bg-secondary-purple h-[100%] w-[55%]"></div>
                                            <svg
                                              style={{
                                                position: "relative",
                                                right: "10px",
                                              }}
                                              width="26"
                                              height="25"
                                              viewBox="0 0 26 25"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <circle
                                                cx="13.0413"
                                                cy="12.0902"
                                                r="12.0902"
                                                fill="#6C3AC2"
                                              />
                                            </svg>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  {/*Like/Comment/Forward Section*/}
                                  <div className="flex items-center justify-between lg:pr-2 px-8 py-2 m-3">
                                    <div className=" w-[338px] flex justify-between">
                                      <span className="flex items-center">
                                        <button
                                          onClick={() =>
                                            setLiked((prevState) => !prevState)
                                          }
                                        >
                                          {liked ? (
                                            <svg
                                              width="22"
                                              height="21"
                                              viewBox="0 0 22 21"
                                              fill="none"
                                              xmlns="http://www.w3.org/2000/svg"
                                            >
                                              <path
                                                d="M11.7864 19.6693L11.7833 19.6723C11.3376 20.1103 10.6786 20.1104 10.2322 19.6655L10.2323 19.6655L10.2276 19.6609L10.1066 19.5419L10.1049 19.5402C7.199 16.6948 4.87782 14.4163 3.28798 12.2835C1.71409 10.1721 0.94185 8.31215 1.00342 6.31581C1.06061 4.56942 1.88955 2.92754 3.17014 1.98394L3.17068 1.98354C5.55746 0.222357 8.54703 0.994936 10.2148 3.10753L10.9997 4.10177L11.7846 3.10753C13.4546 0.992123 16.4429 0.213312 18.8266 1.98197L18.8293 1.98394C20.11 2.92769 20.939 4.56993 20.996 6.31663L20.996 6.31735C21.0625 8.31235 20.2913 10.1716 18.7154 12.2867C17.1262 14.4197 14.8069 16.7003 11.9064 19.5522L11.8963 19.5622L11.893 19.5655L11.7864 19.6693Z"
                                                fill="#C50B0B"
                                                stroke="#C80D0D"
                                                stroke-width="2"
                                              />
                                            </svg>
                                          ) : (
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="20"
                                              height="20"
                                              viewBox="0 0 20 20"
                                              fill="none"
                                            >
                                              <path
                                                d="M10.635 18.715L10.6319 18.7181C10.2661 19.0947 9.74956 19.0953 9.38249 18.7119L9.38251 18.7119L9.37796 18.7072L9.268 18.5939L9.26634 18.5922C6.62365 15.8813 4.51729 13.715 3.07499 11.688C1.64895 9.68386 0.947144 7.9161 1.00311 6.01513C1.05523 4.34793 1.81079 2.79661 2.95373 1.91434L2.95427 1.91392C5.05772 0.287889 7.70014 0.979422 9.20109 2.97125L9.99973 4.03106L10.7984 2.97125C12.3016 0.976357 14.9427 0.279642 17.0431 1.91228L17.0457 1.91434C18.1888 2.79675 18.9445 4.34841 18.9964 6.01591L18.9964 6.0166C19.0568 7.9163 18.3559 9.68334 16.9281 11.691C15.4858 13.719 13.3802 15.8881 10.7412 18.6066L10.735 18.613L10.7317 18.6164L10.635 18.715Z"
                                                stroke="#666666"
                                                strokeWidth="2"
                                              />
                                            </svg>
                                          )}
                                        </button>
                                        <h3 className="text-h3 font-medium font-montserrat text-secondary-dark ml-2">
                                          171
                                        </h3>
                                      </span>
                                      <span className="flex items-center">
                                        <button>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="23"
                                            height="23"
                                            viewBox="0 0 23 23"
                                            fill="none"
                                          >
                                            <rect
                                              width="23"
                                              height="23"
                                              fill="url(#pattern1)"
                                            />
                                            <defs>
                                              <pattern
                                                id="pattern1"
                                                patternContentUnits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                              >
                                                <use
                                                  xlinkHref="#image0_820_6555"
                                                  transform="scale(0.0111111)"
                                                />
                                              </pattern>
                                              <image
                                                id="image0_820_6555"
                                                width="90"
                                                height="90"
                                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACe0lEQVR4nO3cPW4TURiF4fMN2BMJCtOzAkBQImUNqSkiIRnJMuJ3ARQsgNbVzBgCRtCkZhEUWLFEWAGioIitKEGKi7k0FKNA8cWTnBlfzlNa19bRq9F10hgQERERERERERER+a/ZWQ73+/2NTqfzEMC2md0EcOViZrXWMYCvAD6maZqNRqMT7xvdoQeDwfUkST4BuL3CwBjNyrLcGo/H3z2HXaH7/f5Gt9v9DEU+bZam6V3Pk514Pu3PdaHIf7uzXC6HnoOu0AC2a4yJnauNK7SZ3ai3JV4hhFuec94n+mqNLbFztfGGlpoUmkShSRSaRKFJFJpEoUkUmkShSRSaRKFJFJpEoUkUmkShSRSaRKFJFJpEoUkUmkShSRSaRKFJFJpEoUkUmkShSRSaRKFJFJpEoUkUmkShSRSaRKFJFJpEoUkUmkShSRSaRKFJFJpEoUkUmsQb+uhCV6y3Q88hV+gQwrd6W+JlZq423t/r+FBvTrxCCK42rtBpmmYAZrUWxWlvPp/nnoOu0KPR6KQsyy0odtVekiRbu7u7S8/hS95PnU6nh5ubmztlWf40s2sAegC6q65cU0cAvgB4NZ/PH00mk4X3jWf6gcG6hsNhWPW9IYQHRVG8Pc89TOvyd/TOOkcG1iP0PoCnTY+oq+2hj83sXp7nv5oeUlfbQz/JsiyKf5baHPpNnufvmh5xXtoaeh/As6ZHnKc2ho7mXq5qY+ho7uWqy00PqAohvC6KIpp7uapNT/S+mT1vesRFaUvoKO/lKnboH/960cwex3gvV1FDhxDen37NzIosyybMHU2gfhkuFouXvV4PZnYfwAaAnYODgxfMDSIia+Q3OQyJCXSvhaUAAAAASUVORK5CYII="
                                              />
                                            </defs>
                                          </svg>
                                        </button>
                                        <h3 className="text-h3 font-medium font-montserrat text-secondary-dark ml-2">
                                          171
                                        </h3>
                                      </span>
                                      <span className="flex items-center">
                                        <button className="flex flex-col justify-center">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="13"
                                            viewBox="0 0 28 13"
                                            fill="none"
                                          >
                                            <path
                                              d="M1.28516 9.43588L8.74927 4.94903L16.8919 10.7178L25.7132 1.74414"
                                              stroke="#666666"
                                              strokeWidth="3"
                                            />
                                            <ellipse
                                              cx="1.28568"
                                              cy="9.43625"
                                              rx="1.28568"
                                              ry="1.28196"
                                              fill="#666666"
                                            />
                                            <ellipse
                                              cx="16.7154"
                                              cy="10.7175"
                                              rx="1.28568"
                                              ry="1.28196"
                                              fill="#666666"
                                            />
                                            <ellipse
                                              cx="25.7154"
                                              cy="1.74485"
                                              rx="1.28568"
                                              ry="1.28196"
                                              fill="#666666"
                                            />
                                            <ellipse
                                              cx="9.00053"
                                              cy="4.3093"
                                              rx="1.28568"
                                              ry="1.28196"
                                              fill="#666666"
                                            />
                                          </svg>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="28"
                                            height="13"
                                            viewBox="0 0 28 13"
                                            fill="none"
                                          >
                                            <path
                                              d="M1.28516 9.43588L8.74927 4.94903L16.8919 10.7178L25.7132 1.74414"
                                              stroke="#666666"
                                              strokeWidth="3"
                                            />
                                            <ellipse
                                              cx="1.28568"
                                              cy="9.43625"
                                              rx="1.28568"
                                              ry="1.28196"
                                              fill="#666666"
                                            />
                                            <ellipse
                                              cx="16.7154"
                                              cy="10.7175"
                                              rx="1.28568"
                                              ry="1.28196"
                                              fill="#666666"
                                            />
                                            <ellipse
                                              cx="25.7154"
                                              cy="1.74485"
                                              rx="1.28568"
                                              ry="1.28196"
                                              fill="#666666"
                                            />
                                            <ellipse
                                              cx="9.00053"
                                              cy="4.3093"
                                              rx="1.28568"
                                              ry="1.28196"
                                              fill="#666666"
                                            />
                                          </svg>
                                        </button>
                                        <h3 className="text-h3 font-medium font-montserrat text-secondary-dark ml-2">
                                          171
                                        </h3>
                                      </span>
                                      <span className="flex items-center">
                                        <button>
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            width="24"
                                            height="27"
                                            viewBox="0 0 24 27"
                                            fill="none"
                                          >
                                            <rect
                                              width="24"
                                              height="27"
                                              fill="url(#pattern2)"
                                            />
                                            <defs>
                                              <pattern
                                                id="pattern2"
                                                patternContentUnits="objectBoundingBox"
                                                width="1"
                                                height="1"
                                              >
                                                <use
                                                  xlinkHref="#image0_820_6556"
                                                  transform="translate(0 0.0555556) scale(0.0111111 0.00987654)"
                                                />
                                              </pattern>
                                              <image
                                                id="image0_820_6556"
                                                width="90"
                                                height="90"
                                                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAFy0lEQVR4nO2bb4gUZRzHv7/9M3NepbtJUaZGBVFkL3qloNIbQUTkVDwCK9mgm1vXltqCSqGaemVkXHR4e7t72YUh4UGaQZcUBBX6prDeWxp4u0WIK+bdzTI3v16cwXHtzM7uPDO7O/d8Xj7PzPP78uG5Z+Z5dg6QSCQSiUQikUgkEolEIgkP1O4AQdDf368kk8l3AewDMMfMx3t6eg4NDw8bQWWIBFWonSSTycMAXgJwJ4C7iOhlwzBOZbNZNagMS0I05mfyYrYFKXupiF5p076tVqt9kUqlevwOsFRE28LMW1VVPe237CUvGghGthR9C79lS9EL8FO2FL0Iv2RL0XXwQ7YUbYNo2VK0AyJlS9ENECVbinaBCNlStEu8yu7qY9IDBw6snJube8SyrPuJaA0zrwawlpmXE9EKACsAJDB/aieKSVVVdzV7xNo1ojOZzD2maW5m5g0AHieidQDubVOcpmV3rOhcLrdsenp6C4AdzPwkgIfbnWkRTcnuKNGpVKpHVdU+Zt4LYAuA3nZnaoBr2R0hOp1Or7MsKw1gL4Bku/M0iSvZbRWtadomInqNmbe3O4sXiOisYRg7x8fHZ22vCTLQf2iatp6I3mPmze2o7xOOMzsWZJJMJrPGNM33Aexh5q6dwTZsMwxDB3CwXmcgonVdj1QqledN0zwC4I4garaJ59Au0ZqmrZ2amjpBRBv9rtUBWHYdvm7BBwcH+wBcWCKSQUTjdn1+iSZN095g5lMQu/3tZCYVRXnbrlP4A+nW51cfAXhG9NgdTMN3aaGi+/v7lUQicZKI+kSO28m4eYcGgKiogtlsVlUU5QyA7aLG7AImVVXdWSwWG27BhazRuq5HDMM4zsxbRYzXDRDR2VqtttvtoZIQ0ZVKZRhAv4ixuoRJRVH6Gi0XC/G8Rg8ODqaZOe91nG7B7Zr8v/u8FNU0bT2A7wEoXsZpEQPAJQC/EdFFZr5MRNcty6oy83UA1+Px+LVarVaNRqNXBdVs6dcVwIPoXC637ObNm78gmAP5CoDzAM5ZlnUhEolcXLVq1RVd1213YgvRNI0FZGhZMuBhCz49Pf0O/JM8BeAMgB8jkci50dHRyz7VcYsnyUCLojVNW8/MuVaL2nAFwOfM/GW1Wv1uYmJiTvD4LXFrTd7t5hXOiaZFZ7NZ1TCMjyHmHXwGwGfMPFYqlc4DEPEnLpJJRVF2FQoFz/9U1LTo2dnZNBE96rHuVQBD8Xh89OjRo6IeVKLxvFwspCnRmUzmdtM0D3modwPA4Vgs9uHIyMg/HsbxG6GSgSZFm6b5IoC7W6jDAMZjsdihkZGRP1u4P0iESwaaEJ1KpRIAXmmhxh9ENFAoFL5p4d5AEfXgq4frLbiiKGk0/ynAmWg0+kQXSW56x+cWVzNa1/VIuVweaGJcC8DrxWLxCDrvTaIewt4u7HAlulwubwHwoMsxDWbeVyqVTrYeK1B8WZMX43bpGHR5XY2IdnegZLtXyEAkAy5E79+/Pwlgh4ux5gA8VSgUvvKcSjDM/Emd5sAkAy5EW5a1HUC80XVE9GqxWDwtJJVgqtXqQQBDmJ/ZfxHRkSAlAy5O7wYGBiaIaE+Dy04Ui8WnBWUKJY4zOpvNqkTU6OepqWg0+oLATKHEUfTMzMxGOH/Cxcycyufz18TGCh+OoiORSKMvjD4tlUrfCswTWho9DDc59NWi0aguMkyYsRWt63oEwAaHe0fz+fzv4iOFE1vR5XL5AQDLbboty7I+8CdSOLEVzcyPOdw3OTY2dsmHPKHFaY12El1vpyVxwEn0QzbthmmaX/sRJszYiiai+2y6fjh27NgNn/KEFqcZvdqm/Sc/goQdJ9Er6jUS0c8+ZQk1TqJvs2n/1Y8gYcdJdN0zjt7e3is+ZQk1TqL/rtM2NTQ0NONXmDDjtGE5Xqe5XpvEBbY/zlar1TcTiQSI6FlgXny1Wn0ruGgSiUQikUgkEolEIpFIJJJO5V/59jPipEdpIAAAAABJRU5ErkJggg=="
                                              />
                                            </defs>
                                          </svg>
                                        </button>
                                        <h3 className="text-h3 font-medium font-montserrat text-secondary-dark ml-2">
                                          5
                                        </h3>
                                      </span>
                                    </div>
                                    <p className="text-p text-[#959595] font-['Open_Sans']">
                                      14 minutes ago
                                    </p>
                                  </div>
                                  {/*Content & Links*/}
                                  <div className="flex flex-col  px-8 py-3 mx-3">
                                    <h3 className="text-h3 text-[#585858] font-['Open_Sans'] my-2">
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Fusce vel felis nisi. In
                                      hac habitasse platea dictumst. Lorem ipsum
                                      dolor sit amet, consectetur adipiscing
                                      elit.
                                    </h3>
                                    <h3 className="text-h3 text-[#3F768A]">
                                      #Fusce #vel #felis #nishac #habitasse
                                      #platea #dictumst. #Fusce #vel #felis
                                      #nisi. In hac #habitasse #platea
                                      #dictumst.{" "}
                                    </h3>
                                  </div>
                                  {/*Comment Section*/}
                                  <div className="px-8 py-2 mx-3">
                                    {/*1st Comment*/}
                                    <div>
                                      <div className=" w-auto xl:w-[625px] rounded-[15px] bg-primary-background p-3">
                                        <span className="flex justify-between items-center">
                                          <p className="text-p text-[#959595] font-['Open_Sans']">
                                            14 minutes ago
                                          </p>
                                          <span className="relative inline-block">
                                            <button>
                                              <svg
                                                width="27"
                                                height="27"
                                                viewBox="0 0 27 27"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                              >
                                                <rect
                                                  x="26.1055"
                                                  y="0.046875"
                                                  width="26.0582"
                                                  height="26.0582"
                                                  transform="rotate(90.1048 26.1055 0.046875)"
                                                  fill="url(#pattern5)"
                                                />
                                                <defs>
                                                  <pattern
                                                    id="pattern5"
                                                    patternContentUnits="objectBoundingBox"
                                                    width="1"
                                                    height="1"
                                                  >
                                                    <use
                                                      xlinkHref="#image0_800_11150"
                                                      transform="scale(0.0111111)"
                                                    />
                                                  </pattern>
                                                  <image
                                                    id="image0_800_11150"
                                                    width="90"
                                                    height="90"
                                                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACGElEQVR4nO3aQYoTQRSH8f8zJ9Ct49YrjAsNyDBrxYVewFBXMnTlADMrDzCoYzbeQcHF4E7iCbrKTQQZhPSkK69f5PstQ3fxeITQaT4JAAAAAADg/2FTDzBESum81vpa0jNJJ9uPb8xsXUq57LruasLxBgm96MVi8djMOknzHZdem9liuVx+9ZhrH2EXnVKa11rfS7o/8JZfpZQXOef1IefaV8hFb7/JXzR8yX9s+r4/Xa1W3w4x1xj3ph7gX8zsne6+ZEl6MJvNVq3naSHcolNK55KejzhinlI6azVPK+EWXUp5M/aM7RNKKOEWbWZPGxyz6ynFXbhFS3rY4IyT3Zf4irjoFsrUA9wWcdE/gpzRVMRFt/jD8bnBGU2FW3St9WLsGaWUyxaztBRu0V3XXZnZhxFHXOecx9x/EOEWLUl937+V9HOPWzfbe8MJueic8/dSyitJmzvctimlvIz4nkMKumhJyjmvzexJrfXTgMs/9n1/GvXNnRT07d1tKaWzv178P9p+fCNpXUq5iPibDAAAMI1jebyj6zgkug4HdB0O6Dqc0HU4oOtwQtfhhK7DD13HEaHrGICuwwldhwe6Did0HY7oOpzQdTii65gAXQcAAMBQx/J4R9dxSHQdDug6HNB1OKHrcEDX4YSuwwldhx+6jiNC1zEAXYcTug4PdB1O6Doc0XU4oetwRNcxAboOAAAAAACAWH4Db0dlDWtUNVIAAAAASUVORK5CYII="
                                                  />
                                                </defs>
                                              </svg>
                                            </button>
                                          </span>
                                        </span>
                                        <p className="text-[16px] text-[#585858] font-['Open_Sans']">
                                          Lorem ipsum dolor sit amet,
                                          consectetur adipiscing elit. Fusce vel
                                          felis nisi. In hac habitasse platea
                                          dictumst.
                                        </p>
                                      </div>
                                      <span className="flex items-center m-2">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="14"
                                          height="14"
                                          viewBox="0 0 14 14"
                                          fill="none"
                                        >
                                          <path
                                            d="M4.68606 2.72129C4.69974 1.84496 5.2111 0.947386 6.89681 1.00241C7.93504 1.0363 8.52736 1.39325 8.84228 1.85679C9.40807 2.68961 9.01677 3.70951 8.52813 4.65491C8.95124 3.93307 9.44745 3.21749 9.83618 3.03351C10.1425 2.88855 11.6445 2.54874 12.6655 4.09506C13.4823 5.33212 12.6284 6.90691 11.9648 7.1002C11.7095 7.19684 10.6643 7.05289 10.0109 7.09154C11.8387 7.22872 13.7932 7.95729 12.6655 10.1837C12.4927 10.5745 12.0598 11.1551 11.4219 11.3698C10.1969 11.7822 9.16513 10.4744 8.34616 9.47446C8.22248 9.32345 8.10805 9.18265 8.01122 9.06259C8.30124 9.46449 8.7064 10.0572 8.98987 10.5703C9.34722 11.3918 9.26554 13.373 6.89681 13.373C6.23315 13.373 4.90584 13.0541 4.90584 11.7784C4.90584 11.1154 5.13563 10.415 5.41608 9.81829L5.11004 10.3287C4.48042 11.1341 2.85362 12.2616 1.38338 10.3287C0.99199 9.65217 0.586991 8.1445 2.09808 7.52597C2.37722 7.41171 2.30937 7.21716 2.03135 7.1002C1.43393 6.84887 0.41342 5.35145 1.43443 3.9501C2.25123 2.82901 3.37434 2.96753 3.83379 3.17693C4.19307 3.34414 4.89946 3.76529 5.25802 4.27302C4.97686 3.77713 4.67723 3.28637 4.68606 2.72129Z"
                                            fill="#6C3AC2"
                                          />
                                          <path
                                            d="M6.1821 5.883C5.98454 5.56804 5.65862 5.02452 5.41635 4.56118M5.41635 4.56118V4.56118C5.10396 3.96374 4.67553 3.39539 4.68606 2.72129C4.69974 1.84496 5.2111 0.947386 6.89681 1.00241C7.93504 1.0363 8.52736 1.39325 8.84228 1.85679C9.56118 2.91498 8.73491 4.27521 8.12709 5.40088L7.86676 5.883C8.29218 5.0293 9.20559 3.33195 9.83618 3.03351C10.1425 2.88855 11.6445 2.54874 12.6655 4.09506C13.4823 5.33212 12.6284 6.90691 11.9648 7.1002C11.7095 7.19684 10.6643 7.05289 10.0109 7.09154C9.35743 7.1302 8.98987 7.10718 8.63252 7.09107C10.5724 6.9461 14.0949 7.36168 12.6655 10.1837C12.4927 10.5745 12.0598 11.1551 11.4219 11.3698C10.1969 11.7822 9.16513 10.4744 8.34616 9.47446C8.01998 9.07621 7.75818 8.749 7.71362 8.68572C7.38926 8.22518 8.42832 9.55378 8.98987 10.5703C9.34722 11.3918 9.26554 13.373 6.89681 13.373C6.23315 13.373 4.90584 13.0541 4.90584 11.7784C4.90584 10.5027 5.75668 9.08841 6.1821 8.54075L5.11004 10.3287C4.48042 11.1341 2.85362 12.2616 1.38338 10.3287C0.99199 9.65217 0.586991 8.1445 2.09808 7.52597V7.52597C2.37722 7.41171 2.30937 7.21716 2.03135 7.1002V7.1002C1.43393 6.84887 0.41342 5.35145 1.43443 3.9501C2.25123 2.82901 3.37434 2.96753 3.83379 3.17693C4.25921 3.37492 5.1713 3.92896 5.41635 4.56118Z"
                                            stroke="#F9BF7A"
                                            strokeWidth="0.5"
                                          />
                                          <ellipse
                                            cx="6.81038"
                                            cy="6.90804"
                                            rx="1.93733"
                                            ry="1.83382"
                                            fill="url(#paint0_linear_800_11137)"
                                          />
                                          <defs>
                                            <linearGradient
                                              id="paint0_linear_800_11137"
                                              x1="4.87305"
                                              y1="7.27481"
                                              x2="8.74759"
                                              y2="7.20659"
                                              gradientUnits="userSpaceOnUse"
                                            >
                                              <stop stop-color="#F9BF7A" />
                                              <stop
                                                offset="1"
                                                stop-color="#EEE3C1"
                                              />
                                            </linearGradient>
                                          </defs>
                                        </svg>
                                        <p className="flex items-center text-[13px] text-[#666666] font-['Open_Sans'] ml-2">
                                          171 Likes{" "}
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="3"
                                            height="3"
                                            viewBox="0 0 3 3"
                                            fill="none"
                                            style={{ marginLeft: "5px" }}
                                          >
                                            <circle
                                              cx="1.5"
                                              cy="1.5"
                                              r="1.5"
                                              fill="#666666"
                                            />
                                          </svg>
                                        </p>
                                        <p className="text-[13px] text-[#666666] font-['Open_Sans'] ml-2">
                                          3 replies
                                        </p>
                                      </span>
                                    </div>
                                    {/*2nd Comment*/}
                                    <div className="flex items-start mx-3">
                                      <span>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="25"
                                          height="30"
                                          viewBox="0 0 25 30"
                                          fill="none"
                                        >
                                          <path
                                            d="M24.3513 25.2582C24.5478 25.4526 24.5498 25.7692 24.3558 25.9653L21.1942 29.1609C21.0002 29.3571 20.6836 29.3584 20.4871 29.164C20.2906 28.9696 20.2886 28.653 20.4826 28.4569L23.2929 25.6163L20.4464 22.8002C20.2499 22.6058 20.2479 22.2892 20.4419 22.0931C20.6359 21.897 20.9525 21.8956 21.149 22.09L24.3513 25.2582ZM1.10146 25.7121L1.10466 26.2121L0.604662 26.2143L0.601461 25.7143L1.10146 25.7121ZM24.0032 26.1133L1.10466 26.2121L1.09826 25.2121L23.9968 25.1133L24.0032 26.1133ZM0.601461 25.7143L0.438585 0.271609L1.43858 0.267294L1.60145 25.7099L0.601461 25.7143Z"
                                            fill="#979797"
                                          />
                                        </svg>
                                      </span>
                                      <div>
                                        <div className=" w-auto xl:w-[625px] rounded-[15px] bg-primary-background p-3">
                                          <span className="flex justify-between items-center">
                                            <p className="text-p text-[#959595] font-['Open_Sans']">
                                              14 minutes ago
                                            </p>
                                            <span className="relative inline-block">
                                              <button>
                                                <svg
                                                  width="27"
                                                  height="27"
                                                  viewBox="0 0 27 27"
                                                  fill="none"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                                >
                                                  <rect
                                                    x="26.1055"
                                                    y="0.046875"
                                                    width="26.0582"
                                                    height="26.0582"
                                                    transform="rotate(90.1048 26.1055 0.046875)"
                                                    fill="url(#pattern5)"
                                                  />
                                                  <defs>
                                                    <pattern
                                                      id="pattern5"
                                                      patternContentUnits="objectBoundingBox"
                                                      width="1"
                                                      height="1"
                                                    >
                                                      <use
                                                        xlinkHref="#image0_800_11150"
                                                        transform="scale(0.0111111)"
                                                      />
                                                    </pattern>
                                                    <image
                                                      id="image0_800_11150"
                                                      width="90"
                                                      height="90"
                                                      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACGElEQVR4nO3aQYoTQRSH8f8zJ9Ct49YrjAsNyDBrxYVewFBXMnTlADMrDzCoYzbeQcHF4E7iCbrKTQQZhPSkK69f5PstQ3fxeITQaT4JAAAAAADg/2FTDzBESum81vpa0jNJJ9uPb8xsXUq57LruasLxBgm96MVi8djMOknzHZdem9liuVx+9ZhrH2EXnVKa11rfS7o/8JZfpZQXOef1IefaV8hFb7/JXzR8yX9s+r4/Xa1W3w4x1xj3ph7gX8zsne6+ZEl6MJvNVq3naSHcolNK55KejzhinlI6azVPK+EWXUp5M/aM7RNKKOEWbWZPGxyz6ynFXbhFS3rY4IyT3Zf4irjoFsrUA9wWcdE/gpzRVMRFt/jD8bnBGU2FW3St9WLsGaWUyxaztBRu0V3XXZnZhxFHXOecx9x/EOEWLUl937+V9HOPWzfbe8MJueic8/dSyitJmzvctimlvIz4nkMKumhJyjmvzexJrfXTgMs/9n1/GvXNnRT07d1tKaWzv178P9p+fCNpXUq5iPibDAAAMI1jebyj6zgkug4HdB0O6Dqc0HU4oOtwQtfhhK7DD13HEaHrGICuwwldhwe6Did0HY7oOpzQdTii65gAXQcAAMBQx/J4R9dxSHQdDug6HNB1OKHrcEDX4YSuwwldhx+6jiNC1zEAXYcTug4PdB1O6Doc0XU4oetwRNcxAboOAAAAAACAWH4Db0dlDWtUNVIAAAAASUVORK5CYII="
                                                    />
                                                  </defs>
                                                </svg>
                                              </button>
                                            </span>
                                          </span>
                                          <p className="text-[16px] text-[#585858] font-['Open_Sans']">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Fusce
                                            vel felis nisi. In hac habitasse
                                            platea dictumst.
                                          </p>
                                        </div>
                                        <span className="flex items-center m-2">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                          >
                                            <path
                                              d="M4.68606 2.72129C4.69974 1.84496 5.2111 0.947386 6.89681 1.00241C7.93504 1.0363 8.52736 1.39325 8.84228 1.85679C9.40807 2.68961 9.01677 3.70951 8.52813 4.65491C8.95124 3.93307 9.44745 3.21749 9.83618 3.03351C10.1425 2.88855 11.6445 2.54874 12.6655 4.09506C13.4823 5.33212 12.6284 6.90691 11.9648 7.1002C11.7095 7.19684 10.6643 7.05289 10.0109 7.09154C11.8387 7.22872 13.7932 7.95729 12.6655 10.1837C12.4927 10.5745 12.0598 11.1551 11.4219 11.3698C10.1969 11.7822 9.16513 10.4744 8.34616 9.47446C8.22248 9.32345 8.10805 9.18265 8.01122 9.06259C8.30124 9.46449 8.7064 10.0572 8.98987 10.5703C9.34722 11.3918 9.26554 13.373 6.89681 13.373C6.23315 13.373 4.90584 13.0541 4.90584 11.7784C4.90584 11.1154 5.13563 10.415 5.41608 9.81829L5.11004 10.3287C4.48042 11.1341 2.85362 12.2616 1.38338 10.3287C0.99199 9.65217 0.586991 8.1445 2.09808 7.52597C2.37722 7.41171 2.30937 7.21716 2.03135 7.1002C1.43393 6.84887 0.41342 5.35145 1.43443 3.9501C2.25123 2.82901 3.37434 2.96753 3.83379 3.17693C4.19307 3.34414 4.89946 3.76529 5.25802 4.27302C4.97686 3.77713 4.67723 3.28637 4.68606 2.72129Z"
                                              fill="#6C3AC2"
                                            />
                                            <path
                                              d="M6.1821 5.883C5.98454 5.56804 5.65862 5.02452 5.41635 4.56118M5.41635 4.56118V4.56118C5.10396 3.96374 4.67553 3.39539 4.68606 2.72129C4.69974 1.84496 5.2111 0.947386 6.89681 1.00241C7.93504 1.0363 8.52736 1.39325 8.84228 1.85679C9.56118 2.91498 8.73491 4.27521 8.12709 5.40088L7.86676 5.883C8.29218 5.0293 9.20559 3.33195 9.83618 3.03351C10.1425 2.88855 11.6445 2.54874 12.6655 4.09506C13.4823 5.33212 12.6284 6.90691 11.9648 7.1002C11.7095 7.19684 10.6643 7.05289 10.0109 7.09154C9.35743 7.1302 8.98987 7.10718 8.63252 7.09107C10.5724 6.9461 14.0949 7.36168 12.6655 10.1837C12.4927 10.5745 12.0598 11.1551 11.4219 11.3698C10.1969 11.7822 9.16513 10.4744 8.34616 9.47446C8.01998 9.07621 7.75818 8.749 7.71362 8.68572C7.38926 8.22518 8.42832 9.55378 8.98987 10.5703C9.34722 11.3918 9.26554 13.373 6.89681 13.373C6.23315 13.373 4.90584 13.0541 4.90584 11.7784C4.90584 10.5027 5.75668 9.08841 6.1821 8.54075L5.11004 10.3287C4.48042 11.1341 2.85362 12.2616 1.38338 10.3287C0.99199 9.65217 0.586991 8.1445 2.09808 7.52597V7.52597C2.37722 7.41171 2.30937 7.21716 2.03135 7.1002V7.1002C1.43393 6.84887 0.41342 5.35145 1.43443 3.9501C2.25123 2.82901 3.37434 2.96753 3.83379 3.17693C4.25921 3.37492 5.1713 3.92896 5.41635 4.56118Z"
                                              stroke="#F9BF7A"
                                              strokeWidth="0.5"
                                            />
                                            <ellipse
                                              cx="6.81038"
                                              cy="6.90804"
                                              rx="1.93733"
                                              ry="1.83382"
                                              fill="url(#paint0_linear_800_11137)"
                                            />
                                            <defs>
                                              <linearGradient
                                                id="paint0_linear_800_11137"
                                                x1="4.87305"
                                                y1="7.27481"
                                                x2="8.74759"
                                                y2="7.20659"
                                                gradientUnits="userSpaceOnUse"
                                              >
                                                <stop stop-color="#F9BF7A" />
                                                <stop
                                                  offset="1"
                                                  stop-color="#EEE3C1"
                                                />
                                              </linearGradient>
                                            </defs>
                                          </svg>
                                          <p className="flex items-center text-[13px] text-[#666666] font-['Open_Sans'] ml-2">
                                            171 Likes{" "}
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="3"
                                              height="3"
                                              viewBox="0 0 3 3"
                                              fill="none"
                                              style={{ marginLeft: "5px" }}
                                            >
                                              <circle
                                                cx="1.5"
                                                cy="1.5"
                                                r="1.5"
                                                fill="#666666"
                                              />
                                            </svg>
                                          </p>
                                          <p className="text-[13px] text-[#666666] font-['Open_Sans'] ml-2">
                                            3 replies
                                          </p>
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </React.Fragment>
                              ) : (
                                <div className="h-[110%]">
                                  <div className="ml-40 p-8 flex justify-start lg:h-auto h-full">
                                    <div className="flex flex-col items-center mx-12 p-8">
                                      <div className="flex items-center relative">
                                        <p className="absolute -left-[210px] w-[210px] h-[52px] tracking-[.3em] font-montserrat font-semibold text-p text-[#656565]">
                                          3:41 PM
                                          <br />
                                          01/01/2022
                                        </p>
                                        <div className="flex items-center">
                                          <span class="p-2 rounded-full transition duration-500 ease-in-out ml-15 h-8 w-8 text-center bg-secondary-purple text-primary-white">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="14"
                                              height="12"
                                              viewBox="0 0 14 12"
                                              fill="none"
                                            >
                                              <path
                                                d="M12.4989 1.01741L4.44201 9.2245L1.50109 6.19755C1.34792 6.07273 1.10284 6.07273 0.980306 6.19755L0.0919037 7.10252C-0.0306346 7.22734 -0.0306346 7.47699 0.0919037 7.63302L4.19694 11.7834C4.35011 11.9394 4.56455 11.9394 4.71772 11.7834L13.9081 2.42167C14.0306 2.29684 14.0306 2.0472 13.9081 1.89117L13.0197 1.01741C12.8972 0.861384 12.6521 0.861384 12.4989 1.01741Z"
                                                fill="white"
                                              />
                                            </svg>
                                          </span>
                                          <p class="absolute ml-10 text-center  w-40 text-[16px] font-semibold text-[#686868] font-montserrat">
                                            Post Created
                                          </p>
                                        </div>
                                      </div>
                                      <div className="transition duration-500 ease-in-out w-[2px] h-[120px] bg-secondary-purple"></div>
                                      <div className="flex items-center relative">
                                        <p className="absolute -left-[210px] w-[210px] h-[52px] tracking-[.3em] font-montserrat font-semibold text-p text-[#656565]">
                                          3:41 PM
                                          <br />
                                          01/01/2022
                                        </p>
                                        <div className="flex items-center">
                                          <span class="p-2 rounded-full transition duration-500 ease-in-out ml-15 h-8 w-8 text-center bg-secondary-purple text-primary-white">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="14"
                                              height="12"
                                              viewBox="0 0 14 12"
                                              fill="none"
                                            >
                                              <path
                                                d="M12.4989 1.01741L4.44201 9.2245L1.50109 6.19755C1.34792 6.07273 1.10284 6.07273 0.980306 6.19755L0.0919037 7.10252C-0.0306346 7.22734 -0.0306346 7.47699 0.0919037 7.63302L4.19694 11.7834C4.35011 11.9394 4.56455 11.9394 4.71772 11.7834L13.9081 2.42167C14.0306 2.29684 14.0306 2.0472 13.9081 1.89117L13.0197 1.01741C12.8972 0.861384 12.6521 0.861384 12.4989 1.01741Z"
                                                fill="white"
                                              />
                                            </svg>
                                          </span>
                                          <p class="absolute ml-10 text-center  w-40 text-[16px] font-semibold text-[#686868] font-montserrat">
                                            Flag Raised
                                          </p>
                                        </div>
                                      </div>
                                      <div className="transition duration-500 ease-in-out w-[2px] h-[80px] bg-secondary-purple"></div>
                                      <div className="flex items-center relative">
                                        <div className="flex items-center">
                                          <span class="p-2 rounded-full transition duration-500 ease-in-out ml-15 h-8 w-8 text-center bg-secondary-purple text-primary-white">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="18"
                                              height="13"
                                              viewBox="0 0 18 13"
                                              fill="none"
                                            >
                                              <path
                                                d="M7.69725 7.2H4.86525V10H3.15325V7.2H0.32125V5.6H3.15325V2.8H4.86525V5.6H7.69725V7.2ZM13.8783 5.424C14.9129 5.552 15.7023 5.904 16.2463 6.48C16.7903 7.056 17.0623 7.776 17.0623 8.64C17.0623 9.29067 16.8969 9.88267 16.5663 10.416C16.2356 10.9493 15.7343 11.376 15.0623 11.696C14.4009 12.0053 13.5903 12.16 12.6302 12.16C11.8303 12.16 11.0569 12.048 10.3103 11.824C9.57425 11.5893 8.94492 11.2693 8.42225 10.864L9.31825 9.248C9.72358 9.58933 10.2143 9.86133 10.7903 10.064C11.3769 10.256 11.9796 10.352 12.5983 10.352C13.3343 10.352 13.9103 10.2027 14.3263 9.904C14.7529 9.59467 14.9663 9.17867 14.9663 8.656C14.9663 8.13333 14.7636 7.728 14.3583 7.44C13.9636 7.14133 13.3556 6.992 12.5343 6.992H11.5103V5.568L14.0543 2.544H8.96625V0.799999H16.5983V2.192L13.8783 5.424Z"
                                                fill="white"
                                              />
                                            </svg>
                                          </span>
                                        </div>
                                      </div>
                                      <div className="transition duration-500 ease-in-out w-[2px] h-[80px] bg-secondary-purple"></div>
                                      <div className="flex items-center relative">
                                        <p className="absolute -left-[210px] w-[210px] h-[52px] tracking-[.3em] font-montserrat font-semibold text-p text-[#656565]">
                                          3:41 PM
                                          <br />
                                          01/01/2022
                                        </p>
                                        <div className="flex items-center">
                                          <span class="p-[10px] rounded-full transition duration-500 ease-in-out ml-15 h-8 w-8 text-center bg-[#F5D300] text-primary-white items-center outline outline-offset-4 my-1 outline-[#F5D300]">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="10"
                                              height="11"
                                              viewBox="0 0 10 11"
                                              fill="none"
                                            >
                                              <path
                                                d="M6.48438 5.48438L9.85938 2.14062C10.0469 1.95312 10.0469 1.60938 9.85938 1.42188L9.07812 0.640625C8.89062 0.453125 8.54688 0.453125 8.35938 0.640625L5.01562 4.01562L1.64062 0.640625C1.45312 0.453125 1.10938 0.453125 0.921875 0.640625L0.140625 1.42188C-0.046875 1.60938 -0.046875 1.95312 0.140625 2.14062L3.51562 5.48438L0.140625 8.85938C-0.046875 9.04688 -0.046875 9.39062 0.140625 9.57812L0.921875 10.3594C1.10938 10.5469 1.45312 10.5469 1.64062 10.3594L5.01562 6.98438L8.35938 10.3594C8.54688 10.5469 8.89062 10.5469 9.07812 10.3594L9.85938 9.57812C10.0469 9.39062 10.0469 9.04688 9.85938 8.85938L6.48438 5.48438Z"
                                                fill="white"
                                              />
                                            </svg>
                                          </span>
                                          <p class="absolute ml-10 text-center  w-40 text-[16px] font-semibold text-[#686868] font-montserrat">
                                            User Verification
                                          </p>
                                        </div>
                                      </div>
                                      <div className="transition duration-500 ease-in-out w-[2px] h-[120px] bg-[#F5D300]"></div>
                                      <div className="flex items-center relative">
                                        <p className="absolute -left-[210px] w-[210px] h-[52px] tracking-[.3em] font-montserrat font-semibold text-p text-[#656565]">
                                          3:41 PM
                                          <br />
                                          01/01/2022
                                        </p>
                                        <div className="flex items-center">
                                          <span class="p-1 rounded-full transition duration-500 ease-in-out ml-15 h-8 w-8 text-center bg-[#686868] text-primary-white">
                                            4
                                          </span>
                                          <p class="absolute ml-10 text-center  w-40 text-[16px] font-semibold text-[#686868] font-montserrat">
                                            Post Suspended
                                          </p>
                                        </div>
                                      </div>
                                      <div className="transition duration-500 ease-in-out w-[2px] h-[120px] bg-[#686868]"></div>
                                      <div className="flex items-center relative">
                                        <p className="absolute -left-[210px] w-[210px] h-[52px] tracking-[.3em] font-montserrat font-semibold text-p text-[#656565]">
                                          3:41 PM
                                          <br />
                                          01/01/2022
                                        </p>
                                        <div className="flex items-center">
                                          <span class="p-1 rounded-full transition duration-500 ease-in-out ml-15 h-8 w-8 text-center bg-[#686868] text-primary-white">
                                            5
                                          </span>
                                          <p class="absolute ml-10 text-center  w-40 text-[16px] font-semibold text-[#686868] font-montserrat">
                                            Flag Removed
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </React.Fragment>,
                          document.querySelector("body")
                        )}
                      <hr className="w-50%"></hr>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </Page>
    </>
  );
}
