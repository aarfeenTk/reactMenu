import { Frame, Element, useEditor, } from '@craftjs/core';
import ContainerV2 from '../../components/Craftjs/Menu/menuContainer';
import { Box, } from '@mui/material';
import BuilderInitialized from './builderInitialized';
import lz from 'lzutf8';
import { defaultCraftState } from 'constants/defaultCraftState';

function BuilderPreview() {
  const { query } = useEditor();
  return (
    <Box sx={{ boxShadow: (theme) => theme.shadows[20] }}>
      {typeof window !== 'undefined' && <BuilderInitialized data={{ craftState: defaultCraftState }} />}
      {/* <button
        onClick={() => {
          console.log('hi');

          const nodes = query.getSerializedNodes();
          const craftState = lz.encodeBase64(lz.compress(JSON.stringify(nodes)));
          console.log('NASA HACKED!😂', craftState);
        }}
      >
        Copy
      </button> */}
      <Frame>
        {/* <Element canvas is={ContainerV2} /> */}
      </Frame>
    </Box>
  );
}

export default BuilderPreview;
