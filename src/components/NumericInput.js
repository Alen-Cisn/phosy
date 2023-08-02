
function NumericInput({id, onChange, onBlur, min, max, value, disabled, defaultValue, className}) {

	function handleKeyDown(event) {
        if (event.key.length === 1) {
            if (event.key.match(/^[\d]$/) 
                || (event.key === '.' && event.target.value.indexOf('.') === -1)
                || (event.key === '-' && event.target.value.indexOf('-') === -1 && event.target.selectionStart === 0 )) {
                
                return true;
            }
            event.preventDefault();
            return false;
        } else {
            return true;
        }
    }

    function handleBlur(e) {
		if (!e.target.value || !parseFloat(e.target.value) ) {
			e.target.value = 0.0;
		} else {
            e.target.value = parseFloat(e.target.value);
        }

        if (onBlur) {
            onBlur(e);
        }
    }

    return (
        <input 
            type='text' 
            className={'numericInput ' + className}
            id={id}
            pattern='^-?[0-9]*[\.]?[0-9]*?$'
            onKeyDown={handleKeyDown}
            onChange={onChange}
            onBlur={handleBlur}
            value={value}
            max={max}
            min={min}
            disabled={disabled}
            defaultValue={defaultValue}/>

    );
}

export default NumericInput;