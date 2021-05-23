import {useRouter} from "next/router";

export default function SelectedClientProjectPage() {
    const router = useRouter()

    console.log('router.pathname', router.pathname);
    console.log('router.query', router.query);
    return (
        <div>
            <h1>
                The project page for a
                Specific Project for Selected Client
            </h1>
        </div>
    )
}
