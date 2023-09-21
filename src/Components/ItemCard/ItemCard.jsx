import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ItemCard({ name, image, price }) {
    return (
        <Link to={`/product/${name}`}>
            <div className="flex flex-col">
                <div>
                    <img className='h-96' src={image} />
                </div>
                <div className='flex flex-col px-4'>
                    <span>{name}</span>
                    <span>${price} AUD</span>
                </div>
            </div>
        </Link>
    )
}

ItemCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    price: PropTypes.number.isRequired,
}