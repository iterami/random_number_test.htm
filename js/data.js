'use strict';

function random_number_test(){
    let line = '';

    for(let i = 0; i < 50; i++){
        line += String.fromCharCode(core_random_integer({
          'max': 42,
        }) + 48);
    }

    line += '\n';

    random_number_test_element.value += line;
    random_number_test_element.scrollTop = random_number_test_element.scrollHeight;
}

function random_number_test_clear(){
    random_number_test_element.value = '';
}
