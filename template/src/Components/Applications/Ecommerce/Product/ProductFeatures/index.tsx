import ProductSidebar from "./ProductSidebar/ProductSidebar";
import ProductTotal from "./ProductTotal/ProductTotal";

const ProductFeatures = () => {
  return (
      <div className="feature-products">
        <ProductTotal />
        <ProductSidebar/>
      </div>
  );
};
export default ProductFeatures;
