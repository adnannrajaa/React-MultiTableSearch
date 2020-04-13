import React, { Component } from 'react';


export class SearchBar extends Component {
    handleOnChange = (e) => {
        this.props.handleSearchEvents(e.target.value, e.target.name);
      };
    render() {
        return (
            <form>

                <div className="row" style={{ marginTop: `50px` }}>
                    <div className="col-md-4">

                        <input id="input-country" className="form-control" placeholder="Search by country"
                            name='country'
                            value={this.props.country}
                            onChange={this.handleOnChange}
                        />
                    </div>
                    <div className="col-md-4">
                        <input id="input-city" className="form-control"
                            name='region'
                            value={this.props.region}
                            onChange={this.handleOnChange}
                            placeholder='Search by region' />
                    </div>
                    <div className="col-md-4">
                        <input id="input-countrycode" className="form-control"
                            name='subregion'
                            value={this.props.subregion}
                            onChange={this.handleOnChange}
                            placeholder='Search by subregions' />
                    </div>
                </div>

                <div className="row" style={{ marginTop: `30px` }}>
                    <div className="col-md-12">
                        <label>Filtered By:</label>

                        <label id="filter-country" className="labelStyle invisible"> </label>

                        <label id="filter-city" className="labelStyle invisible"> </label>

                        <label id="filter-code" className="labelStyle invisible"> </label>

                        <label className="record-containing-label invisible"> Showing <span id="total-record-showing"></span>/<span id="total-records"></span> records.</label>
                    </div>
                </div>


            </form>
        )
    }
}
export default SearchBar