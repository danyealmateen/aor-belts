import { useContext } from "react";
import { DataContext } from "./DataContext";
import { Student } from "../Interfaces";
import DisplayKids from "./DisplayKids";

const UpdateKids = () => {

    const { data, setData } = useContext(DataContext);

    async function updateData(updatedStudent: Student) {
        setData((prevData: []) => {
            if (prevData) {
                const newData = prevData.map((s: any) =>
                    s._id === updatedStudent._id ? updatedStudent : s
                );
                return newData;
            }
            return prevData;
        });

        try {
            const response = await fetch(
                `https://aor-belts-main.onrender.com/api/barn/${updatedStudent._id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(updatedStudent),
                }
            );

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log('Data successfully updated:', responseData);
        } catch (error) {
            console.error('Error updating student:', error);
        }
    }

    return (
        <>
            <DisplayKids updateData={updateData} />
        </>
    );
};

export default UpdateKids;