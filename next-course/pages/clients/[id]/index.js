import {useRouter} from "next/router";

export default function ClientProjectsPage() {
    const router = useRouter()

    console.log('router.pathname', router.pathname);
    console.log('router.query', router.query);

    function loadProjectHandler() {

        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {id: router.query.id  , clientprojectid: 'projecta'}
        });
    }

    return (
        <div>
            <h1>The ClientProjectsPage Page </h1>
            <button
                onClick={loadProjectHandler}>
                Load Project A
            </button>
        </div>
    )
}
