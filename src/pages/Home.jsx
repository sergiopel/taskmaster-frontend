import { useTask } from '../context/TaskContext';
import Card from '../components/common/Card';

function Home() {
  const { tasks, categories } = useTask();

  // Calcular estatísticas
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Cards de Estatísticas */}
      <div className="grid gap-6 mb-8 md:grid-cols-3">
        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-blue-500 bg-opacity-10">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="mb-2 text-sm font-medium text-gray-600">
                Total de Tarefas
              </p>
              <p className="text-lg font-semibold text-gray-700">
                {totalTasks}
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-500 bg-opacity-10">
              <svg
                className="w-6 h-6 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="mb-2 text-sm font-medium text-gray-600">
                Tarefas Concluídas
              </p>
              <p className="text-lg font-semibold text-gray-700">
                {completedTasks}
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-yellow-500 bg-opacity-10">
              <svg
                className="w-6 h-6 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="mb-2 text-sm font-medium text-gray-600">
                Tarefas Pendentes
              </p>
              <p className="text-lg font-semibold text-gray-700">
                {pendingTasks}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Lista de Categorias */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Categorias</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.id}>
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full ${category.color}`} />
                <span className="ml-2 font-medium">{category.name}</span>
                <span className="ml-auto text-gray-500">
                  {tasks.filter(task => task.categoryId === category.id).length} tarefas
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;