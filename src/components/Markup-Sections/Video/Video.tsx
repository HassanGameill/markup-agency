"use client";
import Image from "next/image";
import { useState } from "react";
import thumnile from "../../../../public/images/video/video-nile.jpg"

import ModalVideo from "react-modal-video";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import Vonders from "./vonder";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 mb-10">
      <div className="container">        
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mx-auto max-w-[570px] overflow-hidden rounded-md shadow-2xl shadow-blue-600"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src={thumnile} alt="video image" fill />
                <div className="absolute right-0 top-0 flex h-full w-full items-center justify-center">
                  <button
                    aria-label="video play button"
                    onClick={() => setOpen(true)}
                    className="flex h-[50px] w-[50px] text-[1.8rem]  md:h-[70px] md:w-[70px] md:text-[2.5rem]  items-center justify-center rounded-full bg-white bg-opacity-75 text-black hover:text-blue-600 transition hover:bg-opacity-100"
                  >
                    
                    <MdOutlineSlowMotionVideo className="  " />
                
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        autoplay={true}
        start={true}
        isOpen={isOpen}
        videoId="L61p2uyiMSo"
        onClose={() => setOpen(false)}
      />

     
    </section>
  );
};

export default Video;
