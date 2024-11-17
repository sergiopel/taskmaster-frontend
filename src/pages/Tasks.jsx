// src/pages/Tasks.jsx
import { useState } from 'react';
import { useTask } from '../context/TaskContext';
import Button from '../components/common/Button';
import Input from '../components/common/Input';
import Card from '../components/common/Card';

function Tasks() {
   const { tasks, categories, addTask, updateTask, deleteTask, loading } = useTask();
   const [newTask, setNewTask] = useState({
       title: '',
       description: '',
       category_id: '',
       completed: false
   });

   const handleSubmit = async (e) => {
       e.preventDefault();
       if (newTask.title.trim() && newTask.category_id) {
           await addTask(newTask);
           setNewTask({
               title: '',
               description: '',
               category_id: '',
               completed: false
           });
       }
   };

   const handleToggleComplete = async (task) => {
       await updateTask(task.id, { ...task, completed: !task.completed });
   };

   return (
       <div className="px-4 py-6">
           <h1 className="mb-6 text-2xl font-bold">Minhas Tarefas</h1>

           <Card className="mb-6">
               <form onSubmit={handleSubmit} className="space-y-4">
                   <Input
                       label="Título"
                       value={newTask.title}
                       onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                       placeholder="Digite o título da tarefa"
                       disabled={loading}
                       required
                   />

                   <Input
                       label="Descrição"
                       value={newTask.description}
                       onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                       placeholder="Digite a descrição da tarefa"
                       type="textarea"
                       disabled={loading}
                   />

                   <div>
                       <label className="block mb-1 text-sm font-medium text-gray-700">
                           Categoria
                       </label>
                       <select
                           value={newTask.category_id}
                           onChange={(e) => setNewTask({ ...newTask, category_id: e.target.value })}
                           className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                           disabled={loading}
                           required
                       >
                           <option value="">Selecione uma categoria</option>
                           {categories.map((category) => (
                               <option key={category.id} value={category.id}>
                                   {category.name}
                               </option>
                           ))}
                       </select>
                   </div>

                   <Button type="submit" disabled={loading}>
                       {loading ? 'Adicionando...' : 'Adicionar Tarefa'}
                   </Button>
               </form>
           </Card>

           <div className="space-y-4">
               {tasks.map((task) => (
                   <Card key={task.id}>
                       <div className="flex items-center">
                           <input
                               type="checkbox"
                               checked={task.completed}
                               onChange={() => handleToggleComplete(task)}
                               disabled={loading}
                               className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                           />
                           <div className="flex-1 ml-3">
                               <p className={`font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}>
                                   {task.title}
                               </p>
                               {task.description && (
                                   <p className="mt-1 text-sm text-gray-500">
                                       {task.description}
                                   </p>
                               )}
                               <div className="flex items-center mt-2">
                                   {categories.map(category => 
                                       category.id === task.category_id && (
                                           <span
                                               key={category.id}
                                               className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${category.color.replace('bg-', 'bg-opacity-10 text-')}`}
                                           >
                                               <div className={`w-2 h-2 rounded-full ${category.color} mr-1`} />
                                               {category.name}
                                           </span>
                                       )
                                   )}
                               </div>
                           </div>
                           <Button
                               variant="danger"
                               size="sm"
                               onClick={() => deleteTask(task.id)}
                               disabled={loading}
                               className="ml-4"
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

export default Tasks;