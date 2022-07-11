import ImagemBtn from '../../assets/img/notification-icon.svg';
import './styles.css';

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={ImagemBtn} alt="Notificar" />
        </div>
    )
}

export default NotificationButton
