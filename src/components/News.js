import React, {useEffect , useState} from 'react'
import NewsItem from './NewsItem'
import Glowing from './spinner'
import PropTypes from 'prop-types'


const News = (props) => {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // document.title = `NewsPunk - ${props.category}`;

    useEffect(() => {
        getCases()
    }, []);
    const getCases = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a7c3f89f9f41461492c97235340a4ab6&page=1&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }

    const handlePrevClick = async () => {
        console.log("previous")
        console.log("next")
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a7c3f89f9f41461492c97235340a4ab6&page=${page - 1}&pageSize=${props.pageSize}`;
        setLoading(true);//data milra hai loading true 
        let data = await fetch(url);
        let parsedData = await data.json();
            setPage(page - 1)
            setArticles(parsedData.articles);
            setLoading(false);
    }

    const handleNextClick = async () => {
        console.log("next")
        if (!(page + 1 > Math.ceil(totalResults / props.pageSize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a7c3f89f9f41461492c97235340a4ab6&page=${page + 1}&pageSize=${props.pageSize}`;
            setLoading(true);//data milra hai loading true 
            let data = await fetch(url);
            let parsedData = await data.json();
            setPage(page + 1)
            setArticles(parsedData.articles);
            setLoading(false);
        }
    }


        return (
            <div className="container my-3">
                <h1 className='text-center' style={{marginTop: '90px'}}>NewsPunk - Top Headlines</h1>

                {loading && <Glowing/>}

                <div className="row my-3">
                    {!loading && articles.map((element) => {//agar loading nii chalri tab dikhao
                        console.log({element})
                        return <div className='col-md-4' key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-outline-dark" onClick={handlePrevClick}>&larr; Previous</button>
                    <button  type="button" className="btn btn-outline-dark" onClick={handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
}


News.defaultProps = { //function ka naam.propTypes
    country: 'in',
    pageSize: 5,
    category: 'general'
}
News.propTypes = { //function ka naam.propTypes
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News