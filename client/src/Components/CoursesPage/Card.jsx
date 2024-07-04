import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Box, ButtonBase } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const CourseCard = ({ courseName, sem, grade, attendance, icon: Icon, onClick }) => {
  return (
    <ButtonBase
      onClick={onClick}
      sx={{
        display: 'flex',
        textAlign: 'initial',
        width: '20%',
        '&:hover .MuiCard-root': {
          transform: 'scale(1.05)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        },
      }}
    >
      <Card className="MuiCard-root" sx={{ maxWidth: 345, margin: 2, transition: 'transform 0.3s' }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={2} sx={{ pb: 0 }}>
            <Icon color="primary" sx={{ fontSize: 40, mr: 2 }} />
            <Typography variant="h5" component="div">
              {courseName}
            </Typography>
          </Box>
          <Typography variant="body2" color="textSecondary">
            SEM: {sem}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            GRADE: {grade}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            ATTENDANCE: {attendance}
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
