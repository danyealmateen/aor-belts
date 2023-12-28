import { useContext } from "react";
import { DataContext } from "./DataContext";

const DeleteKid = ({ id }: any) => {
    const { data, setData } = useContext(DataContext);

    const handleDelete = async () => {
        try {
            const response = await fetch(`https://aor-belts-main.onrender.com/api/barn/${id}`);


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