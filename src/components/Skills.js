import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import devOpsImage from "../assets/img/azure-devops-svgrepo-com.svg";
import colorSharp from "../assets/img/color-sharp.png";
import expressImage from "../assets/img/express-svgrepo-com.svg";
import gitHubImage from "../assets/img/github-color-svgrepo-com.svg";
import javaScriptImage from "../assets/img/javascript-logo-svgrepo-com.svg";
import nodeJsImage from "../assets/img/nodejs-icon-svgrepo-com.svg";
import reactImage from "../assets/img/react-svgrepo-com.svg";
import reduxImage from "../assets/img/redux-svgrepo-com.svg";
import testingImage from "../assets/img/testing-methodologies-svgrepo-com.svg";
import typescriptImage from "../assets/img/typescript-official-svgrepo-com.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <br/>
                        <Carousel responsive={responsive} infinite={true}  className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={reactImage} style={{ height:"100px"}} alt="Image" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={nodeJsImage} style={{ height:"100px"}} alt="Image" />
                                <h5>Node js</h5>
                            </div>
                            <div className="item">
                                <img src={typescriptImage} style={{ height:"100px"}} alt="Image" />
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                                <img src={reduxImage} style={{ height:"100px"}} alt="Image" />
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                                <img src={javaScriptImage} style={{ height:"100px"}} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={expressImage}  style={{ height:"100px"}} alt="Image" />
                                <h5>ExpressJS</h5>
                            </div>
                            <div className="item">
                                <img src={gitHubImage} style={{ height:"100px"}} alt="Image" />
                                <h5>Git | Github</h5>
                            </div>
                            <div className="item">
                                <img src={devOpsImage} style={{ height:"100px"}} alt="Image" />
                                <h5>DevOps</h5>
                            </div>
                            <div className="item">
                                <img src={testingImage} style={{ height:"100px"}} alt="Image" />
                                <h5>Unit Testing (Enzme, JEST) | Integration Testing | E2E Testing (Playwright)</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
