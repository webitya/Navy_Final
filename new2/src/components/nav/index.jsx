import { useEffect, useState } from "react";
import { navitems } from "../../utils/navitem";
import { Link, useNavigate } from "react-router-dom";
import { useClickAway } from "@uidotdev/usehooks";
import { useAppContext } from "../../../context";
import { useLogout } from "../../../hooks/useLogout";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useNavigate();
    const { user, setUser } = useAppContext()
    const location = useLocation();
    const [isAdminPage, setIsAdminPage] = useState(false)
    // console.log(location.pathname);

    useEffect(() => {
        if (location.pathname.includes('admin')) {
            setIsAdminPage(true);
        } else {
            setIsAdminPage(false);
        }
    }, [location.pathname])


    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleConfirm = () => {
        closeModal();
        router("/form");
    };

    const ref = useClickAway(() => {
        closeModal();
    });

    const handleLogout = async () => {
        const response = await useLogout(setUser)
        if (response) {
            router("/");
        }
        else {
            // console.error("Error while logging out");
        }
    }

    return (
        <div className="w-full z-50 sticky top-0 flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 text-white shadow-lg">
            <div className="text-2xl font-bold tracking-wide cursor-pointer">
                <span className="text-yellow-300">My</span>Logo
            </div>

            <ul className="flex gap-6">
                {navitems.map((item) => (
                    <li key={item.url} className="list-none">
                        <Link
                            to={item.url}
                            className="text-lg hover:text-yellow-300 hover:underline transition duration-300 ease-in-out"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="flex gap-3">
                {
                    user ? (
                        <button onClick={handleLogout} className="p-2 px-4 rounded-md bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition duration-300 ease-in-out">
                            Logout
                        </button>
                    ) : (
                        <button className="p-2 px-4 rounded-md bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition duration-300 ease-in-out">
                            <Link to={'/login'}> Login </Link>
                        </button>
                    )
                }
                {
                    user ? (
                        isAdminPage ? (
                            <button
                                onClick={() => router('/')}
                                className="p-2 px-4 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-300 ease-in-out"
                            >
                                Client Page
                            </button>
                        ) : (
                            < button
                                onClick={() => router('/admin')}
                                className="p-2 px-4 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-300 ease-in-out"
                            >
                                Admin Page
                            </button>

                        )

                    ) : (
                        <button
                            onClick={openModal}
                            className="p-2 px-4 rounded-md bg-green-500 hover:bg-green-600 text-white font-semibold transition duration-300 ease-in-out"
                        >
                            Apply Now
                        </button>
                    )
                }

            </div>

            {
                isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[1000] transition-opacity duration-300 ease-in-out">
                        <div ref={ref} className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md relative animate-fade-in">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                            >
                                ✕
                            </button>

                            <h2 className="text-3xl font-semibold mb-4 text-center text-blue-600">
                                Application Instructions
                            </h2>
                            <p className="text-gray-600 text-center mb-6 leading-relaxed">
                                Please read the following instructions carefully before proceeding to the form.
                                Ensure you have all required documents ready for submission to avoid delays.
                            </p>

                            <div className="flex justify-center gap-4">
                                <button
                                    onClick={closeModal}
                                    className="p-3 w-28 rounded-full bg-gray-300 hover:bg-gray-400 text-black transition duration-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirm}
                                    className="p-3 w-28 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold transition duration-300"
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

        </div >
    );
};
