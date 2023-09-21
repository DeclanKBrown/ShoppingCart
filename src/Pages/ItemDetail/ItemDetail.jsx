import { items } from '../../Utilities/items'
import { useLoaderData } from "react-router-dom";

export function loader({ params }) {
    const item = items.find(item => item.name === params.name)
    return { item }
}

export default function ItemDetail() {
    const item = useLoaderData()
    return (
        <>
        </>
    )
}