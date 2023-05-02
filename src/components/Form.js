import React, { useRef } from 'react'


const Form = (props) => {

    const nameRef = useRef('')
    const descriptionRef = useRef('')
    const priceRef = useRef('')

    const submitHandler = (event) => {
        event.preventDefault()

        const data ={
            inputName:nameRef.current.value,
            inputDescription:descriptionRef.current.value,
            inputPrice:priceRef.current.value
        }

        props.addProduct(data)

        event.target.reset()

    }

  return (
    <>
      <form className='form' onSubmit={submitHandler}>

        <label htmlFor="brandname"> Name : </label>
        <input type="text" ref={nameRef} />
        <label htmlFor="brandname"> Description : </label>
        <input type="text" ref={descriptionRef} />
        <label htmlFor="brandname"> Price : </label>
        <input type="number" ref={priceRef} />
        
        <button>Add Product</button>

      </form>
    </>
  )
}

export default Form