"use client";
import React from "react";
import { useState, useEffect } from "react";
import Header from "@/components/Header/header";
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
export default function page() {
  const [customers, setCustomers] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    phone: "",
  });
  const [search, setSearch] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("customers");
    if (stored) setCustomers(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(customers));
  }, [customers]);

  const filteredCustomers = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = () => {
    if (!formData.name || !formData.email) return;
    const timestamp = new Date().toLocaleDateString();
    if (editingIndex !== null) {
      const updated = [...customers];
      updated[editingIndex] = { ...formData, lastUpdated: timestamp };
      setCustomers(updated);
    } else {
      setCustomers([
        ...customers,
        { ...formData, createdAt: timestamp, lastUpdated: timestamp },
      ]);
    }
    setFormData({ name: "", email: "", location: "", phone: "" });
    setEditingIndex(null);
    setShowPopup(false);
  };

  const handleEdit = (index) => {
    setFormData(customers[index]);
    setEditingIndex(index);
    setShowPopup(true);
  };

  const handleDelete = (index) => {
    const updated = customers.filter((_, i) => i !== index);
    setCustomers(updated);
  };
  return (
    <div className="font-sans text-xl bg-black">
      <Header />
      <div className="w-full bg-black flex flex-col justify-center items-center gap-3 p-3">
        <div className="w-full p-3 flex flex-row justify-between items-center gap-3">
          <h2 className="font-bold text-gray-400">CUSTOMERS</h2>
          <button
            onClick={() => setShowPopup(true)}
            className="px-6 py-2 text-[16px] flex justify-center gap-2 items-center rounded-md bg-blue-800 cursor-pointer"
          >
            <span>
              <GoPlus />
            </span>
            <span>Add</span>
          </button>
        </div>

        <div className="lg:w-1/2 w-full p-2 text-xl flex flex-row justify-start items-center gap-3 text-gray-400 border-1 border-blue-800 rounded-md">
          <span>
            <CiSearch />
          </span>
          <input
            type="text"
            className="p-2 outline-none text-gray-400 "
            placeholder="Search Customer"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="w-full overflow-x-auto mt-8 rounded-lg border-1 border-gray-700">
          <table className="min-w-full text-sm">
            <thead className="bg-blue-900 text-gray-400">
              <tr>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2 hidden sm:table-cell">Location</th>
                <th className="p-2 hidden sm:table-cell">Phone</th>
                <th className="p-2 hidden sm:table-cell">Created</th>
                <th className="p-2 hidden sm:table-cell">Updated</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((c, i) => (
                <tr
                  key={i}
                  className="border-t-1 border-gray-700 text-gray-400 *:text-center"
                >
                  <td className="p-2">{c.name}</td>
                  <td className="p-2">{c.email}</td>
                  <td className="p-2 hidden sm:table-cell">{c.location}</td>
                  <td className="p-2 hidden sm:table-cell">{c.phone}</td>
                  <td className="p-2 hidden sm:table-cell">{c.createdAt}</td>
                  <td className="p-2 hidden sm:table-cell">{c.lastUpdated}</td>
                  <td className="p-2 space-x-6">
                    <button
                      onClick={() => handleEdit(i)}
                      className="text-blue-800 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(i)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {showPopup && (
          <div className="fixed inset-0 bg-black opacity-75 flex items-center justify-center z-50 p-3">
            <div className="bg-black text-gray-400 p-6 rounded-lg w-full max-w-md shadow-md shadow-stone-600">
              <h2 className="text-xl font-bold mb-4">
                {editingIndex !== null ? "Edit" : "Add"} Customer
              </h2>
              <div className="grid gap-3">
                <input
                  className="p-2 rounded  border border-blue-800 text-white"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <input
                  className="p-2 rounded  border border-blue-800 text-white"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
                <input
                  className="p-2 rounded  border border-blue-800 text-white"
                  placeholder="Location"
                  value={formData.location}
                  onChange={(e) =>
                    setFormData({ ...formData, location: e.target.value })
                  }
                />
                <input
                  className="p-2 rounded  border border-blue-800 text-white"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => setShowPopup(false)}
                  className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="bg-blue-800 px-4 py-2 rounded "
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
