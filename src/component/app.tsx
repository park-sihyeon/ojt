import { RouterProvider } from 'react-router-dom';
import { router } from '../script/router/router';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
