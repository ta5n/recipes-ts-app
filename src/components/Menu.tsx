// src/components/Menu.tsx
import React from 'react';
import Recipe, { RecipeProps } from './Recipe';

export default function Menu({ recipes }: { recipes: RecipeProps[] }) {
  return (
    <article>
      <header>
        <h1>Delicious Recipes</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
}
