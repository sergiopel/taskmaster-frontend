import React, { useState } from 'react';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Card from '../components/common/Card';

const ExampleComponents = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Exemplo de Componentes</h1>

      <div className="space-y-8">
        {/* Seção de Botões */}
        <Card title="Botões">
          <div className="space-x-4">
            <Button>Botão Primário</Button>
            <Button variant="secondary">Botão Secundário</Button>
            <Button variant="danger">Botão Perigo</Button>
          </div>
          <div className="mt-4 space-x-4">
            <Button size="sm">Pequeno</Button>
            <Button size="md">Médio</Button>
            <Button size="lg">Grande</Button>
          </div>
          <div className="mt-4">
            <Button disabled>Botão Desabilitado</Button>
          </div>
        </Card>

        {/* Seção de Formulário */}
        <Card title="Formulário">
          <form onSubmit={handleSubmit}>
            <Input
              label="Nome"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="Digite seu nome"
            />
            <Input
              label="Email"
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="Digite seu email"
              error={formData.email && !formData.email.includes('@') ? 'Email inválido' : ''}
            />
            <Button type="submit">
              Enviar
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ExampleComponents;
