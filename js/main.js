'use strict';

function repo_init(){
    core_repo_init({
      'events': {
        'clear': {
          'onclick': random_number_test_clear,
        },
      },
      'globals': {
        'random_number_test_element': document.getElementById('random_number_test'),
      },
      'info': '<input id=clear type=button value=Clear>',
      'title': 'random_number_test.htm',
    });

    core_interval_modify({
      'interval': 1000,
      'todo': random_number_test,
    });
}
