import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="flex flex-col items-center">
                <div className="relative w-16 h-16 mb-4">
                    {/* Outer ring */}
                    <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                    {/* Spinning ring */}
                    <div className="absolute inset-0 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    {/* Inner dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    </div>
                </div>
                <p className="text-slate-500 text-sm font-medium tracking-wide animate-pulse">Loading Navanala...</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
