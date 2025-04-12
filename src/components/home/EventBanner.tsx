import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Mock data for events
const events = [
  {
    id: 1,
    title: "Krishna Janmashtami",
    description:
      "Celebrate the divine appearance of Lord Krishna with kirtan, offerings and feast.",
    date: "August 15, 2025",
    image: "https://picsum.photos/id/1/1200/400", // Placeholder image
    link: "/events/janmashtami",
  },
  {
    id: 2,
    title: "GITA Olympiad 2025",
    description:
      "Participate in the annual Gita knowledge competition and win prizes.",
    date: "June 21, 2025",
    image: "https://picsum.photos/id/2/1200/400", // Placeholder image
    link: "/events/gita-olympiad",
  },
  {
    id: 3,
    title: "Ekadashi Reminder",
    description: "Join us for the upcoming Ekadashi fast and special prayers.",
    date: "May 5, 2025",
    image: "https://picsum.photos/id/3/1200/400", // Placeholder image
    link: "/events/ekadashi",
  },
  {
    id: 4,
    title: "Temple Construction Updates",
    description:
      "See the latest progress on our new GITALAYA temple construction.",
    date: "Ongoing",
    image: "https://picsum.photos/id/4/1200/400", // Placeholder image
    link: "/gitalaya",
  },
];

export const EventBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = window.setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % events.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + events.length) % events.length
    );
  };

  return (
    <div className="relative overflow-hidden rounded-lg border border-saffron-200 h-[350px] group">
      {/* Event slides */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            className="flex-shrink-0 w-full h-full relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end text-white p-6">
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <p className="mb-2">{event.description}</p>
              <div className="flex items-center justify-between">
                <span className="bg-saffron-500 text-white px-3 py-1 rounded-full text-sm">
                  {event.date}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/10 text-white border-white/20 backdrop-blur-sm hover:bg-white/20"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {events.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              activeIndex === index
                ? "bg-white w-4"
                : "bg-white/50 hover:bg-white/80"
            )}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation arrows - only visible on hover or focus */}
      <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-black/20 border-white/10 text-white hover:bg-black/40"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-black/20 border-white/10 text-white hover:bg-black/40"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
