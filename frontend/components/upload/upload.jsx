import React from 'react';
import SearchBar from '../search/search_bar';
import { Link } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import { BeatLoader } from 'react-spinners';

class Upload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      url: null,
      loading: false,
      error: []
    };
  }

  handleFile(files) {
    this.setState({error: []});
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({file: file, url: fileReader.result});
    };
    if(file) {
      fileReader.readAsDataURL(file);
    }
  }

  upload(e) {
    if(this.state.file) {
      this.setState({loading: true});
      const formData = new FormData();
      formData.append('upload[business_id]', this.props.match.params.businessId);
      formData.append('upload[photo]', this.state.file);
      $.ajax({
        url: 'api/uploads',
        method: 'post',
        data: formData,
        contentType: false,
        processData: false
      }).then(
        window.setTimeout(() => {

          this.props.history.push(`/businesses/${this.props.match.params.businessId}`);
        }, 6000)
      );
    } else {
      this.setState({error: ['Please choose a file']});
    }
  }

  render() {
    const preview = this.state.url ? <img src={this.state.url}/> : null;
    return(
      <div className='upload-wrapper'>
        <div>
          <SearchBar />
          <BeatLoader loading={this.state.loading} />

          <Dropzone className='drop' multiple={false} accept="image/*" onDrop={this.handleFile.bind(this)} >
            {this.state.url ? (
              <div className="preview">
                <img src={this.state.url} />
                <span className="another">Not this one?</span>
              </div>
            ) : (
              <div className="upload-box">
                <h1>Drag and drop your photo</h1>
                <fieldset className="half-line">
                  <legend>OR</legend>
                </fieldset>
                <button>Browse Files</button>
              </div>
            )}
          </Dropzone>
          <div className='upload-btn'>
            <button style={{display: this.state.url ? "block" : "none"}} disabled={this.state.loading ? "true" : ""} type="submit" onClick={this.upload.bind(this)}>Finish</button>
          </div>
        </div>
        <div className='upload-pic'>
          <div className="single-pic">
            <img src="https://s3-media1.fl.yelpcdn.com/assets/2/www/img/882475dcd052/photo_upload/shaky.png" />
            <p>Refrain from posting shaky or out of focus photos.</p>
          </div>
          <div className="single-pic">
            <img src="https://s3-media1.fl.yelpcdn.com/assets/2/www/img/fa6ae3a94ca7/photo_upload/camera-flash.png" />
            <p>Your photos should be well lit and bright. Don’t be afraid to use the flash on your camera.</p>
          </div>
          <div className="single-pic">
            <img src="https://s3-media2.fl.yelpcdn.com/assets/2/www/img/5ac6cb0f2678/photo_upload/filters.png" />
            <p>If you’re applying filters, don’t overdo them. Subtlety is key.</p>
          </div>
          <div className="single-pic">
            <img src="https://s3-media4.fl.yelpcdn.com/assets/2/www/img/babf51178afb/photo_upload/biz-photos.png" />
            <p>Lastly, please only post photos of the business.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;
