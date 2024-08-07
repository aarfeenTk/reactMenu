import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import colorIcon from '@iconify/icons-carbon/color-palette';
import Iconify from 'components/Iconify';
import { Icon } from '@iconify/react';
import { useMediaQuery, useTheme } from '@mui/material';
import { useEditor } from '@craftjs/core';
import { toggleThemeDrawer } from 'redux/slices/themeSlice';
import { useAppDispatch } from 'redux/hooks';

export default function BuilderBottomNavigation() {
  const dispatch = useAppDispatch();
  const muiTheme = useTheme();
  const matches = useMediaQuery(muiTheme.breakpoints.up('md'));

  const [value, setValue] = React.useState(0);

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  if (matches) {
    return null;
  }
  return (
    <Box>
      {enabled && (
        <BottomNavigation
          sx={{ width: '100%', position: 'fixed', bottom: '0px' }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            onClick={() => dispatch(toggleThemeDrawer())}
            label="Theme"
            icon={<Iconify sx={{ fontSize: 20 }} icon={colorIcon} />}
          />
        </BottomNavigation>
      )}
    </Box>
  );
}
