import './startScreen.scss'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import { LinkBtnBig } from '../Links/links'

export const StartScreen = () => {
  return (
    <section className="start--screen">
      <Header homeStyle={'header'} />
      <div className="start--screen__content">
        <div className="start--screen__inner">
          <h1 className="start--screen__title">
            Каршеринг <br />
            <nobr>
              <span className="start--screen__green">Need for drive</span>
            </nobr>
          </h1>
          <h2 className="start--screen__subtitle">
            Поминутная аренда авто твоего города
          </h2>
        </div>
        <LinkBtnBig text="Забронировать" link="order" />
      </div>
      <Footer />
    </section>
  )
}
