import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, RefreshCw, Sparkles } from "lucide-react";

// Mock data for daily inspiration
const inspirations = [
  {
    type: "verse",
    content:
      "O son of Kuntī, the nonpermanent appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons. They arise from sense perception, O scion of Bharata, and one must learn to tolerate them without being disturbed.",
    source: "Bhagavad Gita 2.14",
    image: null,
  },
  {
    type: "quote",
    content:
      "Life is nothing but a continuous quest for meaning. The consciousness of Krishna provides that meaning to the heart's longing.",
    source: "Dr. Vrindavan Chandra Das",
    image: null,
  },
  {
    type: "darshan",
    content: "Daily darshan of Sri Sri Radha Krishna",
    source: "ISKCON Temple",
    image: "https://picsum.photos/800/500", // Placeholder image, replace with real darshan image
  },
  {
    type: "video",
    content: "Divine leela of Lord Krishna",
    source: "Bhakt Bhagwat",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder, replace with real video link
  },
];

export const DailyInspiration = () => {
  const [activeTab, setActiveTab] = useState("verse");
  const [inspiration, setInspiration] = useState(inspirations[0]);

  // Function to refresh inspiration content
  const refreshInspiration = () => {
    const newInspiration = inspirations.find((i) => i.type === activeTab);
    if (newInspiration) {
      setInspiration(newInspiration);
    }
  };

  // Update inspiration when tab changes
  useEffect(() => {
    refreshInspiration();
  }, [activeTab]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-saffron-700 flex items-center">
          <Sparkles className="h-5 w-5 mr-2 text-saffron-500" />
          Start Your Day
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={refreshInspiration}
          className="text-devotion-600 hover:text-devotion-700 hover:bg-devotion-50"
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="bg-saffron-50 border border-saffron-100">
          <TabsTrigger
            value="verse"
            className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
          >
            Verse
          </TabsTrigger>
          <TabsTrigger
            value="quote"
            className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
          >
            Quote
          </TabsTrigger>
          <TabsTrigger
            value="darshan"
            className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
          >
            Darshan
          </TabsTrigger>
          <TabsTrigger
            value="video"
            className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
          >
            Video
          </TabsTrigger>
        </TabsList>

        <Card className="border-saffron-200 overflow-hidden">
          <CardContent className="p-0">
            <TabsContent value="verse" className="p-6 space-y-4 mt-0">
              <blockquote className="border-l-4 border-saffron-500 pl-4 italic">
                {inspiration.type === "verse" && inspiration.content}
              </blockquote>
              <p className="text-right text-sm font-medium text-saffron-700">
                {inspiration.type === "verse" && inspiration.source}
              </p>
              <Button
                variant="link"
                className="text-devotion-600 hover:text-devotion-700 p-0"
              >
                Read more verses <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </TabsContent>

            <TabsContent value="quote" className="p-6 space-y-4 mt-0">
              <blockquote className="border-l-4 border-devotion-500 pl-4 italic">
                {inspiration.type === "quote" && inspiration.content}
              </blockquote>
              <p className="text-right text-sm font-medium text-devotion-700">
                {inspiration.type === "quote" && inspiration.source}
              </p>
              <Button
                variant="link"
                className="text-devotion-600 hover:text-devotion-700 p-0"
              >
                Explore more quotes <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </TabsContent>

            <TabsContent value="darshan" className="mt-0">
              {inspiration.type === "darshan" && inspiration.image && (
                <div className="space-y-4">
                  <img
                    src={inspiration.image}
                    alt={inspiration.content}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="p-4">
                    <p className="text-center font-medium">
                      {inspiration.content}
                    </p>
                    <p className="text-center text-sm text-muted-foreground">
                      {inspiration.source}
                    </p>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="video" className="mt-0">
              {inspiration.type === "video" && inspiration.video && (
                <div className="space-y-4">
                  <div className="aspect-video">
                    <iframe
                      src={inspiration.video}
                      title={inspiration.content}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-4">
                    <p className="text-center font-medium">
                      {inspiration.content}
                    </p>
                    <p className="text-center text-sm text-muted-foreground">
                      {inspiration.source}
                    </p>
                  </div>
                </div>
              )}
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
};
