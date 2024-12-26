import { useState } from 'react';
import './stickyWall.css'
import mockedData from '../../assets/mocks/stickyWall.json'
import StickyNote from '../../components/StickyNote/StickyNote';
import { Add } from '@mui/icons-material';
import Modal from '../../components/Generic/Modal/Modal';

export interface StickNoteType {
    id: number,
    title: string,
    description: string,
    bgColor: string,
    textColor: string
}

export default function StickyWall() {

    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const stickyNotes: StickNoteType[] = mockedData as StickNoteType[];

    return <div className="sticky-wall-container">
        <div className="header">Sticky Wall</div>
        <div className="content">
            {stickyNotes.map( note => (
                <StickyNote key={note.id} note={note}/>
            ))}
            <div className="create-note-button" onClick={() => setIsCreateModalOpen(true)}>
                <Add />
            </div>
        </div>

        {isCreateModalOpen &&
            <Modal title='Create a sticky note' closeModal={() => setIsCreateModalOpen(false)}>
                Contenue de la modale
            </Modal>
        }

    </div>
}