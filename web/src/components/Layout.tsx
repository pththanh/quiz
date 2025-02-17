import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Home, Users, Settings, Menu, ChartBarStacked } from "lucide-react";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 text-white transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <span className="text-2xl font-semibold">Admin Panel</span>
          <button onClick={toggleSidebar} className="lg:hidden">
            <Menu size={24} />
          </button>
        </div>
        <nav className="mt-8">
          <Link
            to="/"
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            <Home className="mr-3" size={20} />
            Dashboard
          </Link>
          <Link
            to="/category"
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            <ChartBarStacked className="mr-3" size={20} />
            Category
          </Link>
          <Link
            to="/users"
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            <Users className="mr-3" size={20} />
            Users
          </Link>
          <Link
            to="/settings"
            className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700"
          >
            <Settings className="mr-3" size={20} />
            Settings
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <header className="bg-white shadow-sm">
          <div className="flex h-16 items-center justify-between px-4">
            <button
              onClick={toggleSidebar}
              className="text-gray-500 lg:invisible"
            >
              <Menu size={24} />
            </button>
            <div className="text-xl font-semibold">Welcome, Admin</div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
