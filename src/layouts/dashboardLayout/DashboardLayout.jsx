import { useAuth } from '@clerk/clerk-react';
import './dashboardLayout.css';
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ChatList from '../../components/chatList/ChatList';

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true); // State for sidebar visibility

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Adjust the breakpoint as needed
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(prevState => !prevState);
  };

  if (!isLoaded) return "Loading...";

  return (
    <div className='dashboardLayout'>
      <button className='universal-toggle' onClick={toggleSidebar}>
        <img
          src={isOpen ? 'sidebar_icon.png' : 'sidebar_icon.png'}
          alt={isOpen ? 'Close Sidebar' : 'Open Sidebar'}
          className='sidebar-icon'
        />
      </button>
      <div className='menu'>
        <ChatList isOpen={isOpen} />
      </div>
      <div className='content'>
        <Outlet />
      </div>    
    </div>
  );
};

export default DashboardLayout;
