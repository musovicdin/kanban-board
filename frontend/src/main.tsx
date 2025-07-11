import React from "react"
import ReactDOM from "react-dom/client"
import { createHashRouter, RouterProvider } from "react-router-dom"
import App from "./routes/App"
import NotFound from "./pages/NotFound"
import { HomePage } from "./pages/home/HomePage"
import "./index.css"

const router = createHashRouter([
  {
    path: "/",
    element: <App />, // App provides loading state and store
    errorElement: <NotFound />, // fallback for errors
    children: [
      { path: "/", element: <HomePage /> },
      // Add more child routes here
    ],
  },
  // Add other top-level routes (e.g., /login) here if needed
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
