import React, { useEffect } from "react";
import "../index.css";
import { useSearchParams, useLocation } from "react-router-dom";
import axios from "axios";

function SelectedPage() {
  const {
    state: { data },
  } = useLocation();
  console.log(data);

  useEffect(() => {}, []);

  return (
    <div style={{ padding: 15 }}>
      <h3 style={{ fontSize: 19 }}>{data?.post_title}</h3>
      <div className="divOfImg">
        <img
          width={"100%"}
          src={data?.post_image?.full_image_url}
          alt="img link not found"
        />
      </div>
      <div className="divOfName">
        {data?.post_category?.map((e, i) => {
          return <div style={{ color: "#3822B2" }}>{e?.cat_name} |</div>;
        })}

        <h5>By {data?.author_name}</h5>
        <h6 style={{ color: "#3822B2" }}>{data?.publish_date}</h6>
      </div>
      <div className="divOfLastP">
        <h5 style={{ padding: 10, fontWeight: 500, fontSize: 15 }}>
          {data?.short_description}
        </h5>
      </div>
    </div>
  );
}

export default SelectedPage;
