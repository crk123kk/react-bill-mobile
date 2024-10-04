import { Button } from "antd-mobile";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <h1>Layout</h1>
            <Outlet />
            <Button color="primary">Button</Button>
        </div>
    )
}

export default Layout;