var programs = ["День рождение под ключ","Аниматоры","Мастер классы","Акции"];
var users = [{ name: "admin", password: "admin"}];
var services = [];
// var services = [
//   {
//     id: 1,
//     name: "ИНДЕЙЦЫ: ТАЙНА ПЛЕМЕНИ",
//     type: "animator",
//     gallery: false,
//     description: "Это не просто праздник, свой день рождения празднует вождь племени Тумба-Юмба! А все гости превращаются в индейцев. Для этого индейцы им наносят боевой раскрас, надевают индейские головные уборы и разучивают с ними индейское приветствие и кричалку. А теперь отправляемся на поиски сокровищ древних Майя. Лишь собрав все куски старинной карты, каждый из которых ребята получают за пройденные испытания, племя сможет достигнуть цели. А испытания-то какие: на силу, ловкость, сообразительность и даже творческие способности. Праздник с индейцами — яркий и очень подвижный.",
//     program: [ "Ловец снов находит вождя","Обряд посвящения «Какой ты индеец»","Выбор новых, индейских имен","Боевой раскрас","Подготовка к охоте (эстафеты, разминки, подвижные игры)","Игра «Охота»","Состязание «Самый меткий»","Игра “Индейская тропа”"],
//     img: "./app/img/card_animator_1.jpg",
//     age: [8],
//     price: 700
//   },
//   {
//     id: 2,
//     name: "Вампирская Вечеринка",
//     type: "animator",
//     gallery: false,
//     description: "Незабываемая вампирская вечеринка гарантирована нашими профессиональными аниматорами, которые превращаются в настоящих кровопийц, не лишенных добрых чувств и юмора. Нескучные конкурсы развеселят даже подростков, заставят их состязаться в ловкости и проявить немалую фантазию.",
//     program: [ "Посвящение в вампиры(легкий аквагрим)","Вампирские танцы","Загадки от старого графа","Расшифровка тайных посланий","Заклинание хорошего настроения","Запутанный лабиринт"],
//     img: "./app/img/card_animator_2.jpg",
//     age: [10,14],
//     price: 700
//   },
//   {
//     id: 3,
//     name: "Вечеринка Троллей",
//     type: "animator",
//     gallery: false,
//     description: "Розочка и Цветан, спасаясь бегством от беркенов, попадают на детский праздник и просят помочь укрыться от злых  Троллей. Когда опасность миновала, в благодарность Тролли устраивают самую зажигательную вечеринку для своих спасителей!",
//     program: [ "Караоке на вечеринке","Побег от беркенов","Загадки от старого тролля","Расшифровка тайных посланий","Заклинание хорошего настроения"],
//     img: "./app/img/card_animator_4.jpg",
//     age: [5,10],
//     price: 700,
//     comment: [
//       { name: "Аня",
//         description: "Нам все очень понравилось! Актеры приехали заблаговременно (чтобы успеть переодеться и спокойно подготовиться), были веселые конкурсы и игры. Они смогли увлечь даже самых 'некоммуникабельных' детей, так что в итоге все весело бегали и играли. Огромное ей спасибо за праздник!"},
//       { name: "Лена",
//         description: "Нам все очень понравилось! Актеры приехали заблаговременно, были веселые конкурсы и игры. Они смогли увлечь даже самых 'некоммуникабельных' детей, так что в итоге все весело бегали и играли. Огромное ей спасибо за праздник!"}
//     ]
//   },
//   {
//     id: 4,
//     name: "Леди Баг и Супер-Кот",
//     type: "animator",
//     gallery: false,
//     description: "Любимые герои Леди Баг и Супер Кот, которые борются со злом, получают очень много заданий, поэтому решено найти способ обладать большей суперсилой и найти больше супергероев. Отправившись на поиски они попадают на детский праздник к ребятам, которые пройдут вместе с ними все испытания и превратятся в настоящих супергероев!!!!",
//     program: [ "Моделирование шаров","Фотозона леди Баг и Супер-Кот","Шар сюрприз","Торт леди Баг","Фотограф, видеограф","Победный танец","Запутанный лабиринт"],
//     img: "./app/img/card_animator_3.jpg",
//     age: [5,7],
//     price: 700
//   },
//   {
//     id: 5,
//     name: "Куколки LOL",
//     type: "animator",
//     gallery: true,
//     description: "Уникальная игрушка-сюрприз куколка LOL приглашает всех на самую зажигательную и модную Birthday Party. Куколки Лол очень современные. Они увлекаются спортом, танцами, театром, модой, пением…И очень любят устраивать сюрпризы!",
//     program: [ "Моделирование шаров","Фотозона куколки Лол","Шар сюрприз","Тематический торт и прянички в стиле куколок Лол","Фотограф","Веселые загадки","Запутанный лабиринт"],
//     img: "./app/img/carusel_3.jpg",
//     age: [5,10],
//     price: 700
//   },
//   {
//     id: 6,
//     name: "Пакет №1 - 1 аниматор на 1 час",
//     type: "promotion",
//     gallery: false,
//     description: "1 аниматор на 1 час + мини-шоу мыльных пузырей (без погружения) на 25 минут  =  450 грн. (обычная цена - 500 грн.)",
//     program: [],
//     img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
//     age: [],
//     price: 450
//   },
//   {
//     id: 7,
//     name: "Пакет №2 1 аниматор на 1 час + программа",
//     type: "promotion",
//     gallery: false,
//     description: "1 аниматор на 1 час + шоу пузырей с погружением на 40 минут  =  550 грн. (обычная цена - 650  грн.)",
//     program: [],
//     img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
//     age: [],
//     price: 550
//   },
//   {
//     id: 8,
//     name: "Пакет №3 - Научное шоу",
//     type: "promotion",
//     gallery: false,
//     description: "Научное шоу (на Ваш выбор, кроме азотного и Тесла шоу) на 30 минут + 1 аниматор на 1 час = 1000 грн.(обычная цена  1200 грн.)",
//     program: [],
//     img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
//     age: [],
//     price: 1000
//   },
//   {
//     id: 9,
//     name: "Пакет №4 - 2 аниматора на 1 час",
//     type: "promotion",
//     gallery: false,
//     description: "2 аниматора на 1 час = 700 грн. (обычная цена 850  грн.)",
//     program: [],
//     img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
//     age: [],
//     price: 700
//   },
//   {
//     id: 10,
//     name: "Пакет №5 - 1 аниматор на 1 час",
//     type: "promotion",
//     gallery: false,
//     description: "1 аниматор на 1 час плюс шар-сюрприз = 600 грн.  (обычная цена  700 грн.)",
//     program: [],
//     img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
//     age: [],
//     price: 600
//   },
//   {
//     id: 11,
//     name: "Пакет №6 - 1 аниматор на 2 часа",
//     type: "promotion",
//     gallery: false,
//     description: "1 аниматор на 2 часа =  700 грн.  (обычная цена  850 грн.)",
//     program: [],
//     img: "https://beybladeshop.com.ua/wp-content/uploads/2018/04/aktsiya-min-900x.png",
//     age: [],
//     price: 700
//   },
//   {
//     id: 12,
//     name: "Оформление День рождения",
//     type: "birthday",
//     gallery: true,
//     description: "Яркий праздник Вашего ребенка. Вы получите полную свободу от решения организационных вопросов. Такое событие — безусловно долгожданный праздник для каждого ребенка, который он ждет с нетерпением целый год. Чтобы он получился ярким и незабываемым, нужно потратить много усилий. Мы с радостью придем к Вам на помощь и поможем организовать незабываемое торжество. Организация, проведение детского Дня Рождения (Киев и область), — наша основная специализация.",
//     program: ["Подбор любимого аниматора с программой","Шоу-программы и спецэффекты","Подбор и оформление зала","Фото и видео","Всем гостям подарки - тату и киндер сюрприз"],
//     img: "./app/img/carusel_1.jpg",
//     age: [],
//     price: 2450
//   },
//   {
//     id: 13,
//     name: "Программа 'Юные химики'",
//     type: "masterclass",
//     description: "Погружение в удивительный мир опытов и экспериментов не оставят равнодушными ни детей, ни взрослых, ведь у нас Наука - Искусство! Наша программа подойдет для любого детского праздника (День Рождения, Новый год, Хэллоуин и пр), а также для проведения необычного урока в школе.  Мы придумали для вас лучшее детское научное шоу! Все принимают участие в экспериментах, ведь вас ждет занимательная химия и физика!",
//     gallery: true,
//     program: ["Эксперименты с сухим льдом и жидким азотом","Cумасшедшая газировка","Праздничный взрыв","Мыльная каша","Туманная комната"],
//     img: "./app/img/carusel_2.jpg",
//     age: [8-12],
//     price: 1500,
//     comment: [
//       { name: "Аня",
//         description: "Нам все очень понравилось! Актеры приехали заблаговременно (чтобы успеть переодеться и спокойно подготовиться), были веселые конкурсы и игры. Они смогли увлечь даже самых 'некоммуникабельных' детей, так что в итоге все весело бегали и играли. Огромное ей спасибо за праздник!"},
//       { name: "Сергей",
//         description: "Молодцы! Актеры приехали заблаговременно, были веселые конкурсы и игры. Они смогли увлечь даже самых 'некоммуникабельных' детей, так что в итоге все весело бегали и играли. Огромное ей спасибо за праздник!"}
//     ]
//   },
//   {
//     id: 14,
//     name: "Мастер-класс 'Роспись пряников'",
//     type: "masterclass",
//     description: "На мастер-классе вы научитесь росписи пряников и их декорирования. Тесто для печенья готовится из качественных продуктов с добавлением меда и специй, что делает его неповторимо ароматным. Способ приготовления обеспечивает длительный срок хранения - до 2-х месяцев. Для росписи используется белковая глазурь.",
//     gallery: false,
//     program: ["Продукты входят в стоимость мастер класса","Длительность 1 час"],
//     img: "./app/img/card_masterclass_1.jpg",
//     age: [6,16],
//     price: 1200,
//     comment: [
//       { name: "Аня",
//         description: "Нам все очень понравилось! Актеры приехали заблаговременно (чтобы успеть переодеться и спокойно подготовиться), были веселые конкурсы и игры. Они смогли увлечь даже самых 'некоммуникабельных' детей, так что в итоге все весело бегали и играли. Огромное ей спасибо за праздник!"},
//       ]
//   },
//   {
//     id: 15,
//     name: "Мастер-класс 'Открытка в технике оригами'",
//     type: "masterclass",
//     description: "Оригами - искусство складывания фигурок из бумаги - пришло к нам из древнего Китая. В этой технике создают не только фигуркм животных, но и открытки, панно, закладки и много других мелочей. Открытка, сделанная своими руками, будет приятным подарком близкому человеку.",
//     gallery: false,
//     program: ["Материалы входят в стоимость мастер класса","Длительность 1 час"],
//     img: "./app/img/card_masterclass_2.jpg",
//     age: [5,16],
//     price: 1500,
//     comment: [
//       { name: "Аня",
//         description: "Нам все очень понравилось! Актеры приехали заблаговременно (чтобы успеть переодеться и спокойно подготовиться), были веселые конкурсы и игры. Они смогли увлечь даже самых 'некоммуникабельных' детей, так что в итоге все весело бегали и играли. Огромное ей спасибо за праздник!"},
//       ]
//   }
// ];



