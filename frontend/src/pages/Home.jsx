import Hero from "../components/Layout/Hero"
import FeaturedCollection from "../components/Products/FeaturedCollection"
import FeaturedSection from "../components/Products/FeaturedSection"
import GenderCollectionSection from "../components/Products/GenderCollectionSection"
import NewArrivals from "../components/Products/NewArrivals"
import ProductDetails from "../components/Products/ProductDetails"
import ProductGrid from "../components/Products/ProductGrid"

function Home() {
  const placeholderProducts = [
    {
      _id: 10,
      name: "Product 1",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=10" }],
    },
    {
      _id: 2,
      name: "Product 2",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=11" }],
    },
    {
      _id: 3,
      name: "Product 3",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=13" }],
    },
    {
      _id: 4,
      name: "Product 4",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=14" }],
    },
    {
      _id: 5,
      name: "Product 5",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=24" }],
    },
    {
      _id: 6,
      name: "Product 6",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=34" }],
    },
    {
      _id: 7,
      name: "Product 7",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=44" }],
    },
    {
      _id: 8,
      name: "Product 8",
      price: 100,
      images: [{ url: "https://picsum.photos/500/500?random=64" }],
    },
  ];
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />
      <h2 className="text-3xl text-center font-bold mb-4">
        Best Seller
      </h2>
      <ProductDetails />

      <div className="container mx-auto">
        <div className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </div>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FeaturedCollection/>
      <FeaturedSection/>
    </div>
  )
}

export default Home