// src/pages/Categories.jsx
import { useState } from 'react';
import { useTask } from '../context/TaskContext';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Card from '../components/common/Card';

function Categories() {
    const { categories, addCategory, deleteCategory, loading } = useTask();
    const [newCategory, setNewCategory] = useState({ name: '', color: 'bg-gray-500' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newCategory.name.trim()) {
            await addCategory(newCategory);
            setNewCategory({ name: '', color: 'bg-gray-500' });
        }
    };

    return (
        <div className="px-4 py-6">
            <h1 className="mb-6 text-2xl font-bold">Categorias</h1>

            <Card className="mb-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Nome da Categoria"
                        value={newCategory.name}
                        onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                        placeholder="Digite o nome da categoria"
                        disabled={loading}
                    />
                    
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Cor
                        </label>
                        <div className="flex gap-2">
                            {['bg-red-500', 'bg-blue-500', 'bg-green-500', 
                              'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'].map((color) => (
                                <button
                                    key={color}
                                    type="button"
                                    className={`w-8 h-8 rounded-full ${color} ${
                                        newCategory.color === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''
                                    }`}
                                    onClick={() => setNewCategory({ ...newCategory, color })}
                                    disabled={loading}
                                />
                            ))}
                        </div>
                    </div>

                    <Button 
                        type="submit" 
                        disabled={loading}
                    >
                        {loading ? 'Adicionando...' : 'Adicionar Categoria'}
                    </Button>
                </form>
            </Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {categories.map((category) => (
                    <Card key={category.id}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className={`w-4 h-4 rounded-full ${category.color} mr-2`} />
                                <span className="font-medium">{category.name}</span>
                            </div>
                            <Button 
                                variant="danger" 
                                size="sm"
                                onClick={() => deleteCategory(category.id)}
                                disabled={loading}
                            >
                                {loading ? 'Excluindo...' : 'Excluir'}
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Categories;