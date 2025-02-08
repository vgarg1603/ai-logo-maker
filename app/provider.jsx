'use client';

import React, { useEffect, useState } from 'react';
import Header from './_components/Header';
import axios from 'axios';
import { useUser } from '@clerk/nextjs';
import { UserDetailsContext } from './_context/UserDetailsContext';

const Provider = ({ children }) => {
  const { user } = useUser();

  const [userDetail, setUserDetail] = useState()

  useEffect(() => {
    if (user) {
      CheckUserData();
    }
  }, [user]);

  // Save user data
  const CheckUserData = async () => {
    try {
      // Safely extract user data
      const userName = user?.fullName || 'Unknown User';
      const userEmail = user?.primaryEmailAddress?.emailAddress;

      if (!userEmail) {
        console.warn('User email is missing, skipping API call.');
        return;
      }

      // Save user to database
      const result = await axios.post('/api/users', {
        userName,
        userEmail,
      });

      setUserDetail(result.data)
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <div>
      <UserDetailsContext.Provider value={{ userDetail, setUserDetail }}>
        <Header />
        <div>{children}</div>
      </UserDetailsContext.Provider>
    </div>
  );
};

export default Provider;
