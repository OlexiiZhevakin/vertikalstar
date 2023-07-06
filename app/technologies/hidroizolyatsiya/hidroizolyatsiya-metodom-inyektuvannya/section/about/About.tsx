import styles from './about.module.scss'

const About = () => {
  return(
    <section className={styles.about}>
      <div className="container">
        <h2>
          У більшості випадків ці проблеми є наслідком капілярного підйому вологи по стінах.
        </h2>
        <div className={styles.inner}>
          <div className={styles.item}>
            <div className={styles.img}>
              <picture>
                <source type="image/webp"
                  srcSet="/img/technologies/page/hidro/hssmi/block_about/shlyakh-pidyomu-volohy.webp" title="Шлях підйому вологи"/>
                <img src="/img/technologies/page/hidro/hssmi/block_about/shlyakh-pidyomu-volohy.jpg" alt="На цьому фото показано шлях підйому вологи"
                  width="600" height="500" loading="lazy" title="Шлях підйому вологи"/>
              </picture>
            </div>
            <div className={styles.info}>
              <h3>
                Що таке капілярний підйом вологи?
              </h3>
              <div>
                <p>
                  Капілярний підйом - це підйом вологи з грунту по капілярах стін (на фото цей шлях зображено стрілкою з
                  цифрою 1).
                </p>
                <p>
                  Волога, піднімаючись з грунту, досягає рівня першого поверху та приносить з собою неприємності,
                  описані вище.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <div className={styles.info}>
              <h3>
                Чому це сталося?
              </h3>
              <div>
                <p>
                  Захист від капілярного підйому вологи повинен вирішуватися ще на етапі будівництва виконанням
                  горизонтальної гідроізоляції, як показано на фото.
                </p>
                <p>
                  За всіма існуючими нормами виконання горизонтальної гідроізоляції є обов’язковим.
                </p>
                <p>
                  Але, на жаль, дуже часто при новому будівництві її не роблять, або роблять недостатньо якісно та
                  професійно.
                </p>
                <p>
                  Або, якщо ми говоримо про стару будівлю, можливо така гідроізоляція була виконана, але під впливом
                  часу зруйнувалася.
                </p>
              </div>
            </div>
            <div className={styles.img}>
              <picture>
                <source media="(min-width: 768px)" type="image/webp"
                  srcSet="/img/technologies/page/hidro/hssmi/block_about/shlyakh-zakhystu-vid-pidyomu-volohy.webp" title="Шлях підйому вологи"/>
                <img src="/img/technologies/page/hidro/hssmi/block_about/shlyakh-zakhystu-vid-pidyomu-volohy.jpg"
                  alt="На цьому фото показано шлях захисту від підйому вологи" width="600" height="500" loading="lazy"
                  title="Шлях захисту від підйому вологи"/>
              </picture>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About