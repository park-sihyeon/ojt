import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { toolBar } from './tool-bar.css';
// import { toolBar } from './tool-bar.css';

export const ToolBar = () => {
  return (
    <>
      <div className={toolBar.wrapWithToolBar}>
        <Box>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h6" component="div">
                RESUME PROJECT
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
};
