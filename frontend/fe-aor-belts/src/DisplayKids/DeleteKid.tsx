import { useContext } from "react";
import { DataContext } from "./DataContext";

const DeleteKid = ({ id }: any) => {
    const { data, setData } = useContext(DataContext);
    console.log(data);

    const handleDelete = async () => {
        try {
            const response = await fetch(`https://aor-belts-main.onrender.com/api/barn/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            if (data) {
                console.log(data);
                setData(data.filter(student => student._id !== id));
            }


        } catch (error) {
            console.log("Sorry cant delete the kid", error);
        }
    };


    return (
        <>
            <button onClick={() => {
                console.log("delete knappen klickad");
                handleDelete();
            }}>Ta bort</button>
        </>
    );
};

export default DeleteKid;