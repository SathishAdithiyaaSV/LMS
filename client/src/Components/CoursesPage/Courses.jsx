import { Button } from "@material-tailwind/react";
import ComplexNavbar from "../../constants/navbar/Navbar";
import CourseCard from "./Card";
import { Box } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import ComputerIcon from '@mui/icons-material/Computer';
import RecentlyAccessedCourses from "./RecentCourses";
import SearchBar from "./SearchBar";
import { backendURL } from "../../constants";
import React from "react";
 
export default function Courses() {

  const [courses, setCourses] = React.useState([]);

  const init = async () => {
    const response = await fetch(`${backendURL}/courses`, {
      method: "GET",
    });

    const json = await response.json();
    setCourses(json.courses);
  }

  React.useEffect(() => {
    init()
  }, []);


  return (
    <div>
  <SearchBar onSearch={(searchTerm) => console.log(searchTerm)} />
  <Box
      display="flex"
      flexWrap="wrap"

      sx={{ p: 2 }}
    >

      
    {courses.map((course) =>{
      return (
      <CourseCard
        key={course.id}
        courseName={course.name}
        sem={course.sem}
        attendance={course.attendance}
        grade={course.grade}
        icon={CodeIcon}
        />
      )
    })
    
  }

      </Box>;
  </div>
  )
}