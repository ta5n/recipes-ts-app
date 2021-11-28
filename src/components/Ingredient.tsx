// src/components/Ingredient.tsx
import React from 'react';

export interface IngredientProps {
  amount: number | string;
  measurement?: string;
  name: string;
}

export default function Ingredient({ amount, measurement, name }: IngredientProps) {
  return (
    <li>
      <span>{amount} </span>
      <span>{measurement}</span>
      <span>{name}</span>
    </li>
  );
}
