import React from 'react'
import './Card.css'

function Card(props) {
    const { content, title, url, image } = props;
    return (
        <div className="col-md-4 mb-5">
            <div className="card text-center shadow">
                <div className="overflow">
                    <img src={image} alt="" className="card-img-top"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text text-secondary">{content}</p>
                    <a href={url} className="btn btn-outline-success" target='_blank' rel='noreferrer'>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Card
