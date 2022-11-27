import { FC, useEffect } from "react";

interface IColorInputProps {
    color: string;
    setColor: (color: string) => void;
}

export const ColorInput: FC<IColorInputProps> = ({ setColor, color }) => {
    useEffect(() => {
        console.log("ColorInput is rendered");
    });

    return (
        <div>
            <label htmlFor="green">Green</label>
            <input
                type="radio"
                name={"color"}
                value={"green"}
                onChange={(e) => setColor(e.target.value)}
                checked={"green" === color}
                id={"green"}
            />
            <br />
            <label htmlFor="red">Red</label>
            <input
                type="radio"
                name={"color"}
                value={"red"}
                onChange={(e) => setColor(e.target.value)}
                checked={"red" === color}
                id={"red"}
            />
        </div>
    );
};
