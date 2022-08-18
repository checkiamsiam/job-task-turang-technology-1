import React, { useState, useEffect, useRef } from "react";
import { Page } from "../components";
import ReactDOM from "react-dom";
import { getCommentsOfTicket, getTickets, commentOnTicket, changeTicketStatus } from "../assets/js/script";
import Loader from "../components/Loader/Loader";

const Data = [
  {
    id: 1,
    ticketNo: 1101,
    type: "Subscription",
    ticketDate: "03/12/2024",
    resolutionDate: "03/12/2024",
    status: "Pending",
    heading: "Description",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim imperdiet feugiat neque, ut risus molestie tincidunt. Sed accumsan blandit tristique eget. Metus, duis lectus dictum proin est vestibulum.",
  },
  {
    id: 2,
    ticketNo: 1102,
    type: "Subscription",
    ticketDate: "03/12/2024",
    resolutionDate: "03/12/2024",
    status: "Pending",
    heading: "Descrip",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim imperdiet feugiat neque, ut risus molestie tincidunt. Sed accumsan blandit tristique eget.",
  },
  {
    id: 3,
    ticketNo: 1103,
    type: "Subscription",
    ticketDate: "03/12/2024",
    resolutionDate: "03/12/2024",
    status: "Pending",
    heading: "Descripti",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim imperdiet feugiat neque, ut risus molestie tincidunt.",
  },
];

const chat = [
  {
    id: 1,
    sent: "Admin",
    message: "Issue Description: Get Expert Advice and Curated Content on Searchley. Explore the Best Info Now. Useful & Relevant. Quick Answers.",
  },
  {
    id: 2,
    sent: "Customer",
    message: "Lorem Lorem ipsum dolor sit amet, con elit.Lorem ipsum dolor sit amet, con elit.Lorem ipsum dolor sit amet, con elit.",
  },
  {
    id: 3,
    sent: "Admin",
    message: "My issues has not been resolved yet Lorem Lorem ipsum dolor sit amet, please look into it again.",
  },
  {
    id: 4,
    sent: "Customer",
    message: "Lorem Lorem ipsum dolor sit amet, con elit.Lorem ipsum dolor sit amet, con elit.Lorem ipsum dolor sit amet, con elit.",
  },
];

