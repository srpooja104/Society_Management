
import React, { useState } from 'react';
import { FaCamera } from 'react-icons/fa';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    firstName: 'Arlene',
    lastName: 'McCoy',
    phoneNumber: '+91 99130 44537',
    email: 'ArleneMcCoy25@gmail.com',
    society: 'Shantigram residency',
    country: 'India',
    state: 'Gujarat',
    city: 'Baroda',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(
    'https://s3-alpha-sig.figma.com/img/bd89/79e3/d38ee59b7d4615afd56d81811704ef21?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GF6Gh7k8-j2WsIOeqCFiS2JkdfpXEFWxnKod0ST6qyDGECRJ7HrXMIOilqGBgd56arnRUbb34C5jWM5H3~Xe4d32O0nMiwTcwm9nDFxGvh5aI8RNdjiEcn-jK4KCmq0N2u8-ctUJQ4CxhSMblUFeU7TwUREFtmpGSjuouMa1p~rx-OHeDjqstEGRH6JD~0ZKp7cQlctw9Wdh9fTefykQZzEvg5ofp9TDdzikUHTbXvl0HvoTdCUYbihtGq94KDsER2qAEflPOfLJvQTzCeOFUKqgv3TJHGTlbNHV0Zc5XvTrBF5FsvF0jLs~Zh8nwvAZ8QvnHT3zse8kwcMJkduQAQ_'
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log('Profile Updated:', profile);
  };

  return (
    <div className="min-h-screen bg-blue-200 flex flex-col items-center">
      {/* Background Section */}
      <div
        className="w-full h-52 bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://s3-alpha-sig.figma.com/img/103b/c068/fcd4cf46bf9c86088af41ad4ff83ff54?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dJkxD1AV~lfrHcVcATsZPjzEnfEACZ8GaR2mTA7ZA5k1tEehPQuUPZRLSDOTgiidDK2fZAgcjYe~PSxd897oYAi9txNGdJy7EsGpd4GYBEu5mSAzMC9BT0R02tDAoGRAD-bK11x1n1c3fl5y8y0kctHuN47g4~CDh0EnhSh9AgIRRU0NndMoQKbIdSb1zkCt9q6VhyPVPJNCWTPVI00NwuqHCnURRfa5MMpO5cX4rK8p3UCIoIjkWCrB-wS7ZScLfXYR3dKoPlG2Y91TRTgeYR6lywsHKvfnnWi9YhrPc4wwYN0r6NRrXiDLq5WWEE48W71m3ZSKYU7rWeKKeXR2og__')",
        }}
      >
        <div className="absolute top-4 right-2 flex gap-4">
          {isEditing ? (
            <>
              <button
                onClick={handleSubmit}
                className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 click"
              >
                Update Profile
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 click"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-orange-600 click"
            >
              Edit Profile
            </button>
          )}
        </div>
        <h1 className='h1'>Profile</h1>
      </div>
      {/* Profile Card */}

      <div className="bg-white rounded-xl shadow-lg w-11/12 max-w-4xl -mt-20 p-8">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-center md:w-1/3 border-r border-gray-200">
            <div className="relative">
              <img
                src={profileImage}
                alt="Profile"
                className="w-36 h-36 rounded-full border-4 border-white shadow-md object-cover"
              />
              {isEditing && (
                <label
                  htmlFor="profileImage"
                  className="absolute bottom-2 right-2 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 cursor-pointer"
                  title="Change Picture"
                >
                  <FaCamera />
                  <input
                    type="file"
                    id="profileImage"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>
              )}
            </div>
            <h2 className="mt-4 text-lg font-semibold text-gray-800">
              {profile.firstName} {profile.lastName}
            </h2>
          </div>

          <div className="md:w-2/3 md:pl-6 mt-6 md:mt-0">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Form Fields */}
              {Object.keys(profile).map((key) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-600 mb-1">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name={key}
                    value={profile[key]}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={`w-full border rounded-lg px-4 py-2 text-gray-700 focus:ring-2 focus:ring-blue-400 ${
                      !isEditing && 'bg-gray-100'
                    }`}
                  />
                </div>
              ))}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;




