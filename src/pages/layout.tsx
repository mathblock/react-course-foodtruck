import { Outlet } from "react-router-dom";
import Footer from "../composants/footer";
import Header from "../composants/header";

export default function Layout( {cartItemCount}:{cartItemCount:number}) {
    return(
        <>
        <Header cartItemCount={cartItemCount} />
        <main>
          <Outlet />
        </main>
        <Footer />
        </>
    )
}