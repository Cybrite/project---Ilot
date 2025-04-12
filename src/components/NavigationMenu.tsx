import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Calendar, Music, HelpCircle, FileText, ShoppingBag, Heart } from 'lucide-react';

export const NavigationMenu = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Home', path: '/home', icon: <Home className="h-5 w-5" /> },
    { name: 'Courses', path: '/courses', icon: <BookOpen className="h-5 w-5" /> },
    { name: 'Events', path: '/events', icon: <Calendar className="h-5 w-5" /> },
    { name: 'Sadhana', path: '/sadhana', icon: <Music className="h-5 w-5" /> },
    { name: 'Donate', path: '/donate', icon: <Heart className="h-5 w-5" /> },
    { name: 'Shop', path: '/shop', icon: <ShoppingBag className="h-5 w-5" /> },
    { name: 'About', path: '/about', icon: <FileText className="h-5 w-5" /> },
    { name: 'Ask', path: '/ask', icon: <HelpCircle className="h-5 w-5" /> },
  ];

  return (
    <nav className="flex flex-col gap-2 p-2 md:flex-row md:gap-6">
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors
              ${isActive 
                ? 'bg-saffron-100 text-saffron-700' 
                : 'hover:bg-accent hover:text-accent-foreground'}`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};
