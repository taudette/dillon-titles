import React from 'react';

const renderTitle = (title) => {
  console.log(title)
  let imagePath = 'https://d2snwnmzyr8jue.cloudfront.net/{artKey}_270.jpeg'.replace('{artKey}', title.artKey)
  return(
    <div key={title.titleId}>
      <img className="image" src={imagePath} alt={title.title} height="300" width="207"/>
      <p>
        {title.title}<br/>
        {title.artistName ? title.artistName : 'artist unknown'}
      </p>
    </div>
  )
}


const TitlesComponent = (props) => {
  return (
    <div className="images">
      <section>
        { props.titles.map(title => renderTitle(title)) }
      </section>
    </div>
  )
}

export default TitlesComponent