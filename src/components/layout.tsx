import { Outlet } from 'react-router-dom';
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-terminal-bg">
            <Header/>
            <main className="flex-1">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}