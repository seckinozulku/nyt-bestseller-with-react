import { useNavigate } from 'react-router-dom';

const Card = ({ data }) => {
    const navigate = useNavigate();

    const handleStorage = (localItem) => {
        localStorage.setItem('setDetails' , JSON.stringify(localItem))
        navigate('details');
    }

    return (
        <>
            {data?.results?.books?.map((item, index) => {
                return (
                    <div className='books-card' key={index}>
                        <h2 className='rank'> {item.rank} </h2>
                        <img onClick={() => handleStorage(item)} className='books-image' src={item.book_image} alt="" />
                        <h2 className='title'> {item.title}</h2>
                        <p className='author'> {item.author}</p>
                        <p className='description'>{item.description}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Card