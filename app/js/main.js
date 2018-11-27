var services = [
  {
    name: "ИНДЕЙЦЫ: ТАЙНА ПЛЕМЕНИ",
    type: "animator",
    description: "Это не просто праздник, свой день рождения празднует вождь племени Тумба-Юмба! А все гости превращаются в индейцев. Для этого индейцы им наносят боевой раскрас, надевают индейские головные уборы и разучивают с ними индейское приветствие и кричалку. А теперь отправляемся на поиски сокровищ древних Майя. Лишь собрав все куски старинной карты, каждый из которых ребята получают за пройденные испытания, племя сможет достигнуть цели. А испытания-то какие: на силу, ловкость, сообразительность и даже творческие способности. Праздник с индейцами — яркий и очень подвижный.",
    program: [ "Ловец снов находит вождя","Обряд посвящения «Какой ты индеец»","Выбор новых, индейских имен","Боевой раскрас","Подготовка к охоте (эстафеты, разминки, подвижные игры)","Игра «Охота»","Состязание «Самый меткий»","Игра “Индейская тропа”"],
    img: "./app/img/card_animator_1.jpg",
    age: [8],
    price: 700
  },
  {
    name: "Вампирская Вечеринка",
    type: "animator",
    description: "Незабываемая вампирская вечеринка гарантирована нашими профессиональными аниматорами, которые превращаются в настоящих кровопийц, не лишенных добрых чувств и юмора. Нескучные конкурсы развеселят даже подростков, заставят их состязаться в ловкости и проявить немалую фантазию.",
    program: [ "Посвящение в вампиры(легкий аквагрим)","Вампирские танцы","Загадки от старого графа","Расшифровка тайных посланий","Заклинание хорошего настроения","Запутанный лабиринт"],
    img: "./app/img/card_animator_2.jpg",
    age: [10,14],
    price: 700
  },
  {
    name: "Вечеринка Троллей",
    type: "animator",
    description: "Розочка и Цветан, спасаясь бегством от беркенов, попадают на детский праздник и просят помочь укрыться от злых  Троллей. Когда опасность миновала, в благодарность Тролли устраивают самую зажигательную вечеринку для своих спасителей!",
    program: [ "Караоке на вечеринке","Побег от беркенов","Загадки от старого тролля","Расшифровка тайных посланий","Заклинание хорошего настроения"],
    img: "./app/img/card_animator_4.jpg",
    age: [5,10],
    price: 700
  },
  {
    name: "Леди Баг и Супер-Кот",
    type: "animator",
    description: "Любимые герои Леди Баг и Супер Кот, которые борются со злом, получают очень много заданий, поэтому решено найти способ обладать большей суперсилой и найти больше супергероев. Отправившись на поиски они попадают на детский праздник к ребятам, которые пройдут вместе с ними все испытания и превратятся в настоящих супергероев!!!!",
    program: [ "Моделирование шаров","Фотозона леди Баг и Супер-Кот","Шар сюрприз","Торт леди Баг","Фотограф, видеограф","Победный танец","Запутанный лабиринт"],
    img: "./app/img/card_animator_3.jpg",
    age: [5,7],
    price: 700
  },
  {
    name: "Куколки LOL",
    type: "animator",
    description: "Уникальная игрушка-сюрприз куколка LOL приглашает всех на самую зажигательную и модную Birthday Party. Куколки Лол очень современные. Они увлекаются спортом, танцами, театром, модой, пением…И очень любят устраивать сюрпризы!",
    program: [ "Моделирование шаров","Фотозона куколки Лол","Шар сюрприз","Тематический торт и прянички в стиле куколок Лол","Фотограф","Веселые загадки","Запутанный лабиринт"],
    img: "./app/img/carusel_3.jpg",
    age: [5,10],
    price: 700
  },
  {
    name: "Пакет №1",
    type: "promotion",
    description: "1 аниматор на 1 час + мини-шоу мыльных пузырей (без погружения) на 25 минут  =  4500 руб. (обычная цена - 5000 руб.)",
    program: [],
    img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
    age: [],
    price: 700
  },
  {
    name: "Пакет №2",
    type: "promotion",
    description: "1 аниматор на 1 час + шоу пузырей с погружением на 40 минут  =  5500 руб. (обычная цена - 6500  руб.)",
    program: [],
    img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
    age: [],
    price: 700
  },
  {
    name: "Пакет №3",
    type: "promotion",
    description: "Научное шоу (на Ваш выбор, кроме азотного и Тесла шоу) на 30 минут + 1 аниматор на 1 час = 5500 руб.(обычная цена  6500 руб.)",
    program: [],
    img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
    age: [],
    price: 700
  },
  {
    name: "Пакет №4",
    type: "promotion",
    description: "2 аниматора на 1 час = 4500 руб. (обычная цена 5000  руб.)",
    program: [],
    img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
    age: [],
    price: 700
  },
  {
    name: "Пакет №5",
    type: "promotion",
    description: "1 аниматор на 1 час плюс шар-сюрприз = 3500 руб.  (обычная цена  4000 руб.)",
    program: [],
    img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
    age: [],
    price: 700
  },
  {
    name: "Пакет №6",
    type: "promotion",
    description: "1 аниматор на 2 часа =  4500 руб.  (обычная цена  5000 руб.)",
    program: [],
    img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
    age: [],
    price: 700
  },
];
//
// Пакет № 7
//
// 1 аниматор на 3 часа = 6000 руб. (обычная цена 7500 руб.)
//
// Пакет № 8
//
// 2 аниматора на 1 час +фотосъемка мероприятия на 1 час = 6500 руб.  (обычная цена  7500 руб.)
//
// Пакет № 9
//
// Научное шоу (на Ваш выбор, кроме азотного и Тесла шоу) на 30 минут + шоу мыльных пузырей с погружением на 40 минут = 7000 руб.   (обычная цена  8000 руб.)
//
// Пакет № 10
//
// 1 аниматор на 1 час + выступление профессионального фокусника на 30 минут = 7500 руб.  (обычная цена 8500 руб.)
//
// Пакет № 11
//
// 2 аниматора на 1 час + шоу мыльных пузырей с погружением на 30 минут = 8000 руб. (обычная цена  9000 руб.)
//
// Пакет № 12
//
// 2 аниматора на 1 час + шоу мыльных пузырей с погружением на 30 минут + научное шоу (на Ваш выбор, кроме азотного и Тесла шоу) на 30 минут + фотосъемка на 2 часа + шар-сюрприз = 16000 руб. (обычная цена  19500 руб.)

