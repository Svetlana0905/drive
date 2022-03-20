import './sideBar.scss'
import { Link } from 'react-router-dom'
import { useToggle } from '../../hooks/useToggle'
import { Language } from '../Language/Language'
import { Burger } from '../Burger/Burger'
import { IconBlock } from '../IconsBlock/IconsBlock'
import { LinksData } from '../../data/LinksData'

export const SideBar = () => {
  const [isVisible, toggleVisible] = useToggle(false)

  return (
    <section className={isVisible ? 'sidebar open' : 'sidebar'}>
      <Burger toggleVisible={toggleVisible} isVisible={isVisible} />
      {isVisible && (
        <div className="sidebar__content">
          {LinksData.map((item) => (
            <Link to={item.link} className="sidebar__link" key={item.title}>
              {item.title}
            </Link>
          ))}
          <IconBlock />
        </div>
      )}
      <Language isVisible={isVisible} />
    </section>
  )
}