
function ColorInput({id, onChange, defaultValue, className}) {

    function handleChange(e) {
        if (onChange) {
            onChange(e);
        }
        document.getElementById("displayFor" + id).style.backgroundColor = e.target.value;
    }

    return (
        <div id={"displayFor" + id} style={{width: "14px", height: "14px",  backgroundColor: defaultValue}}>
            <input id={id} onChange={handleChange} className={className} defaultValue={defaultValue} type='color' style={{width: "100%", height: "100%", opacity: "0", position: "relative", top: "-4px"}}/>
        </div>

    );
}

export default ColorInput;