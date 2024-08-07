import { Typography, useTheme } from '@mui/material';
import { Box } from '@mui/material';
import { appendStylesAccordingToColorTheme, getFontLink } from 'utils/craftJS';

// import dynamic from 'next/dynamic';
import { useNode } from '@craftjs/core';
import React, { lazy, Suspense } from 'react';

const FontPicker = lazy(() => import('font-picker-react'));

const FontPickerAvailable = () => {
  const appTheme = useTheme();
  const {
    actions: { setProp },
    props
  } = useNode((node: any) => {
    const props = node.data.props;
    return { props };
  });

  const handleSetFont = (font: any) => {
    const link = getFontLink(font.family);
    appendStylesAccordingToColorTheme(link || '', font.family || '');
    setProp((props: any) => {
      props.fontFamily = font.family;
      props.fontLink = link;
    });
  };

  console.log('NASA HACKED!😂', props.fontFamily, props.fontLink);

  return (
    <Box
      sx={{
        borderRadius: '15px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '10px',
      }}
    >
      <Typography sx={{ pt: 1, pb: 1 }} variant="h5">
        Font Styles
      </Typography>
      {typeof window !== 'undefined' && (
        <Box
          sx={{
            width: '70%',
            '#font-picker': {
              width: '100%',
              color: 'inherit',
            },
            '.dropdown-button': {
              background: {
                xs: `${appTheme.palette.background.neutral} !important`,
                md: `${appTheme.palette.background.paper} !important`,
              },
              borderRadius: '10px',
            },
            '.MuiBox-root css-1yquf41': {
              background: `${appTheme.palette.background.paper} !important`,
            },
            '.font-list-item': {
              backgroundColor: `${appTheme.palette.background.paper} !important`,
              '& :hover': {
                background: `${appTheme.palette.background.neutral} !important`,
              },
              '.active-font': {
                backgroundColor: `${appTheme.palette.background.paper} !important`,
              },
            },
            '.dropdown-font-family': {
              whiteSpace: 'nowrap',
              overflow: 'hidden',
            },
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <FontPicker
              apiKey="AIzaSyCgtrELxaSQbVHI_61kU7Mwhsq6XPhsxaY"
              activeFontFamily={props.fontFamily}
              // categories={['sans-serif', 'serif']}
              // variants={['regular', 'italic', '300', '700']}
              limit={650}
              onChange={handleSetFont}
            />
          </Suspense>
        </Box>
      )}
    </Box>
  );
};

export default FontPickerAvailable;
