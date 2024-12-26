import './stickyWall.css'
import mockedData from '../../assets/mocks/stickyWall.json'
import StickyNote from '../../components/StickyNote/StickyNote';
import { Add } from '@mui/icons-material';

export interface StickNoteType {
    id: number,
    title: string,
    description: string,
    bgColor: string,
    textColor: string
}

export default function StickyWall() {

    const stickyNotes: StickNoteType[] = mockedData as StickNoteType[];

    return <div className="sticky-wall-container">
        <div className="header">Sticky Wall</div>
        <div className="content">
            {stickyNotes.map( note => (
                <StickyNote key={note.id} note={note}/>
            ))}
            <div className="create-note-button">
                <Add />
            </div>
        </div>
    </div>
}