import React from 'react';

const renderTitle = (title) => {
  let imagePath = 'https://d2snwnmzyr8jue.cloudfront.net/{artKey}_270.jpeg'.replace('{artKey}', title.artKey)
  console.log(title)
  return(
    imagePath, title.titleId &&
    <li key={title.titleId}>
      <img className="image" src={imagePath} alt={title.title} />
      <div className="details">
        <h3>{title.title ? title.title : 'title unknown'}</h3>
        <p className="image-author">{title.artistName ? title.artistName : 'artist unknown'}</p>
      </div>
    </li>
  )
}

const TitlesComponent = (props) => {
  return (
    <div>
      <ul className="image-list-small">
        { props.titles.map(title => renderTitle(title)) }
      </ul>
    </div>
  )
}

export default TitlesComponent