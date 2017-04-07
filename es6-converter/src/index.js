/* ****************************************
		scroll detection
*****************************************/
window.onscroll = () => {
    const scrolled = window.pageYOffset || document.documentElement.scrollTop;
    const headerElem = document.getElementById('header').classList;
    if (scrolled > 70) {
        headerElem.add('alter_style');
    } else {
        headerElem.remove('alter_style');
    }
};


/* ****************************************
		converter module
*****************************************/
class Converter {
    constructor() {
        /*
            Basic behavior properties.
        */
        this.converterButton = document.getElementById('converterButton');
        this.rateInput = document.getElementById('rateInput');
        this.typeOfRate = document.getElementById('typeOfRate');
        this.typeOfMeasurement = document.getElementById('typeOfMeasurement');
        this.firstInput = document.getElementById('firstInput');
        this.secondInput = document.getElementById('secondInput');
        this.selectLeftLength = document.getElementById('selectLeftLength');
        this.selectLeftWeight = document.getElementById('selectLeftWeight');
        this.selectLeftTemperature = document.getElementById('selectLeftTemperature');
        this.selectRightLength = document.getElementById('selectRightLength');
        this.selectRightWieght = document.getElementById('selectRightWieght');
        this.selectRightTemperature = document.getElementById('selectRightTemperature');
        /*
            Type of rate select element handler.
        */
        this.typeOfRate.addEventListener('click', () => {
            const select = document.getElementById('typeOfMeasurement');
            const selectsForRemove = document.querySelectorAll('.converter_section > select');

            if (this.typeOfRate.value === 'Custom') {
                select.style.display = 'none';
                this.rateInput.style.display = 'inline-block';
                for (let i = 0; i < selectsForRemove.length; i++) {
                    selectsForRemove[i].style.display = 'none';
                }
            } else if (this.typeOfRate.value === 'Specified') {
                this.rateInput.style.display = 'none';
                select.style.display = 'inline-block';
                this.handleTypeOfMeasurement();
            } else {
                this.rateInput.style.display = 'none';
                select.style.display = 'none';
                for (let i = 0; i < selectsForRemove.length; i++) {
                    selectsForRemove[i].style.display = 'none';
                }
            }
        });

        /*
            Это супер обработчик клика по по select c id="typeOfMeasurement" в котором можно выбрать тип конвертируемых единиц.
            Он работает следующим образом. 
            По клику вызывается функция, в аргумент которой передаётся элемент select c id="typeOfMeasurement" (this.typeOfMeasurement.value).
            Внутри данной функции находится другая, которая создаёт и возвращает массив элементов (nodeList) по заданным значениям атрибута name. 
            Задавать можно любое количество выбираемых типов значения атрибута name.
            Сохраняется данный массив в переменную и далее через цикл пропускаем его, проверяя, соответствует ли значение value
            выбранного дропдауна со значением name элементов из массива. 
            В случае соответвия - отменяем заданный в css по умолчанию display: none.
            В случае несоответвия - задаём display: none.
        */
        this.handleTypeOfMeasurement = () => {
            const setDisplayProperty = (typeOfMeasurementValue) => {
                const createArrayOfTargetElems = (...elemsNames) => {
                    const _arrayOfTargetElems = [];
                    for (let i = 0; i < elemsNames.length; i++) {
                        const temp = document.getElementsByName(elemsNames[i]);
                        _arrayOfTargetElems.push(temp);
                    }
                    return _arrayOfTargetElems;
                };
                // в аргументы createArrayOfTargetElems можно передать любые значения атрибута name элементов которые следует найти
                const arrayOfTargetElems = createArrayOfTargetElems('length', 'weight', 'temperature');
                for (let j = 0; j < arrayOfTargetElems.length; j++) {
                    for (let i = 0; i < arrayOfTargetElems[j].length; i++) {
                        if (typeOfMeasurementValue === arrayOfTargetElems[j][i].name) {
                            arrayOfTargetElems[j][i].style.display = 'block';
                        } else {
                            arrayOfTargetElems[j][i].style.display = 'none';
                        }
                    }
                }
            };
            // в аргумент setDisplayProperty передаём элемент, value выпадающих полей которого следует проверять 
            setDisplayProperty(this.typeOfMeasurement.value);
        };
        this.typeOfMeasurement.addEventListener('click', this.handleTypeOfMeasurement);
    }
}

