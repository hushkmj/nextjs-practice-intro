import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
    const router = useRouter();
    return (
        <nav>
            <Link href={"/"} className={router.pathname === "/" ? "active" : ""}>Home</Link>
            <Link href={"/about"} legacyBehavior><a className={router.pathname === "/about" ? "active" : ""}>About</a></Link>
            <style jsx>{`
                nav {
                    background-color: tomato;
                }
                a {
                    text-decoration: none;
                }
                a.active {
                    color: yellow;
                }
            `}</style>
        </nav>
    )
}