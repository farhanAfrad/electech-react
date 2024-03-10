import React from 'react';
import Swal from 'sweetalert2';
// image
// name
// brand
// select
// price
// rating
// description
const handleOnSubmit = e =>{
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brand = form.brand.value;
    const select = form.select.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const des = form.description.value;
    const product = {image,name,brand,select,price,rating,des};
    console.log(product);
    fetch("https://tech-server-phi.vercel.app/products",{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(product)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data._id){
            Swal.fire({
                title: "Good job!",
                text: "Product is Added",
                icon: "success"
              })
        }
    })
}


const AddProduct = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="">
                    <div className="card w-full shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleOnSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" placeholder="img url" className="input input-bordered" required name='image' />
                            </div>
                            <div className="flex gap-2">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered" required name='name' />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Brand Name</span>
                                    </label>
                                    <input type="text" placeholder="brand name" className="input input-bordered" required name='brand' />
                                </div>
                            </div>
                            <div className='form-control'>
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <select className="select select-bordered w-full" name='select'>
                                    <option disabled selected>select the category</option>
                                    <option value='phone'>phone</option>
                                    <option value="laptop">laptop</option>
                                    <option value="tv">television</option>
                                </select>
                            </div>
                            <div className="flex gap-2">
                                <div>
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="number" placeholder="price" className="input input-bordered" required name='price' />
                                </div>
                                <div>
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="number" placeholder="rating" className="input input-bordered" required name='rating' />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                                 <textarea placeholder="short description" className="textarea textarea-bordered textarea-md w-full" name='description'></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;