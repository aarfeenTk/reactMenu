import { Box, Button, Tooltip } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import { useAppDispatch } from 'redux/hooks';
import { setMobileView, useIsMobileView } from 'redux/slices/contactsSlice';

export const RootStyle = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  backgroundColor: theme.palette.background.default,
  top: 0,
  zIndex: 2,
  paddingBlock: 8,
  display: 'flex',
}));

export const Item = styled('p')<{ disabled: boolean; active: boolean }>(({ disabled, active, theme }) => ({
  marginInline: 10,
  cursor: 'pointer',
  pointerEvents: disabled ? 'none' : 'auto',
  opacity: disabled ? 0.5 : 1,
  display: 'flex',
  alignItems: 'center',
  color: active ? theme.palette.primary.main : 'inherit',
}));

export const HeaderForCards = () => {
  const dispatch = useAppDispatch();
  const isMobileView = useIsMobileView();

  const value = `${typeof window !== 'undefined' && window.location.origin}/preview/`;
  console.log("value",value);

  const changeView = (view: 'mobile' | 'desktop') => {
    dispatch(
      setMobileView({
        payload: view === 'mobile',
      })
    );
  };

  return (
    <RootStyle
      sx={{
        display: 'flex',
        width: '100vw',
        height: "60px",
        borderBottom: "1px solid black"
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flex: '1',
          alignItem: 'center',
          width: '100%',
          justifyContent: { sm: 'center' },
          marginLeft: '10px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Tooltip title="Mobile" placement="bottom" sx={{ marginInline: '0px !important' }}>
            <Item
              disabled={false}
              active={isMobileView}
              onClick={() => changeView('mobile')}
              sx={{
                '&:hover, &:focus': {
                  color: (theme) => theme.palette.primary.main,
                },
              }}
            >
              <Icon icon="radix-icons:mobile" fontSize={30} />
            </Item>
          </Tooltip>
          <Tooltip title="Desktop" placement="bottom" sx={{ marginInline: '5px !important' }}>
            <Item
              disabled={false}
              active={!isMobileView}
              onClick={() => changeView('desktop')}
              sx={{
                '&:hover, &:focus': {
                  color: (theme) => theme.palette.primary.main,
                },
              }}
            >
              <Icon icon="humbleicons:desktop" fontSize={30} />
            </Item>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flex: 0 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <a
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              color: 'red',
              marginRight: '5px',
              marginTop: '2px',
            }}
            href={`${value}`}
            target="_blank"
            rel="noreferrer"
            color="text.primary"
          >
            <Button
              size="small"
              variant="contained"
              fullWidth
              startIcon={<Icon icon={'ic:sharp-remove-red-eye'} />}
            >
              Preview
            </Button>
          </a>
        </Box>
      </Box>
    </RootStyle>
  );
};
