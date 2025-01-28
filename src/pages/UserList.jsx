import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../utils/api";
import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";
import { ToastContainer, toast } from "react-toastify";
import Pagination from "../components/Pagination";
import { RingLoader } from "react-spinners";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);
  const [isFormOpen, setFormOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      toast.error("Failed to fetch users.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
      toast.success("User deleted successfully.");
    } catch (error) {
      toast.error("Failed to delete user.");
    }
  };

  const handleEdit = (user) => {
    setEditUser(user);
    setFormOpen(true);
  };

  const handleUserAddedOrEdited = (newUser) => {
    if (editUser) {
      // Update existing user
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === newUser.id ? newUser : user))
      );
    } else {
      // Add new user and reset to page 1
      setUsers((prevUsers) => [newUser, ...prevUsers]);
      setCurrentPage(1); // Reset pagination to first page
    }
    setEditUser(null);
    setFormOpen(false);
  };

  // Pagination Logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col bg-gradient-to-br from-purple-100 via-blue-100 to-indigo-200 pt-10">
      {/* Header */}
      <h1 className=" pt-5 text-5xl font-extrabold text-center bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text transform transition duration-300 ease-in-out hover:scale-105">
        Welcome to Your User Dashboard
      </h1>

      {/* Action Bar */}
      <div className="pt-5 flex justify-between items-center px-5 mb-4">
        <button
          className="ml-7 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:opacity-90 transition duration-300 transform hover:scale-105"
          onClick={() => setFormOpen(true)}
        >
          Add New User
        </button>
        <div className="text-gray-800 text-xl font-semibold">
          {loading ? (
            <span>Loading users...</span>
          ) : (
            <span>{users.length} Users Found</span>
          )}
        </div>
      </div>

      {/* User List */}
      <div className="flex-1 px-10 overflow-y-auto pt-7">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <RingLoader size={60} color="#6366F1" />
          </div>
        ) : currentUsers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            <p>No users found. Try adding some!</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}

      {/* User Form */}
      {isFormOpen && (
        <UserForm
          setFormOpen={setFormOpen}
          fetchUsers={fetchUsers}
          editUser={editUser}
          setEditUser={setEditUser}
          handleUserAddedOrEdited={handleUserAddedOrEdited}
        />
      )}

      <ToastContainer />
    </div>
  );
};

export default UserList;
