import { StickNoteType } from "../../pages/stickyWall/stickyWall";
import { generateRandomNumber } from "../../utils/math";
import "./StickyNote.css"

interface Props {
    note: StickNoteType;
}

export default function StickNote({note}: Props) {

    generateRandomNumber

    return <div className="sticky-note-container" style={{backgroundColor: note.bgColor, color: note.textColor, transform: `rotate(${generateRandomNumber(-8, 8)}deg)`}}>
        <div className="title">{note.title}</div>
        <div className="description">{note.description}</div>
    </div>
}