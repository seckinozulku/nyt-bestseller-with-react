const Header = ({handleChange , date}) => {
  return (
    <div className='header-input'>
        <h1>New York Times Best Seller</h1>
        <input onChange={handleChange} type={"date"} value={date} />
    </div>
  )
}

export default Header