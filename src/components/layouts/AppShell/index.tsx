
import { useRouter } from "next/router";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Inter } from 'next/font/google'
import PageTransition from "../../ui/PageTransition";
import Stair from "@/components/ui/Stair";
import StairTransition from "@/components/ui/StairTransition";

const inter = Inter({ subsets: ['latin'] })

// Load Inter font with desired options

type AppShellProps = {
    children: React.ReactNode
}

const disableNavbar = ["/_error"]
const AppShell = (props: AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    console.log(pathname);
    return (
        <div className={"font-bold font-mono"}>
            {!disableNavbar.includes(pathname) && <Navbar />}
            <PageTransition>
            <StairTransition />
            {children}
            </PageTransition>
            
            {/* <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer> */}
        </div>
    );
};
export default AppShell;