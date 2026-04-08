import React from "react";
import { FaUserCircle } from "react-icons/fa";

const AllUsers = () => {
  const users = [
    { id: 1, name: "Ali Khan", email: "ali@gmail.com", role: "Admin" },
    { id: 2, name: "Sara Ahmed", email: "sara@gmail.com", role: "User" },
    { id: 3, name: "Ahmed Raza", email: "ahmed@gmail.com", role: "User" },
  ];

  return (
    <div className="p-6">

      {/* HEADER */}
      <h1 className="text-2xl font-bold text-[#2f3e2c] mb-6">
        All Users
      </h1>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full text-left">

          {/* TABLE HEAD */}
          <thead className="bg-[#2f3e2c] text-white">
            <tr>
              <th className="py-3 px-4">User</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* USER */}
                <td className="py-3 px-4 flex items-center gap-3">
                  <FaUserCircle className="text-2xl text-[#2f3e2c]" />
                  <span className="font-medium">{user.name}</span>
                </td>

                {/* EMAIL */}
                <td className="py-3 px-4 text-gray-600">
                  {user.email}
                </td>

                {/* ROLE */}
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.role === "Admin"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                {/* STATUS */}
                <td className="py-3 px-4">
                  <span className="text-green-600 font-medium">
                    Active
                  </span>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AllUsers;