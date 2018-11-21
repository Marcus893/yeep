import React from 'react';

class ImgBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgStart: 0,
      imgEnd: 3
    };
    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.removeCenter = this.removeCenter.bind(this);
    this.addCenter = this.addCenter.bind(this);
  }

  nextImg() {
    if (this.state.imgEnd === this.props.photos.length) return;
    this.setState({
      imgStart: this.state.imgStart + 1,
      imgEnd: this.state.imgEnd + 1
    });
  }

  prevImg() {
    if (this.state.imgStart === 0) return;
    this.setState({
      imgStart: this.state.imgStart - 1,
      imgEnd: this.state.imgEnd - 1
    });
  }

  removeCenter(e) {
    const center = document.getElementsByClassName('center')[0];
    center.classList.remove('center');
  }

  addCenter() {
    const center = document.getElementsByClassName('img')[1];
    center.classList.add('center');
  }

  render() {
    return(
      <div className="pic-box">
        <div className='img-box'>
          {this.props.photos.slice(this.state.imgStart, this.state.imgEnd)
            .map((p, i) => {
              if (p) {
                if (i === 1) {
                  return (
                    <div key={i} className='img center'>
                      <img src={p.url}/>
                    </div>
                  );
                }
                return (
                  <div key={i}
                    className='img'
                    onMouseOver={this.removeCenter}
                    onMouseOut={this.addCenter}>
                    <img src={p.url}/>
                  </div>
                );
              }
            })
          }
        </div>
        <button className='prev' onClick={this.prevImg}>
          <i className="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
        <button className='next' onClick={this.nextImg}>
          <i className="fa fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default ImgBox;
