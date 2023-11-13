import { Component } from 'react';
import { connect } from 'react-redux';
import { collectAllImg } from '../redux/action';

class ImagePart extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    console.log('fetxh ucun', this.props);
    const fethingData = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=$mountain&client_id=cMfOWDJ9dpbDwILKLjXER9g8V6Ngp2STUD5lDDpjzOI`
    );
    const result = await fethingData.json();
    console.log('netice:', result);
    this.props.getAllImages(result);
  }

  async componentDidUpdate(prevState, prevProps) {
    console.log('prevstate', prevState);
    console.log('prevpeops', prevProps);
    if (this.props.imgType !== prevState.imgType) {
      console.log('fetxh ucun', this.props);
      const fethingData = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${this.props.imgType}&client_id=cMfOWDJ9dpbDwILKLjXER9g8V6Ngp2STUD5lDDpjzOI`
      );
      const result = await fethingData.json();
      console.log('netice:', result);
      this.props.getAllImages(result);
    }
  }
  render() {
    console.log('state', this.props);
    const images = this.props.img.results?.map((item) => {
      return (
        <div className="img-card">
          <img src={item.urls.small_s3} alt="" />
        </div>
      );
    });

    return (
      <div className="images">
        <h3> {this.props.imgType} Pictures</h3>
        <div className="imgContainer">{images}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    img: state.imgCollection,
    imgType: state.typeOfImg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllImages: (images) => {
      dispatch(collectAllImg(images));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagePart);
