import Image from 'next/image'
import styles from './page.module.scss'

const Article = () => {
  return (
    <article>
      <section className={styles.head}>
        <div className="container">
          <h1 className={styles.title}>Гідроізоляція та види оздоблення басейну</h1>
          <div className={styles.articleinfo}>
            <div>
              <p className={styles.date}>Дата публікації: <time dateTime="2023-07-17">
                17 липня 2023</time>
              </p>
              <p className={styles.author}>Автор: Сергій Стародубов</p>
            </div>
            <Image className={styles.articleimg} src='/img/blog/author.jpg' alt='' title='' width={100} height={100} />
          </div>
        </div>
      </section>

      <section className={styles.blog}>
        <div className="container">
          <p>
            Як відомо, театр починається з вішалки, так само якісна гідроізоляція та обробка басейну неможлива без професійного виготовлення бетонної чаші.
          </p>
          <p>
            Якщо ми говоримо про бетонну чашу басейну, то вона має бути:
          </p>
          <ul className={styles.list}>
            <li>
              міцний – бетон має бути високого класу;
            </li>
            <li>
              монолітною – необхідно докласти всіх зусиль, щоб залити бетон за один день; будь-який шов у чаші загрожує нам у майбутньому тріщиною у оздоблювальному шарі;
            </li>
            <li>
              ідеально рівний - необхідно докласти максимум зусиль, щоб чашу залити спочатку рівною!
            </li>
          </ul>
          <p>
            Будь-які підрівнювання штукатурки, так звані "наліпки", загрожують нам додатковими проблемами, такими як: тріщинами, "бухтінням", відшаруваннями.
          </p>
          <div className={styles.img}>
            <figure>
              <Image src='/img/blog/page/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu-2.jpg' alt='Гідроізоляція та види оздоблення басейну' title='Гідроізоляція та види оздоблення басейну' width={580} height={418} />
            </figure>
            <figure>
              <Image src='/img/blog/page/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu-3.jpg' alt='Гідроізоляція та види оздоблення басейну' title='Гідроізоляція та види оздоблення басейну' width={580} height={418} />
            </figure>
          </div>

          <p>
            При заливанні бетонної чаші незамінними помічниками будівельнику будуть такі матеріали:
          </p>

          <ul className={styles.products}>
            <li>
              ПЛАСТИФІКАТОР “БІВЕТОЛ”
              <p>
                При додаванні в готовий бетон підвищує його рухливість. При цьому бетон не знижуватиме кінцеву міцність, оскільки зберігається вихідне водоцементне відношення.
              </p>
              <p>
                При приготуванні бетону знижує необхідну кількість води (знижує водоцементне відношення) без зниження рухливості суміші, тим самим збільшує кінцеву міцність.
              </p>
              <p>
                Уповільнює схоплювання бетону (менше робочих швів під час бетонування).
              </p>
              <p>
                Збільшує швидкість набору міцності бетону.
              </p>
              <p>
                Також застосовується як добавка пластифікатор цементних розчинів, ідеальний для влаштування "теплих підлог".
              </p>
            </li>
            <li>
              ФІБРОВОЛОКНО АРМУЮЧЕ
              <p>
                Збільшує морозостійкість. Мікроармування фіброю підвищує міцність на розрив бетону та розчинів.
              </p>
              <p>
                Знижує утворення усадкових мікротріщин.
              </p>
              <p>
                Підвищує зносостійкість та удароміцність бетонної поверхні.
              </p>
              <p>
                Збільшує водонепроникність бетону.
              </p>
              <p>
                Волоски фібри, що виступають на поверхні бетону, стяжки, штукатурки виконують роль мікроанкерів, який механічно з'єднують їх з наступним шаром обробки.
              </p>
            </li>
            <li>
              ЗМАЩЕННЯ ДЛЯ ОПАЛУБКИ “СПЛИТ 2000”
              <p>
                Це мастило для металевої та дерев'яної опалубки. Цей матеріал дає можливість виробництва бетону та облицювального бетону з гладкою непористою поверхнею. Запобігає іржі, консервує деревину, сумісний з полістиролом. Крім того, матеріал має такі властивості:
              </p>
              <p>
                Сильна антиадгезійна дія
              </p>
              <p>
                Не залишає слідів на поверхні бетону
              </p>
              <p>
                Забезпечує ідеальне зчеплення штукатурки та фарби з поверхнею бетону.
              </p>
            </li>
          </ul>

          <h2 className={styles.subtitle}>
            Важливо
          </h2>
          <p>
            Наступний момент на який слід звернути увагу – якщо басейн знаходиться в ґрунті, його зовнішню частину обов'язково необхідно захистити від ґрунтових вод. Для цих цілей найкраще підійде бітумно-поліуретанова гідроізоляція.
          </p>
          <div className={styles.img}>
            <figure>
              <Image src='/img/blog/page/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu-4.jpg' alt='Гідроізоляція та види оздоблення басейну' title='Гідроізоляція та види оздоблення басейну' width={580} height={418} />
            </figure>
            <figure>
              <Image src='/img/blog/page/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu-5.jpg' alt='Гідроізоляція та види оздоблення басейну' title='Гідроізоляція та види оздоблення басейну' width={580} height={418} />
            </figure>
          </div>

          <p>
            Гідроізоляція ІЗОФЛЕКС ПУ 560 БТ створює суцільний еластичний гідроізолюючий шар, без швів та стиків. Має чудову адгезію до різних типів поверхні: бетон, цементна стяжка, бітумні покриття. Застосовується для гідроізоляції підземних конструкцій, зелених покрівель, а також для нанесення під плитку в кухнях, ванних кімнатах, на балконах та терасах після попереднього посипання фінішного шару мембрани кварцовим піском.
          </p>
          <p>
            Створює суцільний еластичний гідроізолюючий шар, без швів та стиків.
          </p>
          <p>
            Має чудову адгезію до різних типів поверхні: бетон, цементне стягування, дерево, асфальтні покриття, а також сталеві поверхні.
          </p>
          <p>
            Перед нанесенням ISOFLEX-PU 560 BT поверхня не вимагає загладжування, крім того, матеріал можна наносити товстим шаром.
          </p>
          <p>
            Винятково практична, у зв'язку з простотою перемішування.
          </p>
          <p>
            Перекриває тріщини.
          </p>
          <p>
            Може бути використана і для герметизації швів.
          </p>

          <p>
            Далі дуже важливо якісно виконати гідроізоляцію всіх прохідних елементів.
          </p>
          <div className={styles.img}>
            <figure>
              <Image src='/img/blog/page/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu-6.jpg' alt='Гідроізоляція та види оздоблення басейну' title='Гідроізоляція та види оздоблення басейну' width={580} height={418} />
            </figure>
            <figure>
              <Image src='/img/blog/page/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu-7.jpg' alt='Гідроізоляція та види оздоблення басейну' title='Гідроізоляція та види оздоблення басейну' width={580} height={418} />
            </figure>
          </div>
          <p>
            Бентонітовий шнур призначений для ущільнення технологічних проміжків, що утворюються під час бетонування, переходів для комунікацій у будівельних перегородках та стиків конструкцій. Набухання шнура забезпечує довготривале ущільнення стику після проникнення води туди.
          </p>
          <p>
            Розміщення шнура в закритому бетонному просторі обмежує свободу набухання, а гель, що утворюється після гідратації, є відмінним активним водостійким бар'єром. Завдяки тиску набухання подряпини та тріщини в бетоні біля шнура наповнюються та ущільнюються.
          </p>
          <figure>
            <Image className={styles.image} src='/img/blog/page/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu-8.jpg' alt='Гідроізоляція та види оздоблення басейну' title='Гідроізоляція та види оздоблення басейну' width={418} height={418} />
          </figure>

          <p>
            Після того, як чаша виконана з дотриманням усіх перерахованих вище вимог, можна обговорити, яку обробку басейну ми хочемо бачити. І тут можливі різні варіанти:
          </p>

          <div className={styles.block}>
            <Image src='/img/blog/page/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu-9.jpg' alt='Гідроізоляція та види оздоблення басейну' title='Гідроізоляція та види оздоблення басейну' width={641} height={580}/>
            <h2>Оздоблення басейну плиткою або мозаїкою</h2>
          </div>

          <p>
            У такому разі перед укладанням плитки бетонну чашу необхідно обробити зсередини полімерцентною гідроізоляцією, а для укладання плитки або мозаїки застосувати якісний клей для плитки та затирання для швів.
          </p>

          <ul className={styles.products}>
            <li>
              "АКВАМАТ СУПЕРЕЛАСТІК"
              <p>
                2-компонентний, ультра гнучкий гідроізоляційний розчин, який наноситься на поверхню методом обмазки. Застосовується для гідроізоляції поверхонь, виготовлених з бетону, цементного розчину, цегли, мозаїки, гіпсокартону, дерева, металу. У випадках, де потрібна виняткова гнучкість та висока адгезія гідроізоляційного покриття. Для гідроізоляції поверхонь, які піддаються періодичному розширенню-стиску, вібрації.
                Також поверхонь або покритими волосяними тріщинами, або поверхні, де волосяні тріщини можуть з'явитися у процесі експлуатації. До таких поверхонь відносяться: плоскі покрівлі, тераси, балкони, надземні резервуари для зберігання води, плавальних басейнів, гідроізоляції підвалів як усередині, так і зовні, як для захисту від вологості, так і для захисту від води під тиском.
              </p>
            </li>
            <li>
              КЛЕЙ ДЛЯ ПЛИТКИ “BOTAMENT M21P” БІЛИЙ
              <p>
                BOTAMENT М21P являє собою еластичний високоякісний клейовий розчин, що застосовується для внутрішніх та зовнішніх робіт. Матеріал дуже легко обробляється створює гідравлічний, безусадковий зв'язок, стійок щодо атмосферних впливів, має допуск до води у басейнах.Предназначен для наклеивания потолочных и стеновых облицовочных плиток из глазурованной керамики, универсальных глазурованных плиток из керамической глины, клинкерных плиток. Раствор можно использовать для приклеивания строительных плит. Рекомендуется к применению на недеформируемых полах из бетона, легкого бетона, газобетона, на цементной и известково-цементной штукатурке, полнорасшивных стенах и бесшовных полах.
              </p>
            </li>
            <li>
              ЗАТИРКА ДЛЯ ПЛИТКИ “МУЛЬТИФІЛ СМАЛЬТО”
              <p>
                MULTIFILL SMALTO 0-8 – кольоровий полімерцементний розчин, призначений для заповнення міжплиткових швів. Має високу механічну міцність, відмінну стабільність кольорів і чудову водонепроникність. Містить спеціальні антибактеріальні компоненти, що оберігають шви від скупчення та впливу бактерій. Дозволяє досягти глянсової поверхні. Підходить для заповнення швів завширшки 1-8 мм.
              </p>
            </li>
          </ul>

          <div className={styles.block}>
            <Image src='/img/blog/page/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu-10.jpg' alt='Гідроізоляція та види оздоблення басейну' title='Гідроізоляція та види оздоблення басейну' width={570} height={551} />
            <h2>Другий варіант обробки покриття басейну – нанесення епоксидних або поліуретанових фарб.</h2>
          </div>

          <p>
            Епоксидна фарба застосовується як захисне та декоративне покриття будь-якої поверхні на цементній основі, такий як бетон, штукатурка, цементна стяжка. Поряд із цим, наноситься на металеві поверхні.
            Використовується у промислових приміщеннях, у лабораторіях, на складах, на виноробних заводах та інших підприємствах харчової промисловості, на заправках автотранспорту, СТО.
            Матеріал ідеальний як покриття для басейнів.
          </p>

          <ul className={styles.list}>
            <li>
              Двокомпонентна кольорова епоксидна система, що містить розчинники.
            </li>
            <li>
              Має високу міцність і стійкість до стирання.
            </li>
            <li>
              Стійок до впливу кислот, лугів, нафтопродуктів, розчинників, води стічної та морської, атмосферного осаду.
            </li>
          </ul>

          <div className={styles.block}>
            <Image src='/img/blog/page/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu/hidroizolyatsiya-i-vydy-ozdoblennya-baseynu-11.jpg' alt='Гідроізоляція та види оздоблення басейну' title='Гідроізоляція та види оздоблення басейну' width={560} height={497} />
            <h2>Третій, досить цікавий інноваційний метод оздоблення басейну МІКРОЦЕМЕНТОМ</h2>
          </div>

          <p>
            Мікроцемент – це сучасний, декоративно-оздоблювальний матеріал, дуже схожий на венеціанську штукатурку, лише набагато міцніший.
            В основному його використовують в обробці приміщень, а також для фінішного оздоблення поверхонь підлоги, сходових маршів, стільниць, консолей, предметів меблів та інших площин, де потрібна міцна фактура під бетон або безшовний камінь із чудовими експлуатаційними характеристиками.
          </p>
          <p>
            Але технології не стоять на місці, мікроцемент почали використовувати і для обробки басейнів.
          </p>

          <ul className={styles.products}>
            <li>

              МІКРОЦЕМЕНТ "ДЮРОКРЕТ-ДЕКО"
              <p>
                Мікроцемент полімерцементний армований фіброю розчин. Забезпечує відмінну адгезію до основи, гідроізоляцію та стійкість до стирання.
              </p>
              <p>
                Має широку сферу застосування та наноситься як усередині, так і зовні приміщень на стіни та підлогу, де існують певні естетичні вимоги. Застосовується у будинках, магазинах, лікарнях. Використовується для спеціальних вбудованих санітарно-гігієнічних виробів (раковини, душові)
              </p>
            </li>
            <li>
              КРАСНИК “ДЕКО КОЛОР”
              <p>
                Деко Колор – високоякісні неорганічні пігменти, що використовуються для фарбування цементних розчинів та бетону.
              </p>
              <p>
                Ідеальні для фарбування декоративних полімерцементних розчинів. Додаються в декоративні полімерцементні розчини DUROCRET-DECO і DUROCRET-DECOFINISH, а також у безліч інших розчинів на основі цементу, наприклад, самовирівнюються розчини FLOWCRET.
              </p>
              <p>
                Застосовуються як усередині, і зовні приміщень.
              </p>
            </li>
            <li>
              ЛАК ЗАХИСНИЙ “ВАНІШ ПУ 2К”
              <p>
                VARNISH-PU 2K – 2-компонентний прозорий поліруретановий аліфатичний лак.
              </p>
              <p>
                Лак двокомпонентний утворює на поверхні, на яку він нанесений, водонепроникне, стійке до впливу ультрафіолету покриття. Це покриття має високі механічні властивості та хімічну стійкість. Застосовується для гідроізоляції та захисту поверхні декоративної стяжки, бетону, натурального каменю, дерева, металевих поверхонь.
              </p>
              <p>
                Лак забезпечує стійкість до появи білості та вицвітання покриття під впливом ультрафіолету.
              </p>
            </li>
          </ul>
          <p>
            Приділивши пильну увагу кожному з перерахованих вище моментів, забезпечивши бездоганну якість виконання робіт, культуру виробництва та дотримання технологій – басейн стане не джерелом постійних проблем і переробок, а оазою задоволення для всієї родини!
          </p>
        </div>
      </section>
    </article>
  )
}

export default Article