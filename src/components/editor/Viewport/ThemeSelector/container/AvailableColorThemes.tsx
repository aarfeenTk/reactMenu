import Iconify from 'components/Iconify';
import { defaultColorTemplates } from 'constants/colorTemplates';
import React from 'react';
import ColorList from '../components/ColorList';
import checkmark from '@iconify/icons-carbon/checkmark';
import { Box, Stack, Typography } from '@mui/material';
import { useEditor, useNode } from '@craftjs/core';
const AvailableColorThemes = () => {

  const { actions } = useEditor();
  const {
    theme,
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
        padding: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h5">Available Color Themes</Typography>
      <Stack
        sx={{
          mt: 1,
          maxHeight: { xs: 'calc(100vh - 300px)', md: 'calc(100vh - 330px)' },
          overflow: 'hidden !important',
          overflowY: 'auto !important',
        }}
      >
        {defaultColorTemplates.map((single) => (
          <ColorList key={single.id} theme={single} qty={6}>
            <Iconify
              onClick={() => {
                setProp((props: any) => {
                  props.theme = single;
                })
              }}
              icon={checkmark}
              sx={{ fontSize: 30 }}
            />
          </ColorList>
        ))}
      </Stack>
    </Box>
  );
};

export default AvailableColorThemes;
