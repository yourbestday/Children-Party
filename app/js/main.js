var programs = ["День рождение под ключ","Аниматоры","Мастер классы","Акции"];
var services = [
  {
    id: 1,
    name: "ИНДЕЙЦЫ: ТАЙНА ПЛЕМЕНИ",
    type: "animator",
    description: "Это не просто праздник, свой день рождения празднует вождь племени Тумба-Юмба! А все гости превращаются в индейцев. Для этого индейцы им наносят боевой раскрас, надевают индейские головные уборы и разучивают с ними индейское приветствие и кричалку. А теперь отправляемся на поиски сокровищ древних Майя. Лишь собрав все куски старинной карты, каждый из которых ребята получают за пройденные испытания, племя сможет достигнуть цели. А испытания-то какие: на силу, ловкость, сообразительность и даже творческие способности. Праздник с индейцами — яркий и очень подвижный.",
    program: [ "Ловец снов находит вождя","Обряд посвящения «Какой ты индеец»","Выбор новых, индейских имен","Боевой раскрас","Подготовка к охоте (эстафеты, разминки, подвижные игры)","Игра «Охота»","Состязание «Самый меткий»","Игра “Индейская тропа”"],
    img: "./app/img/card_animator_1.jpg",
    age: [8],
    price: 700
  },
  {
    id: 2,
    name: "Вампирская Вечеринка",
    type: "animator",
    description: "Незабываемая вампирская вечеринка гарантирована нашими профессиональными аниматорами, которые превращаются в настоящих кровопийц, не лишенных добрых чувств и юмора. Нескучные конкурсы развеселят даже подростков, заставят их состязаться в ловкости и проявить немалую фантазию.",
    program: [ "Посвящение в вампиры(легкий аквагрим)","Вампирские танцы","Загадки от старого графа","Расшифровка тайных посланий","Заклинание хорошего настроения","Запутанный лабиринт"],
    img: "./app/img/card_animator_2.jpg",
    age: [10,14],
    price: 700
  },
  {
    id: 3,
    name: "Вечеринка Троллей",
    type: "animator",
    description: "Розочка и Цветан, спасаясь бегством от беркенов, попадают на детский праздник и просят помочь укрыться от злых  Троллей. Когда опасность миновала, в благодарность Тролли устраивают самую зажигательную вечеринку для своих спасителей!",
    program: [ "Караоке на вечеринке","Побег от беркенов","Загадки от старого тролля","Расшифровка тайных посланий","Заклинание хорошего настроения"],
    img: "./app/img/card_animator_4.jpg",
    age: [5,10],
    price: 700,
    comment: [
      { name: "Аня",
        description: "Нам все очень понравилось! Актеры приехали заблаговременно (чтобы успеть переодеться и спокойно подготовиться), были веселые конкурсы и игры. Они смогли увлечь даже самых 'некоммуникабельных' детей, так что в итоге все весело бегали и играли. Огромное ей спасибо за праздник!"},
      { name: "Лена",
        description: "Нам все очень понравилось! Актеры приехали заблаговременно, были веселые конкурсы и игры. Они смогли увлечь даже самых 'некоммуникабельных' детей, так что в итоге все весело бегали и играли. Огромное ей спасибо за праздник!"}
    ]
  },
  {
    id: 4,
    name: "Леди Баг и Супер-Кот",
    type: "animator",
    description: "Любимые герои Леди Баг и Супер Кот, которые борются со злом, получают очень много заданий, поэтому решено найти способ обладать большей суперсилой и найти больше супергероев. Отправившись на поиски они попадают на детский праздник к ребятам, которые пройдут вместе с ними все испытания и превратятся в настоящих супергероев!!!!",
    program: [ "Моделирование шаров","Фотозона леди Баг и Супер-Кот","Шар сюрприз","Торт леди Баг","Фотограф, видеограф","Победный танец","Запутанный лабиринт"],
    img: "./app/img/card_animator_3.jpg",
    age: [5,7],
    price: 700
  },
  {
    id: 5,
    name: "Куколки LOL",
    type: "galery",
    description: "Уникальная игрушка-сюрприз куколка LOL приглашает всех на самую зажигательную и модную Birthday Party. Куколки Лол очень современные. Они увлекаются спортом, танцами, театром, модой, пением…И очень любят устраивать сюрпризы!",
    program: [ "Моделирование шаров","Фотозона куколки Лол","Шар сюрприз","Тематический торт и прянички в стиле куколок Лол","Фотограф","Веселые загадки","Запутанный лабиринт"],
    img: "./app/img/carusel_3.jpg",
    age: [5,10],
    price: 700
  },
  {
    id: 6,
    name: "Пакет №1",
    type: "promotion",
    description: "1 аниматор на 1 час + мини-шоу мыльных пузырей (без погружения) на 25 минут  =  450 грн. (обычная цена - 500 грн.)",
    program: [],
    img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
    age: [],
    price: 450
  },
  {
    id: 7,
    name: "Пакет №2",
    type: "promotion",
    description: "1 аниматор на 1 час + шоу пузырей с погружением на 40 минут  =  550 грн. (обычная цена - 650  грн.)",
    program: [],
    img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
    age: [],
    price: 550
  },
  {
    id: 8,
    name: "Пакет №3",
    type: "promotion",
    description: "Научное шоу (на Ваш выбор, кроме азотного и Тесла шоу) на 30 минут + 1 аниматор на 1 час = 850 грн.(обычная цена  1000 грн.)",
    program: [],
    img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
    age: [],
    price: 850
  },
  {
    id: 9,
    name: "Пакет №4",
    type: "promotion",
    description: "2 аниматора на 1 час = 700 грн. (обычная цена 850  грн.)",
    program: [],
    img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
    age: [],
    price: 450
  },
  {
    id: 10,
    name: "Пакет №5",
    type: "promotion",
    description: "1 аниматор на 1 час плюс шар-сюрприз = 600 грн.  (обычная цена  700 грн.)",
    program: [],
    img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
    age: [],
    price: 600
  },
  {
    id: 11,
    name: "Пакет №6",
    type: "promotion",
    description: "1 аниматор на 2 часа =  700 грн.  (обычная цена  850 грн.)",
    program: [],
    img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
    age: [],
    price: 700
  },
  {
    id: 12,
    name: "День рождение",
    type: "galery",
    description: "Заказать под ключ",
    program: ["Подбор любимого аниматора с программой","Шоу-программы и спецэффекты","Подбор и оформление зала","Фото и видео","Всем гостям подарки - тату и киндер сюрприз"],
    img: "./app/img/carusel_1.jpg",
    age: [],
    price: 1450
  },
  {
    id: 13,
    name: "Юные химики",
    type: "galery",
    description: "Потрясающий мастер-клас со скидкой 30%",
    program: [],
    img: "./app/img/carusel_2.jpg",
    age: [],
    price: 600
  }
];



