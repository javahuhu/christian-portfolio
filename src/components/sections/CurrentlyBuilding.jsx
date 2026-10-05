import { Arrow } from '../ui/Arrow'
import { currentWork } from '../../data/portfolioData'
import './CurrentlyBuilding.css'

export function CurrentlyBuilding({ onOpen }) {
  return (
    <button className="building-strip" type="button" onClick={onOpen}>
      <span className="building-strip__status"><i/>Currently Building</span>
      <span className="building-strip__project">
        <b>{currentWork.title}</b>
        <small>{currentWork.description}</small>
      </span>
      <Arrow />
    </button>
  )
}
