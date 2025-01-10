import { StickNoteType } from "../../pages/stickyWall/stickyWall";
import { generateRandomNumber } from "../../utils/math";
import "./StickyNote.css"

interface Props {
    note: StickNoteType;
    rotate?: boolean;
}

export default function StickNote({note, rotate = true}: Props) {


    return <div className="sticky-note-container" style={{backgroundColor: note.bgColor, color: note.textColor, transform: rotate ? `rotate(${generateRandomNumber(-8, 8)}deg)` : 'none'}}>
        <div className="title">{note.title}</div>
        <div className="description">{note.description}</div>
    </div>
}