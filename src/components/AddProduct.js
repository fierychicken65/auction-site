import React from "react";

const AddProduct =()=>{
    const [name,setName] = React.useState('');
    const [price,setPrice]= React.useState('');
    const [category,setCategory] = React.useState('');
    const [company,setCompany] = React.useState('');
    const [error,setError] = React.useState(false);
    const addProduct =async ()=>{
        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }
        console.warn(name,price,category,company);
        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/add-product',{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
        console.warn(result);
    }
    return(
        <div>
            <h1>ADD PRODUCT</h1>
            <input type="text" className="inputAP" placeholder="Enter product name" value={name} onChange={(e)=>setName(e.target.value)}/>
            {error && !name && <span>Enter valid name</span>}
            <input type="text" className="inputAP" placeholder="Enter product price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            {error && !price && <span>Enter valid price</span>}
            <input type="text" className="inputAP" placeholder="Enter product category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
            {error && !category && <span>Enter valid category</span>}
            <input type="text" className="inputAP" placeholder="Enter product brand" value={company} onChange={(e)=>setCompany(e.target.value)}/>
            {error && !company && <span>Enter valid company</span>}
            <button onClick={addProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct;