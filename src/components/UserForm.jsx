import React, { useState, useEffect } from "react";
import { addUser, updateUser } from "../utils/api";
import { toast } from "react-toastify";

const UserForm = ({
  setFormOpen,
  editUser,
  setEditUser,
  handleUserAddedOrEdited,
}) => {
  const defaultFormData = {
    username: "",
    name: "",
    email: "",
    phone: "",
    company: { name: "" },
  };

  const [formData, setFormData] = useState(defaultFormData);

  // State to handle error messages
  const [errors, setErrors] = useState({
    username: "",
    name: "",
    email: "",
    phone: "",
    companyName: "",
  });

  // Reset form to default values
  const resetForm = () => {
    setFormData(defaultFormData);
    setErrors({});
    setEditUser(null);
  };

  useEffect(() => {
    if (editUser) {
      setFormData(editUser);
    } else {
      resetForm();
    }
  }, [editUser]);

  // Email and Phone validation
  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username) {
      newErrors.username = "Username is required.";
    }

    // Name validation
    if (!formData.name) {
      newErrors.name = "Name is required.";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    }

    // Company name validation
    if (!formData.company.name) {
      newErrors.companyName = "Company name is required.";
    }

    setErrors(newErrors);

    // If no errors, return true for form submission
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    try {
      if (editUser) {
        // Update existing user
        const updatedUser = await updateUser(editUser.id, formData);
        toast.success("User updated successfully.");
        handleUserAddedOrEdited(updatedUser.data, false); // False because it's an update
      } else {
        // Add new user
        const newUser = await addUser(formData);
        toast.success("User added successfully.");
        handleUserAddedOrEdited(newUser.data, true); // True by default to add a new user
      }
      resetForm(); // Reset form after successful submission
      setFormOpen(false);
    } catch (error) {
      toast.error("Failed to save user.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-60 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md transition-all duration-300 ease-in-out transform scale-95 hover:scale-100"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-600">
          {editUser ? "Edit User" : "Add New User"}
        </h2>
        <div className="space-y-4">
          {/* Username Field */}
          <div>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username}</p>
            )}
          </div>
          {/* Name Field */}
          <div>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>
          {/* Email Field */}
          <div>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
          {/* Phone Field */}
          <div>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>
          {/* Company Field */}
          <div>
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Company Name"
              value={formData.company.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  company: { ...formData.company, name: e.target.value },
                })
              }
            />
            {errors.companyName && (
              <p className="text-red-500 text-sm">{errors.companyName}</p>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
            onClick={() => {
              resetForm();
              setFormOpen(false);
            }}
            className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
