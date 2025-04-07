import './menu.module.css'

export const Menu = (props) => {
  return(
    <nav className='menu'>
    <p><a href="#s1">{props.s1}</a></p>
    <p><a href="#s2">{props.s2}</a></p>
    <p><a href="#s3">{props.s3}</a></p>
  </nav>
  )
}