import { RouterProvider } from 'react-router-dom';
import { router } from '../script/router/router';
import '../resource/style/global-style.css';
import '../resource/style/reset.css';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
