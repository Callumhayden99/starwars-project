import { useState } from "react";

function Signup() {
 
  const getLocalStorageValue = (key, defaultValue) => {
    return localStorage.getItem(key) || defaultValue;
  };

  
  const [userDetails, setUserDetails] = useState({
    username: getLocalStorageValue("username", ""),
    email: getLocalStorageValue("email", ""),
    password: getLocalStorageValue("password", ""),
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => {
      const newDetails = { ...prevDetails, [name]: value };
      localStorage.setItem(name, value); 
      return newDetails;
    });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Details Saved!");
  };

  return (
    <>
      <div className="signup-form">
        <h2 className="signup-title">Join the Galaxy</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userDetails.username}
              onChange={handleChange}
              placeholder="Jedi Master"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userDetails.email}
              onChange={handleChange}
              placeholder="jedi@force.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userDetails.password}
              onChange={handleChange}
              placeholder="●●●●●●●"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
      <div className="image-div">
      <img
        className="join-empire"
        src="https://www.imperialofficer.com/forum/uploads/monthly_2021_03/large.JoinEmpireBecomeStormtrooper.jpg.ff3e04084b813c40d956d8c844a51fb1.jpg"
        width={450}
        alt="join the empire"
      ></img>

      <img
        className="join-rebellion"
        src="https://pm1.aminoapps.com/7508/fb86cc51545de192a74380913f4a1c4215950ba8r1-449-683v2_uhq.jpg"
        width={450}
        alt="join the rebellion"
      ></img>
      </div>
    </>
  );
}

export default Signup;
