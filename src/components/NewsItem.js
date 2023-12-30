import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div>
                <div className="card my-3" >

                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%'}}>
                        {source}
                        <span className="visually-hidden">unread messages</span>
                    </span>

                    <img src={!imageUrl ? "https://img.etimg.com/thumb/msid-102335890,width-1070,height-580,imgsize-27316,overlay-etmarkets/photo.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">by {!author ? "Unknown" : author}  on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem