import React from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" my={2}>
      <TextField
        variant="outlined"
        placeholder="Search for courses..."
        value={searchTerm}
        onChange={handleInputChange}
        sx={{ width: '80%', maxWidth: 600 }}
      />
      <IconButton onClick={handleSearch} color="primary">
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
