import { createContext, useContext, useEffect, useState } from "react";
import { useGetCurrUser } from "../hooks/useGetCurrUser";
import { Loader } from '../src/components/loader'

export const AppContext = createContext(null)

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const value = {
        user,
        setUser,
        loading,
    };

    useEffect(() => {
        const fetchCurrUser = async () => {
            try {
                await useGetCurrUser(setUser);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchCurrUser();
    }, []);



    if (loading) return <Loader />;

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext)
}