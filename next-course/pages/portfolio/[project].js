import {useRouter} from "next/router";

export default function PortfolioProjectPage() {
   const router = useRouter()

    console.log('router.pathname',router.pathname);
    console.log('router.query',router.query);
    return (
        <div>
            <h1>The PortfolioProjectPage Page</h1>
        </div>
    )
}
