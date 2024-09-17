import { SelectChangeEvent } from '@mui/material';
import { useState } from 'react';


export const useSelectItems = () => {
  const [selectedItem, setSelectedItem] = useState<string>('');

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    const categorySelected = event.target.value;
    setSelectedItem(categorySelected);
  };

  return { selectedItem, handleCategoryChange };
};