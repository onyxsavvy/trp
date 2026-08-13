"use client";

import { useState, useRef, useEffect } from "react";
import { VolumeX, Volume2 } from "lucide-react";
import { useInView } from "framer-motion";

export function StoryVideo() {
  const [isMuted, setIsMuted] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { amount: 0.1 });

  // Auto-mute when scrolling past
  useEffect(() => {
    if (!isInView && !isMuted) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsMuted(true);
    }
  }, [isInView, isMuted]);

  // Sync state to video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div 
      ref={containerRef} 
      className="relative aspect-[4/3] w-full max-w-xl mx-auto rounded-xl overflow-hidden shadow-xl group"
    >
      <div className="absolute inset-4 border-2 border-tan/30 z-10 pointer-events-none rounded-lg transition-opacity duration-300"></div>
      
      <video 
        ref={videoRef}
        src="/images/about.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-full object-cover"
      />
      
      <button
        onClick={toggleMute}
        className="absolute top-6 right-6 z-20 bg-ink-900/40 hover:bg-ink-900/70 text-cream-50 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-md opacity-70 hover:opacity-100 group-hover:opacity-100"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </div>
  );
}
