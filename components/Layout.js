import Navber from "./NavBar"

export default function Layout({children}){
    return <>
            <Navber />
            <div>{children}</div>
        </>
}