import React, {Component} from "react";


class Weapon extends Component{
    render(){
        var style = {
            backgroundImage: 'url(' + require('./img/' + this.props.part + '.png') + ')',
            zIndex: this.props.index
        }
        return(     
                <div className="body-part" style={style}></div>
        );
    }
}

export default Weapon;