"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface Video {
  id: number;
  title: string;
  category:
    | "Documentary"
    | "Corporate Events"
    | "Brand Content"
    | "Video Podcast"
    | "Live Production";
  thumbnail: string;
  videoUrl: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "Birthday Highlight",
    category: "Documentary",
    thumbnail: "/birthday.png",
    videoUrl:
      "https://qiiqmpeaohfneuboasrk.supabase.co/storage/v1/object/public/tonyPortfolio2/birthday.mp4",
    //videoUrl: "/8a7bf4c4d7db4baf8b844648c29a8e89.mp4",
  },
  {
    id: 2,
    title: "Multi-dimensional Workshop",
    category: "Corporate Events",
    thumbnail: "/multidimensionalWorkshop.png",
    videoUrl:
      "https://qiiqmpeaohfneuboasrk.supabase.co/storage/v1/object/public/tonyPortfolio2/multidimensionalWorkshop.mp4",
    //videoUrl: "/8a7bf4c4d7db4baf8b844648c29a8e89.mp4",
  },
  {
    id: 3,
    title: "Olamide & Emmanuel Wedding",
    category: "Documentary",
    thumbnail: "ola&emma.png",
    videoUrl:
      "https://qiiqmpeaohfneuboasrk.supabase.co/storage/v1/object/public/tonyPortfolio2/wedding1.mp4",
  },
  {
    id: 4,
    title: "7th Bi-annual Interhouse Sport",
    category: "Documentary",
    thumbnail: "/interhouseSport.png",
    videoUrl:
      "https://qiiqmpeaohfneuboasrk.supabase.co/storage/v1/object/public/tonyPortfolio2/interhouseSport.mp4",
  },
  {
    id: 5,
    title: "Jeremiah's Wedding Highliht",
    category: "Documentary",
    thumbnail: "/jeremiahWedding.png",
    videoUrl:
      "https://qiiqmpeaohfneuboasrk.supabase.co/storage/v1/object/public/tonyPortfolio2/wedding2.mp4",
  },
  {
    id: 6,
    title: "Concert",
    category: "Live Production",
    thumbnail: "/concert.png",
    videoUrl:
      "https://qiiqmpeaohfneuboasrk.supabase.co/storage/v1/object/public/tonyPortfolio2/gospelConcert.mp4",
  },
  {
    id: 7,
    title: "Wedding Cinematic",
    category: "Documentary",
    thumbnail: "/wedding3.png",
    videoUrl:
      "https://qiiqmpeaohfneuboasrk.supabase.co/storage/v1/object/public/tonyPortfolio2/wedding3.mp4",
  },
  {
    id: 8,
    title: "Gravity Party",
    category: "Documentary",
    thumbnail: "/gravityParty.png",
    videoUrl:
      "https://qiiqmpeaohfneuboasrk.supabase.co/storage/v1/object/public/tonyPortfolio2/houseparty.mp4",
  },
];

const categories = [
  "All",
  "Documentaries",
  "Commercials",
  "Corporate Events",
  "Brand Content",
  "Video Podcast",
  "Live Production",
] as const;

export function VideoShowcase() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  console.log(selectedVideo?.videoUrl);

  const filteredVideos =
    activeCategory === "All"
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="min-h-screen py-20 bg-[#0F0F0F] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="section-title mb-4 text-slate-200">My Portfolio</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A curated selection of our finest cinematic works across multiple
            genres and styles.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                activeCategory === category
                  ? "bg-yellow-500 text-black shadow-lg shadow-yellow-500/30"
                  : "bg-[#1A1A1A] text-gray-400 hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="relative overflow-hidden rounded-xl cursor-pointer group transition-transform duration-300 hover:scale-105"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedVideo(video)}
                className="absolute inset-0 bg-black/10 lg:bg-black/40 lg:group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center lg:opacity-0 lg:group-hover:opacity-100"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Play
                      className="w-8 h-8 text-black ml-1"
                      fill="currentColor"
                    />
                  </div>
                  <span className="text-white font-semibold text-sm">
                    {video.category}
                  </span>
                </div>
              </button>
              <div className="p-4 bg-[#1A1A1A]">
                <h3 className="text-white font-semibold text-sm line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-yellow-500 text-xs mt-2">{video.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-[#0F0F0F] rounded-lg overflow-hidden lg:overflow-auto max-w-4xl w-full lg:w-[30%] max-h-screen flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Embed */}
            <div className="relative w-full bg-black">
              <video
                width="100%"
                height="500"
                //src={selectedVideo.videoUrl}
                title={selectedVideo.title}
                autoPlay
                muted
                playsInline
                controls
                //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                //allowFullScreen
                className="w-full z-100"
              >
                <source src={selectedVideo.videoUrl} type="video/mp4" />
              </video>
            </div>

            {/* Info */}
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {selectedVideo.title}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-yellow-500 text-black text-sm rounded-full font-medium">
                    {selectedVideo.category}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-400 hover:text-white transition-colors text-2xl"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
