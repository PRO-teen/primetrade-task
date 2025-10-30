import { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "", status: "pending" });
  const [error, setError] = useState("");
   const navigate = useNavigate();

  // Fetch user tasks
  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch tasks");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add new task
  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/tasks", newTask);
      setTasks([...tasks, res.data]);
      setNewTask({ title: "", description: "", status: "pending" });
    } catch (err) {
      setError(err.response?.data?.message || "Failed to add task");
    }
  };

  
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  // Delete task
  const handleDelete = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete task");
    }
  };

  // Update task status
  const handleStatusChange = async (id, status) => {
    try {
      const res = await api.put(`/tasks/${id}`, { status });
      setTasks(tasks.map((t) => (t._id === id ? res.data : t)));
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update task");
    }
  };

  return (
   <div className="p-4 md:p-10 bg-gray-100 min-h-screen">
  <div className="max-w-6xl mx-auto">

    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
        <h1 className="text-2xl font-bold text-gray-800 text-center sm:text-left">
          My Tasks
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-md transition-all w-full sm:w-auto"
        >
          Logout
        </button>
      </div>

    {/* Error Message */}
    {error && (
      <p className="bg-red-100 text-red-600 p-3 rounded mb-4 text-center md:text-left">
        {error}
      </p>
    )}

    {/* Add Task Form */}
    <form
      onSubmit={handleAddTask}
      className="mb-8 bg-white p-4 md:p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-3 gap-4 items-center"
    >
      <input
        type="text"
        placeholder="Title"
        value={newTask.title}
        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        className="border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        className="border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
        required
      />
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <select
          value={newTask.status}
          onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
          className="border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none w-full"
        >
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition w-full md:w-auto"
        >
          Add Task
        </button>
      </div>
    </form>

    {/* Task List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
        >
          <div>
            <h4 className="font-semibold text-lg text-gray-800 mb-1">
              {task.title}
            </h4>
            <p className="text-gray-600 text-sm mb-4">{task.description}</p>
          </div>

          <div className="flex justify-between items-center">
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(task._id, e.target.value)}
              className="border border-gray-300 px-3 py-1 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            >
              <option value="pending">Pending</option>
              <option value="in progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <button
              onClick={() => handleDelete(task._id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  );
};

export default Dashboard;
