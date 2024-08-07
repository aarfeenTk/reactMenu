import React from 'react';
import { Card, Grid, useMediaQuery, useTheme } from '@mui/material';
import { Sidebar, SidebarModal } from '../components';
import { useEditor } from '@craftjs/core';

const ElementSettings = () => {
  const { enabled } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));
  const muiTheme = useTheme();
  const matches = useMediaQuery(muiTheme.breakpoints.down('md'));
  if (matches) {
    return <SidebarModal />;
  } else
    return (
      <Grid
        item
        xs={0}
        sx={{
          display: 'flex',
        }}
        height="100%"
      >
        {enabled && (
          <Card
            sx={{
              // overflowY: 'scroll',
              // width: 400,
              borderRadius: 0,
              height: '100%',
            }}
          >
            <Sidebar />
          </Card>
        )}
      </Grid>
    );
};

export default ElementSettings;
