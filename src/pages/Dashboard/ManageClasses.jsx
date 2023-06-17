import React, { useEffect, useState } from "react";
import ManageClassCard from "./ManageClassCard";
import Swal from "sweetalert2";

const ManageClasses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://design-xcel-server.vercel.app/instructorClasses")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-6 ">
      {data.map((item) => (
        <ManageClassCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default ManageClasses;
