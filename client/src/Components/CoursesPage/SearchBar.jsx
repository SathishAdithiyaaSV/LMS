import React from 'react';
import { Box, TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event.target.value);
  };


  return (
    <Box display="flex" justifyContent="center" alignItems="center" my={2}>
      <TextField
        variant="outlined"
        placeholder="Search for courses..."
        value={searchTerm}
        onChange={handleInputChange}
        sx={{ width: '80%', maxWidth: 600 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
                <SearchIcon color="primary" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBar;



