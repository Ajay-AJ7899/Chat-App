import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setUserData } from '../redux/userSlice';
import { serverUrl } from "../main";

const Profile = () => {
    const { userData } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.get(`${serverUrl}/api/auth/logout`, { withCredentials: true });
            dispatch(setUserData(null));
            navigate('/login');
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    if (!userData) return null;

    return (
        <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Ambient Background Lights */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

            {/* Glassmorphism Card */}
            <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 transform transition-all hover:scale-[1.01]">
                {/* Profile Header */}
                <div className="flex flex-col items-center relative">
                    <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-purple-600 mb-4 shadow-lg">
                        <img
                            src={userData.image || `https://ui-avatars.com/api/?name=${userData.name}&background=random`}
                            alt="Profile"
                            className="w-full h-full rounded-full object-cover border-4 border-gray-900"
                        />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-1">{userData.name}</h2>
                    <p className="text-gray-400 text-sm">@{userData.userName}</p>
                </div>

                {/* Profile Details */}
                <div className="mt-8 space-y-4">
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:bg-gray-800/80 transition-colors">
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                                <p className="text-white font-medium">{userData.email}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:bg-gray-800/80 transition-colors">
                        <div className="flex items-center gap-3">
                            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div>
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Joined</p>
                                <p className="text-white font-medium">
                                    {userData.createdAt ? new Date(userData.createdAt).toLocaleDateString() : 'N/A'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex gap-4">
                    <button
                        onClick={() => navigate('/')}
                        className="flex-1 py-3 px-4 bg-gray-700/50 hover:bg-gray-700 text-white rounded-xl font-medium transition-all duration-200"
                    >
                        Back Home
                    </button>
                    <button
                        onClick={handleLogout}
                        className="flex-1 py-3 px-4 bg-gradient-to-r from-red-500/80 to-pink-600/80 hover:from-red-500 hover:to-pink-600 text-white rounded-xl font-medium shadow-lg hover:shadow-red-500/20 transition-all duration-200"
                    >
                        Logout
                    </button>
                </div>
            </div>

            <p className="mt-8 text-gray-500 text-sm">Secure Chat Application v1.0</p>
        </div>
    );
};

export default Profile;
