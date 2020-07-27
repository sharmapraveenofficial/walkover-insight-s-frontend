import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(90)
    }
  }
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div>
          <div className="api_method_name">
            <span className="api-method">GET</span>
            <span className="api-name">
              List Of matching websites and there ranks
            </span>
          </div>
          <hr />
          <div className="api-route">
            API Route :- <b>{`/search/query/<q>/clusterno/<int: clusterno>`}</b>
          </div>
          <hr />
          <div className="api-object">
            E.g. :- <b> /search/query/bank/</b>
          </div>
          <hr />
          <div className="api-response">Response -></div>
          <textarea
            className="api-response-textarea"
            disabled
            rows="10"
            cols="80"
          >
            {`
            {
              [{url: https://bankifsccode.com, rank: 12398.0},
               { url: https://banksifsccode.com, rank: 15573.0 }
                 ...
              ] 
            }
            `}
          </textarea>
        </div>
      </Paper>
      <Paper elevation={3}>
        <div>
          <div className="api_method_name">
            <span className="api-method">GET</span>
            <span className="api-name">
              List Of matching websites and there ranks
            </span>
          </div>
          <hr />
          <div className="api-route">
            API Route :- <b>{`/search/query/<q>/clusterno/<int: clusterno>`}</b>
          </div>
          <hr />
          <div className="api-object">
            E.g. :- <b> /search/query/bank/</b>
          </div>
          <hr />
          <div className="api-response">Response -></div>
          <textarea
            className="api-response-textarea"
            disabled
            rows="10"
            cols="80"
          >
            {`
            {
              [{url: https://bankifsccode.com, rank: 12398.0},
               { url: https://banksifsccode.com, rank: 15573.0 }
                 ...
              ] 
            }
            `}
          </textarea>
        </div>
      </Paper>
      <Paper elevation={3}>
        <div>
          <div className="api_method_name">
            <span className="api-method">GET</span>
            <span className="api-name">
              List Of matching websites and there ranks
            </span>
          </div>
          <hr />
          <div className="api-route">
            API Route :- <b>{`/search/query/<q>/clusterno/<int: clusterno>`}</b>
          </div>
          <hr />
          <div className="api-object">
            E.g. :- <b> /search/query/bank/</b>
          </div>
          <hr />
          <div className="api-response">Response -></div>
          <textarea
            className="api-response-textarea"
            disabled
            rows="10"
            cols="80"
          >
            {`
            {
              [{url: https://bankifsccode.com, rank: 12398.0},
               { url: https://banksifsccode.com, rank: 15573.0 }
                 ...
              ] 
            }
            `}
          </textarea>
        </div>
      </Paper>
    </div>
  );
}
