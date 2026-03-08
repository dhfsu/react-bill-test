import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            这是一级Layout路由
            {/* 二级路由出口，不设置的话二级路由无法显示 */}
            <Outlet />
        </div>
    )
}
export default Layout;