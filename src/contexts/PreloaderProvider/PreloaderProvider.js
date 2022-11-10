import React, { createContext, useState } from 'react';

export const PreloaderContext = createContext()
const PreloaderProvider = ({ children }) => {

    const [preloader, setPreloader] = useState(false);
    const value = {
        preloader,
        setPreloader,
    }

    return (
        <PreloaderContext.Provider value={value}>
            {
                preloader &&
                <div className='d-flex align-items-center justify-content-center fixed-top bg-info bg-opacity-75 text-white' style={{ height: '100vh' }}>
                    <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">

                    </div>
                </div>
            }
            {children}
        </PreloaderContext.Provider>
    );
};

export default PreloaderProvider;