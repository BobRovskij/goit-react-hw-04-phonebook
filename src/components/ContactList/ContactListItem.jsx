import PropTypes from 'prop-types';
import style from './ContactListItem.module.css';

export const ContactListItem = ({ contacts: {id, name, number}, onDeleteContact }) => {
    return (
        <li className={style.contacts__listItem} >
            <span>{name}: {number}</span>
                <button
                    type="button"
                    className={style.contacts__delBtn}
                onClick={() => onDeleteContact(id)}
                >
                    Delete
                </button>
        </li> 
    );
};


ContactListItem.propTypes = {
    contacts: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};