import { createContext, useState, Dispatch, SetStateAction } from "react";

interface DataContextType {
    data: any,
    setData: Dispatch<SetStateAction<any>>;
}

export const DataContext = createContext<DataContextType>({
    data: null,
    setData: () => { },
});

export const DataProvider = ({ children }: any) => {
    const [data, setData] = useState();

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    );
};