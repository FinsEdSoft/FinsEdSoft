"use client"
import React, { useEffect, useState } from "react";

function Videos() {

  const [videos, setVideos] = useState<any>([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
    const res = fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PLJxAkr4GPnyW5bs33KAWKvPqlyrjYH5BV&key="+process.env.NEXT_PUBLIC_API_KEY)
    .then((res) => res.json())
    .then((data) => {
      setVideos(data.items);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div>
      <div className="text-white px-4 py-2 bg-[#0f3755]">
        <h1 className="text-3xl">Videos</h1>
      </div>
      <div className="flex flex-1 bg-white text-black overflow-x-auto">
        {videos.map((video: any) => {
          return (
            <div key={video.id} className="bg-white p-4 rounded-md hover:shadow-md flex-1 border-2 my-4 ml-4  flex">
              <iframe className="object-contain rounded-lg"
                width="426"
                height="240"
                src={`https://www.youtube.com/embed/${video.contentDetails.videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Videos;
