import { Button } from "antd-mobile";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            这是一级Layout路由
            {/* 二级路由出口，不设置的话二级路由无法显示 */}
            <Outlet />
            {/* 测试全局生效按钮 */}
            <Button color="primary">测试全局</Button>
            <div className="purple">
                {/* 测试局部生效按钮 */}
                <Button color="primary">测试全局</Button>
            </div>
        </div>
    )
}
export default Layout;