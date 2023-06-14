import Image from 'next/image';
import styles from '../sekreti-yak-polehshyty-zhyttya-mulyaru/page.module.scss';

const Article = () => {
  return(
    <article>
      <section className={styles.head}>
        <div className="container">
          <h1>REMMERS – цікаві факти про компанію</h1>
          <p>Дата публікації: <time dateTime="2023-02-06">
            06 лютого 2023</time>
          </p>
          <p>Автор: Сергій Стародубов</p>
        </div>
      </section>

      <section className={styles.blog}>
        <div className="container">
          <h2>Remmers – Збереження цінностей через інновації</h2>
          <p> Наше знайомство з компанією Remmers розпочалося у 2002 році на будівельній виставці в Харкові.Тоді ми шукали рішення для реставрації Харківської хоральної синагоги, пам 'ятника архітектури, і натрапили на чудовий буклет європейського заводу "Remmers". Наша компанія запропонувала технологію очищення та реставрації і виграла тендер, враховуючи девіз компанії – "Створювати цінності. Зберігати цінності. Remmers."</p>

           <p>Remmers була заснована в 1949 році Бернхардом Реммерсом, і починала свою діяльність з поширення антисептиків для дерева та лакофарбової продукції. Засновник компанії вкладав багато часу в дослідження та інновації, щоб створити якісні матеріали. Вже в 50-х роках він не тільки постачав матеріали, але і проводив семінари та обмінювався досвідом з фахівцями у будівельній галузі.
           </p>

           <figure>
            <picture>
              <source type="image/webp" srcSet="/img/blog/page/remmers-tsikavi-fakty-o-kompaniyi/bernhard-remmers.webp" title="Бернард Римерс - засноник групи компаній Remmers"/>
              <img src="/img/blog/page/remmers-tsikavi-fakty-o-kompaniyi/bernhard-remmers.jpg" width="451" height="651" loading="lazy" alt="Бернард Римерс - засноник групи компаній Remmers" title="Бернард Римерс - засноник групи компаній Remmers"/>
            </picture>
            <figcaption>
              Бернард Римерс - засноник групи компаній Remmers
            </figcaption>
           </figure>

          <p>
            У 1996 році була заснована Академія Бернхарда Реммерса як інформаційна платформа для професіоналів у галузі архітектури та реставрації. Це стало місцем обміну знаннями та інноваційними підходами в цій сфері.
          </p>

          <p>
            У 2011 році Remmers заснувала найбільший логістичний центр у Європі, що займає близько 17 200 квадратних метрів. Цей центр забезпечує ефективну організацію постачання та складування продукції Remmers.
          </p>

          <figure>
            <picture>
              <source type="image/webp" srcSet="/img/blog/page/remmers-tsikavi-fakty-o-kompaniyi/logistika-remmers.webp" title="Логістичний центр Remmers"/>
              <img src="/img/blog/page/remmers-tsikavi-fakty-o-kompaniyi/logistika-remmers.jpg" width="1200" height="616" loading="lazy" alt="Логістичний центр Remmers" title="Логістичний центр Remmers"/>
            </picture>
            <figcaption>
              Логістичний центр Remmers
            </figcaption>
           </figure>

          <p>
            У 2015 році було створено інститут Bernhard Remmers, який став компетентним партнером з аналітики будівельних матеріалів та досліджень. Інститут має сучасну дослідну лабораторію та продуктивне обладнання для проведення різних видів випробувань.
          </p>

          <figure>
            <picture>
              <source type="image/webp" srcSet="/img/blog/page/remmers-tsikavi-fakty-o-kompaniyi/labalatoriya-remmers.webp" title="Інститут Bernhard Remmers"/>
              <img src="/img/blog/page/remmers-tsikavi-fakty-o-kompaniyi/labalatoriya-remmers.jpg" width="1200" height="616" loading="lazy" alt="Інститут Bernhard Remmers" title="Інститут Bernhard Remmers"/>
            </picture>
            <figcaption>
              Лабалаторія Bernhard Remmers
            </figcaption>
           </figure>

          <p>
            Загалом, компанія Remmers є визнаним лідером у своїй галузі завдяки своєму досвіду, якості продукції та постійному розвитку інноваційних рішень. Вони зберігають цінності, створюють високоякісні будівельні матеріали та допомагають зберегти історичну спадщину.
          </p>

        </div>
      </section>
    </article>
  )
}

export default Article;