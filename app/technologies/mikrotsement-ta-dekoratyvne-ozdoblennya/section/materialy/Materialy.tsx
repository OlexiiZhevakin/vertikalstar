import Image from 'next/image'
import styles from './materialy.module.scss'


const Materialy = () => {
  return (
    <section className={styles.container}>
      <div className="container">
        <h2 className={styles.title}>
          При технології мікроцементу застосовуються наступні матеріали:
        </h2>
        <div className={styles.block}>
          <h3 className={styles.subtitle}>Ґрунтовки</h3>

          <div className={styles.items}>
            <div className={styles.item}>
              <Image src='/img/technologies/page/microcement/materialy/uni-primer.jpg' alt='uni-primer' title='uni-primer' height={250} width={250} />
              <div className={styles.content}>
                <h3 className={styles.itemtitle}>uni-primer</h3>
                <div className={styles.descr}>
                  <p>
                    Водяна акрилова грунтовка
                  </p>
                </div>
                <div className={styles.info}>
                  <p>Витрати: 100-200 г/м2</p>
                  <p>Упаковка: 1 кг, 5 кг та 20 кг</p>
                </div>
                <div className={styles.download}>
                  <Image className={styles.icon} src='/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/file-pdf-solid.svg' alt='Скачати тех карту' title='Скачати тех карту' width={30} height={30} />
                  <a className='btn' href="/tekhnichna-karta.pdf" download>Скачати тех карту</a>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <Image src='/img/technologies/page/microcement/materialy/isomat-supergrund.jpg' alt='isomat-supergrund' title='isomat-supergrund' height={250} width={250} />
              <div className={styles.content}>
                <h3 className={styles.itemtitle}>isomat-supergrund</h3>
                <div className={styles.descr}>
                  <p>
                    Грунтовка – адгезія для надання жорсткості гладким і невбираючим поверхням
                  </p>
                </div>
                <div className={styles.info}>
                  <p>Витрати: 100-200 г/м2</p>
                  <p>Упаковка:5 кг та 20 кг</p>
                </div>
                <div className={styles.download}>
                  <Image className={styles.icon} src='/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/file-pdf-solid.svg' alt='Скачати тех карту' title='Скачати тех карту' width={30} height={30} />
                  <a className='btn' href="/tekhnichna-karta.pdf" download>Скачати тех карту</a>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <Image src='/img/technologies/page/microcement/materialy/epoxyprimer-w.jpg' alt='epoxyprimer-w' title='epoxyprimer-w' height={250} width={250} />
              <div className={styles.content}>
                <h3 className={styles.itemtitle}>epoxyprimer-w</h3>
                <div className={styles.descr}>
                  <p>
                    2-компонентна епоксидна ґрунтовка на водній основі
                  </p>
                </div>
                <div className={styles.info}>
                  <p>Витрати: 200-300 г/м2</p>
                  <p>Упаковка: 110 кг (A+B)</p>
                </div>
                <div className={styles.download}>
                  <Image className={styles.icon} src='/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/file-pdf-solid.svg' alt='Скачати тех карту' title='Скачати тех карту' width={30} height={30} />
                  <a className='btn' href="/tekhnichna-karta.pdf" download>Скачати тех карту</a>
                </div>
              </div>
            </div>
            
          </div>

        </div>

        <div className={styles.block}>
          <h3 className={styles.subtitle}>Стартовій слой мікроцементу</h3>
          <div className={styles.items}>
            <div className={styles.item}>
              <Image src='/img/technologies/page/microcement/materialy/durocret-deco-flex.jpg' alt='DUROCRET DECO FLEX' title='DUROCRET DECO FLEX' height={350} width={350} />
              <div className={styles.content}>
                <h3 className={styles.itemtitle}>durocret-deco-flex</h3>
                <div className={styles.descr}>
                  <p>
                    2-компонентна епоксидна ґрунтовка на водній основі
                  </p>
                </div>
                <div className={styles.info}>
                  <p>Витрати: 1,5 кг/м2/мм товщини кулі.</p>
                  <p>Упаковка: мішки по 25 кг.</p>
                </div>
                <div className={styles.download}>
                  <Image className={styles.icon} src='/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/file-pdf-solid.svg' alt='Скачати тех карту' title='Скачати тех карту' width={30} height={30} />
                  <a className='btn' href="/tekhnichna-karta.pdf" download>Скачати тех карту</a>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <Image src='/img/technologies/page/microcement/materialy/durocret-deco.jpg' alt='DUROCRET DECO' title='DUROCRET DECO' height={350} width={350} />
              <div className={styles.content}>
                <h3 className={styles.itemtitle}>durocret-deco</h3>
                <div className={styles.descr}>
                  <p>
                    2-компонентна епоксидна ґрунтовка на водній основі
                  </p>
                </div>
                <div className={styles.info}>
                  <p>Витрати: 1,5 кг/м2/мм товщини шару.</p>
                  <p>Упаковка: мішки по 25 кг.</p>
                </div>
                <div className={styles.download}>
                  <Image className={styles.icon} src='/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/file-pdf-solid.svg' alt='Скачати тех карту' title='Скачати тех карту' width={30} height={30} />
                  <a className='btn' href="/tekhnichna-karta.pdf" download>Скачати тех карту</a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className={styles.block}>
          <h3 className={styles.subtitle}>Фінішний слой мікроцементу</h3>
          <div className={styles.items}>
            <div className={styles.item}>
              <Image src='/img/technologies/page/microcement/materialy/durocret-deco-finish.jpg' alt='DUROCRET DECO FINISH' title='DUROCRET DECO FINISH' height={350} width={350} />
              <div className={styles.content}>
                <h3 className={styles.itemtitle}>durocret-deco-finish</h3>
                <div className={styles.descr}>
                  <p>
                    Дрібнозернисте кольорове мікроцементне покриття для підлоги та стін.
                  </p>
                </div>
                <div className={styles.info}>
                  <p>Витрати: 1,4 кг/м2/мм товщини шару.</p>
                  <p>Упаковка: мішки по 25 кг.</p>
                </div>
                <div className={styles.download}>
                  <Image className={styles.icon} src='/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/file-pdf-solid.svg' alt='Скачати тех карту' title='Скачати тех карту' width={30} height={30} />
                  <a className='btn' href="/tekhnichna-karta.pdf" download>Скачати тех карту</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <h3 className={styles.subtitle}>Гідроізоляція та захист</h3>
          <div className={styles.items}>
            <div className={styles.item}>
              <Image src='/img/technologies/page/microcement/materialy/varnish-pu-2k.jpg' alt='uni-primer' title='uni-primer' height={250} width={250} />
              <div className={styles.content}>
                <h3 className={styles.itemtitle}>varnish-pu 2k</h3>
                <div className={styles.descr}>
                  <p>
                    2-компонентний прозорий поліуретановий лак
                  </p>
                  <p>
                    Глянець и матовий
                  </p>
                </div>
                <div className={styles.info}>
                  <p>Витрати: 100-200 г/м2</p>
                  <p>Упаковка: (A+B) 1 кг і 5 кг</p>
                </div>
                <div className={styles.download}>
                  <Image className={styles.icon} src='/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/file-pdf-solid.svg' alt='Скачати тех карту' title='Скачати тех карту' width={30} height={30} />
                  <a className='btn' href="/tekhnichna-karta.pdf" download>Скачати тех карту</a>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <Image src='/img/technologies/page/microcement/materialy/varnish-pu-2kw.jpg' alt='uni-primer' title='uni-primer' height={250} width={250} />
              <div className={styles.content}>
                <h3 className={styles.itemtitle}>varnish-pu 2kw</h3>
                <div className={styles.descr}>
                  <p>
                    2-компонентний прозорий поліуретановий лак
                  </p>
                </div>
                <div className={styles.info}>
                  <p>Витрати: 100-200 г/м2</p>
                  <p>Упаковка: (A+B) 1 кг і 5 кг</p>
                </div>
                <div className={styles.download}>
                  <Image className={styles.icon} src='/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/file-pdf-solid.svg' alt='Скачати тех карту' title='Скачати тех карту' width={30} height={30} />
                  <a className='btn' href="/tekhnichna-karta.pdf" download>Скачати тех карту</a>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <Image src='/img/technologies/page/microcement/materialy/vs-w.jpg' alt='uni-primer' title='uni-primer' height={250} width={250} />
              <div className={styles.content}>
                <h3 className={styles.itemtitle}>vs-w</h3>
                <div className={styles.descr}>
                  <p>
                    Акриловий лак на водній основі
                  </p>
                </div>
                <div className={styles.info}>
                  <p>Витрати: 150-200 мл/м2</p>
                  <p>Упаковка: 1 л, 5 л і 20 л</p>
                </div>
                <div className={styles.download}>
                  <Image className={styles.icon} src='/img/blog/page/5-sekretiv-yak-polehshyty-zhyttya-mulyaru/file-pdf-solid.svg' alt='Скачати тех карту' title='Скачати тех карту' width={30} height={30} />
                  <a className='btn' href="/tekhnichna-karta.pdf" download>Скачати тех карту</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.block}>
          <h3 className={styles.subtitle}>
            Колорування
          </h3>
          <p className={styles.subtext}>
            Порошкові пігменти ISOMAT DECO COLOR - це високоякісні неорганічні барвники для фарбування цементних розчинів та бетону. Вони дозволяють отримати безліч відтінків кольорів.
          </p>

          <div className={styles.items}>
            <div className={styles.item}>
              <Image src='/img/technologies/page/microcement/materialy/isomat-deco-color.jpg' alt='isomat deco color' title='isomat deco color' height={250} width={250} />
              <div className={styles.content}>
                <h3 className={styles.itemtitle}>isomat deco color</h3>
                <div className={styles.info}>
                  <p>Витрати: залежить від кольору.</p>
                  <p>Упаковка: пластикові контейнери 250 г.
                    У контейнері 5 пакетів пігменту по 50 г.</p>
                  <p>
                    Поставляються у 10 базових кольорах, які поєднуються між собою для отримання потрібного відтінку.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Materialy