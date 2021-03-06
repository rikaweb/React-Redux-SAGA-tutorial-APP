import React from 'react';
import { connect } from 'react-redux'


const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const dataStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
}
const errorMessage = {
  color: 'red'
}

let NewsItem = ({ data }) => (
  data ?
  
    <data style={dataStyle} >
      <h1>{data.name}</h1>
      {data.username && <h2 style={errorMessage}>{data.error}</h2>}
      {data.title && <div>
        <h1>{data.username}</h1>
        <img style={imgStyle} src={data.urlToImage} alt="" />
        <h2>{data.username}</h2>
        <a href={data.url} target="_blank">READ MORE</a>
      </div>}
    </data> :
    "hi"
);

const mapStateToProps = (state) => ({
  data: state.news,
})

NewsItem = connect(
  mapStateToProps,
  null
)(NewsItem)

export default NewsItem;


