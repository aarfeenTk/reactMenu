// import Head from 'next/head';
import { forwardRef, ReactNode } from 'react';
// @mui
import { Box, BoxProps } from '@mui/material';
// ----------------------------------------------------------------------

interface Props extends BoxProps {
  children: ReactNode;
  meta?: ReactNode;
  title: string;
  canonicalUrl?: string;
  jsonLd?: object;
}

const Page = forwardRef<HTMLDivElement, Props>(({ children, meta, canonicalUrl, title, jsonLd, ...other }, ref) => (
  <>
    {/* <Head>
      <title>{`${title} | Stack Digital Card`}</title>
      {meta}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </Head> */}

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

export default Page;
