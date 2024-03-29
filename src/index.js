import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import * as React from "react";
import './assets/styles/main.min.css'

import * as ReactDOM from "react-dom/client";

import ErrorPage from "./components/IndexPage";
import HomePage from './components/IndexPage'
import BlogPage from './components/blogPage'
import CallbackPage from './components/NodeCallbackPage'
import NodeChildProcessPageContent from './components/ChildProcessPage'
import NodeJSMongodbPage from './components/NodejsMongoPage'
import ReactCommonPage from './components/ReactCommonTopicsPage'
import CICDPage from "./components/DevOpsPage";
import Contact from "./components/ContactPage"
import ResumePdf from "./components/resumePage"
import BroBot from "./components/BroBot"
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/blog",
    element: <BlogPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/blog/node-callback",
    element: <CallbackPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog/node-child-process",
    element: <NodeChildProcessPageContent />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog/how-to-create-node-app",
    element: <NodeJSMongodbPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/blog/react-common-topics",
    element: <ReactCommonPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog/devops",
    element: <CICDPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/resume",
    element: <ResumePdf/>,
    errorElement: <ErrorPage />,
  }, 
  {
    path: "/bro-bot",
    element: <BroBot/>,
    errorElement: <ErrorPage />,
  }, 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);