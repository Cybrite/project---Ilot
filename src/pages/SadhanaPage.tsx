import { Layout } from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Music, Calendar, Flame, BookOpen } from 'lucide-react';

const SadhanaPage = () => {
  return (
    <Layout>
      <div className="container py-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-krishna-700">Sadhana</h1>
          <p className="text-lg text-muted-foreground">
            Your daily spiritual practice journey
          </p>
        </div>
        
        <Tabs defaultValue="chanting" className="space-y-6">
          <TabsList className="bg-krishna-50 border border-krishna-100 w-full justify-start overflow-x-auto">
            <TabsTrigger 
              value="chanting" 
              className="data-[state=active]:bg-krishna-500 data-[state=active]:text-white"
            >
              <Music className="h-4 w-4 mr-2" />
              Chanting
            </TabsTrigger>
            <TabsTrigger 
              value="calendar" 
              className="data-[state=active]:bg-krishna-500 data-[state=active]:text-white"
            >
              <Calendar className="h-4 w-4 mr-2" />
              Vaishnava Calendar
            </TabsTrigger>
            <TabsTrigger 
              value="arati" 
              className="data-[state=active]:bg-krishna-500 data-[state=active]:text-white"
            >
              <Flame className="h-4 w-4 mr-2" />
              Arati
            </TabsTrigger>
            <TabsTrigger 
              value="scripture" 
              className="data-[state=active]:bg-krishna-500 data-[state=active]:text-white"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Daily Scripture
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="chanting" className="mt-0">
            <div className="bg-white rounded-lg border border-krishna-200 p-6">
              <h2 className="text-2xl font-bold text-krishna-700 mb-4">Maha Mantra Counter</h2>
              <div className="flex flex-col items-center space-y-6 py-6">
                <div className="text-6xl font-bold text-krishna-500">0</div>
                <p className="text-center text-muted-foreground">Total rounds today</p>
                
                <div className="w-full max-w-md border border-krishna-200 rounded-lg p-4 bg-krishna-50">
                  <p className="text-center font-medium text-krishna-700 mb-2">Hare Krishna Maha Mantra</p>
                  <p className="text-center italic">
                    Hare Krishna Hare Krishna<br />
                    Krishna Krishna Hare Hare<br />
                    Hare Rama Hare Rama<br />
                    Rama Rama Hare Hare
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <button className="bg-krishna-500 hover:bg-krishna-600 text-white py-2 px-6 rounded-md transition-colors font-medium">
                    Start Chanting
                  </button>
                  <button className="border border-krishna-300 hover:bg-krishna-50 text-krishna-700 py-2 px-6 rounded-md transition-colors font-medium">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="calendar" className="mt-0">
            <div className="bg-white rounded-lg border border-krishna-200 p-6">
              <h2 className="text-2xl font-bold text-krishna-700 mb-4">Vaishnava Calendar</h2>
              <div className="text-center p-12">
                <p className="text-lg text-muted-foreground">
                  Vaishnava calendar with important dates and festivals coming soon...
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="arati" className="mt-0">
            <div className="bg-white rounded-lg border border-krishna-200 p-6">
              <h2 className="text-2xl font-bold text-krishna-700 mb-4">Arati Ceremonies</h2>
              <div className="text-center p-12">
                <p className="text-lg text-muted-foreground">
                  Arati procedures and guides coming soon...
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="scripture" className="mt-0">
            <div className="bg-white rounded-lg border border-krishna-200 p-6">
              <h2 className="text-2xl font-bold text-krishna-700 mb-4">Daily Scripture Reading</h2>
              <div className="text-center p-12">
                <p className="text-lg text-muted-foreground">
                  Daily scripture readings and reflections coming soon...
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default SadhanaPage;
