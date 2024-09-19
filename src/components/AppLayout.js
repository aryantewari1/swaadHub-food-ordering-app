import { Provider } from "react-redux";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import appStore from "../store/appStore";

const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Provider store={appStore}>
        <div className="h-[75px]">
          <Header />
        </div>
        <div className="flex-1 mt-5">
          <Outlet />
        </div>
      </Provider>
    </div>
  );
};

export default AppLayout;
