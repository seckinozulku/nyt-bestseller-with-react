import './Details.scss'
const Details = () => {

    const item = JSON.parse(localStorage.getItem('setDetails'))
  return (
    <div className='details-wrapper'>
    <div className="cover">
    <div className="book">
        <label htmlFor="page-1" className="book__page book__page--1">
            <img className="book_image" src={item.book_image} alt=""/>
        </label>

        <label htmlFor="page-2" className="book__page book__page--4">
            <div className="page__content">
                <div className="page__content-blockquote">
                    <p className="page__content-blockquote-text description">{item.description}</p>
                </div>
                <div className="page__number">3</div>
            </div>
        </label>

         {/* Resets the page  */}
        <input type="radio" name="page" id="page-1" />

        {/* Goes to the second page */}
        <input type="radio" name="page" id="page-2" />
        <label className="book__page book__page--2">
            <div className="book__page-front">
                <div className="page__content">
                    <h1 className="page__content-title">{item.rank}</h1>
                    <h1 className="page__content-book-title">{item.title}</h1>
                    <h2 className="page__content-author">{item.author}</h2>

                    <p className="page__content-credits">
                        Created by
                        <span>Seckin Ozulku</span>
                    </p>
                    <div className="page__content-copyright">
                        <p className="publisher">{item.publisher}</p>
                    </div>
                </div>
            </div>
            <div className="book__page-back">
                <div className="page__content">
                    <h1 className="page__content-title-buy">Buy</h1>
                    <div className="page__number">2</div>
                </div>
            </div>
        </label>
    </div>
</div>

</div>
  )
}

export default Details