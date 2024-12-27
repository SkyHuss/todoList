import { Check, Close } from '@mui/icons-material';
import { useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { v4 as uuidv4 } from 'uuid';
import { ButtonType } from '../../../constants/Button';
import { StickNoteType } from "../../../pages/stickyWall/stickyWall"
import ActionButton from '../../Generic/ActionButton/ActionButton';
import ColorPicker from '../../Generic/ColorPicker/ColorPicker';
import StickNote from '../../StickyNote/StickyNote';
import "./StickyNoteForm.css"

interface Props {
    closeModal: () => void
}

export default function StickyNoteForm({closeModal}:Props) {

    // TODO: define default note or get old note
    const stickyNote: StickNoteType = {
        id: uuidv4(),
        title: "Un petit titre",
        description: "Une petite description",
        bgColor: "#AEC6CF",
        textColor: "#111111"
    }

    const [bgColor, setBgColor] = useState<string>(stickyNote.bgColor);
    const [color, setColor] = useState<string>(stickyNote.textColor);
    const [isBackgroundPickerOpen, setIsBackgroundPickerOpen] = useState<boolean>(false);
    const [isColorPickerOpen, setIsColorPickerOpen] = useState<boolean>(false);



    const validateForm = () => {
        console.log("creation de l element: ", stickyNote)
        console.log("la bg color: ", bgColor)
    }

    return <div className="sticky-note-form-container">
        <div className="content">
            <div className="preview-section">
                <StickNote note={stickyNote} rotate={false}/>
            </div>
            <div className="form-section">
                
                <ColorPicker colorHex={bgColor} setColorHex={setBgColor}/>
            </div>
        </div>
        <div className="action-buttons">
            <ActionButton label='Valider' icon={Check} type={ButtonType.primary} onClick={validateForm}/>
            <ActionButton label='Annuler' icon={Close} type={ButtonType.secondary} onClick={closeModal}/>
        </div>
    </div>
}