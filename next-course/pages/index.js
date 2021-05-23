import AboutPage from "./about/about";
import Link from "next/link";

export default function HomePage() {
    return (
        <div>
            <h1>HomePage</h1>
            <ul>
                <li>
                    <Link  href='/portfolio'>portfolio</Link>
                </li>
                <li>
                    <Link  href='/clients'>clients</Link>
                </li>
            </ul>
        </div>
    )
}
