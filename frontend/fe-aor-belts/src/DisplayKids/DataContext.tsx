import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { Student } from '../Interfaces';

interface DataContextType {
  data: Student[] | null;
  setData: Dispatch<SetStateAction<Student[] | null>>;
}

export const DataContext = createContext<DataContextType>({
  data: null,
  setData: () => {},
});

export const DataProvider = ({ children }: any) => {
  const [data, setData] = useState<Student[] | null>(null);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
