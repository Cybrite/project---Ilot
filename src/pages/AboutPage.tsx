
import React from 'react';
import { Layout } from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AboutGIVE } from '@/components/about/AboutGIVE';
import { AboutFounder } from '@/components/about/AboutFounder';
import { PhilosophySection } from '@/components/about/PhilosophySection';

const AboutPage = () => {
  return (
    <Layout>
      <div className="container py-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-saffron-700">About Us</h1>
          <p className="text-lg text-muted-foreground">
            Learn more about our mission, founder, and philosophy
          </p>
        </div>
        
        <Tabs defaultValue="give" className="space-y-6">
          <TabsList className="bg-saffron-50 border border-saffron-100 w-full justify-start overflow-x-auto">
            <TabsTrigger 
              value="give" 
              className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
            >
              About GIVE
            </TabsTrigger>
            <TabsTrigger 
              value="founder" 
              className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
            >
              Dr. Vrindavan Chandra Das
            </TabsTrigger>
            <TabsTrigger 
              value="philosophy" 
              className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
            >
              Krishna Conscious Philosophy
            </TabsTrigger>
            <TabsTrigger 
              value="prabhupada" 
              className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
            >
              Srila Prabhupada
            </TabsTrigger>
            <TabsTrigger 
              value="bhakt" 
              className="data-[state=active]:bg-saffron-500 data-[state=active]:text-white"
            >
              Bhakt Bhagwat
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="give" className="mt-0">
            <AboutGIVE />
          </TabsContent>
          
          <TabsContent value="founder" className="mt-0">
            <AboutFounder />
          </TabsContent>
          
          <TabsContent value="philosophy" className="mt-0">
            <PhilosophySection />
          </TabsContent>
          
          <TabsContent value="prabhupada" className="mt-0">
            <div className="text-center p-12 bg-gray-100 rounded-lg">
              <p className="text-lg text-muted-foreground">
                Content about Srila Prabhupada coming soon...
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="bhakt" className="mt-0">
            <div className="text-center p-12 bg-gray-100 rounded-lg">
              <p className="text-lg text-muted-foreground">
                Content about Bhakt Bhagwat coming soon...
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AboutPage;
