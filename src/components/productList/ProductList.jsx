import { products } from '../../data'
import Product from '../product/Product'
import './productList.css'

const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-text">
                <h1 className="pl-title">
                    Mi trabajo
                </h1>
                <p className="pl-desc">
                    Trabajo con relevancia en los que participe o desarrolle
                </p>
            </div>
            <div className="pl-list">
                {products.map(item=>(
                    <Product
                    key={item.id}
                    img = {item.img}
                    link={item.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductList
