
function NumericInput({id, onChange, onBlur, value, defaultValue, className}) {

	function handleKeyDown(event) {
        console.log(event)
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
		if (!e.target.value || !e.target.validity.valid) {
			e.target.value = 0.0;
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
            defaultValue={defaultValue}/>

    );
}

export default NumericInput;