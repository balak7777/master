import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";


class MapMyIndia extends React.Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      
   }
   componentDidMount() {
      console.log("Component did Mount");
      setTimeout(function(){ 
         
         $(".map-control-sec").hide();
      $(".mainContainerTrig").hide();
      $(".tabContainer").hide();
      $(".fixHeader").hide();
       }, 5000);
   }
   componentDidUpdate(prevProps, prevState) {
      console.log("Component did Update");
      setTimeout(function(){ 
         $(".map-control-sec").hide();
      $(".mainContainerTrig").hide();
      $(".tabContainer").hide();
      $(".fixHeader").hide();
       }, 5000);
   }

   render() {
      
      return (
         
         <iframe src="https://maps.mapmyindia.com/corona" onLoad={this.afterLoad} style={{width:"100%",height:"666px",float:"right"}}></iframe>
         
      );
      
   }
   afterLoad(){
      console.log("on load");
      setTimeout(function(){ 
         console.log("triggered");
      $(".map-control-sec").css("display","none");
      $(".mainContainerTrig").css("display","none");
      $(".tabContainer").css("display","none");
      $(".fixHeader").css("display","none");
   }, 5000);
   }


}



export default MapMyIndia