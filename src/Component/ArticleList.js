import React from "react";
import { BSpan } from "bootstrap-4-react";
import { useNavigate, createSearchParams } from "react-router-dom";

function ArticleList({ data }) {
  var navigate = useNavigate();

  const boxStyle = {
    display: "inline-block",
    width: "13rem",
    height: "6rem",
    margin: ".25rem",
  };

  const openSelectedPage = (id, e) => {
    navigate(`/${id}`, { state: { data: e } });
  };

  return (
    <div
      key={data?.ID}
      onClick={() => openSelectedPage(data?.ID, data)}
      style={{ overflow: "hidden" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <BSpan style={{ ...boxStyle }}>
          <img
            src={data?.post_image?.medium_image_url}
            width={"100%"}
            alt="img link not found"
          />
        </BSpan>
        <BSpan style={{ ...boxStyle, width: "100%" }}>
          <h6 style={{ textTransform: "uppercase", color: "#3822B2" }}>
            {data?.post_title}
          </h6>
          <div style={{ display: "flex" }}>
            {data?.post_category?.map((e, i) => {
              return (
                <div style={{ fontWeight: 500, paddingRight: 10 }}>
                  {e?.cat_name} |
                </div>
              );
            })}
          </div>
        </BSpan>
        <BSpan style={{ ...boxStyle, width: "20rem" }}>
          <div style={{ fontSize: "16px", fontWeight: "bold" }}>
            {data?.publish_date}
          </div>
        </BSpan>
      </div>
    </div>
  );
}

export default ArticleList;
