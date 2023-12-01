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

export type { BeltSystemProps, Student }