import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Table, Row, Col, Container } from 'react-bootstrap';


class WorldData extends React.Component {
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
      const tableHeadStyle = {
         background: '#b2db70 !important'
      };
      return (
         <div style={{marginTop: '-5px'}}>
            
            <Table striped bordered responsive borderless>
               <tbody>
               <tr style={{ fontWeight: "500",background: '#6f6df4', color: 'white' }}>
               <td>Country</td>
               <td>Confirmed</td>
               <td>Recovered</td>
               <td>Deaths</td>
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
         const { Country, TotalConfirmed, NewConfirmed, TotalRecovered, NewRecovered, TotalDeaths, NewDeaths } = data //destructuring
         return (
            <tr key={Country}>
               <td style={{fontSize: "12px"}}>{Country}</td>
               <td style={{fontSize: "12px"}}>{TotalConfirmed}({NewConfirmed})</td>
               <td style={{fontSize: "12px"}}>{TotalRecovered}({NewRecovered})</td>
               <td style={{fontSize: "12px"}}>{TotalDeaths}({NewDeaths})</td>
               
            </tr>
         )
      })
   }

   callService(country) {
      debugger;
      axios.get('https://api.covid19api.com/summary').then(response => {
         console.log(response.data.Countries);
         this.setState({
            data : response.data.Countries
         })
      });
   }

}

export default WorldData