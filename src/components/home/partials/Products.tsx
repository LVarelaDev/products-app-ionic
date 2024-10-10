import React, { useEffect, useState } from "react";
import "./Products.css";
import { IonCard, IonCardHeader, IonLabel } from "@ionic/react";
import { Product } from "../../../models/products";
import { fetchProducts } from "../../../services/products.service";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // Estado para almacenar productos
  const [page, setPage] = useState<number>(0); // Estado para manejar la página actual
  const [hasMore, setHasMore] = useState<boolean>(true); // Estado para saber si hay más productos para cargar
  const [loading, setLoading] = useState<boolean>(false);

  const handleFavorite = (product: Product) => {
    console.log();
  };

  useEffect(() => {
    const loadProducts = () => {
      setLoading(true);
      fetchProducts(page)
        .then((newProducts) => {
          setProducts(newProducts);
          if (newProducts.length === 0) {
            setHasMore(false);
          }
        })
        .catch((error) => {
          console.error("Error al cargar productos:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    loadProducts();
  }, [page]);

  return (
    <div className="product-container">
      {products.map((product, index) => (
        <IonCard
          className={`product-card`}
          key={index}
          onClick={() => {
            handleFavorite(product);
          }}
        >
          <IonCardHeader>
            <IonLabel>{product.title}</IonLabel>
          </IonCardHeader>
        </IonCard>
      ))}
    </div>
  );
};

export default Products;
