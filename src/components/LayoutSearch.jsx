import React, { Component, Fragment } from "react"
import Search from './Search';
import SearchResults from './SearchResults'
import FetchSearch from '../libs/fetchSearch'
// import BusinessSectors from './BusinessSectors';

class LayoutSearch extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      type: '1',
      result: [],
      loading: false,
      error: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      result: []
    });
  }

  hadleClickbutton= async () => {
    if (this.state.searchValue.length > 4){
      this.setState({ loading: true })
      try{
        let response = await FetchSearch(this.state.searchValue, this.state.type)
        this.setState({
          loading: false,
          result: response
        })
      } catch (error) {
        this.setState({
          loading: false,
          error: error
        })
      }
    }
  }

  render(){
    if(this.state.error){
      return `Error: ${this.state.error.message}`
    }
    return(
      <Fragment>
        <Search 
          selectValue={this.state.type} 
          searchValue={this.state.searchValue} 
          handleInputChange={this.handleInputChange} 
          hadleClickbutton={this.hadleClickbutton} 
          loading={this.state.loading}
        />
        {/* <BusinessSectors /> */}
        <div className="container-results">
          <div className="one-row">
            {
              this.state.type === '1' ? 
              <p>
                Un total de <span className="number-results">{this.state.result.length}</span> empresas
              </p>
              :
              <p>
                Un total de <span className="number-results">{ this.state.result.processes ? this.state.result.processes.length : 0}</span> procesos
              </p>
            }
            <p className="ver-todas">VER TODAS</p>
          </div>
          <SearchResults data={this.state.result} type={this.state.type} loading={this.state.loading}/>
        </div> 
      </Fragment>
    )
  }
}

export default LayoutSearch