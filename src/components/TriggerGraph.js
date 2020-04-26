//Including react
import React, { Component } from 'react';

//Including the react-fusioncharts component
import ReactDOM from 'react-dom';

//Including the fusioncharts library
import FusionCharts from 'fusioncharts';

//Including the chart type
import Chart from 'fusioncharts/fusioncharts.charts';

//Including react-fusioncharts component
import ReactFC from 'react-fusioncharts';

//Including the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

//Adding the chart as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

//Creating the JSON object to store the chart configurations

const chartConfigs = {
  type: "column2d",
  width: 700,
  height: 400,
  dataFormat: "json",
  dataSource: {
    // Chart configuration
      "chart": {
          "caption": "Countries With Most Oil Reserves [2017-18]",
          "subCaption": "In MMbbl = One Million barrels",
          "xAxisName": "Country",
          "yAxisName": "Reserves (MMbbl)",
          "numberSuffix": "K",
          "theme": "fusion"
      },
      // Chart data
      "data": [{
          "label": "Venezuela",
          "value": "290"
      }, {
          "label": "Saudi",
          "value": "260"
      }, {
          "label": "Canada",
          "value": "180"
      }, {
          "label": "Iran",
          "value": "140"
      }, {
          "label": "Russia",
          "value": "115"
      }, {
          "label": "UAE",
          "value": "100"
      }, {
          "label": "US",
          "value": "30"
      }, {
          "label": "China",
          "value": "30"
      }]
  },
};

class TriggerGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message:
        "You will see a notifications here for the chart lifecycle events"
    };

    this.beforeDataUpdate = this.beforeDataUpdate.bind(this);
    this.dataUpdated = this.dataUpdated.bind(this);
    this.drawComplete = this.drawComplete.bind(this);
    this.renderComplete = this.renderComplete.bind(this);
  }

  // Callback handler for event 'beforeDataUpdate'.
  beforeDataUpdate() {
    this.state.message = [<strong>Status: </strong>, " beforeDataUpdate"];
  }

  // Callback handler for event 'dataUpdated'.
  dataUpdated() {
    let newMessage = this.state.message.slice();
    newMessage.push(", dataUpdated");
    this.setState({
      message: newMessage
    });
  }

  // Callback handler for event 'drawComplete'.
  drawComplete() {
    let newMessage = this.state.message.slice();
    newMessage.push(", drawComplete");
    this.setState({
      message: newMessage
    });
  }

  // Callback handler for event 'renderComplete'.
  renderComplete() {
    let newMessage = this.state.message.slice();
    newMessage.push(", renderComplete");
    this.setState({
      message: newMessage
    });
  }

  render() {
    return (
      <div>
          <button onClick={this.btnClicked}>change value</button>
        <ReactFC
          {...chartConfigs}
          fcEvent-beforeDataUpdate={this.beforeDataUpdate}
          fcEvent-dataUpdated={this.dataUpdated}
          fcEvent-drawComplete={this.drawComplete}
          fcEvent-renderComplete={this.renderComplete}
        />
        <p style={{ padding: "10px", background: "#f5f2f0" }}>
          {this.state.message}
        </p>
      </div>
    );
  }
  btnClicked(){
      console.log("Clicked");
      this.setState("new sstate");
  }
}

export default TriggerGraph