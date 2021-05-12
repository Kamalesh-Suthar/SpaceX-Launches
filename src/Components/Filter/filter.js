import React from 'react';
import classes from './filter.module.css'

class filter extends React.Component{

    state = {
        activeButton : null
    }

    handleYearChange(e){
        this.props.changeYear(e.target.innerText)
        this.setState({
            activeButton: parseInt(e.target.innerText)
        })
    }

    render(){
        return(
            <div className={classes.MainDiv}>
                <h3 className={classes.FilterHeading}>Filters</h3>
                <div className={classes.FilterWrapperDiv}>
                    <div className={classes.Filters}>
                        <p className={classes.CommonHeadings}>Launch Year</p>
                        <div className={classes.YearFilterDiv}>
                            <p className={this.state.activeButton == 2006 ? classes.darkGreen : null} onClick={(e)=>this.handleYearChange(e)}>2006</p>
                            <p className={this.state.activeButton == 2007 ? classes.darkGreen : null} onClick={(e)=>this.handleYearChange(e)}>2007</p>
                            <p className={this.state.activeButton == 2008 ? classes.darkGreen : null} onClick={(e)=>this.handleYearChange(e)}>2008</p>
                            <p className={this.state.activeButton == 2009 ? classes.darkGreen : null} onClick={(e)=>this.handleYearChange(e)}>2009</p>
                            <p className={this.state.activeButton == 2010 ? classes.darkGreen : null} onClick={(e)=>this.handleYearChange(e)}>2010</p>
                            <p className={this.state.activeButton == 2011 ? classes.darkGreen : null} onClick={(e)=>this.handleYearChange(e)}>2011</p>
                            <p className={this.state.activeButton == 2012 ? classes.darkGreen : null} onClick={(e)=>this.handleYearChange(e)}>2012</p>
                            <p className={this.state.activeButton == 2013 ? classes.darkGreen : null} onClick={(e)=>this.handleYearChange(e)}>2013</p>
                            <p className={this.state.activeButton == 2014 ? classes.darkGreen : null} onClick={(e)=>this.handleYearChange(e)}>2014</p>
                            <p className={this.state.activeButton == 2015 ? classes.darkGreen : null} onClick={(e)=>this.handleYearChange(e)}>2015</p>
                            <p className={this.state.activeButton == 2016 ? classes.darkGreen : null} onClick={(e)=>this.handleYearChange(e)}>2016</p>
                            <p className={this.state.activeButton == 2017 ? classes.darkGreen : null} onClick={(e)=>this.handleYearChange(e)}>2017</p>
                            <p className={this.state.activeButton == 2018 ? classes.darkGreen : null} onClick={(e)=>this.handleYearChange(e)}>2018</p>
                            <p className={this.state.activeButton == 2019 ? classes.darkGreen : null} onClick={(e)=>this.handleYearChange(e)}>2019</p>
                            <p className={this.state.activeButton == 2020 ? classes.darkGreen : null} onClick={(e)=>this.handleYearChange(e)}>2020</p>
                        </div>
                    </div>
                    <div className={classes.Filters}>
                        <p className={classes.CommonHeadings}>Succesful Launch</p>
                        <div className={classes.AdvancedFilters}>
                            <p onClick={()=>this.props.changeSuccessLaunch(true)} 
                                className={this.props.launchStatus === true?classes.darkGreen:null}
                            >True</p>
                            <p onClick={()=>this.props.changeSuccessLaunch(false)}
                                className={`${this.props.launchStatus === false?classes.darkGreen: null} ${this.props.landStatus === false || this.props.landStatus === true?classes.disabled: null}`}
                            >False</p>
                        </div>
                    </div>
                    <div className={classes.Filters}>
                        <p className={classes.CommonHeadings}>Succesful Landing</p>
                        <div className={classes.AdvancedFilters}>
                            <p onClick={()=>this.props.changeSuccessLand(true)}
                                className={`${this.props.landStatus === true?classes.darkGreen: null} ${this.props.launchStatus === false || this.props.launchStatus === null?classes.disabled: null}`}
                            >True</p>
                            <p onClick={()=>this.props.changeSuccessLand(false)}
                                className={`${this.props.landStatus === false?classes.darkGreen: null} ${this.props.launchStatus === false || this.props.launchStatus === null?classes.disabled: null}`}
                            >False</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default filter;