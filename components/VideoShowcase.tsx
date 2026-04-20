"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface Video {
  id: number;
  title: string;
  category: "Wedding" | "Commercial" | "Corporate" | "Film";
  thumbnail: string;
  videoUrl: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "Sarah & James - Wedding Highlight",
    category: "Wedding",
    thumbnail:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=500&h=500&fit=crop",
    videoUrl:
      "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8",
    //videoUrl: "/8a7bf4c4d7db4baf8b844648c29a8e89.mp4",
  },
  {
    id: 2,
    title: "Emma & David - Love Story",
    category: "Wedding",
    thumbnail:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=500&fit=crop",
    videoUrl: "https://placeholdervideo.dev/854x480",
    //videoUrl: "/8a7bf4c4d7db4baf8b844648c29a8e89.mp4",
  },
  {
    id: 3,
    title: "TechVision - Brand Campaign",
    category: "Commercial",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=500&h=500&fit=crop",
    // videoUrl:
    //   "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    videoUrl: "/8a7bf4c4d7db4baf8b844648c29a8e89.mp4",
  },
  {
    id: 4,
    title: "Global Industries - Company Profile",
    category: "Corporate",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=500&fit=crop",
    // videoUrl:
    //   "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    videoUrl: "/8a7bf4c4d7db4baf8b844648c29a8e89.mp4",
  },
  {
    id: 5,
    title: "Urban Beats - Music Video",
    category: "Film",
    thumbnail:
      "https://images.unsplash.com/photo-1505106407718-9f8b22dc1a0e?w=500&h=500&fit=crop",
    // videoUrl:
    //   "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    videoUrl: "/8a7bf4c4d7db4baf8b844648c29a8e89.mp4",
  },
  {
    id: 6,
    title: "EventMasters - Corporate Event",
    category: "Corporate",
    thumbnail:
      "https://images.unsplash.com/photo-1519167758481-dc4dc1474028?w=500&h=500&fit=crop",
    // videoUrl:
    //   "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    videoUrl: "/8a7bf4c4d7db4baf8b844648c29a8e89.mp4",
  },
  {
    id: 7,
    title: "Sunrise Vows - Wedding Cinematic",
    category: "Wedding",
    thumbnail:
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=500&h=500&fit=crop",
    // videoUrl:
    //   "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    videoUrl: "/8a7bf4c4d7db4baf8b844648c29a8e89.mp4",
  },
  {
    id: 8,
    title: "Innovation Labs - Commercial",
    category: "Commercial",
    thumbnail:
      "https://images.unsplash.com/photo-1461749280684-ddeaa9ec6d11?w=500&h=500&fit=crop",
    // videoUrl:
    //   "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    videoUrl: "/8a7bf4c4d7db4baf8b844648c29a8e89.mp4",
  },
  {
    id: 9,
    title: "Dreams in Motion - Short Film",
    category: "Film",
    thumbnail:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=500&fit=crop",
    // videoUrl:
    //   "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    videoUrl: "/8a7bf4c4d7db4baf8b844648c29a8e89.mp4",
  },
  {
    id: 10,
    title: "Sunrise Productions - Corporate",
    category: "Corporate",
    thumbnail:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=500&fit=crop",
    // videoUrl:
    //   "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    videoUrl: "/8a7bf4c4d7db4baf8b844648c29a8e89.mp4",
  },
  {
    id: 11,
    title: "Alex & Lisa - Wedding Day",
    category: "Wedding",
    thumbnail:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop",
    // videoUrl:
    //   "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    videoUrl: "/8a7bf4c4d7db4baf8b844648c29a8e89.mp4",
  },
  {
    id: 12,
    title: "Neon Nights - Creative Film",
    category: "Film",
    thumbnail:
      "https://images.unsplash.com/photo-1500516297652-47a5eae1ff57?w=500&h=500&fit=crop",
    // videoUrl:
    //   "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    videoUrl: "/8a7bf4c4d7db4baf8b844648c29a8e89.mp4",
  },
];

const categories = [
  "All",
  "Wedding",
  "Commercial",
  "Corporate",
  "Film",
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
          <h2 className="section-title mb-4 text-slate-200">Our Portfolio</h2>
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
            className="bg-[#0F0F0F] rounded-lg overflow-hidden lg:overflow-auto max-w-4xl w-full lg:w-[30%] max-h-[100vh] lg:max-h-[100vh] flex flex-col"
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
