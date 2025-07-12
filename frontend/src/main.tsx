import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./routes/App"
import NotFound from "./pages/NotFound"
import { HomePage } from "./pages/home/HomePage"
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomePage /> },
      // Add more specific child routes here
    ],
  },
  // Catch-all route for unmatched paths
  { path: "*", element: <NotFound /> },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
