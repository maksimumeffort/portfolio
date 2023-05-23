import "./AboutSection.modules.scss";

export const AboutSection = () => {
  const textArray = [
    "Hi I'm Alex, a full stack developer with background in digital marketing and law.",
    " I have passion for helping people and problem solving.",
    "I aim to create human-centered solutions that make a difference by putting the user experience at the forefront of everything I do.",
  ];

  return (
    <div className="about">
      <section className="about__text ">
        <h3>About Me</h3>
        {textArray.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </section>
    </div>
  );
};
