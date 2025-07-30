import UserClass from "./class/UserCalss";
import User from "./User";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>This is a About Page</p>
      <User name={"Vikas (Function-Component)"} location = {"Bilaspur"} />
      <UserClass name={"Vikas (Class-Component)"} location = {"Hydrabad"} />
    </div>
  );
};

export default About;
