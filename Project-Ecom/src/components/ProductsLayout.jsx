import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductLayout = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProductData(data.products);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Loading.........</h1>;
  } else {
    return (
      <>
        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-12">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
              {productData.map((items) => {
                return (
                  <>
                    <ProductCard
                      product_image={items.thumbnail}
                      product_title={items.title}
                      category={items.category}
                      product_offer={items.discountPercentage}
                      product_rating={items.rating}
                      product_rating_count={items.stock}
                      product_price={items.price}
                    />
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default ProductLayout;
