import React, { useEffect, useRef, useState } from 'react';
import { widthScreen } from '../../../../hooks/widthScreen';

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: any;
  }
}

export const YouTubePlayer: React.FC<{width: string, height:string, videoId: string; show: boolean }> = ({ height, videoId, show }) => {
    const playerRef = useRef<HTMLDivElement>(null);
    const player = useRef<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { width } = widthScreen();
    useEffect(() => {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        window.onYouTubeIframeAPIReady = () => {
        player.current = new window.YT.Player(playerRef.current, {
            height: {height},
            width: `${width}px`,
            videoId: videoId,
            events: {
              onReady: onPlayerReady,
            },
            playerVars: {
              autoplay: 1,
              loop: 1,
              playlist: videoId,
              controls: 0,
              showinfo: 0,
              modestbranding: 1,
              rel: 0,
              fs: 0,
              iv_load_policy: 3,
              disablekb: 1,
            },
        });
    };

    return () => {
      if (player.current) {
        player.current.destroy();
      }
    };
  }, [videoId]);

  const onPlayerReady = (_:any) => {
    setIsLoading(false);
    player.current.setPlaybackQuality( ( width < 1400) ? 'large' : 'hd1080'); 
    // event.target.mute();
  };


  return show ? (
    <>
      {isLoading && <div className="loading">Cargando...</div>}
      <div ref={playerRef} style={{ display: isLoading ? 'block' : 'block' }}></div>
    </>
  ) : null;
};
