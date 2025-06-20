'use strict';

function random_number_test(){
    let line = '';

    for(let i = 0; i < 50; i++){
        line += String.fromCharCode(core_random_integer(42) + 48);
    }

    line += '\n';

    core_elements.textarea.value += line;
    core_elements.textarea.scrollTop = core_elements.textarea.scrollHeight;
}

function repo_init(){
    core_repo_init({
      'events': {
        'clear': {
          'onclick': function(){
              core_elements.textarea.value = '';
          },
        },
      },
      'info': '<button id=clear type=button>Clear</button>',
      'title': 'random_number_test.htm',
      'ui_elements': [
        'textarea',
      ],
    });

    core_elements.textarea.style.textWrap = 'nowrap';
    core_interval_modify({
      'id': 'random_number_test',
      'interval': 1000,
      'todo': random_number_test,
    });
}
