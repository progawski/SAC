import React, {Component} from "react";
import Gostek from "./Gostek.js";
import Background from "./Background.js";

class Avatar extends Component{
    render(){
        var style = {
            position: 'relative',
            display: 'block',
            width: 200,
            height: 200,
            margin: 'auto'
        }
        return(     
            <div style={style}>
                <Background bgMap={this.props.bgMap}/>
                <Gostek 
                skinColor={this.props.skinColor} 
                hairColor={this.props.hairColor}
                shirtColor={this.props.shirtColor}
                pantsColor={this.props.pantsColor}
                selectedHeadgear={this.props.selectedHeadgear}
                selectedHairstyle={this.props.selectedHairstyle}
                selectedWeapon={this.props.selectedWeapon}
                granadeChecked={this.props.granadeChecked}
                />
            </div>
        );
    }
}

export default Avatar;