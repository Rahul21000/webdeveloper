import "./Profile.css";
import Edit from "../Components/Edit";
import MainLayout from "../Layout/MainLayout";
import { useState } from "react";
// import { MyContext } from "../MyContext";

const Profile = () => {
  const program = "java";
  const company = "IntersElite";
  const companyName = "Atiuttam tech";
  const duration = "3 month";
  const type = "Full-time";
  const from_e = "jul";
  const to_e = "sep";
  const position = "--Full Stack Developer";
  const [open, setOpen] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openPhone, setOpenPhone] = useState(false);
  const [name, setName] = useState("Rahul Rathore");
  const [email, setEmail] = useState("rahulrathore21000@gmail.com");
  const [phone, setPhone] = useState("+91 8370057351");
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
            <div className="img_div">
              <img
                className="profile_image"
                src="/Images/rahul_image.jpg"
                alt="profile"
              />
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
              Hi,I am mern stack developer and i have great passion for web
              development and created many web application and if you give me
              chance,i will do my my best
            </p>
          </div>

          {/* skill */}
          <div className="skill">
            <div className="skill-1">
              <h6>Skills</h6>
              <Edit></Edit>
            </div>
            <ul className="scroll">
              {/* <li>Next Js</li>
              <li>Typescript</li> */}
              <li>React.js</li>
              <li>Redux</li>
              <li>Express.js</li>
              <li>Node.js</li>
              <li>Html</li>
              <li>Css</li>
              <li>Core java</li>
              <li>mysql</li>
              <li>Mongodb</li>
              <li>Mysql</li>
              <li>boostrap</li>
            </ul>
          </div>
        </div>
        <div className="section-2">
          <div className="profession">
            <img src="/Images/Stars.svg" alt="double-star" />
            <h5>More skill</h5>
            <p>
              <b>tool</b> Git & Github
            </p>
            <p>
              <b>Server</b> Apache server
            </p>
            <p>
              {" "}
              <pre>
                <b>IDE</b> Vscode . Ecllipes
              </pre>
            </p>
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

          {/* Experience */}
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
                     technology-React js 
                     position-Associate developer
              </div>
            </div>
          </div>

          <div className="education">
            <div className="education-1">
              <h6>Education</h6>
              <Edit></Edit>
            </div>
            <div className="clg-group">
              <div className="college">jiwaji university</div>
              <div className="clg">
                <div className="duration">(2021-2023)</div>
                <div className="branch">MCA</div>
                <div className="duration">Marks</div>
                <div className="branch">7.0 cgpa</div>
              </div>
              <div className="college">Govt. S.L.P college </div>
              <div className="clg">
                <div className="duration">(2017-2020)</div>
                <div className="branch">Bsc</div>
                <div className="duration">Marks</div>
                <div className="branch">53%</div>
              </div>
              <div className="description"></div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
