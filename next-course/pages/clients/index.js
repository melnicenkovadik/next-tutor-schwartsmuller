import {useRouter} from "next/router";
import Link from "next/link";

export default function ClientsPage() {
    const router = useRouter()
    const clients = [
        {id: 'vad', name: 'Vadim'},
        {id: 'you', name: 'Your Name'},
    ]
    console.log('router.pathname', router.pathname);
    console.log('router.query', router.query);
    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {clients.map(client => (
                    <li key={client.id}>
                        <Link href={{
                            pathname: `clients/[id]`,
                            query: {id: client.id}
                        }}>{client.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
