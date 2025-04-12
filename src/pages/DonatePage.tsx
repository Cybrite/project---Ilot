import { Layout } from '@/components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Gift, BookOpen, Building, Coffee } from 'lucide-react';

const DonatePage = () => {
  const donationCategories = [
    {
      title: "Nityam Bhagavata Sevā",
      description: "Support our daily Bhagavat recital services and help spread Krishna consciousness.",
      icon: <Heart className="h-8 w-8 text-saffron-500" />,
      options: ["Monthly ₹1,108", "Yearly ₹11,000", "Custom Amount"]
    },
    {
      title: "Vidya Daan",
      description: "Contribute to providing spiritual education to underprivileged children.",
      icon: <BookOpen className="h-8 w-8 text-devotion-500" />,
      options: ["₹5,000", "₹10,000", "₹21,000"]
    },
    {
      title: "Gitalaya Construction",
      description: "Help build our spiritual center for education and community service.",
      icon: <Building className="h-8 w-8 text-krishna-500" />,
      options: ["₹11,000", "₹51,000", "₹101,000"]
    },
    {
      title: "Prasadam Distribution",
      description: "Support our food distribution program for the needy.",
      icon: <Coffee className="h-8 w-8 text-saffron-500" />,
      options: ["₹2,500", "₹5,000", "₹10,000"]
    },
    {
      title: "Festival Celebrations",
      description: "Contribute to making our spiritual festivals grand and impactful.",
      icon: <Gift className="h-8 w-8 text-devotion-500" />,
      options: ["₹1,100", "₹5,100", "₹11,100"]
    }
  ];

  return (
    <Layout>
      <div className="container py-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-saffron-700">Donate</h1>
          <p className="text-lg text-muted-foreground">
            Support our mission to spread Krishna consciousness
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-saffron-100 to-devotion-100 rounded-lg p-6 md:p-8 my-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-saffron-800 mb-4">Your Contribution Makes a Difference</h2>
            <p className="text-saffron-700">
              By donating to GIVE GITA, you're helping us spread the timeless wisdom of Bhagavad Gita
              and Krishna consciousness to people around the world. Every contribution, big or small,
              helps us in our mission.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {donationCategories.map((category, index) => (
            <Card key={index} className="border-saffron-200 overflow-hidden hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="flex flex-col items-start gap-4">
                  <div className="p-3 rounded-full bg-saffron-50 border border-saffron-200">
                    {category.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-saffron-700">{category.title}</h3>
                    <p className="text-muted-foreground mt-1">{category.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4 w-full">
                    {category.options.map((option, idx) => (
                      <button 
                        key={idx}
                        className="flex-1 bg-white border border-saffron-300 hover:bg-saffron-50 text-saffron-700 py-2 px-4 rounded-md transition-colors text-sm"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  
                  <button className="w-full mt-2 bg-saffron-500 hover:bg-saffron-600 text-white py-2 px-4 rounded-md transition-colors">
                    Donate Now
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 p-6 border border-saffron-200 rounded-lg bg-saffron-50">
          <h3 className="text-lg font-medium text-saffron-700 mb-4">Direct Bank Transfer</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm font-medium">Account Name</p>
              <p className="text-muted-foreground">GIVE GITA Foundation</p>
            </div>
            <div>
              <p className="text-sm font-medium">Account Number</p>
              <p className="text-muted-foreground">1234567890</p>
            </div>
            <div>
              <p className="text-sm font-medium">IFSC Code</p>
              <p className="text-muted-foreground">ABCD0123456</p>
            </div>
            <div>
              <p className="text-sm font-medium">Bank & Branch</p>
              <p className="text-muted-foreground">Sample Bank, Main Branch</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DonatePage;
