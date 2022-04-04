import './buttons.scss'
import { useToggle } from '../../hooks/useToggle'

export const LangButton = () => {
  const [lang, toggleLang] = useToggle(false)
  return (
    <button onClick={toggleLang} className="language-btn">
      {lang ? 'RU' : 'ENG'}
    </button>
  )
}
export const ArrowButtonSlider = ({ handleClick, styleArr }) => {
  return <button onClick={handleClick} className={styleArr} />
}
export const ClearInputButton = ({ clearInput }) => {
  return <button onClick={clearInput} className="clear-input" />
}
export const ButtonPrice = ({ handleClick, disabled, text }) => {
  const classess = disabled ? 'btn-price btn-price__disabled' : 'btn-price'
  return (
    <button onClick={handleClick} disabled={disabled} className={classess}>
      {text}
    </button>
  )
}
export const RadioInput = ({ value, text, name, onClick }) => {
  return (
    <label className="radio">
      <span className="radio__span text">{text}</span>
      <input
        className="radio__input"
        type="radio"
        onClick={onClick}
        name={name}
        value={value}
      />
      <span className="radio__box"></span>
    </label>
  )
}
export const Checkbox = ({ label, textInput, getText, clearInput }) => {
  return (
    <label className="input-text__inner">
      <span>{label}</span>
      <input
        onChange={(e) => {
          getText(e.target.value)
        }}
        value={textInput}
        type="checkbox"
        className="input-text"
      />
      {textInput && <ClearInputButton clearInput={clearInput} />}
    </label>
  )
}
