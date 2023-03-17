import "./App.css";
import Home from "./slide/Home";
import Form from "./slide/Form";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Home />
        </div>
      ),
    },
    {
      path: "/about",
      element: <div>tran van thien</div>,
    },{
      path: "/Form",
      element: <div>
        <Form />
      </div>,
    },

  ]);

  return (
    <div>
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
