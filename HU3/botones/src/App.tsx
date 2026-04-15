import React from 'react';
import './App.css';
import { Button, Card } from './components/ui';
import { cardItems } from './data/cardData';

function App() {
  return (
    <main className="app-shell">
      <section className="hero">
        <p className="hero__eyebrow">UI reusable components</p>
        <h1>Biblioteca tipada de Button, Badge y Card</h1>
        <p className="hero__description">
          Componentes consistentes, faciles de mantener y listos para escalar en
          una interfaz moderna.
        </p>
      </section>

      <section className="card-grid" aria-label="Card component examples">
        {cardItems.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            type={item.type}
            badges={item.badges}
            imageUrl={item.imageUrl}
            footer={
              <Button
                text={item.actionText}
                variant={item.actionVariant}
                size="md"
                loading={item.loading}
                leftIcon={<span aria-hidden="true">+</span>}
                rightIcon={<span aria-hidden="true">{'>'}</span>}
              />
            }
          >
            <p>{item.description}</p>
          </Card>
        ))}
      </section>
    </main>
  );
}

export default App;
