import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.png";
import netflix from "../../Assets/Projects/netflix.png";
import instagram from "../../Assets/Projects/instagram.png";
import burger from "../../Assets/Projects/burger.png";
import faculty from "../../Assets/Projects/faculty.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>I've worked on.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-Do"
              description="A MERN stack web application that lets users to build and manage to-do lists. To add, change, or delete todos, the user must first login. Automated the CI/CD workflow using Github actions."
              link="https://to-do-mern-stack.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix Clone"
              description="A Netflix clone with dynamic content of movies divided into different categories. When you click on any title, it will play a trailer from a YouTube source embedded underneath the title."
              link="https://netflix-clone-23c53.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={instagram}
              isBlog={false}
              title="Instagram Clone"
              description="A clone for Instagram with authentication implemented with firebase. It allows users to post photos with captions after logging in. Everyone has access to the posted posts and can leave comments on any of them"
              link="https://instagram-clone-61f1f.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={burger}
              isBlog={false}
              title="Burger Builder"
              description="Deployed a single-page React Js application that allows users to design a real-time burger and make an order. Client-side form validation and backend firebase authentication are used for authentication. Orders will be shown on the My Orders page once they have been successfully placed. React Js, Firebase, Redux, and React Hooks are among the technologies utilized."
              link="https://burger-builder-dc8ee.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faculty}
              isBlog={false}
              title="Faculty Companion"
              description="The primary goal of my Android application is to eliminate paper waste in the attendance procedure at my institution.
              Faculty may log in and take, change, and post attendance from their mobile devices, as well as check their calendar for the
              day and post assignments to individual classes.
              Students must log in with their student id to access their assignments, attendance %, and compute their GPA.
              The teacher may also monitor students' attendance, which aids in the grading process."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
