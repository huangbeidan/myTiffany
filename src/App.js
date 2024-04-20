import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import FeaturedProducts from './products/FeaturedProducts';

const HomePage = () => {
    const sampleProducts = [
        {
            id: 1,
            name: "Elegant Silver Necklace",
            description: "A stunning silver necklace perfect for any occasion of your like.",
            imageUrl: "/images/product1.jpg",
            price: "$250"
        },
        {
            id: 2,
            name: "Luxury Gold Watch",
            description: "Experience timeless elegance with our luxury gold watch.",
            imageUrl: "/images/product4.jpg",
            price: "$980"
        },
        {
            id: 3,
            name: "Classic Diamond Ring",
            description: "A beautifully crafted diamond ring to cherish forever.",
            imageUrl: "/images/product3.jpg",
            price: "$1200"
        }
    ];

    return (
      
        <div className="min-h-screen bg-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <div className="hero bg-cover bg-center h-96" style={{ backgroundImage: "url('/images/pearl-green.jpg')" }}>
                <div className="container mx-auto flex items-center justify-center h-full">
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold mb-2">Discover Our Latest Collection</h1>
                        <p className="text-xl mb-5">Explore our range of exquisite jewelry.</p>
                        <a href="#featured-products" className="bg-transparent border border-white text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-gray-800 transition duration-300">
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>


            {/* Featured Products Section */}
            <FeaturedProducts products={sampleProducts} />

            {/* Footer */}
            <footer className="bg-gray-800 py-6">
                <div className="container mx-auto px-4 text-center text-white">
                    <p>&copy; {new Date().getFullYear()} Your Company Name</p>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;
