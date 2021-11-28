// src/components/IngredientsList.tsx

import React from 'react';
import Ingredient, { IngredientProps } from './Ingredient';

export default function IngredientList({ list }: { list: IngredientProps[] }) {
  return (
    <ul className="ingredients">
      {list.map((ingredient, i) => (
        <Ingredient key={i} {...ingredient} />
      ))}
    </ul>
  );
}
