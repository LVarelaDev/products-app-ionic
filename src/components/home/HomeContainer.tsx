import {
  IonCard,
  IonCardHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { searchOutline } from "ionicons/icons";
import React, { useState } from "react";
import "./HomeContainer.css";
import Products from "./partials/Products";

const HomeContainer: React.FC = () => {
  const categories = [
    "Ropa",
    "Zapatos",
    "Accesorios",
    "Electrónica",
    "Hogar",
    "Deportes",
    "Belleza",
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      <IonItem>
        <IonInput
          label="Buscar producto"
          labelPlacement="stacked"
          placeholder="Ej: Gorra"
        >
          <IonIcon
            slot="start"
            icon={searchOutline}
            aria-hidden="true"
          ></IonIcon>
        </IonInput>
      </IonItem>
      <div className="categories-container">
        {categories.map((category, index) => (
          <IonCard
            className={`category-card ${
              selectedCategory === category ? "active" : ""
            }`}
            key={index}
            onClick={() => {
              handleCategoryClick(category);
            }}
          >
            <IonCardHeader>
              <IonLabel>{category}</IonLabel>
            </IonCardHeader>
          </IonCard>
        ))}
      </div>
      <Products />
    </div>
  );
};

export default HomeContainer;
