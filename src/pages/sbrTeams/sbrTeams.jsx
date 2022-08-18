import React, { useState,useRef,useEffect } from "react";
import ReactDOM from "react-dom";
import { Link as RouterLink } from "react-router-dom";
import * as ROUTES from "../../constant/routes";
import { Page } from "../../components";
import SbrTeamCard from "../../containers/sbrTeamCard";
import { addTeamMembers, getTeams, removeMember } from "../../assets/js/script";
import Loader from "../../components/Loader/Loader";


export default function SbrTeams() {
  const [team,setTeam] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openCreateUserModal, setOpenCreateUserModal] = useState(false);
  const [openRegisteredModal, setOpenRegisteredModal] = useState(false);
  const [openFilterDropDown,setOpenFilterDropDown] = useState(false);
  const [filterTab,setFilterTab] = useState("User Role");
  const [newMember,setNewMember] = useState({
    name:"",
    phoneNo:"",
    email:"",
    role:""
  })

  const dropdownRef = useRef();


  useEffect(() => {
    const fetchTeamsHandler = async() => {
      setIsLoading(true)
      const { response } = await getTeams();
      if(response.status === true) {
        setTeam(response.data.rows)
        setIsLoading(false)
      }
    }
    
    fetchTeamsHandler();
  },[])

  useEffect(() => {
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


  const RemoveMembersHandler = async (id) => {
    const { response } = await removeMember(id);
    console.log(response)
    if(response.status === false){
      const FilteredTeam = team.filter((m) => m.id !== id)
      setTeam(FilteredTeam)
    }
    console.log(id)
  }

  const onChangeHandler = (event) => {
    setNewMember((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const { response } = await addTeamMembers(newMember);
    console.log(response)
    setOpenRegisteredModal(true);
    setOpenCreateUserModal(false);
  }

  if(isLoading){
    return <Loader width="50" radius="20" dark={false}></Loader>
  }
  return (
    <>
      <Page active="wallet">
        <div className="p-3">
          <h1 className="text-h1 text-[#323232] leading-[44px] font-montserrat not-italic font-medium mb-2">
            SBR Team
          </h1>
          <div className="flex items-center justify-start relative">
            <input
              className="w-[456px] h-[46px] px-4 mt-3 rounded-[8px] bg-primary-white box-border border border-solid border-[#EDEDED] mr-3"
              placeholder="Enter Search"
            />
            <button
              className="w-[173px] h-[46px] px-4 mt-3 rounded-[8px] bg-primary-white box-border border border-solid border-[#EDEDED] flex items-center relative"
              onClick={() => setOpenFilterDropDown((prevState) => !prevState)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
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
                      href="#image0_835_9117"
                      transform="translate(0.0208333) scale(0.0106481 0.0111111)"
                    />
                  </pattern>
                  <image
                    id="image0_835_9117"
                    width="90"
                    height="90"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAC30lEQVR4nO3cvY7TQBQF4DNmpaxIJCj5EU9A6S3oeQF6BFUUICziR6LP0iIlBRRJbEoaUtDwAJEolmITiYK8ACDRQRNREGUoFpA1sNiyx3dmrPPVk9nJ0e493tgKQERERERERETUHKrIol6vd1op9VRrfR3AmZrPFIpvAF622+3Ho9Hoe97inYKbDrXWt6qdq3HOAri7Xq93ANzOWxzlLRgMBhGAmxYO1lQ3fmX0X7kLyI5TeQvm87mO4/gSgD2B8wRHa/1iOBy+yVtX6De63W4/BPAcxwVAx75qrZ91Op1HRRYXuur4l263eyWKojmAVtk9AvNju91eTdP0bZkX546OkyyXy09xHH8EcK3sHiHRWt9J0/R12deXDhoAFovF+ziOz6Ph81trPU6S5EmVPWxcddxTSpX6cwrE4e7u7oOqm5Se0Vn9fv/cZrM5AnDRxn4e+RJF0d54PP5cdSMrQQONLMdK5WeqNKOzmlaOVcvPZC1o4E85XgAQ29zXgUnV8jPV8S/4fuDleNhqte7b3tTajM4KuBytlZ+plqCBIMvRavmZrM7orNDK0Xb5mWoLGgiqHK2Xn0ni82jfy7GW8jPVNqOzPC7H2srPJBI04GU51lp+JrFbWWmavgPgzQ1epdS+VMhAzWVo8qgcJ9Pp9EDyB7q4Oeu6HEXKzyQ2o7MclqNY+ZmcBA04KUfR8jM5e65Duhyly88kWoYmwXIULz+TD08q1V2OTsrP5GxGZ9VYjs7Kz+RF0EAt5ei0/Ew+jA4A9svRdfkRERERueHNdfRvvV5P29hnOp169d68uY5uOgYthEELYdBCGLQQBi2EQQth0EIYtBAGLYRBC2HQQhi0EAYthEELYdBCGLQQBi2EQQth0EKaFvQKwIFS6rLrg5iKfjepz1YAZkqpV5PJZOX6MCcJNeggws0KKejgws3yPeigw83yMegVgJnWepYkyQfXhyEiIiIiIiIior/9BNsGEKMUckuPAAAAAElFTkSuQmCC"
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
              <div className="absolute w-[302px] h-[292px] flex bg-primary-white -bottom-[300px] right-[38%] z-50 rounded-[10px] shadow-[16px_16px_30px_rgba(0,0,0,0.25)]" ref={dropdownRef}>
                <div className="flex flex-col border-r border-solid border-[#C4C4C4] w-[35%] pt-8">
                  <button
                    className={`font-['Open_sans'] text-[12px] text-[#7D7D7D]  hover:bg-[#F9F8FD] p-1 ${
                      filterTab === "User Role"
                        ? "bg-[#F9F8FD]"
                        : "bg-primary-white"
                    }`}
                    onClick={() => setFilterTab("User Role")}
                  >
                    User Role
                  </button>
                  <button
                    className={`font-['Open_sans'] text-[12px] text-[#7D7D7D]  hover:bg-[#F9F8FD] p-1 ${
                      filterTab === "Status"
                        ? "bg-[#F9F8FD]"
                        : "bg-primary-white"
                    }`}
                    onClick={() => setFilterTab("Status")}
                  >
                    Status
                  </button>
                </div>
                {filterTab === "User Role" ? (
                  <div className="flex flex-col p-6 pr-0 items-start justify-between">
                  <div className="flex flex-col">
                    <span className="m-1">
                      <input
                        type="checkbox"
                        className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                        value="Admin"
                      />
                      <label className="text-[12px] font-['Open_Sans'] text-[#7D7D7D]">
                        Admin
                      </label>
                    </span>
                    <span className="m-1">
                      <input
                        type="checkbox"
                        className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                        value="Executive"
                      />
                      <label className="text-[12px] font-['Open_Sans'] text-[#7D7D7D]">
                      Executive
                      </label>
                    </span>
                  </div>
                  <button className="font-['Cabin'] text-primary-white text-[12px] bg-secondary-purple rounded-[9px] w-[87px] p-2">Done</button>
                </div>
                ) : (
                  <div className="flex flex-col p-6 pr-0 items-start justify-between">
                    <div className="flex flex-col">
                      <span className="m-1">
                        <input
                          type="checkbox"
                          className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                          value="Pending"
                        />
                        <label className="text-[12px] font-['Open_Sans'] text-[#7D7D7D]">
                          Pending
                        </label>
                      </span>
                      <span className="m-1">
                        <input
                          type="checkbox"
                          className="bg-primary-white border border-solid border-[#7D7D7D] mr-4 accent-[#6c3ac2]"
                          value="Recently joined"
                        />
                        <label className="text-[12px] font-['Open_Sans'] text-[#7D7D7D]">
                          Recently joined
                        </label>
                      </span>
                    </div>
                    <button className="font-['Cabin'] text-primary-white text-[12px] bg-secondary-purple rounded-[9px] w-[87px] p-2">Done</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="py-5 px-3 grid gap-x-0 lg:gap-x-12 gap-y-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
          <div className="bg-primary-white w-[244px] h-[329px] rounded-[20px] flex flex-col justify-center items-center relative p-4 border border-solid border-[#E3E3E3]">
            <button
              className="bg-[#E1E0E0] text-primary-white w-[107px] h-[107px] rounded-full flex items-center justify-center"
              onClick={() => setOpenCreateUserModal(true)}
            >
              <svg
                width="56"
                height="49"
                viewBox="0 0 56 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M56 24.5C56 25.5833 55.5253 26.6304 54.6377 27.3887C53.7707 28.1651 52.5735 28.5984 51.3351 28.5984H32.6753V44.9197C32.6753 46.003 32.1799 47.0501 31.2923 47.8084C30.4254 48.5667 29.2488 49 28.0103 49C26.7718 49 25.5746 48.5667 24.7077 47.8084C23.8201 47.0501 23.3247 46.003 23.3247 44.9197V28.5984H4.66495C3.42647 28.5984 2.22927 28.1651 1.36233 27.3887C0.495393 26.6304 0 25.5833 0 24.5C0 23.4167 0.495393 22.3876 1.36233 21.6113C2.22927 20.853 3.42647 20.4197 4.66495 20.4197H23.3247V4.09838C23.3247 3.01511 23.8201 1.96794 24.7077 1.20965C25.5746 0.433309 26.7718 0 28.0103 0C29.2488 0 30.4254 0.433309 31.2923 1.20965C32.1799 1.96794 32.6753 3.01511 32.6753 4.09838V20.4197H51.3351C52.5735 20.4197 53.7707 20.853 54.6377 21.6113C55.5253 22.3876 56 23.4167 56 24.5Z"
                  fill="#C4C4C4"
                />
              </svg>
            </button>
            <p className="text-[18px] text-heading-false leading-[22px] font-normal w-[150px] h-[44px] text-center mt-8  font-montserrat">
              Add new team member
            </p>
            {openCreateUserModal &&
              ReactDOM.createPortal(
                <React.Fragment>
                  <div
                    className="bg-[#7D719270] w-full h-full left-[0px] top-[-2px] z-10 fixed"
                    onClick={() => setOpenCreateUserModal(false)}
                  ></div>
                  <div
                    className="w-[510px] h-[580px] xl:w-[535px] xl:h-[645px] rounded-[15px] bg-primary-background border border-solid border-[#C4C4C4] box-border shadow-[16px_30px_10px_rgba(96,94,94,0.15)] flex
       flex-col justify-evenly px-6 py-4 fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-20"
                  >
                    <header className="flex items-center justify-between px-4">
                      <h2 className="text-secondary-purple text-h3 leading-[24px] not-italic font-bold font-montserrat w-[422px] h-[24px] items-center">
                        Create User
                      </h2>
                      <svg
                        className="relative bottom-2 cursor-pointer"
                        onClick={() => setOpenCreateUserModal(false)}
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
                    <form onSubmit={onSubmitHandler}>
                      <div className="p-4">
                        <div>
                          <p className="text-heading-false font-semibold not-italic text-[15px] font-montserrat leading-[19px] w-[311px] h-[37.28px]">
                            Enter required details
                          </p>
                        </div>
                        <div className="flex flex-col mt-2">
                          <label className="text-heading-false font-semibold not-italic text-tablet-h5 font-montserrat leading-[20px] mt-1 xl:mt-2">
                            Name
                          </label>
                          <input
                            type="text"
                            placeholder="Michelle Miller"
                            name="name"
                            className="w-[205px] h-[47px] px-4 mt-2 xl:mt-3 rounded-[10px] bg-primary-white box-border border border-solid border-[#EEEEEE] placeholder-[#B6B6B6] font-semibold not-italic text-[16px] leading-[22px] font-['Open_Sans']"
                            value={newMember.name}
                            onChange={onChangeHandler}
                          />
                        </div>
                        <div className="flex flex-col mt-2">
                          <label className="text-heading-false font-semibold not-italic text-tablet-h5  font-montserrat leading-[20px] mt-1 xl:mt-2">
                            Number
                          </label>
                          <input
                            type="text"
                            placeholder="91+ 99999999"
                            name="phoneNo"
                            // pattern="[+]{1}[0-9]{2}[ ][1-9]{1}[0-9]{9}"
                            className="w-[221px] h-[47.08px] px-4 mt-2 xl:mt-3 rounded-[10px] bg-primary-white box-border border border-solid border-[#EEEEEE] placeholder-[#B6B6B6] font-semibold not-italic text-[16px] leading-[22px] font-['Open_Sans']"
                            value={newMember.phoneNo}
                            onChange={onChangeHandler}
                          />
                        </div>
                        <div className="flex flex-col mt-2">
                          <label className="text-heading-false font-semibold not-italic text-tablet-h5 font-montserrat leading-[20px] mt-1 xl:mt-2">
                            Email Id
                          </label>
                          <input
                            type="text"
                            placeholder="michellemiller@gmail.com"
                            name="email"
                            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                            className="w-[272px] h-[47px] px-4 mt-2 xl:mt-3 rounded-[10px] bg-primary-white box-border border border-solid border-[#EEEEEE] placeholder-[#B6B6B6] font-semibold not-italic text-[16px] leading-[22px] font-['Open_Sans']"
                            value={newMember.email}
                            onChange={onChangeHandler}
                          />
                        </div>
                        <div className="flex flex-col mt-2">
                          <label className="text-heading-false font-semibold not-italic text-tablet-h5 font-montserrat leading-[20px] mt-1 xl:mt-2">
                            Role
                          </label>
                          <input
                            type="text"
                            placeholder="Executive"
                            name="role"
                            className="w-[221px] h-[47.08px] px-4 mt-2 xl:mt-3 rounded-[10px] bg-primary-white box-border border border-solid border-[#EEEEEE] placeholder-[#B6B6B6] font-semibold not-italic text-[16px] leading-[22px] font-['Open_Sans']"
                            value={newMember.role}
                            onChange={onChangeHandler}
                          />
                        </div>
                      </div>
                      <div className="flex justify-end mt-4">
                      <button
                        className="text-[#171617] w-[120px] h-[45px] lg:w-[135px] lg:h-[50px] xl:w-[150px] xl:h-[54px] bg-[#FFFFFF] rounded-[15px] font-bold not-italic text-[16px] leading-[22px] box-border border border-solid border-[#CACACA] mr-4 font-['Cabin']"
                        onClick={() => setOpenCreateUserModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="text-primary-white w-[120px] h-[45px] lg:w-[135px] lg:h-[50px] xl:w-[150px] xl:h-[54px] bg-secondary-purple rounded-[15px] font-bold not-italic text-[16px] leading-[22px] font-['Cabin']"
                        type="submit"
                      >
                        Create
                      </button>
                    </div>
                    </form>     
                  </div>
                </React.Fragment>,
                document.querySelector("body")
              )}
            {openRegisteredModal &&
              ReactDOM.createPortal(
                <React.Fragment>
                  <div
                    className="bg-[#7D719270] w-full h-full left-[0px] top-[-3px] z-10 fixed"
                    onClick={() => setOpenRegisteredModal(false)}
                  ></div>
                  <div className="w-pop-up h-pop-up rounded-[15px] bg-primary-background border border-solid border-[#C4C4C4] box-border shadow-[10px_16px_30px_rgba(0,0,0,0.25)] flex flex-col justify-around px-6 py-4 fixed top-[40%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-20">
                    <header className="flex items-center justify-between">
                      <h2 className="text-secondary-purple text-h3 leading-[24px] not-italic font-medium font-montserrat w-[422px] h-[24px] items-center">
                        New user has been created
                      </h2>
                      <svg
                        className="relative bottom-2 cursor-pointer"
                        onClick={() => setOpenRegisteredModal(false)}
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
                        Registeration email has been sent to the user
                      </h4>
                      <p className="text-[#00000080] text-[16px] leading-[24px] not-italic font-normal w-[466px] h-[99px] font-['Open_Sans']">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Eget utvest-ibulum bibendum egestas. Enim mi arcu
                        convallis enim purus interdum. Ut neque at adipiscing
                        tortor facilisis sagittis libero.Ac bibendum vel
                        blandit.
                      </p>
                    </div>
                    <footer className="flex justify-end">
                      <RouterLink to={ROUTES.NEWUSERVERIFICATION}>
                        <button
                          className="text-primary-white w-[150px] h-[54px] bg-secondary-purple rounded-[10px] font-['Open_Sans']"
                          onClick={() => setOpenRegisteredModal(false)}
                        >
                          okay
                        </button>
                      </RouterLink>
                    </footer>
                  </div>
                </React.Fragment>,
                document.querySelector("body")
              )}
          </div>
          {team.map((data, key) => {
            return (
              <SbrTeamCard
                data={data}
                key={key}
                onClick={(id) => RemoveMembersHandler(id)}
              />
            );
          })}
        </div>
      </Page>
    </>
  );
}
