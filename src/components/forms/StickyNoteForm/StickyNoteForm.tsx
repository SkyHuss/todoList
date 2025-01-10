import { Check, Close, Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ButtonType } from '../../../constants/Button';
import { StickNoteType } from "../../../pages/stickyWall/stickyWall";
import ActionButton from '../../Generic/ActionButton/ActionButton';
import ColorPicker from '../../Generic/ColorPicker/ColorPicker';
import StickNote from '../../StickyNote/StickyNote';
import "./StickyNoteForm.css";

interface Props {
    closeModal: () => void;
}

export default function StickyNoteForm({ closeModal }: Props) {

    const [showPreview, setShowPreview] = useState<boolean>(false);

    // Initialisation de l'état pour la note
    const [stickyNote, setStickyNote] = useState<StickNoteType>({
        id: uuidv4(),
        title: "Un petit titre",
        description: "Une petite description",
        bgColor: "#AEC6CF",
        textColor: "#111111"
    });

    // Fonction générique pour gérer les changements
    const handleChange = (key: keyof StickNoteType, value: string) => {
        setStickyNote((prev) => ({ ...prev, [key]: value }));
    };

    const validateForm = () => {
        console.log("Création de l'élément: ", stickyNote);
    };

    return (
        <div className="sticky-note-form-container">
            <div className="content">
                <div className="preview-section">
                    <StickNote note={stickyNote} rotate={false} />
                </div>
                <div className="form-section">
                    <div className="form-input">
                        <div className="label">Title</div>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter a cool title ..."
                            value={stickyNote.title}
                            onChange={(e) => handleChange('title', e.target.value)}
                        />
                    </div>

                    <div className="form-input">
                        <div className="label">Description</div>
                        <textarea
                            name="description"
                            placeholder="Entrez a description"
                            value={stickyNote.description}
                            onChange={(e) => handleChange('description', e.target.value)}
                        />
                    </div>

                    <div className="form-input">
                        <div className="label">Background color</div>
                        <ColorPicker
                            colorHex={stickyNote.bgColor}
                            setColorHex={(color) => handleChange('bgColor', color)}
                        />
                    </div>

                    <div className="form-input">
                        <div className="label">Text color</div>
                        <ColorPicker
                            colorHex={stickyNote.textColor}
                            setColorHex={(color) => handleChange('textColor', color)}
                        />
                    </div>
                </div>

                <div className="mobile-preview-section" style={{left: showPreview ? 0 : 1000}}>
                    <StickNote note={stickyNote} rotate={false} />
                </div>
                
            </div>
            <div className="action-buttons">
                <div className="display-preview-button">
                    <ActionButton 
                        icon={showPreview ? VisibilityOff : Visibility}
                        type={ButtonType.secondary}
                        onClick={() => setShowPreview(!showPreview)}
                    /> 
                </div>
                <ActionButton
                    label="Valider"
                    icon={Check}
                    type={ButtonType.primary}
                    onClick={validateForm}
                />
                <ActionButton
                    label="Annuler"
                    icon={Close}
                    type={ButtonType.secondary}
                    onClick={closeModal}
                />
            </div>
        </div>
    );
}