$(document).ready(function() {

  //-------------------Card------------------------------
  //var templateCards= $("#templateCards").html();
  var templateCards =
  '<%  _.each(services, function(card) { %>'+
    '<% if (card.type!="promotion") {%>' +
        '<div class="col">'+
        '<div class="card shadow-sm border-0 mb-4">'+
          '<a href="cardPage.html"><img class="card-img-top" src="<%= card.img %>" alt="<%= card.name %>"></a>'+
          '<div class="card-body">'+
            '<h5 class="card-title"><%= card.name %></h5>'+
            '<p class="card-text"><%= card.description %></p>'+
            '<a href="cardPage.html" class="btn btn-primary">Подробнее</a>'+
          '</div>'+
        '</div>'+
        '</div>' +
    '<% }%>' +
  '<% }); %>';

  var Result = _.template(templateCards, services );
  $("#templateCardsResult").html(Result);

  var card = services[0];
  var ResultCard = _.template(templateCards, card);
  // console.log('services[0]=',services[0]);
  // console.log('services[0].name=',services[0].name);
  // console.log('card=',card);
  // console.log('card.name=',card.name);
  console.log('ResultCard=',$("#templateCardPage").html(ResultCard));
  $("#templateCardPage").html(ResultCard);
  //-------------------Table------------------------------
  var templateTableActivities =
  '<% var i=0; %>' +
  '<%  _.each(services, function(activity) { %>'+
  '<% if (activity.type!="promotion") { i++; %>' +
  '<tr>' +
    '<th scope="row"><%= i %></th>' +
    '<td class="w-25 h-25"><img class="img-thumbnail" src="<%= activity.img %>" alt="<%= activity.name %>"></td>' +
    '<td><%= activity.name %></td>' +
    '<td>'+
      '<% _.each(activity.age, function(age) { %>' +
      '<span class="age"><%= age %> </span>'+
      '<% });%>'+
    '</td>' +
    '<td><%= activity.price %></td>' +
  '</tr>' +
  '<% }}); %>';
  var ResultTable = _.template(templateTableActivities, services);
  $("#tableListActivities").html(ResultTable);

  //-------------------TablePromotion------------------------------
  var templateTablePromotion =
  '<% var i=0; %>' +
  '<%  _.each(services, function(activity) { %>'+
  '<% if (activity.type=="promotion") { i++; %>' +
  '<tr>' +
    '<th scope="row"><%= i %></th>'+
    '<td class="w-25 h-25"><img class="img-thumbnail rounded-circle" src="<%= activity.img %>" alt="<%= activity.name %>"></td>' +
    '<td><%= activity.name %></td>' +
    '<td><%= activity.description %></td>' +
    '<td><%= activity.price %></td>' +
  '</tr>' +
  '<% }}); %>';
  var ResultTablePromotion = _.template(templateTablePromotion, services);
  $("#tableListPromotion").html(ResultTablePromotion);


  animateCursor();

});

function animateCursor () {

    var x = y = 0;

    function move() {
        $('#tailCoursor').css('left', x +'px');
        $('#tailCoursor').css('top', y +'px');
    }
    $(window).mousemove(function (e) {
        x = e.pageX;
        y = e.pageY;
    });


    setInterval(move, 50);
}
