import { Card, CardContent } from "@/components/ui/card";

export const AboutGIVE = () => {
  return (
    <Card className="overflow-hidden border-saffron-200">
      <div className="relative h-60">
        <img 
          src="https://picsum.photos/id/30/1200/400" // Placeholder image
          alt="GIVE Foundation" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-white">GIVE</h3>
            <p className="text-white/80">Gita Initiative for Value Education</p>
          </div>
        </div>
      </div>
      <CardContent className="p-6 space-y-4">
        <p>
          GIVE (Gita Initiative for Value Education) is a spiritual educational organization dedicated to spreading the timeless wisdom of Bhagavad Gita and Vedic knowledge. Our mission is to help people understand and apply spiritual principles in their daily lives.
        </p>
        <p>
          Founded by Dr. Vrindavan Chandra Das, GIVE conducts various educational programs, seminars, and courses to teach the philosophy of Krishna Consciousness to people from all walks of life.
        </p>
        <h4 className="text-lg font-semibold text-saffron-700">Our Vision</h4>
        <p>
          To create a society of spiritually enlightened individuals who can contribute positively to the world while progressing on their spiritual journey.
        </p>
        <h4 className="text-lg font-semibold text-saffron-700">Our Mission</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li>Spread the teachings of Bhagavad Gita worldwide</li>
          <li>Establish centers for spiritual education and practice</li>
          <li>Develop educational materials on Vedic wisdom</li>
          <li>Organize programs that help people incorporate spiritual practices in their daily lives</li>
        </ul>
      </CardContent>
    </Card>
  );
};
