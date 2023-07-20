
import Image from 'next/image';
import Help from './Help/Help';
import styles from './page.module.scss';

const Article = () => {
  return (
    <>
      <article>
        <section className={styles.head}>
          <div className="container">
            <h1 className={styles.title}>Як покращити розчин для цегляної кладки?</h1>
            <div className={styles.articleinfo}>
              <div>
                <p className={styles.date}>Дата публікації: <time dateTime="2023-07-20">
                  20 липня 2023</time>
                </p>
                <p className={styles.author}>Автор: Сергій Стародубов</p>
              </div>
              <Image className={styles.articleimg} src='/img/blog/author.jpg' alt='' title='' width={100} height={100}/>
            </div>
          </div>
        </section>

        <section className={styles.blog}>
          <div className="container">
            <h2 className={styles.subtitle}>
              Як муляру - професіоналу працювати краще і заробляти більше ?
            </h2>
            <p className={styles.text}>
              Свій шлях у будівництві я почав ще хлопчиськом з позиції "підсобник муляра".  Тому чудово знаю всі радощі та труднощі цього чудового процесу народження нових цегляних стін.
            </p>
            <p className={styles.text}>
              Від чого душа муляра співає?  Коли все налагоджено.  Ріштування  виставлено, матеріал заготовлений, підсобники моторні, розчин для кладки зручний та еластичний.  У таких умовах коли робота налагоджена, можна досягти високої швидкості.  "Гнати та гнати куби".  А т.к.  муляру платять за кількість покладеної цегли,це  значить заробляти більше.
            </p>
            <figure>
              <picture>
                <source type="image/webp" srcSet="/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/mulyar.webp" title="Як муляру - професіоналу працювати краще і заробляти" />
                <img src="/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/mulyar.jpg" width="1200" height="620" loading="lazy" alt="Як муляру - професіоналу працювати краще і заробляти" title="Як муляру - професіоналу працювати краще і заробляти" />
              </picture>
              <figcaption>
                Як муляру - професіоналу працювати краще і заробляти більше ?
              </figcaption>
            </figure>
            <p className={styles.text}>

            </p>
            <p className={styles.text}>
              А що стопорить роботу?  На мій погляд на першому місці стоїть млявий, неуважний підсобник.
            </p>
            <p className={styles.text}>
              А на другому поганий розчин для кладки.  Що таке поганий розчин?
            </p>
            <p className={styles.text}>
              Розчин, який "сідає" у відрі до того, як муляр встиг його використати.  Вода відокремлюється вгору, густа суміш осідає вниз і робота зупиняється.  Доводиться віддавати відро підсобнику, щоб.  перемішав і гаяти час.
            </p>
            <p className={styles.text}>
              Або розмішувати самому, але мішати розчин кельмою у відрі ще те заняття.  Хто мішав, той знає!
            </p>
            <p className={styles.text}>
              Здавна будівельники знайшли один секрет - додають рідке мило  чи пральний порошок.  Це надає еластичність розчинної суміші.
            </p>
            <p className={styles.text}>
              Але, послухайте, це було раніше!  Миючі засоби придумані для господині у ванній та нехай вони там і використовуються.
            </p>
            <p className={styles.text}>
              Будівельна наука вигадала вже спеціальні добавки саме для будівельних розчинів, які виключають усі побічні дії та значно покращують якість будівельних розчинів.  З однієї із таких добавок хочу познайомити Вас у цій статті.  Це "Домоліт", виробництва заводу ISOMAT(Греція).
            </p>

            <p className={styles.text}>
              Ця рідка мікроповітряна добавка залучає повітря до розчину і значно покращує його властивості.
            </p>

            <p className={styles.text}>
              Розчин з добавкою <span>"ДОМОЛІТ"</span> має наступні переваги:
            </p>

            <ul className={styles.list}>
              <li>
                Покращена адгезія:
                <p>
                  Розчин добре схоплюється з цеглою, що забезпечує високу міцність конструкції.
                </p>
              </li>
              <li>
                Покращена еластичність:
                <p>
                  Розчин стає дуже зручним у роботі, легко наноситься та розрівнюється.
                </p>
              </li>
              <li>
                Збереження стабільності розчину:
                <p>
                  Розчин не буде "сідати" і збереже свою консистенцію протягом тривалого часу, що дозволяє вам встигнути його використати.
                </p>
              </li>
              <li>
                Морозостійкість:
                <p>
                  Завдяки повітровтягненню розчин стає більш морозостійким, що є важливою характеристикою для будівельних робіт в холодній кліматичній зоні.
                </p>
              </li>
              <li>
                Відсутність висолів:
                <p>
                  Використання <span>"ДОМОЛІТ"</span> допомагає уникнути появи висолів на поверхні цегли, що є важливим для забезпечення естетичного вигляду будівельних конструкцій.
                </p>
              </li>
            </ul>
            <figure>
              <picture>
                <source type="image/webp" srcSet="/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/dobavka-domolit.webp" title="Домоліт" />
                <img src="/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/dobavka-domolit.jpg" width="496" height="620" loading="lazy" alt="Домоліт" title="Домоліт" />
              </picture>
              <figcaption>
                Одним з таких рішень є використання добавки - пластифікатора під назвою <span>"Домоліт"</span>
              </figcaption>
            </figure>

            <p className={styles.text}>
              Отже, використання ефективних рішень, таких як "ДОМОЛІТ", може значно полегшити роботу муляра - професіонала.
            </p>

            <p className={styles.text}>
              Ми достатньо давно поставляємо цей матеріал та постійно його використовуємо, тому з повною відповідальністю хочемо заохотити вас до використання його у своїй роботі.
            </p>
            
            <div className={styles.domolit}>
              <Image src='/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/domolit.png' alt='Domolit' title='Domolit' width={300} height={300} />
              <div className={styles.content}>
                <ul>
                  <li>
                    50 г DOMOLIT на 25 кг цементу.
                  </li>
                  <li>
                    Не містить хлоридів та інших
                    корозійних речовин.
                  </li>
                  <li>
                    Сертифікований з наявністю маркування CE
                    як повітрозалучальна добавка –
                    пластифікатор для розчинів кладок
                    відповідно до вимог стандарту EN 934-3:T2,
                    Сертифікат No.: 0906-CPR-02412007/02.
                  </li>
                  <li>
                    DOMOLIT поставляється у пластикових
                    контейнерах по 1 кг, 5 кг та 20 кг, а також у
                    бочках по 220 кг.
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.download}>
              <a className='btn' href="/tekhnichna-karta.pdf" download>Скачати технічну карту</a>
            </div>
          </div>
        </section>
      </article>
      <Help />
    </>
  )
}

export default Article;