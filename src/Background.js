import React, {Component} from "react";

class Background extends Component{
    render(){
        var style = {
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: 50 + '%'
        }
        return(     
            <div>
                <img src={require('./img/ctf_' + this.props.bgMap + '.png')} style={style}></img>
            </div>
        );
    }
}

export default Background;