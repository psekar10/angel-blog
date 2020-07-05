import React from 'react';

const defaultValues = {
    isTablet: false,
    isMobile: false,
    locale: 'en'
}

export const PageContext = React.createContext(defaultValues);

const PageContextProvider = ({children}) => (
    <PageContext.Provider value={defaultValues}>{children}</PageContext.Provider>
)

export default PageContextProvider