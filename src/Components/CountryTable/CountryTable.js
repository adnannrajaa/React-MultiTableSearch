import React, { Component } from 'react';
import TableRow from './TableRow';

export class CountryTable extends Component {
    render() {
        let rows = [];
        this.props.data.forEach((dataObj) => {
          rows.push(
            <TableRow
              key={dataObj.country}
              country={dataObj.country}
              
              region={dataObj.region}
              subregion={dataObj.subregion}
              />
              );
        });  
        return (
            <div className="row" style={{ marginTop: `30px` }}>
                <div className="col-md-12">
                    <table id="TableFilter" className="table table-striped table-bordered table-sm sortable" cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th onclick="sortByCountry()">Country</th>
                                <th onclick="sortByRegion()">Region</th>
                                <th onclick="sortBySubregion()">Subregion</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default CountryTable