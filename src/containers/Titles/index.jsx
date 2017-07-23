import React from 'react';
import { connect } from 'react-redux';
import TitlesComponent from '../../components/Titles'

const TitlesContainer = (props) => {
  return (
    <TitlesComponent titles={props.titles} />
  )
}

const mapStateToProps = (state) => {
  return {
    titles: state.titles
  }
}

export default connect(mapStateToProps, null)(TitlesContainer)