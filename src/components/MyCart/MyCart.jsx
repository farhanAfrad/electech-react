
import { useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCart = () => {
    const products = useLoaderData();
    const location = useLocation();
    const [remainingProduct, setRemainingProduct] = useState(products);
    console.log(products);
    const handleRemove = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tech-server-phi.vercel.app/cart/${id}`,{
                    method:"DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                        const remains = remainingProduct.filter(prod=>prod._id!=id);
                        setRemainingProduct(remains);
                    }
                })             
            }
          });
       
    }
    
    

    return (
        <div className='grid grid-cols-2 w-2/3 mx-auto gap-4 mt-10'>
            {
                remainingProduct.map(prod => <div key={prod._id}>
                    <div className="card bg-base-100 shadow-xl">
                        <figure><img src={prod.image} alt="Shoes" className='h-52' /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {prod.name}

                            </h2>
                            <p>{prod.des}</p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">{prod.brand}</div>
                                <div className="badge badge-outline">{prod.select}</div>
                            </div>
                            <div>
                                <button className='btn btn-primary' onClick={()=>handleRemove(prod._id)}>reomve from cart</button>
                            </div>
                        </div>

                    </div>
                </div>)
            }
        </div>
    );
};

export default MyCart;