import React, { useState } from 'react';
import './FeaturedProducts.css';

const ProductCard = ({ product }) => {
    const [showFullDescription, setShowFullDescription] = useState((product.description.length < 200));

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg overflow-hidden">
            {/* New div with fixed height */}
            <div className="fixed-height-container ">
                <div className='aspect-ratio'>
                    <img src={product.imageUrl} alt={product.name} className="w-full mb-4" />
                </div>
                <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
                <p className={showFullDescription ? "text-gray-600 text-sm mb-4" : "text-gray-600 text-sm mb-4 truncate"}>
                    {product.description}
                </p>
            </div>
            {product.description.length > 200 && (
                <button onClick={toggleDescription} className="text-blue-500 hover:underline">
                    {showFullDescription ? 'Show Less' : 'Show More'}
                </button>
            )}
            <div className="flex items-center mt-4">
                <span className="text-lg font-bold text-gray-800 mr-auto">{product.price}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
                    Add to Cart
                </button>
            </div>


        </div>
    );
};

const FeaturedProducts = ({ products }) => {
    return (
        <div id="featured-products" className="bg-white py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