$(document).ready(function() { //The DOM is now loaded

  $.ajax({
      url : "http://127.0.0.1:8080/app/ajax/data.json?callback=?",
      type : "GET",
      statusCode: {
        404: function() {
              alert( "page not found" );
            }
      },
      success:  function( data ) {
            services = data.services;
            loadMainPage(data.services);
            localStorage.setItem("services", JSON.stringify(data.services));
          }
      });
  //services = JSON.parse(localStorage.getItem("servives"));
  //console.log(services);
  //loadMainPage(services);

$("#AdminMenu").on('click',function (event) {
  //console.log('clicked ', event.target);
  var id = $(event.target).attr('data-id');
  var parent = $(event.target).parent();
  parent.children().removeClass( "active" );
  $(event.target).addClass("active");
  switch(id){
    case "0": {
      $("#AdminContent").html( loadAdminList(services) );
      break;
    }
    case "1": {
      $("#AdminContent").html( loadFormAdminNewCard(programs) );
      break;
    }
    default: {
      break;
    }
  }
});
//------------------------------------------------------------------------------
  $("#templateCardsResult").on('click',function (event) {
    var parent = $(event.target).parent();
    if (parent.hasClass('card') === true) {
      var id = parent.attr('data-id');
      $("#templateCarusel").hide();
      $("#templateFilter").hide();
      var card = findCard(services,id);
      $("#templateCardsResult").html( loadCardDetails(card) );
      $('body,html').animate({scrollTop: 0}, 400);
    }
  });

//------------------------------------------------------------------------------
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
//------------------------------------------------------------------------------
//  animateCursor();

});

