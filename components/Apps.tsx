"use client";

import React from "react";
import Image from "next/image";
import KidsDays from "../public/images/KidsDays.webp";
import iotaTrading from "../public/images/iotaTrading.webp";
import goolePlayBadge from "../public/images/google-play-badge.png";

function Apps() {
  return (
    <div className="bg-gradient-to-br from-[#0f3755] to-[#1a5380]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8 border-b border-white/20 pb-4">
          Our Mobile Applications
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* IotaTrading App */}
          <div className="bg-white/95 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="mb-4 sm:mb-0">
                <Image
                  src={iotaTrading}
                  alt="IotaTrading App"
                  className="w-24 h-24 object-contain rounded-lg shadow-md"
                />
              </div>
              <div className="flex-1 sm:ml-6 text-center sm:text-left">
                <h2 className="text-2xl font-bold text-[#0f3755] mb-2">IotaTrading: Virtual Trading</h2>
                <p className="text-gray-700 mb-4">
                  Experience the thrill of stock markets without financial risk. Trade with virtual money in real-time 
                  market conditions, perfect for both beginners learning investment strategies and experienced traders 
                  testing new approaches.
                </p>
                <div className="flex justify-center sm:justify-end">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.finedsoft.iotatrading"
                    className="transition-transform hover:scale-105"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={goolePlayBadge}
                      alt="Get on Google Play"
                      className="w-36 h-14 object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* KidsDays App */}
          <div className="bg-white/95 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row items-center">
              <div className="mb-4 sm:mb-0">
                <Image
                  src={KidsDays}
                  alt="KidsDays App"
                  className="w-24 h-24 object-contain rounded-lg shadow-md"
                />
              </div>
              <div className="flex-1 sm:ml-6 text-center sm:text-left">
                <h2 className="text-2xl font-bold text-[#0f3755] mb-2">KidsDays</h2>
                <p className="text-gray-700 mb-4">
                  A delightful educational game designed to make English learning fun for children. Through interactive 
                  activities and engaging gameplay, kids will develop essential language skills while having a great time.
                </p>
                <div className="flex justify-center sm:justify-end">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.finsedsoft.kidsmultiplayersimulator"
                    className="transition-transform hover:scale-105"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={goolePlayBadge}
                      alt="Get on Google Play"
                      className="w-36 h-14 object-contain"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apps;
