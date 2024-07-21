import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import  ShopData  from "./components/ShopData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
    {
        path: '/fetch-data',
        element: <FetchData />
    },
    {
        path: '/shop',
        element: <ShopData />
    },
];

export default AppRoutes;
