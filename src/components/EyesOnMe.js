// Code EyesOnMe Component Here
function EyesOnMe() {
    function EyesFocus() {
        console.log('Good!')
    }
    function EyesBlur() {
        console.log('Hey! Eyes on me!')
    }
        return <button onFocus={EyesFocus} onBlur={EyesBlur}>Eyes on me</button>
    
}

export default EyesOnMe