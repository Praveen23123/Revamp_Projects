import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useProductOverview = () => {
  const data = useParams();
  console.log(data);

  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://dummyjson.com/products/${data.product_id}`
      );
      const data2 = await res.json();
      console.log(data2);
      setProductData(data2);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return { productData, loading };
};

export default useProductOverview;
