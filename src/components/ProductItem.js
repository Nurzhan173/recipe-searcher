import { Image, Drawer, Button } from 'antd';
import Card from 'antd/lib/card/Card';
import React, { useState } from 'react';
import { getDetails } from '../service';

function ProductItem({ recipeItem }) {
  const [visible, setVisible] = useState(false);
  const [recipeDetail, setRecipeDetail] = useState();

  const showDrawer = () => {
    getDetails(recipeItem.id, recipeItem.uses).then((res) => {
      setRecipeDetail(res.recipe);
    });

    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Card
        className="card-item"
        title={recipeItem.title}
        bordered={false}
        onClick={showDrawer}
      >
        <div>
          <Image src={recipeItem.img} width={200} height={150} />
        </div>
      </Card>

      {recipeDetail && (
        <Drawer
          title={recipeDetail.title}
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <div>
            <Image src={recipeDetail.img} />
            <p>ingredients: ...</p>
            <p>More info</p>
            <Button>
              <a href={recipeDetail.hash}>{recipeDetail.displayurl}</a>
            </Button>
          </div>
        </Drawer>
      )}
    </>
  );
}

export default ProductItem;