function menuclick(type){
  //var services = JSON.parse(localStorage.getItem('services'));
   switch(type){
     case 'birthday': {
       $("#templateCarusel").hide();
       $("#templateFilter").hide();

       var cardBirthDay = services.filter(function(card) {
         return filterByType(card,"birthday");
       });
       var card = cardBirthDay[0];
       $("#templateCardsResult").html( loadCardDetails(card) );
       break;
     }
     case 'masterclass': {
       $("#templateCarusel").hide();
       $("#templateFilter").hide();

       var cardMasterClass = services.filter(function(card) {
         return filterByType(card,"masterclass");
       });
       $("#templateCardsResult").html( loadCards(cardMasterClass) );
       break;
     }
     case 'promotion': {
       $("#templateCarusel").hide();
       $("#templateFilter").hide();

       var cardPromotion = services.filter(function(card) {
         return filterByType(card,"promotion");
       });
       $("#templateCardsResult").html( loadCards(cardPromotion) );
       break;
     }
     case 'animator': {
       $("#templateCarusel").hide();
       $("#templateFilter").hide();

       var cardAnimator = services.filter(function(card) {
         return filterByType(card,"animator");
       });
       $("#templateCardsResult").html( loadCards(cardAnimator) );
       break;
     }
     case 'logo': {
       loadMainPage(services);
       break;
     }
     case 'contact': {
       $("#templateCarusel").hide();
       $("#templateFilter").hide();
       $("#templateCardsResult").html( loadContact() );
       break;
     }
     case 'logIn': {
       $("#templateCarusel").hide();
       $("#templateFilter").hide();
       $("#templateCardsResult").html( loadLogIn() );
       break;
     }
     default: {
       break;
     }
   }
 }

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

