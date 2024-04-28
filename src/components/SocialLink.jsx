
const SocialLink = ({ iconUrl }) => {
  return (
    <>
      <a className="bg-gradient-to-r from-white to-white bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-[position:50%_110%] bg-no-repeat transition-[background-size] duration-500 pb-3" href="#">
          <img src={iconUrl} alt="" />
      </a>
    </>
  )
}

export default SocialLink