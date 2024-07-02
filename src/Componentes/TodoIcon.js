import { ReactComponent as CheckSVG } from './Check.svg'
import { ReactComponent as DeleteSVG } from './Delete.svg'
import '../Style/TodoIcon.css'

const iconType= {
    "check": (color) => <CheckSVG className='Icon-svg'fill={color} />,
    "delete": (color) => <DeleteSVG className='Icon-svg'fill={color} />,
}
function TodoIcon({type, color, onClick}) {
    <span
        className={`Icon Icon-container Icon-container-${type} `}
        onClick={onClick}
    >
        {iconType[type](color)}
    </span>
}

export { TodoIcon } 