import React from "react";
import {
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Overview = () => {
  const stats = [
    { title: "Products", value: 24, icon: <FaBoxOpen /> },
    { title: "Orders", value: 12, icon: <FaShoppingCart /> },
    { title: "Users", value: 5, icon: <FaUsers /> },
  ];

  const data = [
    { name: "Jan", orders: 10 },
    { name: "Feb", orders: 20 },
    { name: "Mar", orders: 15 },
    { name: "Apr", orders: 25 },
    { name: "May", orders: 30 },
  ];

  const orders = [
    { id: "#123", name: "Ali", status: "Pending" },
    { id: "#124", name: "Sara", status: "Delivered" },
    { id: "#125", name: "Ahmed", status: "Processing" },
  ];

  return (
    <div className="p-6 space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-[#2f3e2c]">
          Dashboard Overview
        </h1>
        <p className="text-gray-500">
          Welcome back 👋 Here's what's happening today.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition flex justify-between items-center"
          >
            <div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <h2 className="text-2xl font-bold text-[#2f3e2c]">
                {item.value}
              </h2>
            </div>
            <div className="text-3xl text-[#2f3e2c]">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* CHART */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-[#2f3e2c] mb-4">
          Orders Overview
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="orders"
              stroke="#2f3e2c"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* RECENT ORDERS */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold text-[#2f3e2c] mb-4">
          Recent Orders
        </h2>

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="py-2">Order ID</th>
              <th className="py-2">Customer</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="py-2">{order.id}</td>
                <td className="py-2">{order.name}</td>
                <td
                  className={`py-2 font-medium ${
                    order.status === "Delivered"
                      ? "text-green-600"
                      : order.status === "Pending"
                      ? "text-yellow-500"
                      : "text-blue-500"
                  }`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Overview;