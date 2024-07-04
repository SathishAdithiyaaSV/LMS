import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import CourseCard from './Card'; // Adjust the path as necessary
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ComputerIcon from '@mui/icons-material/Computer';

const RecentlyAccessedCourses = () => {
  const handleCardClick = (courseName) => {
    alert(`Course card clicked: ${courseName}`);
  };

  return (
    <Paper
    sx={{
      p: 2,
      boxShadow: 3,
      borderRadius: 2,
      margin: 2,
    }}
  >
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom>
        Recently Accessed Courses
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
      >
        <CourseCard
          courseName="Introduction to Algorithms"
          grade="A"
          description="This course covers the basics of algorithms and data structures."
          icon={CodeIcon}
          onClick={() => handleCardClick("Introduction to Algorithms")}
        />
        <CourseCard
          courseName="Data Structures"
          grade="B+"
          description="An in-depth look at various data structures and their applications."
          icon={StorageIcon}
          onClick={() => handleCardClick("Data Structures")}
        />
        <CourseCard
          courseName="Operating Systems"
          grade="A-"
          description="Learn about the fundamental concepts of operating systems."
          icon={ComputerIcon}
          onClick={() => handleCardClick("Operating Systems")}
        />
        {/* Add more CourseCards as needed */}
      </Box>
    </Box>
    </Paper>
  );
};

export default RecentlyAccessedCourses;
