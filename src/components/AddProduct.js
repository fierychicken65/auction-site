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
        <div className="AddProd_div animationinput1 slideinleft">
            <h1 className="AP_header animationinput2 slideinleft">ADD PRODUCT</h1>
            <input type="text" className="inputAP animationinput2 slideinleft" placeholder="Enter product name" value={name} onChange={(e)=>setName(e.target.value)}/>
            {error && !name && <span className="invalid_entry">Enter valid name</span>}
            <input type="text" className="inputAP animationinput2 slideinleft" placeholder="Enter product price" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            {error && !price && <span className="invalid_entry">Enter valid price</span>}
            <input type="text" className="inputAP animationinput2 slideinleft" placeholder="Enter product category" value={category} onChange={(e)=>setCategory(e.target.value)}/>
            {error && !category && <span className="invalid_entry">Enter valid category</span>}
            <input type="text" className="inputAP animationinput2 slideinleft" placeholder="Enter product brand" value={company} onChange={(e)=>setCompany(e.target.value)}/>
            {error && !company && <span className="invalid_entry">Enter valid company</span>}
            <button className="AddProductButton animationinput2 slideinleft" onClick={addProduct}>Add Product</button>
        </div>
    )
}

export default AddProduct;