import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Box, ButtonBase } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const CourseCard = ({ courseName, grade, description, onClick }) => {
  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        display: 'flex',
        textAlign: 'initial',
        '&:hover .MuiCard-root': {
          transform: 'scale(1.05)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Card className="MuiCard-root" sx={{ maxWidth: 345, margin: 2, transition: 'transform 0.3s' }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={2} mr={2}>
            <SchoolIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
            <Typography variant="h5" component="div">
              {courseName}
            </Typography>
          </Box>
          <Typography variant="body2" color="textSecondary">
            Grade: {grade}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </ButtonBase>
  );
};

CourseCard.propTypes = {
  courseName: PropTypes.string.isRequired,
  grade: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CourseCard;
