import React from 'react';
import { Box } from '@mui/material';
import Iconify from 'components/Iconify';
import { useNode } from '@craftjs/core';

export const MenuCardSettings = () => {
  const {
    border,
    actions: { setProp },
  } = useNode((node: any) => {
    const border = node.data.props.border
    return { border };
  });

  const handleBorder = (borderProperty: string) => {
    setProp((props: any) => {
      props.border = borderProperty;
    });
  };

  const iconStyle = (borderProperty: string) => ({
    margin: "5px",
    padding: "5px",
    borderRadius: "50%",
    border: "1px solid",
    cursor: 'pointer',
    fontSize: 60,
    backgroundColor: border === borderProperty ? '#FA541C' : 'white', // Highlight color when selected
  });

  return (
    <Box>
      <h2>Border Settings</h2>
      <Iconify
        sx={iconStyle('solid')}
        onClick={() => handleBorder('solid')}
        icon="gg:border-style-solid"
      />
      <Iconify
        sx={iconStyle('dashed')}
        onClick={() => handleBorder('dashed')}
        icon="gg:border-style-dashed"
      />
      <Iconify
        sx={iconStyle('dotted')}
        onClick={() => handleBorder('dotted')}
        icon="gg:border-style-dotted"
      />
    </Box>

  );
};
