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
    constructor(root) {
        // root element selection
        this.rootElement = document.getElementById(root)

        this.createForm = () => {
            // following func take 3 arguments : 
            //      - type of tag, 
            //      - array of objects with listing of attributes current tag
            //      - element in which will be mounted current tag
            // and create tag whit previos properties
            let elemsCreator = (_type, ArrOfAttr, placeToMount) => {
                let elem =  document.createElement(_type);
                for(let i = 0; i < ArrOfAttr.length; i++){
                    elem.setAttribute(ArrOfAttr[i].type, ArrOfAttr[i].value) 
                }
                placeToMount.appendChild(elem);
            }
            // this func take 5 arguments : 
            //      - array of type and text of 'option' tag inside 'select'
            //      - element in which will be mounted current 'select'
            //      - id of current 'select'
            //      - name of current 'select'
            // and create tag whit previos properties
            let selectCreator = (arr, placeToMount, _id, _name, hidden) => {
                let select =  document.createElement("select");
                    select.id = _id;
                    select.name = _name;
                if (hidden === true) {
                    select.style.display = 'none'
                }
                for (let i = 0; i < arr.length; i++) {
                    let option = document.createElement("option");
                    option.value = arr[i];
                    option.text = arr[i];
                    select.appendChild(option);
                }
                placeToMount.appendChild(select);
            }

            // this is arrays with properties for markup structure 
            const arrayOfForm = [{type: 'id',value: 'form'}]
            const arraySection_converter_section = [{type: 'class',value: 'converter_section'},{type: 'id',value: 'converter_section'}]
            const arrayDiv_wrap = [{type: 'class',value: 'wrap'}]
            const arrayA_converter = [{type: 'name',value: 'converter'}]
            const arrayDiv_converter = [{type: 'class',value: 'converter'}]
            const arrayDiv_converter_settings = [{type: 'class',value: 'converter_settings'}]
            const arrayButton_converterButton = [{type: 'id',value: 'converterButton'}]
            const arrayDiv_converter_section = [{type: 'class',value: 'converter_section'}]
            const arrayOfFirstInput = [{type: 'type',value: 'number'},{type: 'id',value: 'firstInput'}]
            const arrayOfSecondInput = [{type: 'type',value: 'number'},{type: 'id',value: 'secondInput'},{type: 'readonly',value: null}]
            const arrayOfDiv_rate = [{type: 'class',value: 'rate'}]
            const arrayOfRateInput = [{type: 'type',value: 'number'},{type: 'id',value: 'rateInput'},{type: 'placeholder',value: 'Type your rate here'},{type: 'style',value: 'display: none'}]

            //markup render 
            //base structure
            elemsCreator('section', arraySection_converter_section, this.rootElement);
            elemsCreator('div', arrayDiv_wrap, document.getElementById('converter_section'));
            elemsCreator('div', arrayA_converter, document.querySelectorAll('#converter_section .wrap')[0]);
            elemsCreator('h2', [{}], document.querySelectorAll('#converter_section .wrap')[0]);
            document.querySelectorAll('#converter_section .wrap h2')[0].innerText = "Converter";
            elemsCreator('p', [{}], document.querySelectorAll('#converter_section .wrap')[0]);
            document.querySelectorAll('#converter_section .wrap p')[0].innerText = "You can try to use converter. But first of all look at “how to” section for better understanding how this beast working.";
            elemsCreator('div', arrayDiv_converter, document.querySelectorAll('#converter_section .wrap')[0]);
            // left input section
            elemsCreator('div', arrayDiv_converter_section,  document.querySelectorAll('#converter_section .wrap .converter')[0]);
            elemsCreator('input', arrayOfFirstInput,  document.querySelectorAll('#converter_section .wrap .converter .converter_section')[0]);
            selectCreator(['mm','m','km'], document.querySelectorAll('#converter_section .wrap .converter .converter_section')[0], "selectLeftLength", "length", true);
            selectCreator(['g','kg','t'], document.querySelectorAll('#converter_section .wrap .converter .converter_section')[0], "selectLeftWeight", "weight", true);
            selectCreator(['c','f'], document.querySelectorAll('#converter_section .wrap .converter .converter_section')[0], "selectLeftTemperature", "temperature", true);
            // right input section
            elemsCreator('div', arrayDiv_converter_section,  document.querySelectorAll('#converter_section .wrap .converter')[0]);
            elemsCreator('input', arrayOfSecondInput,  document.querySelectorAll('#converter_section .wrap .converter .converter_section')[1]);
            selectCreator(['mm','m','km'], document.querySelectorAll('#converter_section .wrap .converter .converter_section')[1], "selectRightLength", "length", true);
            selectCreator(['g','kg','t'], document.querySelectorAll('#converter_section .wrap .converter .converter_section')[1], "selectRightWieght", "weight", true);
            selectCreator(['c','f'], document.querySelectorAll('#converter_section .wrap .converter .converter_section')[1], "selectRightTemperature", "temperature", true);
            // converter_settings section
            elemsCreator('div', arrayDiv_converter_settings, document.querySelectorAll('#converter_section .wrap')[0]);
            elemsCreator('div', arrayOfDiv_rate, document.querySelectorAll('#converter_section .wrap .converter_settings')[0]);
            document.querySelectorAll('#converter_section .wrap .converter_settings .rate')[0].innerText = "Rate:";
            elemsCreator('input', arrayOfRateInput,  document.querySelectorAll('#converter_section .wrap .converter_settings')[0]);
            selectCreator(['select','length','weight','temperature'], document.querySelectorAll('#converter_section .wrap .converter_settings')[0], "typeOfMeasurement", "", true);
            selectCreator(['Select type of rate','Custom','Specified'], document.querySelectorAll('#converter_section .wrap .converter_settings')[0], "typeOfRate", "");

            elemsCreator('button', arrayButton_converterButton, document.querySelectorAll('#converter_section .wrap')[0]);
            document.querySelectorAll('#converter_section .wrap button')[0].innerText = "convert";
        }
        this.createForm();

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

let newConverter = new Converter('root');


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