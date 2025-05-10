"use client"
import React, { useEffect, useState } from "react";

function Videos() {

  const [videos, setVideos] = useState<any>([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = () => {
    fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=6&playlistId=PLJxAkr4GPnyW5bs33KAWKvPqlyrjYH5BV&key=${process.env.NEXT_PUBLIC_API_KEY}&order=date`)
    .then((res) => res.json())
    .then((data) => {
      setVideos(data.items);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="text-white px-6 py-4 bg-[#0f3755] shadow-md flex justify-between items-center">
        <h1 className="text-3xl font-bold">Videos</h1>
        <a href="https://www.youtube.com/@FinsEdSoft" target="_blank" className="bg-white text-[#0f3755] px-4 py-2 rounded-md hover:bg-opacity-90 transition-all font-medium flex items-center gap-2">
          View All <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </a>
      </div>
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos && videos.length > 0 ? (
            videos.map((video: any) => (
              <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative pb-[56.25%] h-0">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.contentDetails.videoId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">{video.snippet?.title || "Video Title"}</h3>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex justify-center items-center h-48">
              <p className="text-gray-500">Loading videos...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Videos;
