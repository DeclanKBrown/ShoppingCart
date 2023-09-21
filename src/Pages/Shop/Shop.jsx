import { items } from "../../Utilities/items"
import ItemCard from "../../Components/ItemCard/ItemCard"

export default function Shop() {
    return (
        <main className="min-h-[89vh] flex flex-col sm:px-16 md:px-32 lg:px-64 xl:px-64 py-4">
            <div className="grid grid-cols-3 gap-4">
                {items.map(item => (
                    <ItemCard 
                        key={item.name}
                        name={item.name}
                        image={item.imageFront}
                        price={item.price}
                    />
                ))}
            </div>
        </main>
    )
}