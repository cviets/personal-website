import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

export default function RefreshButton({ onClick }) {
    return (
        <button onClick={onClick} className="refresh"><FontAwesomeIcon icon={faRotateRight} /></button>
    );
}