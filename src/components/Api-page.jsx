import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import data from "./apiData";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiAccordionSummary);

const AccordionDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiAccordionDetails);

export default function API() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="api">
      <div className="main-route">API ROUTE :- http://13.235.90.61:5000</div>
      {data.map(item => (
        <Accordion
          square
          expanded={expanded === item.panel}
          onChange={handleChange(item.panel)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <span className="api-method">{item.api_method}</span>
            <span className="api-name">{item.api_name}</span>
          </AccordionSummary>
          <AccordionDetails>
            <div>
              <div className="api-route">
                API Route -> <b>{item.api_route}</b>
              </div>
              <div className="api-object">Cluster_object -></div>
              <div className="api-request-textarea" disabled rows="6" cols="50">
                {item.request_textArea}
              </div>
              <div className="api-response">Response -></div>
              <div
                className="api-response-textarea"
                disabled
                rows="10"
                cols="120"
              >
                {item.response_textArea}
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
