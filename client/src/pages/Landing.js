import React from "react";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

//components
import {Logo} from "../components"

function Landing() {
  return (
    <Wrapper>
      <main>
        <nav>
          <Logo/>
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              Job <span>Tracking</span> app
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              repudiandae, perferendis culpa animi officiis dignissimos mollitia
              id delectus ex omnis. Nam repudiandae quos necessitatibus
              doloremque quis, sunt aperiam vero beatae obcaecati iste modi et
              non, laborum ex enim. Voluptates veniam quidem porro ducimus
              suscipit, dicta error autem, odio molestiae sapiente laudantium
              non vel nihil in. Voluptates doloribus consequatur, quod culpa
              recusandae dolores labore aspernatur omnis nam fuga! Earum libero
              voluptate voluptatem, repellendus tenetur dolorem voluptatibus
              omnis harum veritatis. Minima praesentium, porro temporibus
              assumenda harum iusto veritatis! Magni incidunt nobis pariatur
              mollitia earum sint exercitationem quod labore totam? Adipisci,
              aspernatur quos!
            </p>
            <button className="btn btn-hero">Login/Register</button>
          </div>
          <img src={main} alt="job hunt" className="img main-img" />
        </div>
      </main>
    </Wrapper>
  );
}

export default Landing;
