import { Layout } from '@/components/Layout';

const CoursesPage = () => {
  return (
    <Layout>
      <div className="container py-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-saffron-700">Courses</h1>
          <p className="text-lg text-muted-foreground">
            Explore our spiritual courses and expand your knowledge
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {/* Placeholder for course cards */}
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div 
              key={index}
              className="rounded-lg border border-saffron-200 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1"
            >
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <span className="text-white font-medium">Course Thumbnail</span>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold">Bhagavad Gita Course {index}</h3>
                  <span className="text-xs px-2 py-1 bg-saffron-100 text-saffron-800 rounded-full">Free</span>
                </div>
                <p className="text-sm text-muted-foreground">Learn the essence of Krishna consciousness through the divine wisdom of Bhagavad Gita.</p>
                <div className="flex justify-between text-xs text-muted-foreground pt-2">
                  <span>Duration: 4 weeks</span>
                  <span>Level: Beginner</span>
                </div>
                <button className="w-full mt-4 bg-saffron-500 hover:bg-saffron-600 text-white py-2 px-4 rounded-md transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default CoursesPage;
