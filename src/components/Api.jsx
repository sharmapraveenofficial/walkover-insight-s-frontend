import React from "react";
import "./bootstrap/css/bootstrap.min.css";
import "./apidoc.css";

function APIDoc() {
  return (
    <>
      <div className="wrapper">
        <div className="main_content">
          <div className="header">
            List of matching domain websites and there ranks
          </div>
          <div className="info">
            Api Syntex ->
            <input
              className="txt"
              type="text"
              name=""
              id=""
              value="/search/domain/<d>/"
              disabled
            />
          </div>
          <div className="jumbotron">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <select className="custom-select" id="inputGroupSelect01">
                  <option defaultValue>GET</option>
                </select>
              </div>
              <input
                className="txt"
                type="text"
                name=""
                id=""
                value="http://34.67.61.195:5000/search/domain/microsoft/"
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
              value={`
                 [
                   { url: https://microsoft.com, rank: 3.0},
                   { url: https://microsoftstore.com.cn, rank: 6425.0 },                  
                   { url: https://microsoft365.com, rank: 4697.0 }... 
                    ...
                    ...
                ]
              `}
              disabled
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
export default APIDoc;
