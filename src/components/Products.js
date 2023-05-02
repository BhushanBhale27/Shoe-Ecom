import React from 'react'

const Products = ({products,addToCart}) => {

    const addToCartHandler = () => {
        addToCart();
    }

  return (
    <>
      <div className='products'>

        {
            products.map((product,index) => (

                <div key={index}>

                    <h3>Shoes Name : {product.inputName} || Shoes Description : {product.inputDescription} || Shoes Price : {product.inputPrice} <button onClick={() => addToCartHandler(product)}>Add to Cart</button></h3>
                    
        
                </div>

            ))
        }
        

      </div>
    </>
  )
}

export default Products