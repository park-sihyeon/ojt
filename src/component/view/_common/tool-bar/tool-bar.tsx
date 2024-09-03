import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { toolBar } from './tool-bar.css';
// import { toolBar } from './tool-bar.css';

export const ToolBar = () => {
  return (
    <>
      <div className={toolBar.wrapWithToolBar}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                RESUME PROJECT
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </>
  );
};