function loadMainPage(services) {
  $("#footer").html('');
  $( "#header" ).children().clone().appendTo( "#footer" );
  var gallery = services.filter(function(card) {
    if (card.gallery === true) {
      return true;
    } else {
      return false;
    }
  });
  //console.log(gallery);
  $("#templateCarusel").show();
  $("#templateCarusel").html( loadCarousel(gallery) );
  $("#templateFilter").show();
  $("#templateFilter").html( loadFilterMenu(programs) );

  var cardAnimator = services.filter(function(card) {
    return filterByType(card,"promotion",false);
  });
  $("#templateCardsResult").show();
  $("#templateCardsResult").html( loadCards(cardAnimator) );
  $( "#AdminMenu" ).empty();
  $( "#AdminContent" ).empty();
}
// ----------------------------loadCarousel(services)----------------------------------------------
function loadCarousel(gallery) {
  var template =
  '<div class="row align-items-center justify-content-center no-gutter">' +
    '<div class="col-10">' +
        '<div id="carouselMain" class="carousel slide" data-ride="carousel">' +
        '<div class="carousel-inner" >';
        var temp = 0;

        $.each(gallery, function(i,card) {
          var active = (temp==0) ? "active" : "";
          template +=
          '<div class="carousel-item '+ active +'" data-id="'+ card.id +'">';
          temp++;
          template +=
            '<img class="d-block w-100" src="'+ card.img +'" alt="'+ card.name +'">' +
            '<div class="carousel-caption d-none d-md-block text-dark font-weight-bold">' +
              '<h1>'+ card.name +'</h1>' +
            '</div>' +
          '</div>';
        });

        template +=
        '</div>' +
          '<a class="carousel-control-prev" href="#carouselMain" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Предыдущий</span></a>' +
          '<a class="carousel-control-next" href="#carouselMain" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Следующий</span></a>' +
        '</div>' +
      '</div>' +
      '</div>';

      return template;
}

