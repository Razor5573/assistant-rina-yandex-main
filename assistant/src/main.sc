require: slotfilling/slotFilling.sc
    module = sys.zb-common

patterns:
  $AnyText = $nonEmptyGarbage
  $Categories = (суш*|суп*|пиц*|стейк*|паст*)
  $Pages = (корзин*|категори*|меню|отзыв*)
  $Dishes = (6 сыров Мазератт*|Супер пап*|Мясн*|Микс Грин|Цыплёнок грин|Мясное барбекю|Папа микс|Ролл Филадельфия|Ролл Нихон|Ролл Вулкан с острым соусом|Ролл Темпура|Ролл Унаги|Ролл Вулкан с ореховым соусом|Спагетти болоньезе|Спагетти в томатном соусе|Паста с курицей)

require: js/changePage.js
require: js/openCategory.js
require: js/openDish.js
require: js/addToCart.js

theme: /Order
    state: Food
        intent!: /OrderFood
        script:
            $session.FoodName = $parseTree._FoodName
            $session.FoodCount = $parseTree._FoodCount
        go!: /Order/Result

    state: Result
        script:
            addToCart($nlp.inflect( $session.FoodName, "nomn"), $parseTree._FoodCount, $context)


theme: /

    state: Start
        q!: $regex</start>
        a: Начнём.
        
    state: Categories
        q!: (открой|покажи|Зайди в|хочу) $Categories::categories
        a: {{$nlp.inflect( $parseTree._categories, "nomn")}}
        script:
            openCategory( $nlp.inflect( $parseTree._categories, "nomn"), $context);
            log($parseTree._categories);

    state: Pages
        q!: (открой|покажи|Зайди в) $Pages::pages
        a: {{$nlp.inflect( $parseTree._pages, "nomn")}}
        script:
            changePage( $nlp.inflect( $parseTree._pages, "nomn"), $context);
            log($parseTree._pages);
        
    state: Dishes
        q!: (открой|покажи|Зайди в|хочу) $Dishes::dishes
        script: 
            openDish( $nlp.inflect( $parseTree._dishes, "nomn"), $context);
            log($parseTree._dishes);

    state: Fallback
        event!: noMatch
        a: Вы сказали: {{$parseTree.text}}
