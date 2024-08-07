import * as React from 'react';
import { Box, Grid, Typography, Stack } from '@mui/material';
import { Patterns } from './Patterns';
import { useNode } from '@craftjs/core';

export default function ImagePicker() {
  const {
    actions: { setProp },
  } = useNode((node: any) => {
    const theme = node.data.props.theme
    return { theme };
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Typography sx={{ textAlign: 'center' }} variant="h5">
        Available Patterns
      </Typography>
      <Stack
        sx={{
          mt: 1,
          maxWidth: '90%',
          overflow: 'hidden !important',
          overflowY: 'auto !important',
        }}
      >
        <Grid container spacing={2} sx={{ height: '400px' }}>
          <Grid item xs={12} sm={6} md={3} lg={3} >
            <Box
              sx={{
                padding: '2px',
                display: 'flex',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 0.4s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
              onClick={() => {
                setProp((props: any) => {
                  props.backgroundImageUrl = "";
                })
              }}
            >
              <img
                style={{
                  width: '70px',
                  height: '70px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
                src="data:image/jpeg;base64,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"
                alt="No Pattern"
              />
            </Box>
          </Grid>
          {Patterns.map((currentImg, index) => (
            <Grid item xs={12} sm={6} md={3} lg={3} key={index}>
              <Box
                sx={{
                  padding: '2px',
                  display: 'flex',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.4s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
                onClick={() => {
                  setProp((props: any) => {
                    props.backgroundImageUrl = currentImg.imgUrl;
                  })
                }}
              >
                <img
                  style={{
                    width: '70px',
                    height: '70px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                  src={currentImg.imgUrl}
                  alt={currentImg.alt}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Box>
  );
}
