import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.svg";
import meter7 from "../assets/img/meter7.svg";
import meter8 from "../assets/img/meter8.svg";
import meter9 from "../assets/img/meter9.svg";
import meter10 from "../assets/img/meter10.svg";
import meter11 from "../assets/img/meter11.svg";
import meter12 from "../assets/img/meter12.svg";
import meter13 from "../assets/img/meter13.svg";
import meter14 from "../assets/img/meter14.svg";
import meter15 from "../assets/img/meter15.svg";
import meter16 from "../assets/img/meter16.svg";
import meter17 from "../assets/img/meter17.svg";
import meter18 from "../assets/img/meter18.svg";
import meter19 from "../assets/img/meter19.svg";
import meter20 from "../assets/img/meter20.svg";
import meter21 from "../assets/img/meter21.svg";
import meter22 from "../assets/img/meter22.svg";
import meter23 from "../assets/img/meter23.svg";
import meter24 from "../assets/img/meter24.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

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
                        <p>I hold a Bachelor of Science degree in Informatics with a concentration in cybersecurity from the University of Louisiana at Lafayette. I have a keen interest in AI automation and machine learning projects. I am currently pursuing several certifications related to cybersecurity and cloud computing. Additionally, I possess experience in iOS application development using Xcode and SwiftUI, as well as developing custom penetration testing tools in Python. Below is a list of programming languages and software tools that I am most familiar with.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>PHP</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Perl</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>Kali</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>Docker</h5>
                            </div>
                            <div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>Nmap</h5>
                            </div>
                            <div className="item">
                                <img src={meter12} alt="Image" />
                                <h5>Wireshark</h5>
                            </div>
                            <div className="item">
                                <img src={meter13} alt="Image" />
                                <h5>Metasploit</h5>
                            </div>
                            <div className="item">
                                <img src={meter14} alt="Image" />
                                <h5>JohnTheRipper</h5>
                            </div>
                            <div className="item">
                                <img src={meter15} alt="Image" />
                                <h5>Splunk</h5>
                            </div>
                            <div className="item">
                                <img src={meter16} alt="Image" />
                                <h5>Nessus</h5>
                            </div>
                            <div className="item">
                                <img src={meter17} alt="Image" />
                                <h5>Ansible</h5>
                            </div>
                            <div className="item">
                                <img src={meter18} alt="Image" />
                                <h5>Visual Studio Code</h5>
                            </div>
                            <div className="item">
                                <img src={meter19} alt="Image" />
                                <h5>Burp Suite</h5>
                            </div>
                            <div className="item">
                                <img src={meter20} alt="Image" />
                                <h5>Kubernetes</h5>
                            </div>
                            <div className="item">
                                <img src={meter21} alt="Image" />
                                <h5>Aircrack-ng</h5>
                            </div>
                            <div className="item">
                                <img src={meter22} alt="Image" />
                                <h5>Swift</h5>
                            </div>
                            <div className="item">
                                <img src={meter23} alt="Image" />
                                <h5>Xcode</h5>
                            </div>
                            <div className="item">
                                <img src={meter24} alt="Image" />
                                <h5>SAFe Agile</h5>
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
