// return base class and hover class if defined
// Ex-> $Btn(red:blue) > Bgc(red) Bgc(blue):h
function hover(color, place) {
    const [c, h] = color.split(':');
    return [`${place}(${c})`, `${place}(${h}):h`];
}

// Manage Color Property
function manageColor(color, place) {
    if (color && place) {
        return color.includes(':') ? hover(color, place) : [`${place}(${color})`];
    }

    return [];
}

function manageSize(size) {
    if (size) {
        if (size === 'full') {
            return ['W(100%)']
        }else{
            return [`W(${size})`]
        }
    }

    return [];
}

module.exports = {
    '$Container': () => {
        console.log('Hello World');
        return ['mam'];
    },
    '$Btn': (color, size, name, fontColor) => {
        let classes = [];
        classes = [
            ...classes,
            ...manageColor(color, 'Bgc'),
            ...manageColor(fontColor, 'C'),
            ...manageSize(size)
        ]

        return classes;
    }
}

