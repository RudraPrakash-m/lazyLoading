import React, { createContext, useState } from 'react'

export const PRODUCT_CONTEXT = createContext([])

const ProductContext = ({ children }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    return (
        <PRODUCT_CONTEXT value={{ products, setProducts, loading, setLoading, error, setError }}>
            {children}
        </PRODUCT_CONTEXT>
    )
}

export default ProductContext