import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import { getRecipeList } from '../service';
import ProductItem from './ProductItem';
import './styles.css';

export default function RecipesList({ selectedIngredients }) {
  const [recipeList, setRecipeList] = useState([]);
  useEffect(() => {
    getRecipeList(selectedIngredients.join(',')).then((res) => {
      setRecipeList(res.results);
    });
  }, [selectedIngredients]);

  return (
    <div className="grid">
      {recipeList.length > 0 &&
        recipeList.map((item) => (
          <div className="product-item">
            <ProductItem recipeItem={item} />
          </div>
        ))}
    </div>
  );
}
