import { Student } from "../Interfaces";

export const updateData = async (updatedStudent: Student, setData: any) => {

    setData((prevData: any) => {
        if (prevData) {
            const newData = prevData.map((student: any) => student._id === updatedStudent._id ? updatedStudent : student);
            return newData;
        }
        return prevData;
    });

    try {
        const response = await fetch(`https://aor-belts-main.onrender.com/api/barn/${updatedStudent._id}`, {
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
        console.log('Data successfully updated', responseData);
    } catch (error) {
        console.error('Error updating student', error);
    }
};