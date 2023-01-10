import PropTypes from 'prop-types';
import style from './Filter.module.css';

export const Filter = ({value, onChange}) => {
    return (
        <label>
            <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    className={style.filterInput}
            />
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};