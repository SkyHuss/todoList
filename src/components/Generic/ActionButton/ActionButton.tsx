import { SvgIconComponent } from "@mui/icons-material"
import { ButtonType } from "../../../constants/Button"
import "./ActionButton.css"



interface Props {
    label: string,
    icon: SvgIconComponent,
    type?: ButtonType,
    onClick: () => void
}

export default function ActionButton({label, icon: Icon, type = ButtonType.primary, onClick} : Props) {
    return <div className={`action-button ${type}`} onClick={onClick}>
        <Icon />
        <div className="label">{label}</div>
    </div>
}