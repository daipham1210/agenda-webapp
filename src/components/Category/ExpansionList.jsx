import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Title from './Title';

const ExpansionPanel = withStyles({
  root: {
    border: 'none',
    boxShadow: 'none',
    backgroundColor: 'unset',
    padding: '0px',
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    marginBottom: 0,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    padding: '0',
    color: '#DBDBDC',
    '&$expanded': {
      margin: '0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles({
  root: {
    padding: '0px',
    border: 'none'
  },
})(MuiExpansionPanelDetails);

const ExpansionList = ({titleName, children}) => {
  return (
    <ExpansionPanel defaultExpanded={true}>
      <ExpansionPanelSummary className="title">
        <Title titleName={titleName} /> 
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {children}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default ExpansionList;