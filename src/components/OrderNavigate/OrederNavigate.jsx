import './orderNavigate.scss'
import { NavLinksData } from '../../data/NavLinksData'
import { backStep } from '../../redux/orderSlice'
import { useDispatch, useSelector } from 'react-redux'

export const OrderNavigate = () => {
  const page = useSelector((state) => state.order.numberPage)
  const dispatch = useDispatch()

  const navName = 'nav-link'
  const getClass = (id, linkId) => {
    if (id < linkId) return `${navName} ${navName}__disabled`
    else if (id === linkId) return `${navName} ${navName}__active`
    else return navName
  }

  return (
    <nav className="nav">
      <div className="nav__inner">
        {NavLinksData.map((item, index) => (
          <button
            type="button"
            key={index}
            className={getClass(index, page)}
            disabled={index > page + 1}
            onClick={(e) => {
              dispatch(backStep(index))
            }}>
            {item.title}
          </button>
        ))}
      </div>
    </nav>
  )
}
