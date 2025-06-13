import { RouterProvider } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import router from './config/routes';
import { LoadingProvider } from './contexts/LoadingContext';

function App() {
  return (
    <>
      <LoadingProvider>
        <AuthProvider>
          <ToastContainer position="top-right" hideProgressBar={true} autoClose={3000} closeButton={false} />
          <RouterProvider router={router} />
        </AuthProvider>
      </LoadingProvider>
    </>
  );
}

export default App;
