import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { Page } from "../components";
import ProfileImage from "../assets/images/sbrTeamCardImage.png";
import NoProfileImage from '../assets/images/user.png';
import { profileImage } from "../assets/js/script";

export default function AdminProfile() {
  const [image, setImage] = useState(ProfileImage);
  const [editProfile, setEditProfile] = useState(false);
  const [accountIsDisabled,setAccountIsDisabled] = useState(false)

  const imagePickerRef = useRef();

  const setImageDataHandler = async (event) => {
    const imageData = URL.createObjectURL(event.target.files[0]);
    // const { response } = await profileImage(imageData);
    // if (response.status === true) {
    //   // setImage(imageData);
    // }
    setImage(imageData);
    console.log(image);
  };

  const selectImageHandler = () => {
    imagePickerRef.current.click();
  };
  return (
    <>
      <Page active="wallet">
        <div className="p-3">
          <h1 className="text-h1 text-[#323232] leading-[44px] font-montserrat not-italic font-medium mb-2">
            SBR Team
          </h1>
          <div className="flex items-center justify-start">
            <input className="w-[456px] h-[46px] px-4 mt-3 rounded-[8px] bg-primary-white box-border border border-solid border-[#EDEDED] mr-3" />
            <button className="w-[173px] h-[46px] px-4 mt-3 rounded-[8px] bg-primary-white box-border border border-solid border-[#EDEDED] flex items-center">
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
          </div>
        </div>
        <div className="flex">
          <div className="w-[30%] h-[70%] bg-primary-white rounded-[10px] border border-solid border-[#DFDFDFCC] m-2 p-4">
            <div className="flex flex-col items-center">
              <div
                className={`w-36 h-36 lg:w-44 lg:h-44 xl:w-48 xl:h-48 bg-white rounded-full drop-shadow-2xl flex justify-center items-center my-6 relative`}
              >
                <img
                  src={image}
                  alt="employee-profile"
                  className="max-w-44 max-h-44 w-32 h-32 lg:w-40 lg:h-40 xl:w-44 xl:h-44 rounded-full object-contain"
                />
                {accountIsDisabled && (
                  <div className="absolute bg-[#0a0a0ac7] w-[100%] h-[100%]  rounded-full flex items-center">
                    <p className="text-[#F41515]  lg:text-p xl:text-[22px] font-['Open_Sans'] text-center">
                      This Profile is currently deactivated
                    </p>
                  </div>
                )}
              </div>
              <input
                ref={imagePickerRef}
                style={{ display: "none" }}
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={setImageDataHandler}
              />

              <div className="flex">
                <button
                  className="mr-4"
                  onClick={() => setImage(NoProfileImage)}
                >
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="26.7901"
                      cy="26.7901"
                      r="26.2901"
                      fill="white"
                      stroke="#DFDFDF"
                    />
                    <path
                      d="M32.7143 22.6667V37.1111H21.2857V22.6667H32.7143ZM30.5714 14H23.4286L22 15.4444H17V18.3333H37V15.4444H32L30.5714 14ZM35.5714 19.7778H18.4286V37.1111C18.4286 38.7 19.7143 40 21.2857 40H32.7143C34.2857 40 35.5714 38.7 35.5714 37.1111V19.7778Z"
                      fill="#757575"
                    />
                  </svg>
                </button>
                <button onClick={selectImageHandler}>
                  <svg
                    width="55"
                    height="54"
                    viewBox="0 0 55 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="27.3506"
                      cy="26.837"
                      r="26.2901"
                      fill="white"
                      stroke="#DFDFDF"
                    />
                    <path
                      d="M17.6094 33.2296V37.7961H22.1759L35.644 24.328L31.0775 19.7615L17.6094 33.2296ZM21.1652 35.3607H20.0448V34.2403L31.0775 23.2077L32.1978 24.328L21.1652 35.3607ZM39.1754 19.0796L36.3259 16.2301C36.0824 15.9865 35.7779 15.877 35.4613 15.877C35.1447 15.877 34.8403 15.9987 34.6089 16.2301L32.3805 18.4585L36.9469 23.025L39.1754 20.7966C39.6503 20.3217 39.6503 19.5545 39.1754 19.0796Z"
                      fill="black"
                      fill-opacity="0.54"
                    />
                  </svg>
                </button>
              </div>
              <button
                className="text-secondary-purple text-h3 font-['Open_sans'] underline underline-offset-2 mt-5 mb-3"
                onClick={() => setAccountIsDisabled((prevState) => !prevState)}
              >
                {accountIsDisabled ? "activate Account" : "Deactivate Account"}
              </button>
            </div>
          </div>
          <div className="w-[65%] flex flex-col justify-end">
            <div className="w-[100%] bg-primary-white rounded-[10px] border border-solid border-[#DFDFDFCC] m-2">
              <div className="p-10 relative">
                {editProfile ? (
                  <>
                    <form>
                      <div className="flex flex-col mt-2 xl:mt-4">
                        <label className="text-[#8A8A8A] font-medium focus:outline-none   text-[16px] font-montserrat mt-2">
                          First Name
                        </label>
                        <input
                          className="py-2 bg-transparent font-medium  w-full sm:text-sm font-montserrat text-[#515151] text-h3"
                          value={"Shein"}
                        />
                      </div>
                      <div className="flex flex-col mt-2 xl:mt-4">
                        <label className="text-[#8A8A8A] font-medium  text-[16px] font-montserrat mt-2">
                          Middle Name
                        </label>
                        <input
                          className="py-2 bg-transparent  font-medium focus:outline-none w-full sm:text-sm font-montserrat text-[#515151] text-h3"
                          value={"Edward"}
                        />
                      </div>
                      <div className="flex flex-col mt-2 xl:mt-4">
                        <label className="text-[#8A8A8A] font-medium focus:outline-none  text-[16px] font-montserrat mt-2">
                          Last Name
                        </label>
                        <input
                          className="py-2 bg-transparent  font-medium w-full sm:text-sm font-montserrat text-primary-dark text-h3"
                          value={"Miller"}
                        />
                      </div>
                      <div className="flex flex-col mt-2 xl:mt-4">
                        <label className="text-[#8A8A8A] font-medium focus:outline-none  text-[16px] font-montserrat mt-2">
                          Admin ID
                        </label>
                        <input
                          className="py-2 bg-transparent  font-medium w-full sm:text-sm font-montserrat text-primary-dark text-h3"
                          value={"123456789"}
                        />
                      </div>
                      <div className="flex flex-col mt-2 xl:mt-4">
                        <label className="text-[#8A8A8A] font-medium focus:outline-none   text-[16px] font-montserrat mt-2">
                          Phone Number
                        </label>
                        <input
                          className="py-2 bg-transparent font-medium w-full sm:text-sm font-montserrat text-primary-dark text-h3"
                          value={"+91 999999999"}
                        />
                      </div>
                      <div className="flex flex-col mt-2 xl:mt-4">
                        <label className="text-[#8A8A8A] font-medium focus:outline-none  text-[16px] font-montserrat mt-2">
                          Email ID
                        </label>
                        <input
                          className="py-2 bg-transparent font-medium w-full sm:text-sm font-montserrat text-primary-dark text-h3"
                          value={"Michellemiller@sbr.com"}
                        />
                      </div>
                      <div className="flex flex-col mt-2 xl:mt-4">
                        <label className="text-[#8A8A8A] font-medium focus:outline-none  text-[16px] font-montserrat mt-2">
                          Date of Joining
                        </label>
                        <input
                          className="py-2 bg-transparent font-medium w-full sm:text-sm font-montserrat text-primary-dark text-h3"
                          value={"19/09/1999"}
                        />
                      </div>
                      <footer className="flex justify-end mt-4">
                        <button
                          className="text-[#171617] w-[120px] h-[45px] lg:w-[135px] lg:h-[50px] xl:w-[150px] xl:h-[54px] bg-[#FFFFFF] rounded-[15px] font-bold not-italic text-[16px] leading-[22px] box-border border border-solid border-[#CACACA] mr-4 font-['Cabin']"
                          onClick={() => setEditProfile(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="text-primary-white w-[120px] h-[45px] lg:w-[135px] lg:h-[50px] xl:w-[150px] xl:h-[54px] bg-secondary-purple rounded-[15px] font-bold not-italic text-[16px] leading-[22px] font-['Cabin']"
                          onClick={() => setEditProfile(false)}
                        >
                          Save
                        </button>
                      </footer>
                    </form>
                  </>
                ) : (
                  <>
                    <span className="m-6 p-4">
                      <p className="font-montserrat font-medium text-[16px] text-[#8A8A8A] mb-2">
                        First Name
                      </p>
                      <h3 className="font-montserrat font-medium text-h3 text-[#151414] mb-2">
                        Shein
                      </h3>
                    </span>
                    <span className="m-6 p-4">
                      <p className="font-montserrat font-medium text-[16px] text-[#8A8A8A] mb-2">
                        Middle Name
                      </p>
                      <h3 className="font-montserrat font-medium text-h3 text-[#151414] mb-2">
                        Edward
                      </h3>
                    </span>
                    <span className="m-6 p-4">
                      <p className="font-montserrat font-medium text-[16px] text-[#8A8A8A] mb-2">
                        Last Name
                      </p>
                      <h3 className="font-montserrat font-medium text-h3 text-[#151414] mb-2">
                        Miller
                      </h3>
                    </span>
                    <span className="m-6 p-4">
                      <p className="font-montserrat font-medium text-[16px] text-[#8A8A8A] mb-2">
                        Admin ID
                      </p>
                      <h3 className="font-montserrat font-medium text-h3 text-[#151414] mb-2">
                        123456789
                      </h3>
                    </span>
                    <span className="m-6 p-4">
                      <p className="font-montserrat font-medium text-[16px] text-[#8A8A8A] mb-2">
                        Phone Number
                      </p>
                      <h3 className="font-montserrat font-medium text-h3 text-[#151414] mb-2">
                        +91 999999999
                      </h3>
                    </span>
                    <span className="m-6 p-4">
                      <p className="font-montserrat font-medium text-[16px] text-[#8A8A8A] mb-2">
                        Email ID
                      </p>
                      <h3 className="font-montserrat font-medium text-h3 text-[#151414] mb-2">
                        Michellemiller@sbr.com
                      </h3>
                    </span>
                    <span className="m-6 p-4">
                      <p className="font-montserrat font-medium text-[16px] text-[#8A8A8A] mb-2">
                        Date of Joining
                      </p>
                      <h3 className="font-montserrat font-medium text-h3 text-[#151414] mb-2">
                        19/09/1999
                      </h3>
                    </span>
                  </>
                )}
                <button
                  className="absolute top-6 right-6"
                  onClick={() => setEditProfile(prevState => !prevState)}
                >
                  <svg
                    width="22"
                    height="23"
                    viewBox="0 0 22 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.0390625 17.8859V22.4524H4.60556L18.0737 8.98426L13.5072 4.41777L0.0390625 17.8859ZM3.59484 20.0169H2.47453V18.8966L13.5072 7.86395L14.6275 8.98426L3.59484 20.0169ZM21.6051 3.73584L18.7556 0.886345C18.5121 0.642799 18.2076 0.533203 17.891 0.533203C17.5744 0.533203 17.27 0.654976 17.0386 0.886345L14.8101 3.11479L19.3766 7.68129L21.6051 5.45284C22.08 4.97792 22.08 4.21075 21.6051 3.73584Z"
                      fill="black"
                      fill-opacity="0.54"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
}