$(document).ready(function() { //The DOM is now loaded

  // $("#templateCardsResult").html( loadCardDetails(services,3) );
  loadMainPage();

  $("#contactClickMenu").on('click', function () {
    $("#templateCarusel").hide();
    $("#templateFilter").hide();
    $("#templateCardsResult").html( loadContact() );
    //console.log("clicked contactClickMenu");
  });

  $("#logoClickButton").on('click', function () {
    //loadMainPage();
    $("#templateCarusel").show();
    $("#templateFilter").show();
    $("#templateCardsResult").html( loadCards(services) );
    //console.log("clicked logoClickButton");
  });

  $("#promotionClickMenu").on('click', function () {
    $("#templateCarusel").hide();
    $("#templateFilter").show();

    var cardPromotion = services.filter(function(card) {
      return filterByType(card,"promotion");
    });
    $("#templateCardsResult").html( loadCards(cardPromotion) );

  });
  // $("#templateCardsResult").on('click', function () {
  //   //loadMainPage();
  //   // $("#templateCarusel").show();
  //   // $("#templateFilter").show();
  //   // $("#templateCardsResult").html( loadCards(services) );
  //   console.log("clicked templateCardsResult");
  // });


  $(".card").click(function () {
    $("#templateCarusel").hide();
    $("#templateFilter").hide();
    var id = $(this).attr("data-id");

    $("#templateCardsResult").html( loadCardDetails(services,id) );
  });


    $("#search").keyup(function(){
  		_this = this; //_this - context of input search
  		$.each($(".card"), function() {
  			if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1){ //this - context of card
  				$(this).hide();
  			} else {
  				$(this).show();
  			}
  	});

});

  animateCursor();


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

function loadMainPage() {
  $("#templateCarusel").html( loadCarousel(services) );
  $("#templateFilter").html( loadFilterMenu(programs) );
  $("#templateCardsResult").html( loadCards(services) );
}
// ----------------------------loadCarousel(services)----------------------------------------------
function loadCarousel(services) {
  var template =
  '<div class="row align-items-center justify-content-center no-gutter">' +
    '<div class="col-10">' +
        '<div id="carouselMain" class="carousel slide" data-ride="carousel">' +
        '<div class="carousel-inner" >' +
        '<% var temp = 0; %>' +
        '<%  _.each(services, function(card,i) { %>'+
        '<% if (card.type=="galery") {%>' +
          '<div class="carousel-item <%= (temp==0) ? "active" : "" %>" >' +
          '<% temp++; %>' +
            '<img class="d-block w-100" src="<%= card.img %>" alt="<%= card.name %>">' +
            '<div class="carousel-caption d-none d-md-block text-dark font-weight-bold">' +
              '<h1><%= card.name %></h1>' +
              '<p><%= card.description %></p>' +
            '</div>' +
          '</div>' +
          '<% }%>' +
        '<% }); %>' +

        '</div>' +
          '<a class="carousel-control-prev" href="#carouselMain" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Предыдущий</span></a>' +
          '<a class="carousel-control-next" href="#carouselMain" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Следующий</span></a>' +
        '</div>' +
      '</div>' +
      '</div>';

      return _.template(template, services );
}

// ---------------------------------loadCards(services)-----------------------------------------
function filterByType(card,condition) {
    if (card.type === condition) {
        return true;
    }
    return false;
}
function loadCards(services) {
  var templateCards =
  '<div class="row"><div class="col-12"><h2 class="text-center">Услуги</h2></div></div>' +
  '<div class="row"><div class="card-columns">';
  $.each(services, function(i,card) {
        templateCards +=
        '<div class="col">'+
        '<div class="card mb-4 shadow" data-id="'+ card.id +'" >'+
          '<a href=""><img class="card-img-top" src="'+ card.img +'" alt="'+ card.name +'"></a>'+
          '<div class="card-body">'+
            '<h5 class="card-title">'+ card.name +'</h5>'+
            '<p class="card-text">'+ card.description +'</p>'+
            '<a href="#" class="btn btn-primary">Подробнее</a>'+
          '</div>'+
        '</div>'+
        '</div>';
  });
  templateCards +=
  '</div></div>';

  return templateCards;
}

// ---------------------------------loadFilterMenu(programs)----------------------------------
function loadFilterMenu(programs){
  var template =
  '<div class="collapse" id="Filter">' +
    '<div class="bg-dark p-4">' +
      '<form class="form-inline">' +
        '<select class="custom-select mr-sm-2" id="chooseTypeFilter">' +
          '<option selected>Выбрать услугу...</option>' +
            '<%  _.each(programs, function(name,i) { %>'+
                '<option value="<%= i+1 %>"><%= name %></option>' +
            '<% }); %>' +
        '</select>' +
        '<input type="number" class="form-control mr-sm-2" pattern="^[ 0-9]+$" placeholder="Возраст счасливца">' +
        '<input class="form-control mr-2 col" id="search" type="search" placeholder="Поиск по слову" aria-label="Search">' +
        '<button class="btn btn-outline-success my-2 my-0" type="submit">Применить</button>' +
      '</form>' +
    '</div>' +
  '</div>' +
  '<nav class="navbar navbar-dark bg-dark">' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Filter" aria-controls="Filter" aria-expanded="false" aria-label="Filter">' +
      '<span class="">Фильтр</span>' +
    '</button>' +
  '</nav>';
  return _.template(template, programs );
}

function loadContact() {
  var template =
  '<div class="row justify-content-center">' +
    '<div class="col contact">' +
      '<h2>Наши контакты</h2>' +
      loadOrder() +
  '</div>';
  return _.template(template);
}

function loadCardDetails(services,findId) {
  var findCard={};
  for (var i=0; i<services.length; i++) {
    if ( services[i].id === +findId ) {
      findCard = services[i];
        break;
      }
  }
  var template =
    '<div class="row">' +
        '<div class="col-5 w-75" data-id="'+ findCard.id +' ">' +
            '<img src="'+ findCard.img +'" class="img-thumbnail" alt="'+ findCard.name +'">' +
        '</div>' +
        '<div class="col-12 col-md-7 no-gutter">' +
          '<div class="row  py-4">' +
              '<div class="col text-center text-info col-lg-8">' +
                '<h4>'+ findCard.name +'</h4>' +
              '</div>' +
              '<div class="col">' +
                '<h2 class="text-success price text-center no-wrap">'+ findCard.price +' грн.'+'</h2>' +
                '<button type="submit" class="btn btn-primary col">Заказать</button>' +
              '</div>' +
          '</div>' +

            '<ul class="nav nav-tabs" id="myTab" role="tablist">' +
              '<li class="nav-item">' +
                '<a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Описание</a>' +
              '</li>' +
              '<li class="nav-item">' +
                '<a class="nav-link" id="oder-tab" data-toggle="tab" href="#oder" role="tab" aria-controls="oder" aria-selected="false">Как заказать</a>' +
              '</li>' +
            '</ul>' +
              '<div class="col tab-content my-4" id="myTabContent">' +
                  '<div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">' +

                    '<div class="col-12 ">' +
                      '<h5>Сюжетная линия:</h5>' +
                      '<small>'+ findCard.description +'</small>' +
                    '</div>' +
                    '<div class="col-12 ">' +
                      '<h5 class="mt-4">Базовая анимационная программа:</h5>' +
                      '<small>' +
                        '<ul class="list-custom">';
                          $.each(findCard.program, function(i,name) {
                            template += '<li>'+ name +'</li>';
                          });
                        template +=
                        '</ul>' +
                      '</small>' +
                    '</div>' +

                  '</div>' +
                  '<div class="tab-pane fade" id="oder" role="tabpanel" aria-labelledby="oder-tab">' +
                  loadOrder() +
                  '</div>' +
              '</div>' +
            '</div>' +
        '</div>' +
        '<div class="col-12 my-4">' +
          '<div class="card">' +
            '<div class="card-header">Отзывы</div>' +
            '<div class="card-body">' +
          '<div class="input-group">' +
            '<textarea class="form-control" aria-label="With textarea"></textarea>' +
            '<div class="input-group-append">' +
              '<button class="btn btn-primary" type="button" id="button-addon2">Добавить</button>' +
            '</div>' +
          '</div>' ;
          $.each(findCard.comment, function(i,comment) {
            var border = (i !== findCard.comment.length-1) ? "border-bottom border-gray" : "";
            template+=
            '<div class="media text-muted pt-3">'+
              '<div class="mr-2 rounded" style="width: 32px; height: 32px; background-color: '+ randomColor() +';" data-holder-rendered="true"></div>' +
              '<p class="media-body pb-3 mb-0 small lh-125 '+ border +'">' +
                '<strong class="d-block text-gray-dark">'+ comment.name +'</strong>' + comment.description +
            '</div>';
            });
          template+=
              '<p class="card-text h-auto"></p>' +
            '</div>' +
          '</div>' +

        '</div>' +
    '</div>';
    return template;
}

function loadOrder() {
  var template =
  '<p>Для заказа любой анимационной программы жмите "Заказать"- наш менеджер свяжется с Вами в ближайшее время и согласует все детали или звоните:</p>' +
  '<p><span class="text-primary bold">+380(95) 551-65-75</span>,  <span class="text-primary">+380 (96) 907-08-99</span></p>' +
  '<p>childrenparty@gmail.com</p>' +
  '<p>г. Киев, метро Майдан Независимости</p>'+
  '<div class="col">' +
    '<iframe width="100%" height="400" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6493.238832911362!2d30.520967699842124!3d50.44786500931785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce5106812c5d%3A0x221af60403878fa9!2z0JzQsNC50LTQsNC9INCd0LXQt9Cw0LLQuNGB0LjQvNC-0YHRgtC4!5e0!3m2!1sru!2sua!4v1543499548874" frameborder="0" style="border:0" allowfullscreen></iframe>' +
  '</div>';
  return template;
}

function randomColor() {
  var r = Math.floor((Math.random() * 255) + 0);
  var g = Math.floor((Math.random() * 255) + 0);
  var b = Math.floor((Math.random() * 255) + 0);
  var color = 'rgb('+ r +','+ g +','+ b +')';
  return color;
}
