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

function repo_init(){
    core_repo_init({
      'events': {
        'clear': {
          'onclick': core_repo_reset,
        },
      },
      'globals': {
        'random_number_test_element': document.getElementById('random_number_test'),
      },
      'info': '<input id=clear type=button value=Clear>',
      'reset': function(){
          random_number_test_element.value = '';
      },
      'title': 'random_number_test.htm',
    });

    core_interval_modify({
      'id': 'random_number_test',
      'interval': 1000,
      'todo': random_number_test,
    });
}
