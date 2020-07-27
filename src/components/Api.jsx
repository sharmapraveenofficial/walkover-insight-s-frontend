import React, { useState, useEffect } from "react";
import "./bootstrap/css/bootstrap.min.css";
import "./apidoc.css";
import data from "./apiData.js";

function APIDoc() {
  let data1 = [
    {
      id: 1,
      panel: "panel1",
      api_method: "GET",
      api_name: "List Of matching websites and there ranks",
      api_route: "/search/query/<q>/clusterno/<int:clusterno>",
      request_textArea: "\n  /search/query/bank/ \n",
      response_textArea:
        "[{url: https://bankifsccode.com, rank: 12398.0},{ url: https://banksifsccode.com, rank: 15573.0 }]}"
    }
  ];
  let [id, setId] = useState(1);
  let [tabData, setData] = useState([data1]);

  var filterObj = data.filter(function(e) {
    return e.id === id;
  });

  useEffect(() => {
    setData(filterObj);
  }, [id]);

  console.log(tabData);
  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <h2> Walkover Insight's</h2>
          <ul>
            <li>
              {data.map(item => (
                <a
                  href="#"
                  onClick={() => {
                    setId(item.id);
                  }}
                >
                  <small>{item.api_name} </small>
                </a>
              ))}
            </li>
          </ul>
        </div>
        <div className="main_content">
          <div className="header">{tabData[0].api_name}</div>
          <div className="info">
            Api Syntex ->
            <input
              className="txt"
              type="text"
              name=""
              id=""
              value={tabData[0].api_route}
              disabled
            />
            <div className="tab-content" id="myTabContent"></div>
            {/*  nav abr Closed  */}
          </div>
          <div className="jumbotron">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <select className="custom-select" id="inputGroupSelect01">
                  <option defaultValue>{tabData[0].api_method}</option>
                </select>
              </div>
              <input
                className="txt"
                type="text"
                name=""
                id=""
                value={tabData[0].request_textArea}
                disabled
              />
            </div>
          </div>
          <div className="sampleresponse">
            <p> Sample response </p>
            <textarea
              rows="10"
              col="100"
              className="response"
              type="text"
              value={tabData[0].response_textArea}
              disabled
            >
              {tabData[0].response_textArea}
            </textarea>
          </div>
        </div>
      </div>
    </>
  );
}
export default APIDoc;
