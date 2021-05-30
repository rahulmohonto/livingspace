import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="sContainer">
      <div className="pt-4 sFlex">
        <div>
          <h1 className="" style={{ marginTop: '100px', fontSize: '50px', color: '#fff', fontWeight: 'bold' }}>Subscribe to our newsletter</h1>
        </div>
        <div className="col">
          <input className="" style={{ width: '100%', border: 'none', padding: '20px', color: 'lightgray' }} type="email" name="email" defaultValue="Enter your email address" id="" />
          <input style={{ border: 'none', padding: '20px' }} className="bg-primary text-white px-5 mt-3" type="submit" value="Subscribe" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
