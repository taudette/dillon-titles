import React from 'react';
import { connect } from 'react-redux';

const Titles = (props) => {
  console.log(props)
  return (
    <div>Container</div>
  )
}

const mapStateToProps = (state) => {
  return {
    titles: state.titles
  }
}


export default connect(mapStateToProps, null)(Titles)