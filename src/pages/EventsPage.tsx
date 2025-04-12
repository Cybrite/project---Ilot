import { Layout } from '@/components/Layout';
import { Calendar, MapPin, Users } from 'lucide-react';

const EventsPage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Janmashtami Celebration',
      date: 'August 19, 2025',
      time: '6:00 PM - 10:00 PM',
      location: 'ISKCON Temple',
      description: 'Join us for the celebration of Lord Krishna\'s appearance day with kirtan, abhishek, and prasadam.',
      attendees: 120
    },
    {
      id: 2,
      title: 'Bhagavad Gita Workshop',
      date: 'May 15, 2025',
      time: '9:00 AM - 1:00 PM',
      location: 'GIVE Center',
      description: 'Intensive workshop on chapter 2 of Bhagavad Gita with interactive discussions.',
      attendees: 45
    },
    {
      id: 3,
      title: 'Ekadashi Program',
      date: 'April 20, 2025',
      time: '5:00 PM - 7:00 PM',
      location: 'Virtual Event',
      description: 'Special kirtan and lecture on the importance of Ekadashi.',
      attendees: 75
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-devotion-700">Upcoming Events</h1>
          <p className="text-lg text-muted-foreground">
            Join us for spiritual gatherings, festivals, and special programs
          </p>
        </div>
        
        <div className="space-y-6 mt-8">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="border border-devotion-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-all">
              <div className="p-6 flex flex-col md:flex-row gap-6">
                <div className="md:w-1/4 flex flex-col justify-center items-center bg-devotion-50 p-4 rounded-lg">
                  <Calendar className="h-12 w-12 text-devotion-500 mb-2" />
                  <p className="font-bold text-xl text-center">{event.date}</p>
                  <p className="text-sm text-muted-foreground text-center">{event.time}</p>
                </div>
                
                <div className="md:w-3/4 space-y-4">
                  <h3 className="text-xl font-bold text-devotion-700">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4 text-devotion-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-devotion-500" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button className="bg-devotion-500 hover:bg-devotion-600 text-white py-2 px-4 rounded-md transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default EventsPage;
