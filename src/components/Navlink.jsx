/* eslint-disable react/prop-types */
const Navlink = ({name}) => {
  return (
    <li>
        <a className='pb-3 text-white bg-gradient-to-r from-white to-white bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-[position:50%_110%] bg-no-repeat transition-[background-size] duration-500' href="#">{name}</a>
    </li>
  )
}

export default Navlink