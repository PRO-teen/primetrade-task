const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h2 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Task Manager</h2>
      <p className="text-lg text-gray-600 max-w-xl mb-6">
        A simple and secure web app where users can register, log in, and manage their personal tasks with a protected dashboard.
      </p>
      <p className="text-gray-500">
        Get started by creating an account or logging in to access your dashboard.
      </p>
    </div>
  );
};

export default Home;
