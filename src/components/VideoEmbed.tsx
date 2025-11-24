import React, { useEffect } from 'react';

interface VideoEmbedProps {
  videoId?: string;
  aspectRatio?: string;
  className?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ 
  videoId = "6854294a0ca68d24f8bc786c", // Default ID
  aspectRatio = "aspect-video",
  className = ""
}) => {
  useEffect(() => {
    const scriptId = `vturb-script-loader-${videoId}`;
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = `https://scripts.converteai.net/40eff44f-f7c6-4321-a7c6-b39c3f353230/players/${videoId}/v4/player.js`;
    script.async = true;
    script.type = "text/javascript";
    
    document.head.appendChild(script);
  }, [videoId]);

  // Use 'any' to bypass TypeScript check for the custom element
  const VturbSmartplayer = 'vturb-smartplayer' as any;

  return (
    <div className={`relative w-full mx-auto shadow-2xl shadow-black/80 rounded-sm overflow-hidden border border-gray-800/50 bg-black/40 backdrop-blur-sm ${className}`}>
        {/* The specific custom element requested */}
        <div className={`w-full ${aspectRatio} relative bg-black`}>
            <VturbSmartplayer 
                id={`vid-${videoId}`} 
                style={{
                    display: 'block', 
                    margin: '0 auto', 
                    width: '100%',
                    height: '100%' 
                }} 
            />
        </div>
        
        {/* Decorative Glow behind the video */}
        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-700/30 to-yellow-900/10 rounded-sm blur opacity-40 -z-10"></div>
    </div>
  );
};

export default VideoEmbed;