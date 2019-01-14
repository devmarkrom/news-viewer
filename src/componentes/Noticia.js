import React from 'react';

const Noticia = (noticia) => {
    const {description, title, url, urlToImage, source} = noticia.noticia;
    return (
        <div className="col s6 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={urlToImage} alt={title} />
                    <span className="card-title">{source.name}</span>
                </div>
                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effects waves-light btn">
                        Leer más...
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Noticia;