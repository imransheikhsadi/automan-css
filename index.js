const Atomizer = require('atomizer');
const methods  = require('./methods');


function autoMan(data) {
    // Check data type
    if (typeof(data) !== 'string') {
        return console.log('Data Type is not string')
    }

    let helper_class = data.match(/\$[A-Za-z]+\(([a-z0-9\,\/\[\]\s\:\'\"]+\)|\))/g);
    with(methods){
        if (helper_class) {
            helper_class.forEach(element => {
                let elementM = element.replace('(','(\'').replace(')','\')').replace(/,/g,"','");
                console.log(elementM);
                
                data = data.replace(element, eval(elementM).join(' '));
            });
        }
    }


    return data;
}


console.log(autoMan("$Btn(red:blue,1/4,deep,green:red)"));