// ---------------------------------loadCards(services)-----------------------------------------
function filterByType(card,condition,show) {
  if (show === false) {
    var result = (card.type !== condition) ? true : false;
    return result;
  }
  var result = (card.type === condition) ? true : false;
  return result;
}

function loadCards(services) {
  var templateCards =
  '<div class="row"><div class="col-12"><h2 class="text-center">Услуги</h2></div></div>' +
  '<div class="row"><div class="card-columns">';
  $.each(services, function(i,card) {
        templateCards +=
        '<div class="col">'+
        '<div class="card mb-3 shadow" data-id="'+ card.id +'" >'+
          // '<a href=""><img class="card-img-top" src="'+ card.img +'" alt="'+ card.name +'"></a>'+
          '<img class="card-img-top" src="'+ card.img +'" alt="'+ card.name +'">' +
          //'<div class="card-body">'+
            '<h5 class="card-title">'+ card.name +'</h5>'+
            // '<p class="card-text">'+ card.description +'</p>'+
            // '<a href="#" class="btn btn-primary">Подробнее</a>'+
          //'</div>'+
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
        '<select class="custom-select mr-sm-2" id="chooseFilter">' +
          '<option selected>Выбрать услугу...</option>';
             _.each(programs, function(name,i) {
                template += '<option value="'+ (i+1) +'">'+ name +'</option>';
            });
        template +=
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
  return template;
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

function findCard(services,findId) {
  for (var i=0; i<services.length; i++) {
    if ( services[i].id === +findId ) return services[i];
  }
  return services[0];
}

function loadCardDetails(card) {
  var template =
    '<div class="row">' +
        '<div class="col-5 w-75" data-id="'+ card.id +' ">' +
            '<img src="'+ card.img +'" class="img-thumbnail" alt="'+ card.name +'">' +
        '</div>' +
        '<div class="col-12 col-md-7 no-gutter">' +
          '<div class="row  py-4">' +
              '<div class="col text-center text-info col-lg-8">' +
                '<h4>'+ card.name +'</h4>' +
              '</div>' +
              '<div class="col">' +
                '<h2 class="text-success price text-center no-wrap">'+ card.price +' грн.'+'</h2>' +
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
                      // '<small>'+ findCard.description +'</small>' +
                      card.description +
                    '</div>' +
                    '<div class="col-12 ">' +
                      '<h5 class="mt-4">Базовая анимационная программа:</h5>' +
                      // '<small>' +
                        '<ul class="list-custom">';
                          $.each(card.program, function(i,name) {
                            template += '<li>'+ name +'</li>';
                          });
                        template +=
                        '</ul>' +
                      // '</small>' +
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
          $.each(card.comment, function(i,comment) {
            var border = (i !== card.comment.length-1) ? "border-bottom border-gray" : "";
            template+=
            '<div class="media text-muted pt-3">'+
              '<div class="mr-2 rounded" style="width: 32px; height: 32px; background-color: '+ randomColor() +';" data-holder-rendered="true"></div>' +
              '<p class="media-body pb-3 mb-0 small lh-125 '+ border +'">' +
                '<strong class="d-block text-gray-dark">'+ comment.name +'</strong>' + comment.description +
            '</div>';
            });
          template +=
              '<p class="card-text h-auto"></p>' +
            '</div>' +
          '</div>' +

        '</div>'+

        // var cardAnimator = services.filter(function(card) {
        //   return filterByType(card,"promotion",false);
        // });
        //
        // template +=
        // loadCards(cardAnimator) ) +

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

function loadLogIn() {
  var template =
    '<div class="row justify-content-center">' +
      '<h2>Авторизация</h2>' +
    '</div>' +
    '<div class="row justify-content-center">' +
      '<form class="col-sm-6 col">' +
        '<div class="form-group">' +
          '<label for="userName">Укажите Вашу учетную запись:</label>' +
          '<input type="text" class="form-control" id="userName" aria-describedby="textHelp">' +
        '</div>' +
        '<div class="form-group">' +
          '<label for="userPassword">Пароль:</label>' +
          '<input type="password" class="form-control" id="userPassword">' +
        '</div>' +
        '<div class="form-group form-check">' +
          '<input type="checkbox" class="form-check-input" id="userRemember">' +
          '<label class="form-check-label" for="userRemember">Запомнить</label>' +
        '</div>' +
        '<button type="submit" class="btn btn-primary col-12" id="checkUserLogIn" onclick=clickCheckUserLogIn()>Войти</button>' +
      '</form>' +
    '</div>';

    return template;
}

function clickCheckUserLogIn() {
  var login = $('#userName').val();
  var password = $('#userPassword').val();
  //console.log('userName=',login,',userPassword=',password);

  if (login == '') {
    $('#AdminContent').html('Введите логин');
  } else if (login.length > 20) {
    $('#AdminContent').html('Логин должен быть менее 20 символов');
  } else if (login.length < 3) {
    $('#AdminContent').html('Логин должен быть больше 3 символов');
  } else {
    if (login === users[0].name && password === users[0].password) {
      $("#templateCarusel").hide();
      $("#templateFilter").hide();
      $("#templateCardsResult").hide();
      $("#AdminMenu").html( loadFormAdminMenu(0) );
      //$("#AdminContent").html( loadFormAdminNewCard(programs) );
      $("#AdminContent").html( loadAdminList(services) );
    } else {
      $("#AdminContent").html('Неверный логин или пароль!');
    }
  }
  changeMenuToAdmin();
}

function changeMenuToAdmin() {
  $( "ul.navbar-nav" ).children(".nav-item" ).hide();
  var itemAdminMenu =
  '<li class="nav-item dropdown">' +
    '<a class="nav-link dropdown-toggle" href="#" id="menuDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
      'Admin' +
    '</a>' +
    '<div class="dropdown-menu" aria-labelledby="menuDropdown">' +
      '<a class="dropdown-item" href="#" onclick=changeMenuToDefault()>Log&nbsp;Out</a>' +
  '</li>';
  $( "ul.navbar-nav" ).append(itemAdminMenu);
}

function changeMenuToDefault() {
  $( "ul.navbar-nav" ).children("li:last-child").remove();
  $( "ul.navbar-nav" ).children(".nav-item" ).show();
  $( "#AdminMenu" ).empty();
  $( "#AdminContent" ).empty();
  loadMainPage(services);
}

function loadFormAdminNewCard (programs) {
  var template =
  '<form>' +
    '<div class="form-group">' +
      '<label for="typeActivity">Добавление новой услуги:</label>' +
      '<select class="form-control" id="typeActivity">';
      $.each(programs, function(i,name) {
        template += '<option value="'+ i +'">'+ name +'</option>';
      });
      template +=
      '</select>' +
    '</div>' +
    '<div class="form-group jumbotron col-md-6 offset-md-3">' +
      '<div class="dropzone" id="upload-widget" method="post" enctype="multipart/form-data">' +
        '<div class="form-group text-center">' +
          '<span>Нажмите и перетащите файл</span>' +
        '</div>' +
      '</div>' +
    '</div>' +
      '<div class="form-group">' +
        '<label for="nameActivity">Название:</label>' +
        '<input type="text" class="form-control" id="newCardName">' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="descriptionActivity">Описание:</label>' +
        '<textarea class="form-control" id="descriptionActivity" rows="5"></textarea>' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="listActivity">Что включает программа:</label>' +
        '<textarea class="form-control" id="newCardList" rows="5"></textarea>' +
      '</div>' +
      '<div class="form-group">' +
        '<input type="checkbox" class="form-control" id="newCardgallery">' +
        '<label for="newCardgallery">Отображать в галерее</label>' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="ageActivity">Возраст:</label>' +
        '<input type="text" class="form-control" id="newCardAge">' +
      '</div>' +
      '<div class="form-group">' +
        '<label for="priceActivity">Цена, гривна:</label>' +
        '<input type="text" class="form-control" id="newCardPrice">' +
      '</div>' +
      '<button class="btn btn-primary col-6 offset-3" type="submit" onclick=addNewCard()>Добавить</button>' +
    '</form>';
    return template;
}

function loadFormAdminMenu (number) {
  var menu = ["Список всех услуг","Добавить услугу"];
  var template =
  '<div class="list-group">';
  $.each(menu, function (i,item){
    var active = (i==number)? "active":"";
    template += '<a href="#" class="list-group-item list-group-item-action '+ active +'" data-id="'+ i +'">'+ item +'</a>';
  });
  template +=
  '</div>';
  return template;
}

function loadAdminList (services) {
  var colNames = ["#","Фото","Тип","Название","Возраст","Цена, грн."];
  var template=
  '<table class="table">' +
    '<thead class="thead-light">' +
      '<tr>';
      $.each(colNames, function(i,name){
        template += '<th scope="col">'+ name +'</th>'
      });
      template +=
      '</tr>' +
    '</thead>' +
    '<tbody>';
  $.each(services, function(i,activity) {
    template +=
    '<tr class="' + activity.type +'">'+
      '<th scope="row">'+ (i+1) +'</th>' +
      '<td class="w-25 h-25"><img class="img-thumbnail" src="'+ activity.img +'" alt="'+ activity.name +'"></td>' +
      '<td>'+ activity.type +'</td>' +
      '<td>'+ activity.name +'</td>' +
      '<td>';
      $.each(activity.age, function(i,age) {
        template +=
        '<span class="age">'+ age +' </span>';
      });
      template +=
      '</td>' +
      '<td>'+ activity.price +'</td>' +
    '</tr>';
  });
  template +=
  '</tbody>' +
  '</table>';
  //var ResultTable = _.template(templateTableActivities, services);
  //$("#tableListActivities").html(ResultTable);
  return template;
}

function addNewCard() {
  //console.log($("form").serialize());
  var newCard = {};
  var newCardtype = "";
  switch ($('#typeActivity').val()) {
    case "0":{
      newCardtype = "birthday";
      break;
    }
    case "1":{
      newCardtype = "animator";
      break;
    }
    case "2":{
      newCardtype = "masterclass";
      break;
    }
    case "3":{
      newCardtype = "promotion";
      break;
    }
    default:  break;
  }
  newCard.type = newCardtype;
  newCard.name = $('#newCardName').val();
  newCard.description = $('#descriptionActivity').val();
  newCard.program = ($('#newCardList').val()).split('\n');
  newCard.gallery = ($("#newCardgallery").attr("checked") == 'checked') ? true : false;
  newCard.age = ($('#newCardAge').val()).split('-');
  newCard.price = $('#newCardPrice').val();
  newCard.img = "";
  newCard.id = generateId();
  console.log('newCard = ',newCard);
  alert('added');

  services.push(newCard);
  localStorage.setItem("services", JSON.stringify(services));

  $("#AdminContent").html( loadAdminList(services) );
}

function generateId() {
  return Math.floor((Math.random() * 999) + 0);
}
