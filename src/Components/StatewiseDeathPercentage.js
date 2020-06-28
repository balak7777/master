//import FusionCharts from "fusioncharts";
//import charts from "fusioncharts/fusioncharts.charts";
//import ReactFusioncharts from "react-fusioncharts";
import React from 'react';
import axios from 'axios';
//import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Row, Col, Container } from 'react-bootstrap';


class StatewiseDeathPercentage extends React.Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         data: []
      }
   }

   componentDidMount() {

      this.callService();
   }
   componentDidUpdate(prevProps, prevState) {
   }

   render() {
      
      return (

         <div style={{ marginTop: '-5px' }}>

            <Table striped bordered responsive borderless >
               <tbody>
                  <tr style={{ fontWeight: "500", background: '#6f6df4', color: 'white' }} fixed="top" position="relative">
                     <td>State</td>
                     <td>Recover%</td>
                     <td>Death%</td>
                     <td>State Notes </td>
                  </tr>
                  {this.renderTableData()}
               </tbody>
            </Table>
            <footer className="neal-footer">
               <Container>
                  <Row>
                     <Col >
                        <small className="neal-footer-copyright">
                           Disclaimer : This information is fetched from rapidapi.com
              </small>
                     </Col>

                  </Row>
               </Container>
            </footer>
         </div>
      )
   }

   renderTableData() {
      return this.state.data.map((data, index) => {
         const { state, recoverper, deathper, statenotes} = data //destructuring
         return (
            <tr key={state}>
               <td style={{ fontSize: "12px" }}>{state}</td>
               <td style={{ fontSize: "12px" }}>{recoverper}</td>
               <td style={{ fontSize: "12px" }}>{deathper}</td>
               <td style={{ fontSize: "10px" }}>{statenotes}</td>
            </tr>
         )
      })
   }

   callService() {
      debugger;
      axios({
         "method": "GET",
         "url": "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india",
         "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
            "x-rapidapi-key": "c7e9cb8f97msh0c51ebcef4e65a6p1a5983jsn2c291c51a31f"
         }
      })
         .then((response) => {
            console.log(response.data.state_wise);
            var resultantData = this.formStructure(response.data.state_wise);
            console.log(resultantData)
            var data = resultantData.sort((a, b) => a.confirmed - b.confirmed);
            data = data.reverse();
            this.setState({
               data: data
            })
         })
         .catch((error) => {
            console.log(error)
         });
   }
   formStructure(data) {
      debugger;
      console.log("Data recieved"+ data);
      var myData = Object.keys(data).map(key => {
         data[key].recoverper = ((data[key].recovered*100)/data[key].confirmed).toFixed(2)+'%';
         data[key].deathper = ((data[key].deaths*100)/data[key].confirmed).toFixed(2)+'%';
         return data[key];
      })
      console.log("Data returned "+myData);
      return myData;
   }

}


export default StatewiseDeathPercentage