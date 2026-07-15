import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../../components/loading/Loader'
import ProductLoader from '../../components/loading/ProductLoader'

const Products = () => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('https://fakestoreapi.com/products')
      setProducts(data)
      setLoading(false)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      {loading ? <ProductLoader/> : (
        products.map((ele, index) => {
          return (
            <div key={index} className="min-h-screen bg-gray-100 py-8 px-4">
              {loading ? (
                <div className="flex justify-center items-center h-[70vh]">
                  <ProductLoader/>
                </div>
              ) : (
                <div className="max-w-7xl mx-auto">
                  <h1 className="text-3xl font-bold text-center mb-8">
                    Our Products
                  </h1>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col"
                      >
                        {/* Image */}
                        <div className="bg-gray-100 h-64 p-6 flex justify-center items-center overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="h-full w-full object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col flex-1 p-5">
                          {/* Category */}
                          <span className="text-xs uppercase tracking-wide text-blue-600 font-semibold">
                            {product.category}
                          </span>

                          {/* Title */}
                          <h2 className="text-lg font-bold mt-2 line-clamp-2">
                            {product.title}
                          </h2>

                          {/* Description */}
                          <p className="text-gray-600 text-sm mt-3 line-clamp-3 flex-1">
                            {product.description}
                          </p>

                          {/* Rating */}
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-1">
                              <span className="text-yellow-500 text-lg">⭐</span>
                              <span className="font-semibold">
                                {product.rating.rate}
                              </span>
                              <span className="text-gray-500 text-sm">
                                ({product.rating.count})
                              </span>
                            </div>

                            <span className="text-2xl font-bold text-green-600">
                              ${product.price}
                            </span>
                          </div>

                          {/* Buttons */}
                          <div className="flex gap-3 mt-6">
                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">
                              Add Cart
                            </button>

                            <button className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-2 rounded-lg font-semibold transition">
                              Details
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })
      )}
    </div>
  )
}

export default Products