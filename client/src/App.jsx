import { Button } from "@material-tailwind/react";
import ComplexNavbar from "./constants/navbar/Navbar";
import CourseCard from "./components/Card";
import { Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ComputerIcon from '@mui/icons-material/Computer';
import RecentlyAccessedCourses from "./components/RecentCourses";
 
export default function App() {
  return (
    <div>
  <ComplexNavbar />
  <RecentlyAccessedCourses />
  <Box
      display="flex"
      flexWrap="wrap"

      sx={{ p: 2 }}
    >
  <CourseCard
        courseName="Introduction to Algorithms"
        grade="A"
        description="This course covers the basics of algorithms and data structures."
        icon={CodeIcon}

      />
      <CourseCard
        courseName="Data Structures"
        grade="B+"
        description="An in-depth look at various data structures and their applications."
        icon={StorageIcon}

      />
      <CourseCard
        courseName="Operating Systems"
        grade="A-"
        description="Learn about the fundamental concepts of operating systems."
        icon={ComputerIcon}

      />
      <CourseCard
        courseName="Database Systems"
        grade="A"
        description="Study the principles of database management systems."
        icon={StorageIcon}

      />


      </Box>;
  </div>
  )
}