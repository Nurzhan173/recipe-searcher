import { Tag } from 'antd';
import Card from 'antd/lib/card/Card';
import { useRecoilState } from 'recoil';
import { IngredientsList } from '../store/atoms';

export default function Ingredients({ recipe }) {
  const { ingredients } = recipe;

  const [selectedIngredients, setIngredient] = useRecoilState(IngredientsList);

  const addItem = (ingredient) => {
    setIngredient((oldIngredients) => [...oldIngredients, ingredient]);
  };

  return (
    <Card title={recipe.group_name} bordered={true}>
      {ingredients.map((ingredient) => (
        <Tag
          className={
            selectedIngredients.includes(ingredient)
              ? 'tag-btn-active'
              : 'tag-btn'
          }
          onClick={() => addItem(ingredient)}
        >
          {ingredient}
        </Tag>
      ))}
    </Card>
  );
}
