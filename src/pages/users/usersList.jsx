import React, { useState, useEffect } from "react";
import { Page } from "../../components";
import UsersListImage from "../../assets/images/usersList.png";
import { Link as RouterLink, Routes } from "react-router-dom";
import * as ROUTES from "../../constant/routes";
import { getUsers } from "../../assets/js/script";
import Loader from "../../components/Loader/Loader";

export default function UsersList() {
  const [usersList,setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [user, setUser] = useState({});
  const [onSelect,setOnSelect] = useState();

  useEffect(() => {
    const fetchUsersHandler = async() => {
      setIsLoading(true)
      const { response } = await getUsers();
      if(response.status === true) {
        setUserList(response.data);
        setOnSelect(response.data[0].id)

      }
     setIsLoading(false)
    }
    fetchUsersHandler();
  },[])



  
  const getMoreInfo = (id) => {
    let userData = usersList.find(user => user.id === id ? user:null);
    setUser(userData);
    setOnSelect(id);
    setShowContent(true);
  };

  if(isLoading){
    return <Loader width="50" radius="20" dark={false}></Loader>
  }

  return (
    <>
      <Page active="wallet">
        {/*Main Content*/}
        <div className={`${showContent ? "w-[72%]" : "w-full"}`}>
          <div className="p-3 lg:px-0 xl:px-3">
            <h1 className="text-h1 text-[#323232] leading-[44px] font-montserrat not-italic font-medium mb-2">
              Users List
            </h1>
            <div className="flex items-center justify-start">
              <input className="w-[456px] h-[46px] px-4 mt-3 rounded-[8px] bg-primary-white box-border border border-solid border-[#EDEDED] mr-3" />
            </div>
          </div>
          {/*User List*/}
          <div
            className={`relative ease-in-out duration-300 w-full ${
              showContent
                ? "z-10 left-[-7.9%] 2xl:left-[-6.8%]"
                : "lg:left-[-69px] xl:left-[-100px]"
            }`}
          >
            <div className="grid grid-cols-5 gap-4 place-items-center my-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                style={{ marginLeft: "1.5rem" }}
              >
                <rect width="30" height="30" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use href="#image0_820_8006" transform="scale(0.0333333)" />
                  </pattern>
                  <image
                    id="image0_820_8006"
                    width="30"
                    height="30"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAiklEQVRIie2VSwqAMAwFR/RyejFbr+Vt9AZudKMgYq3RKH4y8DYNJBA6BAxjHxlQAS3QAH58uxwP9IuUkgb1SgNJcqAI1Or5IO11dEASqPXKswBwnFz1UabP1YxxQHrH4O/xXk9jxDze8jSWUx5veRrjkMfm6f/4jtfSeyzxWvUeS7xWucfmtfFcBprrd+YnlMKSAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg>
              <h3 className="font-h3 font-montserrat font-medium">Name</h3>
              <h3 className="font-h3 font-montserrat font-medium">UserName</h3>
              <h3 className="font-h3 font-montserrat font-medium">Followers</h3>
              <h3 className="font-h3 font-montserrat font-medium">Following</h3>
            </div>
            <div className="flex flex-col justify-center">
              {usersList.map((user, key) => {
                  return (
                    //Focus State ??
                    <div
                      key={key}
                      onClick={() => getMoreInfo(user.id)}
                      className={`grid grid-cols-5 gap-4 place-items-center w-auto p-4 my-2 justify-around hover:bg-primary-white hover:border-primary-light  border cursor-pointer  focus:border focus:bg-primary-white focus:border-primary-light ${
                        showContent ? "border-r-0" : "border-r"
                      } ${
                        onSelect === user.id
                          ? "bg-primary-white border border-solid border-primary-light"
                          : "bg-transparent border-transparent"
                      }`}
                    >
                      <img
                        className="w-[67px] h-[67px] rounded-full"
                        src={user.profile_image}
                        alt="user"
                      />
                      <h3 className="text-[#323232] text-[16px] font-medium font-['Open_Sans']">
                        {user.name}
                      </h3>
                      <h3 className="text-[#5B5B5B] text-[16px] font-medium font-['Open_Sans']">
                        {user.user_name}
                      </h3>
                      <h3 className="text-[#5B5B5B] text-[16px] font-medium font-['Open_Sans']">
                        {user.followers}
                      </h3>
                      <h3 className="text-[#5B5B5B] text-[16px] font-medium font-['Open_Sans']">
                        {user.following}
                      </h3>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/*Swipeable Sidebar*/}
        <div
          className={`bg-primary-white w-[33%] min-h-screen float-right fixed right-0 top-0 border-2 border-solid border-primary-light ease-in-out duration-300 ${
            showContent ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/*Profile Preview*/}
          <div className="flex lg:px-5 xl:px-8 py-6 items-center justify-between">
            <div className="flex">
              <img
                className="lg:w-[55px] lg:h-[55px] xl:w-[67px] xl:h-[67px] rounded-full"
                src={user.profile_image}
                alt="user"
              />
              <div className="flex flex-col ml-5 justify-center">
                <h2 className="text-[#323232] lg:text-h3 xl:text-h2 font-medium font-montserrat">
                  {user.name}
                </h2>
                <h3 className="text-[#AFAFB1] text-h3 font-medium font-['Catamaran']">
                  {user.user_name}
                </h3>
              </div>
            </div>
            <RouterLink to={ROUTES.PROFILEFEED}>
              <h3 className="text-secondary-purple text-h3 font-medium font-['Catamaran'] underline underline-offset-2">
                Full profile
              </h3>
            </RouterLink>
          </div>
          {/*Stats*/}
          <div className="flex items-center justify-between lg:px-5 xl:px-8 py-6">
            <span className="flex flex-col items-center">
              <h2 className="text-[#323232] text-h2 font-medium font-montserrat">
                80
              </h2>
              <h3 className="text-[#AFAFB1] text-h3 font-medium font-['Catamaran']">
                Posts
              </h3>
            </span>
            <span className="flex flex-col items-center">
              <h2 className="text-[#323232] text-h2 font-medium font-montserrat">
                {user.followers}
              </h2>
              <h3 className="text-[#AFAFB1] text-h3 font-medium font-['Catamaran']">
                Followers
              </h3>
            </span>
            <span className="flex flex-col items-center">
              <h2 className="text-[#323232] text-h2 font-medium font-montserrat">
                {user.following}
              </h2>
              <h3 className="text-[#AFAFB1] text-h3 font-medium font-['Catamaran']">
                Following
              </h3>
            </span>
            <span className="flex flex-col items-center">
              <h2 className="text-[#323232] text-h2 font-medium font-montserrat">
                100
              </h2>
              <h3 className="text-[#AFAFB1] text-h3 font-medium font-['Catamaran']">
                Trending
              </h3>
            </span>
          </div>
          {/*Graphical Statistics*/}

          {/*Recent Activities*/}
          <div className="lg:px-4 xl:px-8 p-8">
            <div className="bg-[#FDFDFE] border border-solid border-[#EBEBEB] rounded-[15px]">
              <div className="flex items-center justify-between box-border bg-[#F6F6F6] border border-solid border-[#F5F5F5] rounded-b-none rounded-t-[15px] py-3 px-5">
                <h3 className="text-[#323232] text-h3 font-medium font-['Catamaran']">
                  Recent Activities
                </h3>
                <select className="w-[88.34px] h-[26px] rounded-[5px] bg-secondary-purple text-primary-white">
                  <option value="all" className="bg-primary-white text-black">
                    all
                  </option>
                  <option
                    value="following"
                    className="bg-primary-white text-black"
                  >
                    following
                  </option>
                  <option
                    value="likes/dislikes"
                    className="bg-primary-white text-black"
                  >
                    likes/dislikes
                  </option>
                  <option
                    value="comment"
                    className="bg-primary-white text-black"
                  >
                    comment
                  </option>
                </select>
              </div>
              <ul>
                <li className="p-3 flex justify-between">
                  <h3 className="text-[#696969] text-h3 font-normal font-['Open_Sans']">
                    1
                  </h3>
                  <h3 className="text-[#696969] text-h3 font-normal font-['Open_Sans']">
                    Activity 123
                  </h3>
                  <h3 className="text-[#696969] text-h3 font-normal font-['Open_Sans']">
                    dd/mm/yy hh:mm
                  </h3>
                </li>
                <li className="p-3 flex justify-between">
                  <h3 className="text-[#696969] text-h3 font-normal font-['Open_Sans']">
                    2
                  </h3>
                  <h3 className="text-[#696969] text-h3 font-normal font-['Open_Sans']">
                    Activity 123
                  </h3>
                  <h3 className="text-[#696969] text-h3 font-normal font-['Open_Sans']">
                    dd/mm/yy hh:mm
                  </h3>
                </li>
                <li className="p-3 flex justify-between">
                  <h3 className="text-[#696969] text-h3 font-normal font-['Open_Sans']">
                    3
                  </h3>
                  <h3 className="text-[#696969] text-h3 font-normal font-['Open_Sans']">
                    Activity 123
                  </h3>
                  <h3 className="text-[#696969] text-h3 font-normal font-['Open_Sans']">
                    dd/mm/yy hh:mm
                  </h3>
                </li>
              </ul>
              <div className="flex justify-end">
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
            </div>
          </div>
          {/*Card Stats*/}
          <div className="lg:px-5 xl:px-8 p-8">
            <h3 className="text-secondary-purple text-h3 font-medium font-['Catamaran'] underline underline-offset-2">
              Full profile
            </h3>
          </div>
        </div>
      </Page>
    </>
  );
}
