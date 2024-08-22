import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { Spinner } from "react-bootstrap";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component"

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const capittalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    
    const updateNews=async()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let response = await fetch(url);
        props.setProgress(30);
        let data = await response.json();
        props.setProgress(70);
        setArticles(data.articles)
        setTotalResults(data.totalResults)
        setLoading(false)
        
        props.setProgress(100);
    }

    useEffect(()=>{
        document.title = `${capittalizeFirstLetter(props.category)}- NewsMonkey`;
        updateNews();
        // eslint-disable-next-line
    },[])

    // const handlePrevClick = async () => {
    // setPage(page-1)
    // updateNews();
    // };
    // const handleNextClick = async () => {
    // setPage(page+1)
    // updateNews();
    // };

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let response = await fetch(url);
        let data = await response.json();
        setArticles(articles.concat(data.articles))
        setTotalResults(data.totalResults)
        
    }

    
        return (
            <>
                <h1 className="text-center" style={{ margin: "35px 0px", marginTop:'90px'}}>News Now - Top {capittalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <InfiniteScroll className="text-center"
                    dataLength={articles.length} //This is important field to render the next data
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults} 
                    loader={articles.length === totalResults ? "" : "Loading..."}
                // {<Spinner/>}
                >
                    <div className="container">
                        <div className="row">
                            {/* {!loading && */}
                            {articles.map((element) => {
                                return (
                                    <div className="col-md-3" key={element.url}>
                                        <NewsItem
                                            title={element.title ? element.title.slice(0, 45) : ""}
                                            description={
                                                element.description
                                                    ? element.description.slice(0, 88)
                                                    : ""
                                            }
                                            imageurl={element.urlToImage}
                                            newsurl={element.url}
                                            author={element.author}
                                            date={element.publishedAt}
                                            source={element.source.name}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
        <button
        disabled={page <= 1}
        type="button"
        className="btn btn-dark mx-3"
        onClick={handlePrevClick}
        >
        &larr; Previous
        </button>
        <button
        disabled={
            page + 1 >
            Math.ceil(totalResults / props.pagesize)
        }
        type="button"
        className="btn btn-dark"
        onClick={handleNextClick}
        >
        Next &rarr;
        </button>
    </div> */}
            </>
        );
    
}


// News.defaultProps = {
//     country: "in",
//     pageSize: 8,
//     category: "general",
// };
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
};
export default News;
