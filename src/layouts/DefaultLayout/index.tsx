import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutDefault } from "./style";

export function DefaultLayout() {
    return (
        <LayoutDefault>
            <Header />
            <Outlet />
        </LayoutDefault>
    )
}