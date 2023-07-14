import Form from '@/components/form/Form'
import styles from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Help from '@/components/help/Help'

const Article = () => {
  return (
    <>
      <article>
        <section className={styles.head}>
          <div className="container">
            <h1 className={styles.title}>
              Особливості бетонування у літню спеку
            </h1>
            <p className={styles.date}>Дата публікації: <time dateTime="2023-03-13">
              13 березня 2023</time>
            </p>
            <p className={styles.author}>Автор: Сергій Стародубов</p>
          </div>
        </section>

        <div className="blog">
          <div className="container">
            <div className={styles.descr}>
              <p>
                Про особливості зимового бетонування розповідають достатньо часто. І ми також.
                {/* <Link className={styles.link} href='#'>Посилання на статью</Link> */}
              </p>
              <p>
                А от про особливості бетонування у літню спеку, на наш погляд, говорять дуже мало.
              </p>
              <p>
                А даремно. Високі температури шкодять бетону не менш, ніж низькі.
              </p>
              <p>
                У будівництві, як у будь-якій іншій галузі існує багато мифів.
              </p>
              <p>
                і на будівельних майданчиках часто можна почути думку,  що при спеці бетон стає міцнішим.
              </p>
              <p>
                Однак, це черговий будівельний міф. В реальності,  відбувається навпаки.
              </p>
            </div>
            <Image className={styles.img} src='/img/blog/page/osoblyvosti-betonuvannya-u-litnyu-speku/osoblyvosti-betonuvannya-u-litnyu-speku-1.jpg' alt='' title='' width={1000} height={667}/>
            <div className={styles.descr}>
              <p>
                Під час бетонування за спеки, вода з бетону швидко випаровується, не маючи можливості належним чином взаємодіяти з цементом. Як наслідок, співвідношення води до цементу (те саме В/Ц) змінюється .
              </p>
              <p>
                Це призводить до зменшення міцності бетону або розчину.
              </p>
            </div>

            <div className={styles.descr}>
              <p>
                Але як можна запобігти цим негативним наслідкам?
              </p>
              <p>
                Організувати належним чином догляд за свіжоукладеним бетоном, або розчином.
              </p>
              <p>
                Раніш для цього використовували мішковину, якою укривали бетон та періодично зволожували.
              </p>
              <p>
                Зараз використовують накриття полієтіленовою плівкою.
              </p>
              <p>
                Які мінусі ціх варіантів?
              </p>
              <p>
                Мішковини ми вже давно не бачили на будівництві. Зволожувати часто забувають.  Плівка задирається вітром чи ногами і на місце її вже ніхто не повертає.
              </p>
              <p>
                І БЕТОН, той самий матеріал, до виробництва якого  треба ставитися поважно і ретельно, як до виховання людини ( про це ми казали у іншій статті)   залишається кинутим на призволяще.
              </p>
            </div>
            <Image className={styles.img} src='/img/blog/page/osoblyvosti-betonuvannya-u-litnyu-speku/osoblyvosti-betonuvannya-u-litnyu-speku-2.jpg' alt='' title='' width={640} height={480} />
            <div className={styles.descr}>
              <p>
                Секрет успіху полягає в застосуванні ТЕХНОЛОГІЇ КОНСЕРВАЦІЇ ВОЛОГИ В СВІЖОУКЛАДЕНОМУ БЕТОНІ нанесенням на поверхню  спеціальної рідини з полімерного латексу.
              </p>
              <p>
                Ця рідина наноситься розпилювачем або щіткою на поверхню свіжого бетону відразу після початку схоплювання (без утворення калюжок) та створює латексну мембрану, яка запобігає швидкому випаровуванню вологи.
              </p>
              <p>
                Бетон залишається немов би законсервованим під цією  мембраною , і вода  має достатньо часу для взаємодії з цементом .
              </p>
              <p>
                Усі процеси тужавіння і набору міцності  протікають належним чином і бетон набуває очікуваної міцності та характеристик, які були закладені ще на стадії виробництва.
              </p>
              <p>
                А бетон, до виробництва якого ви поставилися поважно, віддячить вам якістю, міцністю і тривалим терміном служби!
              </p>
            </div>
            
            <div className={styles.descr}>
              <p>
                Запам'ятайте, що правильне застосування цієї ТЕХНОЛОГІЇ дозволить досягти оптимальних результатів при будівництві з використанням бетону, особливо в умовах літньої спеки.
              </p>
            </div>
            <Image className={styles.img} src='/img/blog/page/osoblyvosti-betonuvannya-u-litnyu-speku/osoblyvosti-betonuvannya-u-litnyu-speku-3.jpg' alt='' title='' width={1200} height={600} />
            <div className={styles.descr}>
              <p>
                Довіртеся професіоналам та використовуйте науково підтверджені методи для досягнення максимальної якості ваших будівельних проектів.
              </p>
              <p>
                Ця стаття носить і інформаційний і рекламний характер. Ми з радістю продамо вам цей матеріал у нашому відділу продажів «БЮРО БУДІВЕЛЬНОЇ ХІМІЇ» та надамо вам додаткову консультацію.
              </p>
            </div>

            <div className={styles.descr}>
              <p>
                Щоб замовити натискайте кнопку ЗАМОВИТИ.
              </p>
            </div>
            <Image className={styles.img} src='/img/blog/page/osoblyvosti-betonuvannya-u-litnyu-speku/osoblyvosti-betonuvannya-u-litnyu-speku-4.jpg' alt='' title='' width={1000} height={668} />
            <div className={styles.descr}>
              <p>
                Ми хочемо вас заохотити на якісніше будівництво та увагу до деталей. Тому отримайте 10% знижку, просто сказавши  промокод "Я планую бетонувати у спеку" нашому менеджеру.
              </p>
            </div>
          </div>
        </div>
      </article>
      <Help/>
    </>
  )
}

export default Article