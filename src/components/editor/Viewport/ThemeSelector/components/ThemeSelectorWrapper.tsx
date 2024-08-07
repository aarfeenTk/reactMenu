import React from 'react';
import { Drawer, Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material';
import { toggleThemeDrawer, useThemeDrawer } from 'redux/slices/themeSlice';
import { useDispatch } from 'react-redux';
const ThemeSelectorWrapper = ({ children }: { children: React.ReactNode }) => {
  const muiTheme = useTheme();
  const matches = useMediaQuery(muiTheme.breakpoints.down('md'));
  const dispatch = useDispatch();
  const themeDrawer = useThemeDrawer();
  return matches ? (
    <Drawer
      anchor={'right'}
      open={themeDrawer}
      onClose={() => dispatch(toggleThemeDrawer)}
      sx={{
        '.MuiPaper-root': {
          width: '90%',
        },
      }}
    >
      {children}
    </Drawer>
  ) : (
    <Grid
      item
      xs={3}
      sx={{
        w: '100%',
        display: 'flex',
        flexDirection: 'column',
        height: '90vh',
        marginTop: 6,
      }}
    >
      {children}
    </Grid>
  );
};

export default ThemeSelectorWrapper;
