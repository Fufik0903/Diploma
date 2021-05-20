export function testhtml(event) {
  var questions = [{
    question: "Что означает тег input",
    choices: ['Контейнер формы', 'Элемент формы(поля) различных элементов',
      'Кликабельная кнопка', 'Контейнер в которм содержаться все элементы', 'Метод отправки данных на сервер'],
    correctAnswer: 1
  }, {
    question: "Для чего предназначен тег th?",
    choices: ['Для создания одной ячейки таблицы, которая обозначается как заголовочная',
      'Служит контейнером для создания строки таблицы',
      'Для создания одной ячейки таблицы',
      'Служит контейнером для элементов, определяющих содержимое таблицы',
      'Применяется для определения стилей элементов веб-страницы'],
    correctAnswer: 0
  }, {
    question: "Что такое вложенность тегов",
    choices: ['Это способ построения и создания языка разметки гипертекста, при котором происходит вложение одного тега в другой',
      'Предназначенные для предоставления структурированных метаданных о веб-странице',
      'Предназначен для указания типа текущего документа — DTD (document type definition, описание типа документа)',
      'Является универсальным блочным элементом и предназначен для группирования элементов документа с целью изменения вида содержимого через стили',
      'Предназначен для определения строчных элементов документа'],
    correctAnswer: 0
  }, {
    question: "Какой тег не относиться к тегам текста",
    choices: ['h1', 'p', 'span', 'main', 'sup'],
    correctAnswer: 3
  }, {
    question: "Что делает тег &lt;а>",
    choices: ['Предназначен для создания ссылок',
      'Предназначен для отображения на веб-странице изображений в графическом формате GIF, JPEG или PNG',
      'Задает адрес документа, на который следует перейти',
      'Задает «шапку» сайта или раздела, в которой обычно располагается заголовок',
      'Такого тега не существует'],
    correctAnswer: 0
  }
  ];

  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object

  // Display initial question
  displayNext();

  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();

    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {
      return false;
    }
    choose();

    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Пожалуйста, выберите значение!');
    } else {
      questionCounter++;
      displayNext();
    }
  });

  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });

  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });

  // Animates buttons on hover
  $('.button').on('click', function () {
    $(this).addClass('active');
  });
  $('.button').on('click', function () {
    $(this).removeClass('active');
  });

  // Creates and returns the div that contains the questions and
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var header = $('<h2>Вопрос ' + (index + 1) + '</h2>');
    qElement.append(header);

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();

      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }

        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){

          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }

  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }

    score.append('Вы ответили на ' + numCorrect + ' вопроса из ' +
      questions.length + ' правильно!!!');
    return score;
  }
}

