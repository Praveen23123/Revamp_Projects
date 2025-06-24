import ProductCard from "../components/ProductCard";
import useProductLayout from "../hooks/useProductLayout";

const ProductLayout = () => {
  const { productData, loading } = useProductLayout();

  if (loading) {
    return (
      <>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      </>
    );
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
                      product_id={items.id}
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
