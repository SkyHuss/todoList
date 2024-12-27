import { v4 as uuidv4 } from 'uuid';
import { StickNoteType } from "../../../pages/stickyWall/stickyWall"
import StickNote from '../../StickyNote/StickyNote';
import "./StickyNoteForm.css"

export default function StickyNoteForm() {

    // TODO: define default note or get old note
    const stickyNote: StickNoteType = {
        id: uuidv4(),
        title: "Un petit titre",
        description: "Une petite description",
        bgColor: "#AEC6CF",
        textColor: "#111111"
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
            <button>Valider</button>
            <button>Annuler</button>
        </div>
    </div>
}