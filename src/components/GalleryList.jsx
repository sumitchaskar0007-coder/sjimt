import React, { useEffect, useState } from "react";
import axios from "axios";

const GalleryList = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/gallery")
      .then(res => setGallery(res.data));
  }, []);

  return (
    <div>
      {gallery.map((g) => (
        <img
          key={g._id}
          src={`http://localhost:5000/uploads/${g.image}`}
          alt=""
          width="150"
        />
      ))}
    </div>
  );
};

export default GalleryList;
