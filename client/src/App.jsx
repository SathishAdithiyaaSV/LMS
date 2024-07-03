import { Button } from "@material-tailwind/react";
import ComplexNavbar from "./constants/navbar/Navbar";
import CourseCard from "./components/Card";
import { Box } from '@mui/material';
 
export default function App() {
  return (
    <div>
  <ComplexNavbar />
  <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      sx={{ p: 2 }}
    >
  <CourseCard
        courseName="Introduction to Algorithms"
        grade="A"
        description="This course covers the basics of algorithms and data structures."
      />
      <CourseCard
        courseName="Data Structures"
        grade="B+"
        description="An in-depth look at various data structures and their applications."
      />
      <CourseCard
        courseName="Data Structures"
        grade="B+"
        description="An in-depth look at various data structures and their applications."
      />
      <CourseCard
        courseName="Data Structures"
        grade="B+"
        description="An in-depth look at various data structures and their applications."
      />
      <CourseCard
        courseName="Data Structures"
        grade="B+"
        description="An in-depth look at various data structures and their applications."
      />
      <CourseCard
        courseName="Data Structures"
        grade="B+"
        description="An in-depth look at various data structures and their applications."
      />

      </Box>;
  </div>
  )
}