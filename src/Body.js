import React, {Component} from "react";


class Body extends Component{
    render(){
        var style = {
            backgroundImage: 'url(' + require('./img/' + this.props.part + '.png') + ')',
            maskImage: 'url(' + require('./img/' + this.props.part + '.png') + ')',
            WebkitMaskImage: 'url(' + require('./img/' + this.props.part + '.png') + ')',
            backgroundColor: this.props.color,
            zIndex: this.props.index
        }
        return(     
            
                <div className="body-part" style={style}></div>
        
        );
    }
}

export default Body;