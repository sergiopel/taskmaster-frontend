// src/context/TaskContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';
import { CategoryService } from '../services/categoryService';
import { TaskService } from '../services/taskService';
import toast from 'react-hot-toast';

const TaskContext = createContext();

export function TaskProvider({ children }) {
   const [tasks, setTasks] = useState([]);
   const [categories, setCategories] = useState([]);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(null);

   useEffect(() => {
       loadCategories();
       loadTasks();
   }, []);

   const handleError = (error) => {
       const message = error.response?.data?.message || 'Ocorreu um erro inesperado';
       setError(message);
       toast.error(message);
   };

   // Funções para Categorias
   const loadCategories = async () => {
       try {
           setLoading(true);
           setError(null);
           const response = await CategoryService.getAll();
           setCategories(response.data);
       } catch (error) {
           handleError(error);
       } finally {
           setLoading(false);
       }
   };

   const addCategory = async (category) => {
       try {
           setLoading(true);
           setError(null);
           const response = await CategoryService.create(category);
           setCategories([...categories, response.data]);
           toast.success('Categoria criada com sucesso!');
       } catch (error) {
           handleError(error);
       } finally {
           setLoading(false);
       }
   };

   const updateCategory = async (id, category) => {
       try {
           setLoading(true);
           setError(null);
           const response = await CategoryService.update(id, category);
           setCategories(categories.map(cat => cat.id === id ? response.data : cat));
           toast.success('Categoria atualizada com sucesso!');
       } catch (error) {
           handleError(error);
       } finally {
           setLoading(false);
       }
   };

   const deleteCategory = async (id) => {
       try {
           setLoading(true);
           setError(null);
           await CategoryService.delete(id);
           setCategories(categories.filter(cat => cat.id !== id));
           // Remover tarefas associadas a esta categoria
           setTasks(tasks.filter(task => task.category_id !== id));
           toast.success('Categoria removida com sucesso!');
       } catch (error) {
           handleError(error);
       } finally {
           setLoading(false);
       }
   };

   // Funções para Tarefas
   const loadTasks = async () => {
       try {
           setLoading(true);
           setError(null);
           const response = await TaskService.getAll();
           setTasks(response.data);
       } catch (error) {
           handleError(error);
       } finally {
           setLoading(false);
       }
   };

   const addTask = async (task) => {
       try {
           setLoading(true);
           setError(null);
           const response = await TaskService.create(task);
           setTasks([...tasks, response.data]);
           toast.success('Tarefa criada com sucesso!');
       } catch (error) {
           handleError(error);
       } finally {
           setLoading(false);
       }
   };

   const updateTask = async (id, task) => {
       try {
           setLoading(true);
           setError(null);
           const response = await TaskService.update(id, task);
           setTasks(tasks.map(t => t.id === id ? response.data : t));
           toast.success('Tarefa atualizada com sucesso!');
       } catch (error) {
           handleError(error);
       } finally {
           setLoading(false);
       }
   };

   const deleteTask = async (id) => {
       try {
           setLoading(true);
           setError(null);
           await TaskService.delete(id);
           setTasks(tasks.filter(t => t.id !== id));
           toast.success('Tarefa removida com sucesso!');
       } catch (error) {
           handleError(error);
       } finally {
           setLoading(false);
       }
   };

   const value = {
       tasks,
       categories,
       loading,
       error,
       addTask,
       updateTask,
       deleteTask,
       addCategory,
       updateCategory,
       deleteCategory,
       loadCategories,
       loadTasks
   };

   return (
       <TaskContext.Provider value={value}>
           {children}
       </TaskContext.Provider>
   );
}

export function useTask() {
   const context = useContext(TaskContext);
   if (!context) {
       throw new Error('useTask must be used within a TaskProvider');
   }
   return context;
}