"use client";

import React from "react";
import Image from "next/image";
import KidsDays from "../public/images/KidsDays.webp";
import iotaTrading from "../public/images/iotaTrading.webp";
import goolePlayBadge from "../public/images/google-play-badge.png";

function Apps() {
  return (
    <div>
      <div className="text-white px-4 py-2 bg-[#0f3755]">
        <h1 className="text-3xl">Apps</h1>
      </div>
      <div className="flex flex-1 bg-white text-black">
        <div className="bg-white p-4 rounded-md hover:shadow-md flex-1 border-2 my-4 ml-4  flex">
          <Image
            src={iotaTrading}
            alt="Logo"
            className="w-16 h-16 m-1 object-contain rounded-lg"
          />
          <div className="flex-1 ml-4">
            <h2 className="text-xl font-bold">IotaTrading: Virtual Trading</h2>
            <p>
              A virtual trading app that allow users to trade with virtual money
              in real time.
            </p>
            <div className="flex justify-end">
              <a href="https://play.google.com/store/apps/details?id=com.finedsoft.iotatrading">
                <Image
                  src={goolePlayBadge}
                  alt="Logo"
                  className="w-32 h-12  object-contain"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md hover:shadow-md flex-1 border-2 my-4 ml-4  flex">
          <Image
            src={KidsDays}
            alt="Logo"
            className="w-16 h-16 m-1 object-contain rounded-lg"
          />
          <div className="flex-1 ml-4">
            <h2 className="text-xl font-bold">KidsDays</h2>
            <p>A free educational game that help kids learn english.</p>
            <div className="flex justify-end">
            <a href="https://play.google.com/store/apps/details?id=com.finsedsoft.kidsmultiplayersimulator">
            <Image
              src={goolePlayBadge}
              alt="Logo"
              className="w-32 h-12  object-contain"
            />
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apps;
