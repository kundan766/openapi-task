


"use client"
import React, { useEffect, useState, useRef } from 'react';

import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Chart from 'chart.js/auto';
import PieChart from '../board/PieChart';
import AddIcon from '@mui/icons-material/Add';
import ProfileCard from '../card/ProfileCard';



function generateRandomData() {
  const data = [];
  for (let i = 0; i < 5; i++) {
    data.push(Math.floor(Math.random() * 100)); // Generate random data (you can replace this with your API data)
  }
  return data;
}

function Page() {
  const [chartData, setChartData] = useState([]);
  const [isAddingProfile, setIsAddingProfile] = useState(false);
  const [profileFormData, setProfileFormData] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    // Fetch API data here and update chartData
    const dummyData = generateRandomData(); // Replace with your API data
    setChartData(dummyData);

    // Create a bar chart using Chart.js
    const ctx = document.getElementById('barChart');
    chartRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Lable 6', 'Lable 7', 'Lable 8'],
        datasets: [
          {
            label: 'Bar Chart Data',
            data: dummyData, // Replace with your API data
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Bar color
            borderColor: 'rgba(75, 192, 192, 1)', // Border color
            borderWidth: 1, // Border width
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  
  

  const handleAddProfileClick = () => {
    // Open the profile card when "Add Profile" button is clicked
    setIsAddingProfile(true);
  };

  const handleCloseProfileCard = () => {
    // Close the profile card
    setIsAddingProfile(false);
  };

  const handleProfileSubmit = (data) => {
    // Handle the submitted profile data
    setProfileFormData(data);
    // Close the profile card
    setIsAddingProfile(false);
  };

  return (
    <main className="flex h-screen">
      <div className="p-10 bg-blue-500 h-200 w-96 ml-10 mt-10 mb-10 rounded-xl">
        <h1 className="text-4xl text-center text-white">Board .</h1>
        <ul className='space-y-10 mt-10 p-5'>
          <li className='text-white'> <DashboardIcon className="icon" />Dashboard</li>
          <li className='text-white'> <ReceiptIcon className="icon" />Transactions</li>
          <li className='text-white'> <CalendarMonthIcon className="icon" />Schedules</li>
          <li className='text-white'> <AccountCircleIcon className="icon" />Users</li>
          <li className='text-white'> <SettingsIcon className="icon" />Settings</li>
        </ul>
        <ul className='absolute mt-20 text-white'>
          <li>Help</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div className='flex flex-col ml-10'>
        <h1 className='text-black text-2xl text-bold font-bold p-10'>Dashboard</h1>
        <div className='absolute p-10 right-0 flex space-x-4 items-center'>
          <TextField 
            placeholder="Search"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <SearchIcon
                  className="icon" 
                  style={{ cursor: 'pointer' }}
                />
              ),
            }}
          />
          <NotificationsNoneIcon className='icon' />
          <AccountCircleIcon className='icon'/>
        </div>

        <div className="flex flex-row space-x-40 p-10 -mt-10 ">
          <div className="bg-white w-40 h-20 p-4 rounded-lg shadow-xl">
           <h2>Total Reveneus</h2>
           <h1>$2,129,430</h1>
          </div>
          <div className="bg-white w-40 h-20 p-4 rounded-lg shadow-xl ">
            <h2>Total Transactions</h2>
            <h1>1,520</h1>
            
          </div>
          <div className="bg-white w-40 h-20 p-4 rounded-lg shadow-xl">
            <h2>Total likes</h2>
            <h1>9,721</h1>
          </div>
          <div className="bg-white w-40 h-20 p-4 rounded-lg shadow-xl  ">
           <h2>Total users</h2>
           <h1>9,721</h1>
          </div>
        </div>

        {/* for big card for dummy data */}
        <div className='p-10 -mt-10'>
          <div className='bg-white w-160 h-80 p-4 rounded-xl  shadow-xl'>
            <h1 className='font-bold text-2xl'>Activities</h1>
            <h2>May-June 2021</h2>
            <canvas id="barChart" width="900" height="200"></canvas>
            {/* Chart container */}
          </div>
        </div>

        {/* for two small card */}
        <div className="flex space-x-80 p-10 -mt-10 ">
          <div className="bg-white w-1/3 h-60  rounded-lg shadow-xl">
            <PieChart/>
          
          </div>
          <div className="bg-white w-1/3 h-60  rounded-lg shadow-xl ">
            {/* Card content goes here */}
            <AddIcon className='icon  w-20 h-20 ml-40 mt-20' onClick={handleAddProfileClick} />
            <h1 className='ml-40'>Add Profile</h1>
          </div>

          {isAddingProfile && (
            <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
              {/* Render the ProfileCard component when isAddingProfile is true */}
              <ProfileCard onClose={handleCloseProfileCard} onSubmit={handleProfileSubmit} />
            </div>
          )}

          {profileFormData && (
            <div className="bg-white w-1/3 p-6 rounded-lg shadow-xl">
            {/* <h1 className="font-bold text-2x  l">Add New Profile</h1> */}
              <div className="mt-4 ml-10">
                <h2>Submitted Profile Data</h2>
                <p>Name: {profileFormData.name}</p>
                <p>Email: {profileFormData.email}</p>
                <p>Phone Number: {profileFormData.number}</p>
                <p>Instagram Link: {profileFormData.instagramLink}</p>
                <p>YouTube Link: {profileFormData.youtubeLink}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}


export default Page;