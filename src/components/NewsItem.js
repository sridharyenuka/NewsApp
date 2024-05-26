import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div className="my-3">
        <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'70%',zIndex:'1'}}>{source}
          
            </span>
          <img src={!imageUrl?"https://techcrunch.com/wp-content/uploads/2021/12/GettyImages-1197511920.jpg?resize=1200,800":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
      
    )
  }
}

export default NewsItem
