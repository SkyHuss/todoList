import { Check, Close } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';
import { ButtonType } from '../../../constants/Button';
import { StickNoteType } from "../../../pages/stickyWall/stickyWall"
import ActionButton from '../../Generic/ActionButton/ActionButton';
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

    const validateForm = () => {
        console.log("creation de l element: ", stickyNote)
    }

    return <div className="sticky-note-form-container">
        <div className="content">
            <div className="preview-section">
                <StickNote note={stickyNote} rotate={false}/>
            </div>
            <div className="form-section">
                Form
            </div>
        </div>
        <div className="action-buttons">
            <ActionButton label='Valider' icon={Check} type={ButtonType.primary} onClick={validateForm}/>
            <ActionButton label='Annuler' icon={Close} type={ButtonType.secondary} onClick={closeModal}/>
        </div>
    </div>
}