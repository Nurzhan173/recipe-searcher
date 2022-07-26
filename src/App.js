import { Layout, Tag } from 'antd';
import React from 'react';
import 'antd/dist/antd.min.css';
import SideBar from './components/Sidebar';
import { IngredientsList } from './store/atoms';
import { useRecoilValue } from 'recoil';
import RecipesList from './components/RecipesList';

const { Content } = Layout;

function App() {
  const selectedIngredients = useRecoilValue(IngredientsList);

  return (
    <Layout hasSider>
      <SideBar />
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Content
          style={{
            overflow: 'initial',
            marginLeft: '250px',
          }}
        >
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              textAlign: 'center',
            }}
          >
            <p>Вы выбрали:</p>
            {selectedIngredients.map((ingredient) => (
              <Tag className="tag-btn">{ingredient}</Tag>
            ))}
            <div>
              {selectedIngredients.length > 0 && (
                <RecipesList selectedIngredients={selectedIngredients} />
              )}
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
