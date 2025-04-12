
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const PhilosophySection = () => {
  return (
    <Card className="border-saffron-200">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-saffron-700 mb-4">Krishna Conscious Philosophy</h3>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-saffron-50 border border-saffron-100">
            <TabsTrigger 
              value="overview" 
              className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="principles" 
              className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
            >
              Core Principles
            </TabsTrigger>
            <TabsTrigger 
              value="gita" 
              className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
            >
              Bhagavad Gita
            </TabsTrigger>
            <TabsTrigger 
              value="practices" 
              className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
            >
              Practices
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <p>
              Krishna Consciousness is a spiritual philosophy and practice that focuses on developing love for Krishna (God) and all living beings. It is based on the ancient Vedic texts of India, particularly Bhagavad Gita and Srimad Bhagavatam.
            </p>
            <p>
              The philosophy teaches that we are not our physical bodies, but eternal spiritual souls (atma) who are part of the Supreme Soul (Paramatma). Our natural position is to be in loving service to Krishna, and by reviving this relationship, we can experience true happiness and fulfillment.
            </p>
            <p>
              Krishna Consciousness was brought to the Western world by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, who founded the International Society for Krishna Consciousness (ISKCON) in 1966.
            </p>
          </TabsContent>
          
          <TabsContent value="principles" className="space-y-4">
            <h4 className="text-lg font-semibold text-saffron-700">The Three Fundamental Truths</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong>Sambandha:</strong> Understanding our eternal relationship with Krishna as His servants and parts
              </li>
              <li>
                <strong>Abhidheya:</strong> The process of reviving our relationship through devotional service (bhakti-yoga)
              </li>
              <li>
                <strong>Prayojana:</strong> The ultimate goal of pure love for Krishna (prema)
              </li>
            </ol>
            
            <h4 className="text-lg font-semibold text-saffron-700 mt-4">Key Philosophical Concepts</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>The distinction between matter and spirit</li>
              <li>The eternal nature of the soul</li>
              <li>The law of karma (action and reaction)</li>
              <li>The cycle of reincarnation</li>
              <li>The supreme position of Krishna as the source of all energies</li>
            </ul>
          </TabsContent>
          
          <TabsContent value="gita" className="space-y-4">
            <p>
              Bhagavad Gita, often referred to as the "Song of God," is a 700-verse scripture that is part of the epic Mahabharata. It presents a conversation between Lord Krishna and His devotee Arjuna on the battlefield of Kurukshetra.
            </p>
            <p>
              The Gita covers various yoga systems and philosophical concepts including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Karma-yoga (the path of selfless action)</li>
              <li>Jnana-yoga (the path of philosophical inquiry)</li>
              <li>Dhyana-yoga (the path of meditation)</li>
              <li>Bhakti-yoga (the path of loving devotion)</li>
            </ul>
            <p>
              It ultimately recommends bhakti-yoga as the highest and most direct path to spiritual perfection, culminating in Krishna's famous instruction: "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear." (Bg. 18.66)
            </p>
          </TabsContent>
          
          <TabsContent value="practices" className="space-y-4">
            <h4 className="text-lg font-semibold text-saffron-700">The Four Regulative Principles</h4>
            <ol className="list-decimal pl-5 space-y-2">
              <li>No eating of meat, fish, or eggs</li>
              <li>No intoxication</li>
              <li>No illicit sex</li>
              <li>No gambling</li>
            </ol>
            
            <h4 className="text-lg font-semibold text-saffron-700 mt-4">Daily Spiritual Practices</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Chanting the Hare Krishna Maha-mantra:</strong> Hare Krishna, Hare Krishna, Krishna Krishna, Hare Hare / Hare Rama, Hare Rama, Rama Rama, Hare Hare
              </li>
              <li>Reading Vedic scriptures like Bhagavad Gita and Srimad Bhagavatam</li>
              <li>Offering food to Krishna before eating (prasadam)</li>
              <li>Temple worship and deity service</li>
              <li>Association with devotees (sadhu-sanga)</li>
            </ul>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
