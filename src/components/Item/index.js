import './index.css'

const Location = props => {
  const {details} = props
  const {id, name, image, description}=details

  return (
    <li className="itemcontainer">
      <img className="itemimg" src={image} alt={name} />
      <p>{name}</p>
      <p>{description}</p>
    </li>
  )
}
export default Location
