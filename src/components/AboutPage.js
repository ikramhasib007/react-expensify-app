import React from 'react';
import {Link} from 'react-router-dom';

const AboutPage = () => (
  <div>
    <div className="jumbotron jumbotron-fluid p-0">
      <div className="container row m-0 p-0">
        <div className="card col-md-4 p-0 rounded-0 my--5">
          <img
            className="card-img-top rounded-0"
            src="assets/resume/img/profile.jpg"
            alt="Card image cap"
            height= "100%"/>
        </div>
        <div className="col-md-8 p-4">
          <div className="bs-callout bg-white bs-callout-primary mt-0">
            <h5>Software Developer</h5>
            <h6>SCT-Bangla Limited, Banasree, Dhaka.</h6>
            <p className="lead">Uses Technology: PHP, Laravel, AngularJS (1x), Javascript</p>
          </div>
          <div className="d-flex justify-content-around mt-2">
              <a href="https://www.facebook.com/ikramhasib007" target="_blank"><i className="fab fa-facebook fa-3x"></i></a>
              <a href="https://www.linkedin.com/in/ikram-ud-daula/" target="_blank" className="text-info"><i className="fab fa-linkedin fa-3x"></i></a>
              <a href="https://github.com/ikramhasib007" target="_blank" className="text-dark"><i className="fab fa-github-square fa-3x"></i></a>
              <a href="https://stackoverflow.com/users/5461148/ikram-ud-daula" className="text-warning" target="_blank"><i className="fab fa-stack-overflow fa-3x"></i></a>
              <a href="https://www.dropbox.com/s/ucatbh14ymlqplh/IKRAM-UD-DAULA_CV_NEW.pdf?dl=0" title="CV" className="text-secondary" target="_blank"><i className="fas fa-user-circle fa-3x"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div className="bs-callout bg-light bs-callout-success mt-0">
      <h4 className="font-weight-bold">Expensify Project Build By Using</h4>
      <p className="lead text-dark">
        <strong className="pr-1">React.js,</strong>
        <strong className="p-1">Redux,</strong>
        <strong className="p-1">Firebase,</strong>
        <strong className="p-1">ES6</strong>
      </p>
    </div>
  </div>
);

export default AboutPage;