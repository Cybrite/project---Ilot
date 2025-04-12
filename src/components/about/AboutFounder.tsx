
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

export const AboutFounder = () => {
  return (
    <Card className="overflow-hidden border-saffron-200">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src="https://picsum.photos/id/25/600/800" // Placeholder image
            alt="Dr. Vrindavan Chandra Das" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-2/3">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-2xl font-bold text-saffron-700">Dr. Vrindavan Chandra Das</h3>
            <p className="text-muted-foreground">Founder, GIVE Foundation</p>
            
            <div className="space-y-4">
              <p>
                Dr. Vrindavan Chandra Das is a spiritual leader, scholar, and teacher dedicated to spreading the message of Bhagavad Gita and Krishna Consciousness throughout the world.
              </p>
              
              <p>
                With a Ph.D. in Vedic Philosophy and over two decades of teaching experience, Dr. Das has touched the lives of thousands of people through his lectures, books, and educational programs.
              </p>
              
              <h4 className="text-lg font-semibold text-saffron-700">Educational Background</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Ph.D. in Vedic Philosophy</li>
                <li>Master's in Sanskrit Literature</li>
                <li>Extensive training under renowned spiritual masters</li>
              </ul>
              
              <h4 className="text-lg font-semibold text-saffron-700">Achievements</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Author of multiple books on Vedic wisdom</li>
                <li>Founded GIVE Foundation to promote Vedic education</li>
                <li>Established GITALAYA, a center for spiritual learning</li>
                <li>Conducted over 1,000 seminars and workshops globally</li>
                <li>Developed comprehensive curriculum on Bhagavad Gita</li>
              </ul>
              
              <p>
                Dr. Das continues to inspire people with his profound knowledge, compassionate nature, and dedication to spiritual upliftment of society.
              </p>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
};
