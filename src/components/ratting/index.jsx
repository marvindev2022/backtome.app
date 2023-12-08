import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function RatingButton({ rating, setRating }) {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend"></Typography>
      <Rating
        name="half-rating"
        defaultValue={rating}
        precision={0.5}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
    </Box>
  );
}
