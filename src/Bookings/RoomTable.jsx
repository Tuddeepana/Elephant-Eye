import React, { useState } from "react";
import { FaBed, FaUsers, FaDollarSign, FaCheckCircle } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { roomData } from "./roomData"; // Assuming roomData is in a separate file

const RoomTable = () => {
  const [rooms, setRooms] = useState(
    roomData.map((room) => ({
      ...room,
      selectedType: "roomOnly",
      selectedPersons: 1,
      selectedRooms: 1,
    }))
  );
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [error, setError] = useState("");

  // Update availability when a room is selected
  const handleSelectRoom = (room) => {
    if (room.selectedRooms > room.currentlyAvailable) {
      setError("Cannot select more rooms than available.");
      return;
    }
    setError(""); // Clear error message if valid selection
    const updatedRooms = rooms.map((r) =>
      r.type === room.type
        ? { ...r, currentlyAvailable: r.currentlyAvailable - room.selectedRooms }
        : r
    );
    setRooms(updatedRooms);

    const totalPrice = calculateTotalPrice(room, room.selectedType, room.selectedPersons, room.selectedRooms);
    const selectedRoom = {
      type: room.type,
      selectedType: room.selectedType,
      selectedPersons: room.selectedPersons,
      selectedRooms: room.selectedRooms,
      totalPrice,
    };
    setSelectedRooms([...selectedRooms, selectedRoom]);
  };

  const handleRemoveRoom = (index) => {
    const roomToRemove = selectedRooms[index];
    const updatedRooms = rooms.map((room) =>
      room.type === roomToRemove.type
        ? { ...room, currentlyAvailable: room.currentlyAvailable + roomToRemove.selectedRooms }
        : room
    );
    setRooms(updatedRooms);
    setSelectedRooms(selectedRooms.filter((_, i) => i !== index));
  };

  const handleProceed = () => {
    console.log("Selected Room Options:", selectedRooms);
  };

  const calculateTotalPrice = (room, type, persons, roomsCount) => {
    const price = room.prices[type][persons];
    return price * roomsCount;
  };

  const getFinalTotalPrice = () =>
    selectedRooms.reduce((total, room) => total + room.totalPrice, 0);

  const handleChange = (index, field, value) => {
    const updatedRooms = [...rooms];
    if (field === "selectedRooms" && value > rooms[index].currentlyAvailable) {
      setError(`You cannot select more than ${rooms[index].currentlyAvailable} rooms.`);
      return;
    }
    setError(""); // Clear error if input is valid
    updatedRooms[index][field] = value;
    setRooms(updatedRooms);
  };

  return (
    <div className="container mx-auto p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        <FaBed className="inline-block text-blue-500 mr-2" />
        Room Booking
      </h1>

      {error && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          <p>{error}</p>
        </div>
      )}

      {/* Room Selection Table */}
      <table className="table-auto w-full border border-gray-300 rounded-lg shadow-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">Room Type</th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">Description</th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">
              <FaUsers className="inline-block mr-2" />
              Max Persons
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">Available</th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">Room Count</th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">
              <FaBed className="inline-block mr-2" />
              Room Type
            </th>
            <th className="px-6 py-3 text-left font-semibold text-gray-700">Total Price</th>
            <th className="px-6 py-3 text-center font-semibold text-gray-700">Action</th>
            <th className="px-6 py-3 text-center font-semibold text-gray-700">Choose</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-50">
              <td className="px-6 py-4 text-gray-700 font-medium flex items-center">
                <FaBed className="mr-2 text-blue-500" />
                {room.type}
              </td>
              <td className="px-6 py-4 text-gray-600">
                <ul className="list-disc pl-6">
                  {room.description.map((desc, i) => (
                    <li key={i} className="text-gray-600">{desc}</li>
                  ))}
                </ul>
              </td>
              <td className="px-6 py-4 text-gray-700 flex items-center">
                <FaUsers className="mr-2 text-blue-500" />
                {room.maxPersonCount}
              </td>
              <td className="px-6 py-4 text-gray-700">{room.currentlyAvailable}</td>
              <td className="px-6 py-4">
                <input
                  type="number"
                  min="1"
                  max={room.currentlyAvailable}
                  value={room.selectedRooms}
                  onChange={(e) => handleChange(index, "selectedRooms", parseInt(e.target.value))}
                  className="border border-gray-300 rounded px-2 py-1 w-20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={room.currentlyAvailable === 0}
                />
              </td>
              <td className="px-6 py-4">
                <select
                  value={room.selectedPersons}
                  onChange={(e) => handleChange(index, "selectedPersons", parseInt(e.target.value))}
                  className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {[...Array(room.maxPersonCount)].map((_, i) => (
                    <option key={i} value={i + 1}>
                      {i + 1} Person{(i + 1 > 1) ? "s" : ""}
                    </option>
                  ))}
                </select>
              </td>
              <td className="px-6 py-4">
                <select
                  value={room.selectedType}
                  onChange={(e) => handleChange(index, "selectedType", e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="roomOnly">Room Only</option>
                  <option value="bedAndBreakfast">Bed and Breakfast</option>
                </select>
              </td>
              <td className="px-6 py-4 text-gray-800 font-bold">
                ${calculateTotalPrice(room, room.selectedType, room.selectedPersons, room.selectedRooms).toFixed(2)}
              </td>
              <td className="px-6 py-4 text-center">
                <button
                  onClick={() => handleSelectRoom(room)}
                  className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow ${room.currentlyAvailable === 0 ? "cursor-not-allowed opacity-50" : ""}`}
                  disabled={room.currentlyAvailable === 0}
                >
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Selected Rooms Section */}
      <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <FaCheckCircle className="mr-2 text-green-500" />
          Selected Rooms
        </h2>
        {selectedRooms.length > 0 ? (
          <div>
            <ul className="space-y-4">
              {selectedRooms.map((room, index) => (
                <li key={index} className="flex justify-between items-center bg-white p-4 rounded shadow">
                  <div>
                    <p className="text-gray-800 font-semibold">
                      {room.selectedRooms} x {room.type} ({room.selectedPersons} Person
                      {room.selectedPersons > 1 ? "s" : ""}) - ${room.totalPrice.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">{room.selectedType}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveRoom(index)}
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
                  >
                    <MdOutlineDelete />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-right font-semibold text-lg">
              Total: ${getFinalTotalPrice().toFixed(2)}
            </div>
            <button
              onClick={handleProceed}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded mt-4"
            >
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <p className="text-center text-gray-500">No rooms selected yet.</p>
        )}
      </div>
    </div>
  );
};

export default RoomTable;
