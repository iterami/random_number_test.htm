'use strict';

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
