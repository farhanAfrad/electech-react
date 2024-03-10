import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";

const BrandedProduct = () => {
    const products = useLoaderData();
    return (
        <div className="grid grid-cols-2 w-4/5 mx-auto gap-8 mt-10">
            {
                products.map(product => <Product key={product._id} product={product}></Product>)
            }
        </div>
    )
}
export default BrandedProduct;