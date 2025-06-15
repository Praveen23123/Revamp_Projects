const ProductCard2 = ({
  product_image,
  name,
  is_veg,
  org_price,
  dis_price,
  short_discription,
}) => {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-white w-[300px]">
          {/* Product Image & Discount */}
          <div className="relative">
            <img
              src={product_image} // Replace with your image URL
              alt="Ultimate Savings Chicken Bucket"
              className="w-full h-48 object-cover"
            />
            <div className="absolute top-3 right-3 bg-red-600 text-white text-xs font-bold rounded-full px-3 py-1">
              SAVE <span className="text-lg">35%</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="text-lg font-semibold">{name}</span>
              <span className="ml-2 text-xs bg-gray-100 text-red-600 px-2 py-0.5 rounded flex items-center">
                <svg
                  className="w-3 h-3 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="12" />
                </svg>
                {is_veg}
              </span>
            </div>
            <div className="flex items-center mb-2">
              <span className="line-through text-gray-500 mr-2">
                ₹{org_price}
              </span>
              <span className="text-red-600 font-bold text-lg">
                ₹{dis_price}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{short_discription}</p>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-full flex items-center justify-center gap-2 transition">
              Add to cart
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const ProductData = [
  {
    id: 1,
    product_image:
      "https://ik.imagekit.io/praveen2312/revamp-projects/Food%20Store%20project/em-grilled-seafood-img.png?updatedAt=1745922873671",
    name: "Grilled Seafood",
    is_veg: "Non veg",
    org_price: 599,
    dis_price: 399,
    short_discription:
      "Savings of 35% on signature bucket of 4pc Hot & crispy chicken ",
  },

  {
    id: 2,
    product_image:
      "https://ik.imagekit.io/praveen2312/revamp-projects/Food%20Store%20project/em-grilled-seafood-img.png?updatedAt=1745922873671",
    name: "Grilled Seafood",
    is_veg: "Non veg",
    org_price: 599,
    dis_price: 399,
    short_discription:
      "Savings of 35% on signature bucket of 4pc Hot & crispy chicken",
  },

  {
    id: 3,
    product_image:
      "https://ik.imagekit.io/praveen2312/revamp-projects/Food%20Store%20project/em-grilled-seafood-img.png?updatedAt=1745922873671",
    name: "grilled-seafood",
    is_veg: "veg",
    org_price: 599,
    dis_price: 399,
    short_discription:
      "Savings of 35% on signature bucket of 4pc Hot & crispy chicken",
  },

  {
    id: 4,
    product_image:
      "https://ik.imagekit.io/praveen2312/revamp-projects/Food%20Store%20project/em-grilled-seafood-img.png?updatedAt=1745922873671",
    name: "grilled-seafood",
    is_veg: "veg",
    org_price: 599,
    dis_price: 399,
    short_discription:
      "Savings of 35% on signature bucket of 4pc Hot & crispy chicken",
  },

  {
    id: 5,
    product_image:
      "https://ik.imagekit.io/praveen2312/revamp-projects/Food%20Store%20project/em-grilled-seafood-img.png?updatedAt=1745922873671",
    name: "Grilled Seafood",
    is_veg: "Non veg",
    org_price: 599,
    dis_price: 399,
    short_discription:
      "Savings of 35% on signature bucket of 4pc Hot & crispy chicken",
  },

  {
    id: 6,
    product_image:
      "https://ik.imagekit.io/praveen2312/revamp-projects/Food%20Store%20project/em-grilled-seafood-img.png?updatedAt=1745922873671",
    name: "Grilled Seafood",
    is_veg: "Non veg",
    org_price: 599,
    dis_price: 399,
    short_discription:
      "Savings of 35% on signature bucket of 4pc Hot & crispy chicken",
  },

  {
    id: 7,
    product_image:
      "https://ik.imagekit.io/praveen2312/revamp-projects/Food%20Store%20project/em-grilled-seafood-img.png?updatedAt=1745922873671",
    name: "Grilled Seafood",
    is_veg: "Non veg",
    org_price: 599,
    dis_price: 399,
    short_discription:
      "Savings of 35% on signature bucket of 4pc Hot & crispy chicken",
  },

  {
    id: 8,
    product_image:
      "https://ik.imagekit.io/praveen2312/revamp-projects/Food%20Store%20project/em-grilled-seafood-img.png?updatedAt=1745922873671",
    name: "Grilled Seafood",
    is_veg: "Non veg",
    org_price: 599,
    dis_price: 399,
    short_discription:
      "Savings of 35% on signature bucket of 4pc Hot & crispy chicken",
  },
];

export default ProductCard2;
