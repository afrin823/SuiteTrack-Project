import React from 'react';
import { BarChart2, Calendar, ChevronDown, Mail, MessageSquare, MoreHorizontal, Search, Settings, User } from 'lucide-react';
import Image from 'next/image';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#2c3e50] text-white">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">SuiteTrack</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center px-4 py-2 bg-teal-500 rounded">
                <BarChart2 className="w-5  h-5 mr-3" />
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded">
                <Mail className="w-5 h-5 mr-3" />
                Email
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded">
                <MessageSquare className="w-5 h-5 mr-3" />
                Forms
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 rounded">
                <Settings className="w-5 h-5 mr-3" />
                UI Elements
              </a>
            </li>
          </ul>
        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-3">
            <h2 className="text-xl text-gray-800 font-semibold">Dashboard</h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search here..."
                  className="pl-8 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-2 top-2.5 w-4 h-4 text-gray-400" />
              </div>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <MoreHorizontal className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <Image src="https://i.ibb.co.com/swXsRck/fullstack-developer-html-css-bootstrap-tailwind-javascript-react-next-js-mongodb-firebase.png" width={300} height={300} alt="User" className="w-8 h-8 rounded-full" />
                <span className="font-medium text-gray-800">Afrin</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg text-gray-800 font-semibold mb-2">VISITS TODAY</h3>
              <p className="text-4xl font-bold text-teal-500">900k+</p>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>7.80</span>
                <span>76.43%</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg text-gray-800 font-semibold mb-2">% UNIQUE VISITORS</h3>
              <p className="text-4xl font-bold text-red-500">54.40%</p>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>01 80 22</span>
                <span>54.40%</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg text-gray-800 font-semibold mb-2">PAGE VIEWS</h3>
              <p className="text-4xl font-bold text-blue-500">300k+</p>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>34.23%</span>
                <span>300k+</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg text-gray-800 font-semibold mb-2">TODAY S EARNINGS</h3>
              <p className="text-4xl font-bold text-gray-800">$655</p>
              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>$32,322</span>
                <span>$503,000</span>
              </div>
            </div>
          </div>

          {/* Charts and Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg text-gray-800 font-semibold mb-4">NETWORK PERFORMANCE</h3>
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                {/* Placeholder for chart */}
                <Image
                  src="https://i.ibb.co.com/ZgYsDM7/chart.png"
                  alt="Network Performance Chart"
                  width={300}
                  height={300}
                  className='w-full h-60'
                />

                {/* <span className="text-gray-400">Network Performance Chart</span> */}
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg text-gray-800 font-semibold mb-4">SERVER STATUS</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className='text-gray-800'>CPU Usage</span>
                    <span className='text-gray-800'>32.0%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className='text-gray-800'>Memory Usage</span>
                    <span className='text-gray-800'>22.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '22.2%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className='text-gray-800'>Disk Usage</span>
                    <span className='text-gray-800'>62.7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '62.7%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg text-gray-800 font-semibold">RENDERING ENGINE</h3>
                <div className="flex space-x-2">
                  <select className="border rounded px-2 py-1">
                    <option>Browser</option>
                  </select>
                  <select className="border rounded px-2 py-1">
                    <option>Platform(s)</option>
                  </select>
                </div>
              </div>
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left text-gray-800 py-2">Rendering engine</th>
                    <th className="text-left text-gray-800 py-2">Browser</th>
                    <th className="text-left text-gray-800 py-2">Platform(s)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 text-gray-800">Gecko</td>
                    <td className="py-2 text-gray-800">Firefox 1.0</td>
                    <td className="py-2 text-gray-800">Win 98+ / OSX.2+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-gray-800">Gecko</td>
                    <td className="py-2 text-gray-800">Firefox 1.5</td>
                    <td className="py-2 text-gray-800">Win 98+ / OSX.2+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-gray-800">Gecko</td>
                    <td className="py-2 text-gray-800">Firefox 2.0</td>
                    <td className="py-2 text-gray-800">Win 98+ / OSX.2+</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 text-gray-800">Gecko</td>
                    <td className="py-2 text-gray-800">Firefox 3.0</td>
                    <td className="py-2 text-gray-800">Win 2k+ / OSX.3+</td>
                  </tr>
                  <tr>
                    <td className="py-2 text-gray-800">Gecko</td>
                    <td className="py-2 text-gray-800">Camino 1.0</td>
                    <td className="py-2 text-gray-800">OSX.2+</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-sm text-gray-500">Showing 1 to 5 of 57 entries</span>
                <div className="space-x-2">
                  <button className="px-3 py-1 bg-gray-800 rounded">Previous</button>
                  <button className="px-3 py-1 bg-blue-500 text-white rounded">Next</button>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg text-gray-800 font-semibold mb-4">QUICK STATUS POST</h3>
              <textarea
                className="w-full p-3 border rounded-lg mb-4"
                rows="3"
                placeholder="What's your status?"
              ></textarea>
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-gray-800 rounded flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    Status
                  </button>
                  <button className="px-4 py-2 bg-gray-800 rounded flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Photo
                  </button>
                  <button className="px-4 py-2 bg-gray-800 rounded flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Check in
                  </button>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                  Submit Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

