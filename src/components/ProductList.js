import React,{useEffect} from "react";

const ProductList = () => {
    const [products,setProducts] = React.useState('');
    useEffect(()=>{
        getProducts();
    },[]);
    const getProducts = async ()=>{
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }
    console.warn("products",products);
    return(
        <div className="Product-list animationinput1 slideinleft">
            <h1 className="PL_header">Product List</h1>
            <ul>
                <li>S.No</li>
                <li>Name</li>
                <li>Price</li>
                <li>Category</li>
                <li>Brand</li>
            </ul>
            {
                products && products.map((product,index)=>(
                    <ul className="Product-list" key={index}>
                        <li>{index+1}</li>
                        <li>{product.name}</li>
                        <li>{product.price}</li>
                        <li>{product.category}</li>
                        <li>{product.company}</li>
                    </ul>
                ))
            }
        </div>
        
    )
}

export default ProductList;