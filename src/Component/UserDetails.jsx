 
import { FaEnvelope, FaPhone, FaGlobe, FaBuilding, FaMapMarkerAlt } from 'react-icons/fa';

const UserDetails = ({ user }) => {
  return (
    <div className="border p-6 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
      <div className="space-y-2">
        <p className="flex items-center">
          <FaEnvelope className="mr-2 text-blue-500" /> <strong>Email:</strong> {user.email}
        </p>
        <p className="flex items-center">
          <FaPhone className="mr-2 text-green-500" /> <strong>Phone:</strong> {user.phone}
        </p>
        <p className="flex items-center">
          <FaGlobe className="mr-2 text-purple-500" /> <strong>Website:</strong> {user.website}
        </p>
        <p className="flex items-center">
          <FaBuilding className="mr-2 text-yellow-500" /> <strong>Company:</strong> {user.company.name}
        </p>
        <p className="flex items-center">
          <FaMapMarkerAlt className="mr-2 text-red-500" /> <strong>Address:</strong> {user.address.street}, {user.address.city}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
