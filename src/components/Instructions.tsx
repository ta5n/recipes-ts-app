// src/components/Instructions.tsx
import React from 'react';

export interface InstructionsProps {
  title: string;
  steps: string[];
}

export default function Instructions({ title, steps }: InstructionsProps) {
  return (
    <section className="instructions">
      <h2>{title}</h2>
      {steps.map((step: string, index: number) => (
        <p key={index}>{step}</p>
      ))}
    </section>
  );
}
