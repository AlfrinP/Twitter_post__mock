import React from "react";
import profile from "./assets/images/profile.jpg";
import bluetick from "./assets/images/blue_tick.png";
import menu from "./assets/images/three-dots.svg";
import post from "./assets/images/post_img.jpg";
import chat from "./assets/images/chat_icon.svg";
import repost from "./assets/images/repost_icon.svg";
import like from "./assets/images/heart_icon.svg";
import view from "./assets/images/view_icon.svg";
import bookmark from "./assets/images/bookmark_icon.svg";
import share from "./assets/images/share_icon.svg";
import send from "./assets/images/send_icon.svg";
function App() {
  const icon = [
    {
      img: chat,
      text: "9.9K",
      main_prop:
        "icon-menu flex gap-1 justify-center items-center text-[#65696e] hover:text-[#1d9bf0]",
      imgwrapper_prop:
        "icon w-7 p-1 h-7 rounded-full flex justify-center items-center",
      img_prop: "",
      text_prop: "icon-text text-xs font-normal ",
    },
    {
      img: repost,
      text: "15K",
      main_prop:
        "icon-menu flex gap-1 justify-center items-center text-[#65696e] hover:text-[#1d9bf0]",
      imgwrapper_prop:
        "icon w-7 p-1 h-7 rounded-full flex justify-center items-center",
      img_prop: "",
      text_prop: "icon-text text-xs font-normal ",
    },
    {
      img: like,
      text: "199K",
      main_prop:
        "icon-menu flex gap-1 justify-center items-center text-[#65696e] hover:text-[#1d9bf0]",
      imgwrapper_prop:
        "icon w-7 p-1 h-7 rounded-full flex justify-center items-center",
      img_prop: "",
      text_prop: "icon-text text-xs font-normal ",
    },
    {
      img: view,
      text: "25M",
      main_prop:
        "icon-menu flex gap-1 justify-center items-center text-[#65696e] hover:text-[#1d9bf0]",
      imgwrapper_prop:
        "icon w-7 p-1 h-7 rounded-full flex justify-center items-center",
      img_prop: "",
      text_prop: "icon-text text-xs font-normal ",
    },
  ];
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <div className="w-[500px] h-full border-l border-r border-[#65696e] flex items-center justify-center">
        <div className=" h-fit border-t cursor-pointer border-b border-[#65696e] text-white w-full gap-3 flex items-start justify-center p-[18px]">
          <div className="w-[40px] h-[40px] flex items-center justify-center">
            <img
              className="profile w-full h-full block rounded-full mt-2"
              src={profile}
            />
          </div>
          <div className="flex flex-col w-full items-start justify-center gap-5">
            <div className="top flex justify-between items-center w-full gap-12">
              <div className="flex items-center justify-center gap-2">
                <div className="flex flex-col items-start ">
                  <div className="name side flex justify-center items-center gap-0.5 ">
                    <div className="name font-semibold hover:underline">Elon Musk</div>
                    <div className="blue tick w-4">
                      <img src={bluetick} className="w-full" />
                    </div>
                    <div className="flex justify-center items-center gap-1 ">
                      <div className="@name text-[#65696e]">@elonmusk</div>
                      <div className="bg-[#65696e] rounded-full w-[3px] h-[3px]"></div>
                      <div className="text-[#65696e] hover:underline">20h</div>
                    </div>
                  </div>
                  <div className="text text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </div>
              <div className="three dots  w-8 p-2  rounded-full h-full align-top ">
                <img src={menu} className="w-full h-full " />
              </div>
            </div>
            <div className="main pic  w-full">
              <img
                src={post}
                className="w-full border border-[#65696e] block rounded-xl"
              />
            </div>
            <div className="feature w-full p-[10px] pl-3 h-24 bg-[#16181c] rounded-xl relative">
              <textarea
                placeholder="Add your reply"
                className=" outline-none bg-inherit w-full h-[90%] border-none"
              ></textarea>
              <button className="absolute bottom-2 right-2 rounded-lg pl-2 pr-2 p-1 bg-[#1d9bf0] hover:bg-[#1a8cd8] w-16 flex items-center gap[3px] justify-center">
                <div>Send</div>
                <img src={send} className="w-[18px]" />
              </button>
            </div>
            <div className="bottom menu flex gap-1 justify-between items-center w-full">
              {icon.map((iconItem, index) => (
                <div key={index} className={iconItem.main_prop}>
                  <div className={iconItem.imgwrapper_prop}>
                    <img src={iconItem.img} />
                  </div>
                  <div className={iconItem.text_prop}>{iconItem.text}</div>
                </div>
              ))}
              <div className="icon-menu flex gap-1 justify-center items-center">
                <div className="icon w-5 h-5 rounded flex justify-center items-center">
                  <img src={bookmark} className=" w-[90%]" />
                </div>
                <div className="icon w-5 h-5 rounded flex justify-center items-center">
                  <img src={share} className=" w-[90%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
