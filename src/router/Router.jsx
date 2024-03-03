import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import Signup from "../components/Signup";
import Order from "../pages/dashboard/Order";
import Login from "../components/login";
import CartPage from "../pages/shop/cartPage";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";
import AddMenu from "../pages/dashboard/admin/AddMenu";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import DashboardLayout from "../layout/DashboardLayout";
import UserProfile from "../pages/dashboard/UserProfile";
import UpdateMenu from "../pages/dashboard/admin/UpdateMenu";
import Payment from "../pages/shop/Payment";
import Contact from "../components/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu/>,
      },
      {
        path: "/cart-page",
        element: <CartPage/>
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
      {
        path: "/order",
        element:<PrivateRouter><Order/></PrivateRouter>
      },
      {
        path: "/update-profile",
        element: <UserProfile/>
      },
      {
        path: "/process-checkout",
        element: <Payment/>
      }
    ],
  },
  {
    path: "/signup",
    element: <Signup/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: 'dashboard',
    element: <PrivateRouter><DashboardLayout/></PrivateRouter>,
    children: [
      {
        path: '',
        element: <Dashboard/>
      },
      {
        path: 'users', 
        element: <Users/>
      },
      {
        path: 'add-menu',
        element: <AddMenu/>
      }, 
      {
        path: "manage-items",
        element: <ManageItems/>
      },
      {
        path: "update-menu/:id",
        element: <UpdateMenu/>,
        loader: ({params}) => fetch(`http://localhost:6001/menu/${params.id}`)
      }
    ]
  }
]);

export default router;
