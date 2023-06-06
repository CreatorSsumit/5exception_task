import React, { useEffect, useState } from "react";
import ArticleList from "./ArticleList";
import { Pagination, BSpan } from "bootstrap-4-react";
import axios from "axios";

function Articles() {
  const [articles, setArticles] = useState({});
  const [selectedData, setselectedData] = useState([]);
  const [count, setcount] = useState(0);

  useEffect(() => {
    axios
      .get("https://staging.latv.com/other/wp-json/v1/get-home-page-posts")
      .then((e) => {
        if (e?.data?.data) {
          setArticles(e?.data?.data);
          setselectedData(e?.data?.data);
        }
      });
  }, []);

  const onchangePage = (i) => {
    setcount(i);

    axios
      .get(
        `https://staging.latv.com/other/wp-json/v1/get-home-page-posts?page_no=${i}`
      )
      .then(({ data }) => {
        if (data?.data?.length) {
          setselectedData(data?.data);
        }
      });
  };

  return (
    <div style={{ padding: 15 }}>
      <div
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          fontSize: 20,
          fontWeight: "bold",
          color: "#3822B2",
        }}
      >
        TRENDING ARTICLES
      </div>
      {selectedData?.length != 0 &&
        selectedData?.map((e, i) => {
          return <ArticleList data={e} />;
        })}

      <nav
        aria-label="Page navigation example"
        style={{
          position: "fixed",
          bottom: "0px",
          left: "50%",
          transform: "translate(-50%)",
        }}
      >
        <Pagination>
          <Pagination.ItemLink href="#">
            <div onClick={() => onchangePage(count - 1)}>
              <BSpan aria-hidden="true">&laquo;</BSpan>
              <BSpan srOnly>Previous</BSpan>
            </div>
          </Pagination.ItemLink>

          {articles?.length &&
            articles?.map((e, i) => {
              return (
                <Pagination.Item active={count === i && true}>
                  <div onClick={() => onchangePage(i)}>
                    <Pagination.ItemLink>{i + 1}</Pagination.ItemLink>
                  </div>
                </Pagination.Item>
              );
            })}

          {/* <Pagination.Item active>
            <Pagination.ItemLink href="#">1</Pagination.ItemLink>
          </Pagination.Item>
          <Pagination.Item>
            <Pagination.Link href="#">2</Pagination.Link>
          </Pagination.Item>
          <Pagination.ItemLink href="#">3</Pagination.ItemLink>
          <Pagination.ItemLink href="#">4</Pagination.ItemLink>
          <Pagination.ItemLink href="#">5</Pagination.ItemLink> */}
          <Pagination.ItemLink>
            <div onClick={() => onchangePage(count + 1)}>
              <BSpan aria-hidden="true">&raquo;</BSpan>
              <BSpan srOnly>Next</BSpan>
            </div>
          </Pagination.ItemLink>
        </Pagination>
      </nav>
    </div>
  );
}

export default Articles;
