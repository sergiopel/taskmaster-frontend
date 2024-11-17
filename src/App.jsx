import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Categories from './pages/Categories';
import { TaskProvider } from './context/TaskContext';

function App() {
  return (
    <Router>
      <TaskProvider>
        <Toaster position="top-right" />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </Layout>
      </TaskProvider>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <div className="bg-blue-500 p-4 text-white">
//       <h1 className="text-2xl font-bold">Olá Mundo!</h1>
//       <p className="mt-2">Se você ver este texto em branco, com fundo azul e padding, o Tailwind está funcionando!</p>
//     </div>
//   );
// }

// export default App;