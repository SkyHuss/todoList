import { useEffect, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import "./ColorPicker.css"

interface Props {
    colorHex: string;
    setColorHex: (color: string) => void;
}

export default function ColorPicker({colorHex, setColorHex}: Props) {

    const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
    const hexPickerRef = useRef<HTMLDivElement>(null);

    // Gestionnaire de clic à l'extérieur pour fermer le picker
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (hexPickerRef.current && !hexPickerRef.current.contains(event.target as Node)) {
                setIsPickerOpen(false);
            }
        }

        // Ajout du listener pour détecter les clics globaux
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Supression du listener
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return <div className="picker-wrapper">
        <div className="color-picker-container" onClick={() => setIsPickerOpen(!isPickerOpen)}>
            <div className="color-preview" style={{backgroundColor: colorHex}}></div>
            <div className="color-hex">{colorHex}</div>
        </div>

        {isPickerOpen &&
            <div ref={hexPickerRef} className="hex-picker-container">
                <HexColorPicker className="picker" color={colorHex} onChange={setColorHex} />
            </div>
        }
    </div>

}