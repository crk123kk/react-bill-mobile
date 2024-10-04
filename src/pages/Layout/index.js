import { getBillList } from "@/store/modules/billStore";
import { Button } from "antd-mobile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBillList())
    }, [dispatch])
    return (
        <div>
            <h1>Layout</h1>
            <Outlet />
            <Button color="primary">Button</Button>
        </div>
    )
}

export default Layout;