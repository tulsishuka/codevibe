const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6">

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <h1 className="text-center text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-center text-gray-500 mt-2">
          Welcome back! Here's an overview of your activity
        </p>

        <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
          💡 <span className="font-semibold text-gray-800">Brihat Infotech</span> is a Bharat‑born technology company
          that delivers robust digital solutions including web, mobile, and AI applications. With over 
          <span className="font-semibold text-gray-800"> 200+ successful projects across 8+ countries</span>, 
          they serve startups and enterprises alike, helping businesses innovate faster and scale smarter.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-gray-700">Profile</h2>
          <p className="text-sm text-gray-500 mt-2">View and update your personal details</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-gray-700">Projects</h2>
          <p className="text-sm text-gray-500 mt-2">Manage your ongoing work and tasks</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
          <h2 className="text-lg font-semibold text-gray-700">Settings</h2>
          <p className="text-sm text-gray-500 mt-2">Customize your dashboard preferences</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
