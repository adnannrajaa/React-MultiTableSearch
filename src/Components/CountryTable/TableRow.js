import React , { Component } from 'react';

export class TableRow extends Component {  
    render() {    
      return (      
        <tr>        
          <td>{this.props.country}</td>
          <td>{this.props.region}</td>
          <td>{this.props.subregion}</td>
        </tr>
      )
    }
  }
  export default TableRow