import React, {Component} from "react";

class Part extends Component{
    render(){
        var style = {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(' + require('./img/' + this.props.part + '.png') + ')',
            maskImage: 'url(' + require('./img/' + this.props.part + '.png') + ')',
            WebkitMaskImage: 'url(' + require('./img/' + this.props.part + '.png') + ')',
            backgroundColor: this.props.color,
            zIndex: this.props.index
        }
        return(     
            <div className="background-blend-mode" style={style}></div>
        );
    }
}

export default Part;