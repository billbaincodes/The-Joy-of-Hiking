import React from "react";
import headshot from "../assets/trailbill.jpg";

const About = () => {
  return (
    <div className="about-page">
      <img src={headshot} alt="site author" />
      <h2>About Me</h2>
      <p>
        I grew up hiking the foothills of the Appalachian mountains and have
        recently graduated to the Rockies. I believe hiking is one of the most
        rewarding activities that you can participate in. The physical demands
        of hiking, especially uphill for extended distances, makes it a great
        form of exercise. It strengthens the muscles in your legs and is an
        excellent source of cardio. As far as sports and activities go, it's
        also one of the most accessible. It's open to almost every age group,
        and it's dirt cheap. All you need to get started is a pair of good shoes
        and plenty of water!
      </p>
      <p>
        Even though hiking is a great source of exercise, it's also much more
        than that. We all need to escape the stresses of our everyday lives and
        hiking is one of the best ways to do just that. The beauty of nature and
        the solitude of being alone on the trail make for a combination that few
        other activities can offer. I hope to bring some of the beauty of nature
        to you and hopefully give you some good advice and suggestions on where
        and how to start hiking yourself.
      </p>
      <h4>Web Development</h4>
      <p>
        I built this website, if you like it and want to check out my other
        projects or get into contact with me, please use the links below!
      </p>
      <div className="link-list">
        <div>
          <a target="blank" href="https://www.linkedin.com/in/billbaincodes/">
            LinkedIn
          </a>
        </div>
        <div>
          <a target="blank" href="https://github.com/billbaincodes/">GitHub</a>
          </div>
          <div>
          <a href="mailto:billbaincodes@gmail.com">
            Email
          </a>
          </div>
      </div>
    </div>
  );
};

export default About;
