import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if user is already logged in
    const user = localStorage.getItem('user');
    
    if (user) {
      // If user is logged in, go to home page
      navigate('/home');
    } else {
      // If user is not logged in, go to login page
      navigate('/login');
    }
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-saffron-50">
      <div className="animate-pulse">
        <img src="/logo.svg" alt="GIVE GITA Logo" className="h-24 w-24" />
      </div>
    </div>
  );
};

export default Index;
