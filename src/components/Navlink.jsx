/* eslint-disable react/prop-types */
const Navlink = ({name}) => {
  return (
    <li>
        <a className='text-white hover:underline transition-all ease-in duration-200' href="#">{name}</a>
    </li>
  )
}

export default Navlink