class ConverterBusinessLogic extends Converter {
    constructor() {
        super();
        this.lengthFeatures = [{
            index: 1,
            name: 'mm'
        }, {
            index: 1000,
            name: 'm'
        }, {
            index: 1000000,
            name: 'km'
        }];
        this.weightFeatures = [{
            index: 1,
            name: 'g'
        }, {
            index: 1000,
            name: 'kg'
        }, {
            index: 1000000,
            name: 't'
        }];
        /* 
            this is 3 types of measerement that will be chosed 
            depend of chosen type in dropdown menu 
        */
        this.customRateHandler = () => {
            this.secondInput.value = parseFloat((this.firstInput.value * this.rateInput.value));
        };
        this.WLHandler = (obj) => {
            let from = '';
            let to = '';
            let result = 0;
            const choseObjWithConversionProps = (type) => {
                for (let i = 0; i < type.length; i++) {
                    if (obj.fromMeasurement === type[i].name) {
                        from = type[i].index;
                    }
                }
                for (let i = 0; i < type.length; i++) {
                    if (obj.toMeasurement === type[i].name) {
                        to = type[i].index;
                    }
                }
                result = obj.value * from / to;
                this.secondInput.value = result;
            };
            if (obj.type === 'length') {
                choseObjWithConversionProps(this.lengthFeatures);
            } else if (obj.type === 'weight') {
                choseObjWithConversionProps(this.weightFeatures);
            }
        };
        this.TemperatureHandler = (obj) => {
            let result = 0;
            if (this.selectLeftTemperature.value === 'c') {
                if (this.selectRightTemperature.value === 'f') {
                    result = (1.8 * obj.value) + 32;
                    this.secondInput.value = result;
                } else {
                    this.secondInput.value = this.firstInput.value;
                }
            } else if (this.selectLeftTemperature.value === 'f') {
                if (this.selectRightTemperature.value === 'c') {
                    result = (obj.value - 32) / 1.8;
                    this.secondInput.value = result;
                } else {
                    this.secondInput.value = this.firstInput.value;
                }
            }
        };
        /* 
            handler of "convert" button 
        */
        this.converterButton.addEventListener('click', () => {
            if (this.firstInput.value !== '') {
                if (this.typeOfRate.value === 'Custom') {
                    this.customRateHandler();
                } else if (this.typeOfRate.value === 'Specified') {
                    if (this.typeOfMeasurement.value === 'length') {
                        const newObj = {};
                        newObj.type = this.typeOfMeasurement.value;
                        newObj.value = this.firstInput.value;
                        newObj.fromMeasurement = this.selectLeftLength.value;
                        newObj.toMeasurement = this.selectRightLength.value;
                        this.WLHandler(newObj);
                    } else if (this.typeOfMeasurement.value === 'weight') {
                        const newObj = {};
                        newObj.type = this.typeOfMeasurement.value;
                        newObj.value = this.firstInput.value;
                        newObj.fromMeasurement = this.selectLeftWeight.value;
                        newObj.toMeasurement = this.selectRightWieght.value;
                        this.WLHandler(newObj);
                    } else if (this.typeOfMeasurement.value === 'temperature') {
                        const newObj = {};
                        newObj.type = this.typeOfMeasurement.value;
                        newObj.value = this.firstInput.value;
                        this.TemperatureHandler(newObj);
                    } else {
                        alert('Choice type of calculating.');
                    }
                } else {
                    alert('Choice type of calculating.');
                }
            } else {
                alert('Please, put something in left and rate inputs');
            }
        });
    }
}

const newConverterBusinessLogic = new ConverterBusinessLogic();


/* ****************************************
		training space
*****************************************/

/* 
    for a rainy day 
    handler for changing inputs content
*/
// this.secondInput.addEventListener('input', () => {
//     if (this.secondInput.value !== '' && this.rateInput.value !== '') {
//         this.firstInput.value = parseFloat((this.secondInput.value / this.rateInput.value));
//         console.log(this.secondInput.value);
//     }
// });
// this.firstInput.addEventListener('input', () => {
//     if (this.firstInput.value !== '' && this.rateInput.value !== '') {
//         this.secondInput.value = parseFloat((this.firstInput.value * this.rateInput.value));
//         console.log(this.secondInput.value);
//     }
// });
// this.rateInput.addEventListener('input', () => {
//     if (this.firstInput.value !== '') {
//         this.secondInput.value = parseFloat((this.firstInput.value * this.rateInput.value));
//         console.log(this.secondInput.value);
//     }
// });
