import "./Profile.css";
import Edit from "../Components/Edit";
import MainLayout from "../Layout/MainLayout";
import { useState } from "react";
const Profile = () => {
  // const college = "IIT HYDERABAD";
  // const from = "2010";
  // const to = "2014";
  // const branch = "Btech";
  const college = "jiwaji university";
  const from = "2021";
  const to = "2023";
  const branch = "MCA";

  const desc =
    "Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris acarcu elit ipsum dolor sit amet consectetur";
  // const program = "Python";
  // const company = "Coding Ninjas";
  // const companyName = "Oruphones";
  const program = "java";
  const company = "IntersElite";
  const companyName = "Atiuttam tech";
  const duration = "3 month";
  const type = "Full-time";
  // const from_e = "2014";
  // const to_e = "2021";
  const from_e = "jul";
  const to_e = "sep";
  const position = "--Full Stack Developer[MERN]";
  const [open, setOpen] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);
  const [name, setName] = useState("rahul");
  const [email, setEmail] = useState("rahulrathore21000@gmail.com");
  const [phone, setPhone] = useState("+91 8370057351");
  // const [email, setEmail] = useState("rahul@oruphones.com");
  // const [phone, setPhone] = useState("+91 49652845732");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <MainLayout>
      <div className="back-blue-div">
        <p>MY PROFILE </p>
      </div>
      <div className="Profile-layout">
        <div className="section-1">
          <div className="profile-upload">
            <div>
              <img src="/Images/Ellipse 255.svg" alt="profile" />
            </div>
            <div>
              <button className="upload">Upload Photo</button>
            </div>
          </div>
          <div className="personal-info">
            <span>Your Name</span>
            <div className="div">
              <h4 className="name">{name}</h4>
              <button
                className="name-button editbuttons"
                onClick={() => setOpen(true)}
              >
                Edit
              </button>
              {open && (
                <div className="input-button">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                    <br />
                    <button onClick={() => setOpen(false)}>save</button>
                  </form>
                </div>
              )}
            </div>
            <span>Email</span>
            <div className="div">
              <h4 className="email">{email}</h4>
              <button
                className="name-button editbuttons"
                onClick={() => setOpenEmail(true)}
              >
                Edit
              </button>
              {openEmail && (
                <div className="input-button">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <br />
                    <button onClick={() => setOpenEmail(false)}>save</button>
                  </form>
                </div>
              )}
            </div>
            <span>Phone Number</span>
            <div className="div">
              <h4 className="phone">{phone}</h4>
              <button
                className="name-button editbuttons"
                onClick={() => setOpenPhone(true)}
              >
                Edit
              </button>
              {openPhone && (
                <div className="input-button">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    ></input>
                    <br />
                    <button onClick={() => setOpenPhone(false)}>save</button>
                  </form>
                </div>
              )}
            </div>
          </div>
          <div className="about">
            <div className="about-1">
              <h6>
                About <span>{name}</span>
              </h6>
              <Edit></Edit>
            </div>
            <p>
             i am mern stack developer and i have great passion for web development and created many web application and if you give me chance,i will do my my best
            </p>
          </div>
          <div className="skill">
            <div className="skill-1">
              <h6>Skills</h6>
              <Edit></Edit>
            </div>
            <ul className="scroll">
              {/* <li>Next Js</li>
              <li>Typescript</li> */}
              <li>mern stack</li>
              <li>javascript</li>
              <li>html</li>
              <li>css</li>
              <li>php</li>
              <li>java</li>
              <li>mysql</li>
              <li>mongodb</li>
              <li>boostrap</li>
              <li>jquery</li>
              
            </ul>
          </div>
        </div>
        <div className="section-2">
          <div className="profession">
            <img src="/Images/Stars.svg" alt="double-star" />
            <h6>Professional Details</h6>
            <p>This are the professional details shown to users in the app.</p>
          </div>
          <div className="certificate">
            <div className="certificate-1">
              <h6>Certifications</h6>
              <Edit></Edit>
            </div>
            <div className="program-and-company">
              <img src="Images/Vector.svg" alt="star-vector" />
              <h6>{program}</h6>
              <p>{company}</p>
            </div>
          </div>
          <div className="experience">
            <div className="experience-1">
              <h6>Experience</h6>
              <Edit></Edit>
            </div>
            <div className="company-profile">
              {/* <img src="/Images/image 13.svg" alt="company-logo" /> */}
              <div className="duration-and-type">
                <pre>
                  {" "}
                  {duration}({from_e}-{to_e}) {type}
                </pre>
              </div>
              <div className="company-and-position">
                <pre>
                  {" "}
                  {companyName} {position}
                </pre>
              </div>
            </div>
          </div>

          <div className="education">
            <div className="education-1">
              <h6>Education</h6>
              <Edit></Edit>
            </div>
            <div className="clg-group">
              <div className="college">{college} </div>
              <div className="clg">
                <div className="duration">
                  ({from}-{to})
                </div>
                <div className="branch">{branch}</div>
              </div>
              <div className="description">{desc}</div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
