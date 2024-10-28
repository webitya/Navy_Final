import React from 'react';

export const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            <div className="loader border-t-4 border-b-4 border-blue-600 rounded-full w-16 h-16 animate-spin"></div>
        </div>
    );
};

