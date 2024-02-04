
function move(element) {
    element.style.position = 'fixed'



    function moveCharacter(){

    }

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    return {
        to: moveToCoordinates
    }
}