export default function HelpSupport() {
  const [ticketData, setTicketData] = useState([]);
  const [chatData, setChatData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newTicket, setNewTicket] = useState(false);
  const [viewContent, setViewContent] = useState();
  const [openSupportTicketModal, setOpenSupportTicketModal] = useState(false);
  const [openAddCommentModal, setOpenAddCommentModal] = useState(false);
  const [openResolvedPopUp, setOpenResolvedPopUp] = useState(false);
  const [resolved, setResolved] = useState(false);
  const [message, setMessage] = useState("");

  const inViewRef = useRef();

  useEffect(() => {
    
    const fetchTicketsHandler = async () => {
      setIsLoading(true);
      const { response } = await getTickets();
      
      if (response.status === true) {
        // console.log(response.data.rows)
        setTicketData(response.data.rows);
        setIsLoading(false);
      }
      setIsLoading(false)
    };
    fetchTicketsHandler();
   
  }, [ticketData, chatData]);

  useEffect(() => {
    setIsLoading(true);
    setChatData(chat);
    setIsLoading(false);
  }, []);

  const openViewContentHandler = (id) => {
    setViewContent((visible) => (visible === id ? null : id));
  };

  const formatDate = (input) => {
    const datePart = input.match(/\d+/g),
      year = datePart[0],
      month = datePart[1],
      day = datePart[2];

    return day + "/" + month + "/" + year;
  };

  const openCommentSectionHandler = async (id) => {
    setIsLoading(true);
    const checkResolvedTicket = ticketData.find((d) => d.id === id);
    const { response } = await getCommentsOfTicket(id);
    if (response.status === true) {
      setChatData(response.data.rows);
      if (checkResolvedTicket.status !== "open") {
        setResolved(true);
        setOpenAddCommentModal(true);
      } else {
        setResolved(false);
        setOpenAddCommentModal(true);
      }
    }
    setIsLoading(false);
  };

  const sendMessageHandler = async (event, id) => {
    event.preventDefault();
    const data = {
      id: id,
      comment_by: "team_sbr",
      comment: message,
    };
    const { response } = await commentOnTicket(data);
    if (response.status === true) {
      // console.log(response)
      setChatData((chat) => [...chat, data]);
      setMessage(" ");
    }
  };

  const ticketStatusHandler = async (id) => {
    console.log(id);
    const data = {
      id: id,
      status: "closed",
    };
    const { response } = await changeTicketStatus(data);
    if (response.status === true) {
      setResolved(true);
      setOpenResolvedPopUp(false);
    }
  };

  if (isLoading) {
    return <Loader width="50" radius="20" dark={false}></Loader>;
  }

  return (
    <Page active="HELP_SUPPORT">
      <h1 className="text-secondary-dark text-h1 font-semibold text-left ">Help & support</h1>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
          <input
            className="w-search h-search outline-primary-light px-4 mt-3 rounded-[8px] bg-primary-white box-border border border-solid border-[#EDEDED] mr-3"
            placeholder="Enter Keyword"
          />
          <button className="w-[173px] h-[46px] px-4 mt-3 rounded-[8px] bg-primary-white box-border border border-solid border-[#EDEDED] flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="24" height="23" viewBox="0 0 24 23" fill="none">
              <rect width="24" height="23" fill="url(#pattern0)" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use href="#image0_835_9117" transform="translate(0.0208333) scale(0.0106481 0.0111111)" />
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
              <p className="text-[18px] text-heading leading-[30px] font-[Catamaran] not-italic font-normal">Filter</p>
              <p className="w-[20px] h-[20px] border border-solid border-[#666666] rounded-full font-montserrat font-medium text-[14px] leading-[17px] text-[#666666]">
                2
              </p>
            </div>
          </button>
        </div>

        <div>
          <svg width="15" height="18" viewBox="0 0 33 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 3V39M7.5 3L14 8.76M7.5 3L1 8.76" stroke="#666666" strokeWidth="3" />
            <path d="M23.5 39V3M23.5 39L31.5 32M23.5 39L16 32" stroke="#666666" strokeWidth="3" />
          </svg>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-end">
          <div
            onClick={() => setNewTicket(true)}
            className="border-secondary-purple border-b-2 border-solid font-h3  text-secondary-purple cursor-pointer"
          >
            Create a new ticket
          </div>
          {ReactDOM.createPortal(
            newTicket && (
              <React.Fragment>
                <div onClick={() => setNewTicket(false)} className="w-full h-full fixed top-0 left-0 bg-[#7D719270] flex justify-center items-center">
                  <div
                    className="w-[535px] h-[620px] xl:w-[535px] xl:h-[710px] rounded-[15px] bg-primary-background border border-solid border-[#C4C4C4] box-border shadow-[16px_30px_10px_rgba(96,94,94,0.15)] flex
       flex-col justify-evenly px-6 py-4 fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-20"
                  >
                    <header className="flex items-center justify-between px-4">
                      <h2 className="text-secondary-purple text-h3 leading-[24px] not-italic font-bold font-montserrat w-[422px] h-[24px] items-center">
                        Create new ticket
                      </h2>
                      <svg
                        className="relative bottom-2 cursor-pointer"
                        onClick={() => setNewTicket(false)}
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
                    <form>
                      <div className="p-4">
                        <div>
                          <p className="text-heading-false font-semibold not-italic text-[15px] font-montserrat mb-4">Enter required details</p>
                        </div>
                        <div className="flex flex-col mt-2">
                          <label className="text-heading-false font-semibold not-italic text-tablet-h5 font-montserrat leading-[20px] mt-1 xl:mt-2">
                            Name
                          </label>
                          <input
                            type="text"
                            placeholder="Michelle Miller"
                            className="w-[205px] h-[40px] xl:h-[47px] px-4 mt-2 xl:mt-3 rounded-[10px] bg-primary-white box-border border border-solid border-[#EEEEEE] placeholder-[#B6B6B6] font-semibold not-italic text-[16px] leading-[22px] font-['Open_Sans']"
                          />
                        </div>
                        <div className="flex flex-col mt-2">
                          <label className="text-heading-false font-semibold not-italic text-tablet-h5  font-montserrat leading-[20px] mt-1 xl:mt-2">
                            Number
                          </label>
                          <input
                            type="text"
                            placeholder="91+ 99999999"
                            className="w-[221px] h-[40px] xl:h-[47px] px-4 mt-2 xl:mt-3 rounded-[10px] bg-primary-white box-border border border-solid border-[#EEEEEE] placeholder-[#B6B6B6] font-semibold not-italic text-[16px] leading-[22px] font-['Open_Sans']"
                          />
                        </div>
                        <div className="flex flex-col mt-2">
                          <label className="text-heading-false font-semibold not-italic text-tablet-h5 font-montserrat leading-[20px] mt-1 xl:mt-2">
                            Email Id
                          </label>
                          <input
                            type="text"
                            placeholder="michellemiller@gmail.com"
                            className="w-[272px] h-[40px] xl:h-[47px] px-4 mt-2 xl:mt-3 rounded-[10px] bg-primary-white box-border border border-solid border-[#EEEEEE] placeholder-[#B6B6B6] font-semibold not-italic text-[16px] leading-[22px] font-['Open_Sans']"
                          />
                        </div>
                        <div className="flex flex-col mt-2">
                          <label className="text-heading-false font-semibold not-italic text-tablet-h5 font-montserrat leading-[20px] mt-1 xl:mt-2">
                            Link
                          </label>
                          <input
                            type="text"
                            placeholder="Add post link"
                            className="w-[221px] h-[40px] xl:h-[47px] px-4 mt-2 xl:mt-3 rounded-[10px] bg-primary-white box-border border border-solid border-[#EEEEEE] placeholder-[#B6B6B6] font-semibold not-italic text-[16px] leading-[22px] font-['Open_Sans']"
                          />
                        </div>
                        <div className="flex flex-col mt-2">
                          <label className="text-heading-false font-semibold not-italic text-tablet-h5 font-montserrat leading-[20px] mt-1 xl:mt-2">
                            Description
                          </label>
                          <textarea
                            type="text"
                            rows="3"
                            placeholder="Lorem ipsum sederi dispism msudbs"
                            className="px-4 py-2 mt-2 xl:mt-3 rounded-[10px] bg-primary-white box-border border border-solid border-[#EEEEEE] placeholder-[#B6B6B6] font-semibold not-italic text-[16px] leading-[22px] font-['Open_Sans']"
                          />
                        </div>
                      </div>
                    </form>
                    <footer className="flex justify-end">
                      <button
                        className="text-[#171617] w-[120px] h-[45px] lg:w-[135px] lg:h-[50px] xl:w-[150px] xl:h-[54px] bg-[#FFFFFF] rounded-[15px] font-bold not-italic text-[16px] leading-[22px] box-border border border-solid border-[#CACACA] mr-4 font-['Cabin']"
                        onClick={() => setNewTicket(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="text-primary-white w-[120px] h-[45px] lg:w-[135px] lg:h-[50px] xl:w-[150px] xl:h-[54px] bg-secondary-purple rounded-[15px] font-bold not-italic text-[16px] leading-[22px] font-['Cabin']"
                        onClick={() => {
                          setNewTicket(false);
                          setOpenSupportTicketModal(true);
                        }}
                      >
                        Save
                      </button>
                    </footer>
                  </div>
                </div>
              </React.Fragment>
            ),
            document.querySelector("body")
          )}
          {openSupportTicketModal &&
            ReactDOM.createPortal(
              <React.Fragment>
                <div className="bg-[#7D719270] w-full h-full left-[0px] top-[-3px] z-10 fixed" onClick={() => setOpenSupportTicketModal(false)}></div>
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
                      onClick={() => setOpenSupportTicketModal(false)}
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
                      Your Ticket number is <span className="underline">SU2313313</span>
                    </h4>
                    <p className="text-[#7D7D7D] text-[16px] leading-[22px] not-italic font-normal w-[466px] h-[99px] font-['Open_Sans']">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget utvest-ibulum bibendum egestas. Enim mi arcu convallis enim purus
                      interdum. Ut neque at adipiscing tortor facilisis sagittis libero. Ac bibendum vel blandit.
                    </p>
                  </div>
                  <footer className="flex justify-end">
                    <button
                      className="text-primary-white w-[150px] h-[54px] bg-secondary-purple rounded-[10px] font-bold font-['Open_Sans'] text-[16px] leading-[22px]"
                      onClick={() => setOpenSupportTicketModal(false)}
                    >
                      Back to Support
                    </button>
                  </footer>
                </div>
              </React.Fragment>,
              document.querySelector("body")
            )}
        </div>
        <div className="mt-8">
          {/* <div className=""> */}
          <div className="grid grid-cols-7  px-4">
            <h1 className="justify-self-start">Ticket#</h1>
            <h1 className="justify-self-start">Type</h1>
            <h1 className="justify-self-start">Description</h1>
            <h1 className="justify-self-start">Ticket Date</h1>
            <h1 className="justify-self-start">Resolution Date</h1>
            <h1 className="justify-self-center">Status</h1>
            <h1 className="justify-self-end">Actions</h1>
          </div>
          {ticketData.map((value, index) => {
            return (
              <div key={index} className="my-4">
                <div
                  className={`grid grid-cols-7 bg-secondary-purple mt-4 py-3 px-6 flex-start text-primary-white ${
                    viewContent === value.id ? "rounded-t-lg" : "rounded-lg"
                  }`}
                >
                  <h1 className="justify-self-start">{`110${index + 1}`}</h1>
                  <h1 className="justify-self-start">{value.reason}</h1>
                  <h1 className="justify-self-start">{value.subject.slice(0, 10)}</h1>
                  <h1 className="justify-self-start">{formatDate(value.createdAt.split("T")[0].replaceAll("-", "/"))}</h1>
                  <h1 className="justify-self-start"></h1>
                  <h1 className="justify-self-center">{value.status}</h1>
                  <button className="justify-self-end font-montserrat" onClick={() => openViewContentHandler(value.id)}>
                    View
                  </button>
                </div>
                <div
                  className={`flex-col flex  border rounded-b-lg ease-in-out duration-300 ${
                    viewContent === value.id ? "opacity-100 block" : "opacity-0 hidden"
                  }`}
                >
                  <div className="my-3 mx-4 px-4">
                    <h1 className="font-h4 font-semibold">Description</h1>
                  </div>
                  <div className="mb-5 flex items-center justify-between mx-4">
                    <p className="w-[1021px] px-4 font-p font-normal font-['Open_Sans'] text-[#888888]">{value.subject}</p>
                    <button
                      className="mr-3 font-p whitespace-nowrap text-secondary-purple font-semibold font-['Cabin'] underline underline-offset-2"
                      onClick={() => openCommentSectionHandler(value.id)}
                    >
                      Add Comment
                    </button>
                    {openAddCommentModal &&
                      ReactDOM.createPortal(
                        <React.Fragment>
                          <div
                            className="bg-[#7D719270] w-full h-full left-[0px] top-[-3px] z-10 fixed"
                            onClick={() => setOpenAddCommentModal(false)}
                          ></div>
                          <div
                            className="w-[577px] h-[585px] rounded-[15px] bg-primary-background border border-solid border-[#C4C4C4] box-border shadow-[10px_16px_30px_rgba(0,0,0,0.25)] flex
                  flex-col justify-between py-6 fixed top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 z-20"
                          >
                            <header className="flex flex-col justify-between relative px-6 ">
                              <h3 className="text-secondary-purple text-[19px] leading-[24px] not-italic font-bold font-montserrat w-[422px] h-[24px] items-center mx-4">
                                Support ticket
                              </h3>
                              <div className="flex justify-between mx-3 mt-5 relative">
                                <span className="flex flex-col items-start">
                                  <p className="font-montserrat font-semibold text-[#293241] text-p">SU2313313</p>
                                  <p className="font-montserrat font-normal text-[#293241] text-p">Ticket Number</p>
                                </span>
                                <div className="w-[1px] bg-black h-[70%]"></div>
                                <span className="flex flex-col items-start">
                                  <p className="font-montserrat font-semibold text-[#293241] text-p">27.03.2021</p>
                                  <p className="font-montserrat font-normal text-[#293241] text-p">Ticket Date</p>
                                </span>
                                <div className="w-[1px] bg-black h-[70%]"></div>
                                <span className="flex flex-col items-start">
                                  <p className="font-montserrat font-semibold text-[#293241] text-p">30.03.2021</p>
                                  <p className="font-montserrat font-normal text-[#293241] text-p">Resolution Date</p>
                                </span>
                                <span className="flex flex-col items-start">
                                  <p className="font-montserrat font-semibold text-secondary-purple text-p">
                                    {resolved ? "Resolved" : "IN PROGRESS"}
                                  </p>
                                  <p className="font-montserrat font-normal text-[#293241] text-p">Status</p>
                                </span>
                                <button onClick={() => setOpenResolvedPopUp((prevState) => !prevState)}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="26"
                                    height="26"
                                    viewBox="0 0 26 26"
                                    fill="none"
                                  >
                                    <rect width="26" height="26" fill="url(#pattern3)" />
                                    <defs>
                                      <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_820_6463" transform="scale(0.0111111)" />
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
                                {openResolvedPopUp && (
                                  <button
                                    className="bg-primary-white  shadow-[12px_12px_30px_rgba(0,0,0,0.25)] py-2 px-3  absolute right-0 top-12"
                                    onClick={() => ticketStatusHandler(viewContent)}
                                  >
                                    Resolved
                                  </button>
                                )}
                              </div>
                              <svg
                                className="absolute bottom-2 cursor-pointer top-0 right-5"
                                onClick={() => setOpenAddCommentModal(false)}
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
                            <ul className="px-6 overflow-y-scroll" ref={inViewRef}>
                              {chatData.map((c, index) => {
                                return (
                                  <li
                                    key={index}
                                    className={`flex my-3 ${c.comment_by !== "team_sbr" ? "float-right" : "float-left"} w-[65%] ${
                                      c.comment_by !== "team_sbr" ? "bg-[#FFFFFF]" : "bg-[#AA86E345]"
                                    } border border-solid border-[#F3F3F3] shadow-[3px_4px_6px_rgba(99,97,97,0.04)] rounded-[6px] p-2`}
                                  >
                                    <p className="font-['Cabin'] font-medium text-[15px] text-[#00000069]">{c.comment}</p>
                                  </li>
                                );
                              })}
                            </ul>
                            {!resolved ? (
                              <form className="flex flex-col items-end px-6" onSubmit={(event) => sendMessageHandler(event, viewContent)}>
                                <input
                                  className="w-[65%] h-[60px] my-3 bg-[#FFFFFF] border border-solid border-secondary-purple shadow-[3px_4px_6px_rgba(99,97,97,0.04)] rounded-[6px] p-2 font-['Cabin'] font-medium text-[15px] text-[#00000069] focus:border focus:border-secondary-purple"
                                  value={message}
                                  onChange={(e) => setMessage(e.target.value)}
                                />
                                <footer className="flex justify-end mt-4">
                                  <button
                                    className="text-[#171617] w-[120px] h-[45px] lg:w-[135px] lg:h-[50px] xl:w-[150px] xl:h-[54px] bg-[#FFFFFF] rounded-[15px] font-bold not-italic text-[16px] leading-[22px] box-border border border-solid border-[#CACACA] mr-4 font-['Cabin']"
                                    onClick={() => setOpenAddCommentModal(false)}
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    className="text-primary-white w-[120px] h-[45px] lg:w-[135px] lg:h-[50px] xl:w-[150px] xl:h-[54px] bg-secondary-purple rounded-[15px] font-bold not-italic text-[16px] leading-[22px] font-['Cabin']"
                                    type="submit"
                                  >
                                    Confirm
                                  </button>
                                </footer>
                              </form>
                            ) : (
                              <div>
                                <p className="bg-secondary-purple p-1 text-primary-white font-montserrat font-p text-center">
                                  Support Ticket Resolved on 30.03.2021
                                </p>
                                <footer className="flex justify-end mt-4 px-6 ">
                                  <button
                                    className="text-primary-white w-[150px] h-[54px] bg-secondary-purple rounded-[10px] font-['Open_Sans']"
                                    onClick={() => {
                                      setOpenAddCommentModal(false);
                                    }}
                                  >
                                    Back to Settings
                                  </button>
                                </footer>
                              </div>
                            )}
                          </div>
                        </React.Fragment>,
                        document.querySelector("body")
                      )}
                  </div>
                </div>
              </div>
            );
          })}
          {/* <h1>1101</h1> */}
          {/* </div> */}
          {/* <div className=""></div> */}
        </div>
      </div>
      {/* <div> */}
      {/* <form className="flex sm:h-[43px] lg:h-[54px] items-center sm:w-[231px] lg:w-7/12 max-w-search border-1 border-solid border-primary-dark-20"></form> */}
      {/* </div> */}
    </Page>
  );
}
