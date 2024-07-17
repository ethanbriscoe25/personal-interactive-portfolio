import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HeartFill } from "react-bootstrap-icons";

export const Projects = () => {

  const projects = [
    {
      title: "Connect 4",
      description: "AI Game Development",
      imgUrl: projImg1,
      href: "https://github.com/ethanbriscoe25/ai-connect4",
    },
    {
      title: "Flappy Bird",
      description: "AI Game Development",
      imgUrl: projImg2,
      href: "https://github.com/ethanbriscoe25/ai-flappy-bird-v1.0",
    },
    {
      title: "Pocket Billiards",
      description: "Game Creation",
      imgUrl: projImg3,
      href: "https://github.com/ethanbriscoe25/pocket-billiards",
    },
    {
      title: "Space Invaders",
      description: "Game Creation",
      imgUrl: projImg4,
      href: "https://github.com/ethanbriscoe25/space-invaders-v1.0",
    },
    {
      title: "Duck Hunt",
      description: "Game Creation",
      imgUrl: projImg5,
      href: "https://github.com/ethanbriscoe25/duck-hunt-v1.0",
    },
    {
      title: "TETRIS",
      description: "Game Creation",
      imgUrl: projImg6,
      href: "https://github.com/ethanbriscoe25/tetris-v1.0",
    },
  ];

  const mlprojects = [
    {
      title: "Shoe Bot",
      description: "Machine Learning",
      imgUrl: projImg7,
      href: "https://github.com/ethanbriscoe25/shoe-bot-v1.0",
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below is a collection of individual projects I have developed, encompassing a variety of applications from simple games to Linux tools. These projects are also available on my GitHub page. I encourage you to visit and follow my GitHub for further details. More projects will be added soon!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Video Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Machine Learning</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Pentest Tools</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          mlprojects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More projects coming soon...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
