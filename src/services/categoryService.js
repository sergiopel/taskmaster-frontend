import api from './api';

export const CategoryService = {
    getAll: () => api.get('/categories'),
    
    getOne: (id) => api.get(`/categories/${id}`),
    
    create: (category) => api.post('/categories', category),
    
    update: (id, category) => api.put(`/categories/${id}`, category),
    
    delete: (id) => api.delete(`/categories/${id}`)
};