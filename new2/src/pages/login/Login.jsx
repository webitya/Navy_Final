import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../context';
import { useLogin } from '../../../hooks/useLogin';
import LayoutEl from '../../Shared/LayoutEl';


export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { setUser, user } = useAppContext()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please enter your email and password.');
            return;
        }

        const response = await useLogin({ email, password }, setUser);
        if (response) {

            navigate('/admin');
        } else {
            setError('Invalid email or password.');
        }
        setError('');
    };

    return (
       <>
       <LayoutEl>
       <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                {error && <div className="mb-4 text-red-500">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border rounded-lg py-2 px-3 w-full"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border rounded-lg py-2 px-3 w-full"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button
                        onClick={() => navigate('/login')}
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
       </LayoutEl>
       </>
    );
};

export default Login;
