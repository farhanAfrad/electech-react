
import { useLoaderData, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductDetails = () => {
    const product = useLoaderData();
    const location = useLocation();
    console.log(product);
    const { image, des, name } = product;
    const handleAddToCart = prod =>{
        
        fetch("https://tech-server-phi.vercel.app/cart",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(prod)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.error){
                Swal.fire({
                    title: "Alert!",
                    text: "Product is in the cart already",
                    icon: "warning"
                  })
            }
            else{
                Swal.fire({
                    title: "Good job!",
                    text: "Product is Added to the cart",
                    icon: "success"
                  }) 
            }
        });
    }

    return (
        <div>
            <div className="hero bg-base-200 max-h-screen items-center">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} className="h-96 rounded" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{des}</p>
                        <button className="btn btn-primary" onClick={()=>handleAddToCart(product)}>Add to cart</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;