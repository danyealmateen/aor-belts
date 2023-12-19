type BeltSystemProps = {
    student: {
        _id: string;
        name: string;
        belt: string;
        group: string;
        graduated: boolean;
    };
    onBeltChange: (updateStudent: any) => void;
};

type Student = {
    _id: string;
    name: string;
    belt: string;
    group: string;
    graduated: boolean;
};

interface DisplayKidsProp {
    updateData: (updatedStudent: Student) => Promise<void>;
}

export type { BeltSystemProps, Student, DisplayKidsProp };