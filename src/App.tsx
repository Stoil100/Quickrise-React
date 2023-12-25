import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RootLayout } from './components/Root';
import HomePage from './pages/Home';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
          { path: "/", element: <HomePage /> },
        ],
    },
]);

function App() {
    return (
      <RouterProvider router={router} />
    );
}

export default App;
