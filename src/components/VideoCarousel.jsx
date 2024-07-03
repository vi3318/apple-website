import { useRef, useEffect, useState } from "react";
import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  const videoRefs = useRef([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [showReplayButton, setShowReplayButton] = useState(false);

  const nextSlide = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === hightlightsSlides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? hightlightsSlides.length - 1 : prevIndex - 1
    );
  };

  const handleReplay = () => {
    setCurrentVideoIndex(0); // Start from the first slide
    setAutoplay(true); // Start autoplay
    setShowReplayButton(false); // Hide replay button
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Adjust autoplay interval in milliseconds (e.g., 5000ms = 5 seconds)

      return () => clearInterval(interval);
    }
  }, [autoplay]);

  useEffect(() => {
    // Play the current video and pause others
    videoRefs.current.forEach((video, index) => {
      if (index === currentVideoIndex) {
        video.play();
      } else {
        video.pause();
        video.currentTime = 0; // Reset video to start
      }
    });

    // Event listener for video end
    const handleVideoEnd = () => {
      if (currentVideoIndex === hightlightsSlides.length - 1) {
        // Last slide reached
        setAutoplay(false); // Stop autoplay
        setShowReplayButton(true); // Show replay button
      } else {
        nextSlide();
      }
    };

    // Attach event listener to the current video
    const currentVideo = videoRefs.current[currentVideoIndex];
    currentVideo.addEventListener("ended", handleVideoEnd);

    // Clean up event listener when component unmounts or index changes
    return () => {
      currentVideo.removeEventListener("ended", handleVideoEnd);
    };
  }, [currentVideoIndex, autoplay]);

  return (
    <div className="relative">
      <div className="flex items-center">
        {hightlightsSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`sm:align-center sm:justify-center pr-10 ${
              index === currentVideoIndex ? "block" : "hidden"
            }`}
          >
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="w-full h-full object-cover sm:"
                  autoPlay={autoplay && index === currentVideoIndex}
                  muted
                >
                  <source src={slide.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {slide.textLists.map((text, i) => (
                  <p key={i} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Replay Button */}
      {showReplayButton && (
        <button
          className="absolute bottom-4 left-4 bg-black text-white rounded-full p-2 hover:bg-gray-900 focus:outline-none z-20"
          onClick={handleReplay}
        >
          Replay
        </button>
      )}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {hightlightsSlides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full ${
              index === currentVideoIndex ? "bg-white" : "bg-gray-300"
            }`}
            onClick={() => {
              setCurrentVideoIndex(index);
              setAutoplay(true);
              setShowReplayButton(false);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;
