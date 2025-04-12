import { Layout } from '@/components/Layout';
import { DailyInspiration } from '@/components/home/DailyInspiration';
import { EventBanner } from '@/components/home/EventBanner';
import { MantraPlayer } from '@/components/home/MantraPlayer';
import { Button } from '@/components/ui/button';
import { BookOpen, Calendar, Music, Gift, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HomePage = () => {
  // Features grid items
  const features = [
    { 
      title: 'Courses', 
      description: 'Explore our spiritual courses', 
      icon: <BookOpen className="h-8 w-8 text-saffron-600" />,
      link: '/courses',
      color: 'from-saffron-50 to-saffron-100 border-saffron-200'
    },
    { 
      title: 'Events', 
      description: 'Upcoming festivals and programs', 
      icon: <Calendar className="h-8 w-8 text-devotion-600" />,
      link: '/events',
      color: 'from-devotion-50 to-devotion-100 border-devotion-200'
    },
    { 
      title: 'Sadhana', 
      description: 'Daily spiritual practices', 
      icon: <Music className="h-8 w-8 text-krishna-600" />,
      link: '/sadhana',
      color: 'from-krishna-50 to-krishna-100 border-krishna-200'
    },
    { 
      title: 'Donate', 
      description: 'Support our mission', 
      icon: <Gift className="h-8 w-8 text-saffron-600" />,
      link: '/donate',
      color: 'from-saffron-50 to-saffron-100 border-saffron-200'
    },
    { 
      title: 'SQ Test', 
      description: 'Check your spiritual quotient', 
      icon: <Award className="h-8 w-8 text-devotion-600" />,
      link: '/sq-test',
      color: 'from-devotion-50 to-devotion-100 border-devotion-200'
    },
    { 
      title: 'Connect', 
      description: 'Join our spiritual community', 
      icon: <Globe className="h-8 w-8 text-krishna-600" />,
      link: '/connect',
      color: 'from-krishna-50 to-krishna-100 border-krishna-200'
    },
  ];

  return (
    <Layout>
      <MantraPlayer />
      
      <div className="container py-8 space-y-8">
        {/* Welcome message */}
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-saffron-700">Welcome to GIVE GITA</h1>
          <p className="text-lg text-muted-foreground">
            Your spiritual journey towards Krishna Consciousness begins here
          </p>
        </div>
        
        {/* Event Banners Section */}
        <section className="py-4">
          <EventBanner />
        </section>
        
        {/* Daily Inspiration Section */}
        <section className="py-4">
          <DailyInspiration />
        </section>
        
        {/* Features Grid */}
        <section className="py-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-saffron-700">Explore More</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden border hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer bg-gradient-to-br ${feature.color}`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-white shadow-sm">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                    <Button variant="outline" className="mt-2">
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
