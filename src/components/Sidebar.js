import React, { useEffect, useState } from 'react';
import { Button, Layout } from 'antd';
import { getIngredientsList } from '../service/index';
import Ingredients from './Ingredients';
import './styles.css';

export default function SideBar() {
  const { Sider } = Layout;
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getIngredientsList().then((res) => {
      setRecipes(res);
    });
  }, []);

  return (
    <Sider
      width={400}
      style={{
        overflow: 'auto',
        height: '100vh',
        width: '30vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'white',
      }}
    >
      {recipes &&
        recipes.map((recipe, index) => (
          <Ingredients key={recipe.group_name} recipe={recipe} />
        ))}
      {/* 
      <div className="sidebar-footer">
        <Button className="push-btn">Применить</Button>
      </div> */}
    </Sider>
  );
}
