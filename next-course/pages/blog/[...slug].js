import {useRouter} from "next/router";

export default function BlogPostPage() {
    const router = useRouter()

    console.log('router.pathname', router.pathname);
    console.log('router.query', router.query);
    return (
        <div>
            <h1>The Blog Posts</h1>
        </div>
    )
}
