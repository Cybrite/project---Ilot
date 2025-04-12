
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
// import { toast } from 'sonner';

export const MantraPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [prevVolume, setPrevVolume] = useState(0.7);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Initialize audio on component mount
  useEffect(() => {
    audioRef.current = new Audio('/hare-krishna-maha-mantra.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    // For development placeholder (remove in production)
    audioRef.current.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  // Update audio volume when volume state changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        // toast.info('Hare Krishna Maha Mantra paused');
      } else {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
          // toast.error('Could not play the audio. Please try again.');
        });
        // toast.success('Playing Hare Krishna Maha Mantra');
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(prevVolume);
      setIsMuted(false);
    } else {
      setPrevVolume(volume);
      setVolume(0);
      setIsMuted(true);
    }
  };

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0];
    setVolume(newVolume);
    
    if (newVolume === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-full shadow-lg border border-saffron-200 flex items-center p-1 w-fit transition-all hover:scale-105">
        <Button
          variant="outline"
          size="icon"
          onClick={togglePlay}
          className={`rounded-full border-none ${isPlaying ? 'bg-saffron-100 text-saffron-600' : 'bg-saffron-500 text-white'} hover:bg-saffron-600 hover:text-white`}
          aria-label={isPlaying ? 'Pause Mantra' : 'Play Mantra'}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        
        <div className="hidden md:flex items-center ml-1 gap-2 pr-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="rounded-full h-8 w-8 p-0 text-saffron-700 hover:text-saffron-800 hover:bg-saffron-50"
          >
            {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </Button>
          
          <div className="w-20">
            <Slider
              defaultValue={[volume]}
              value={[volume]}
              max={1}
              step={0.01}
              onValueChange={handleVolumeChange}
              className="w-full"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-1 text-xs font-medium text-saffron-600 bg-white/80 backdrop-blur-sm rounded-full px-2 py-0.5 animate-pulse-gentle">
        Hare Krishna Maha Mantra
      </div>
    </div>
  );
};
