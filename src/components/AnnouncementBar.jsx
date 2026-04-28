import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AnnouncementBar.css";

export default function AnnouncementBar() {
  const [ann, setAnn] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/announcements/")
      .then(res => setAnn(res.data))
      .catch(err => console.log(err));
  }, []);

  if (ann.length === 0) return null;

  return (
    <div className="announcement-wrapper">
      <div className="announcement-slider">
        {ann.map(item => (
          <div key={item.id} className="announcement-item">
            <strong>{item.title}:</strong> {item.message}
          </div>
        ))}
      </div>
    </div>
  );
}
