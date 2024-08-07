import { memo } from 'react';
// next
// import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, BoxProps, Link } from '@mui/material';
// import { useRouter } from 'next/router';
import { userIdInLocalStorageKey } from 'constants/index';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// ----------------------------------------------------------------------

interface LogoProps extends BoxProps {
  onDark?: boolean;
  isSimple?: boolean;
  isPwaWrapper?: boolean;
}
export const LogoShareCode = ({ isSimple, sx }: any) => (
  <Box
    sx={{
      width: isSimple ? 64 : 75,
      lineHeight: 0,
      cursor: 'pointer',
      display: 'inline-flex',
      ...sx,
    }}
  >
    {isSimple ? (
      <img
        src="https://cdn-icons-png.flaticon.com/512/2046/2046704.png"
        alt="Digi stack"
        style={{
          height: '70px',
        }}
      />
    ) : (
      <img
        src="https://cdn-icons-png.flaticon.com/512/2046/2046704.png"
        alt="Digi stack"
        style={{
          height: '70px',
        }}
      />
    )}
  </Box>
);

function Logo({ onDark = false, isSimple = false, isPwaWrapper, sx }: LogoProps) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const PRIMARY_MAIN = theme.palette.primary.main;
  const LIGHT_COLOR = theme.palette.common.white;
  const DARK_COLOR = theme.palette.grey[800];
  // const router = useRouter();

  return (
    <>
      {!isPwaWrapper ? (
        // <NextLink href="/cards" passHref>
        //   <Link variant="subtitle2" color="primary">
        //     <LogoShareCode isSimple={isSimple} sx={sx} />
        //   </Link>
        // </NextLink>
        null
      ) : (
        // <NextLink href={`userCards/?isPwa=${true}&redirectAllowed=${true}`} passHref>
        //   <>
        //     {router.query.isPwa && !router.query.redirectAllowed && (
        //       <IconButton
        //         aria-label="close"
        //         onClick={() => router.push(`userCards/?isPwa=${true}&redirectAllowed=${true}`)}
        //         sx={{
        //           position: 'absolute',
        //           right: 8,
        //           top: 8,
        //           color: (theme: any) => theme.palette.grey[500],
        //         }}
        //       >
        //         <CloseIcon />
        //       </IconButton>
        //     )}
        //   </>
        // </NextLink>
        null
      )}
    </>
  );
}

export default memo(Logo);
