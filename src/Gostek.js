import React, {Component} from "react";
import Part from "./Part.js";

class Gostek extends Component{
    render(){
      
        return(     
            <div>
                {this.props.selectedHeadgear === 'helmet' ? (<Part color={this.props.shirtColor} part="helmet" index="15"></Part>) : false}
                {this.props.selectedHeadgear === 'cap' ? <Part color={this.props.shirtColor} part="cap" index="15"></Part> : false}
                {this.props.selectedHairstyle === 'dreadlocks' && this.props.selectedHeadgear === 'none' ? <Part color={this.props.hairColor} part="hair_dreadlocks" index="14"></Part> : false}
                {this.props.selectedHairstyle === 'mrtstyle' ? <Part color={this.props.hairColor} part="hair_mrtstyle" index="14"></Part> : false}
                {this.props.selectedHairstyle === 'normal' && this.props.selectedHeadgear === 'none' ? <Part color={this.props.hairColor} part="hair_normal" index="14"></Part> : false}
                {this.props.selectedHairstyle === 'punk' && this.props.selectedHeadgear === 'none' ? <Part color={this.props.hairColor} part="hair_punk" index="14"></Part> : false}
                <Part color={this.props.skinColor} part="head" index="13"></Part>
                <Part color={this.props.skinColor} part="hand1" index="12"></Part>
                <Part color={this.props.shirtColor} part="forearm1" index="11"></Part>
                <Part color={this.props.shirtColor} part="shoulder1" index="10"></Part>
                {this.props.selectedWeapon === 'deserteagles' ? (<Part part="deserteagles" index="9"></Part>) : false}
                {this.props.selectedWeapon === 'hkmp5' ? (<Part part="hkmp5" index="9"></Part>) : false}
                {this.props.selectedWeapon === 'ak74' ? (<Part part="ak74" index="9"></Part>) : false}
                {this.props.selectedWeapon === 'steyraug' ? (<Part part="steyraug" index="9"></Part>) : false}
                {this.props.selectedWeapon === 'spas12' ? (<Part part="spas12" index="9"></Part>) : false}
                {this.props.selectedWeapon === 'ruger77' ? (<Part part="ruger77" index="9"></Part>) : false}
                {this.props.selectedWeapon === 'm79' ? (<Part part="m79" index="9"></Part>) : false}
                {this.props.selectedWeapon === 'barretm82a1' ? (<Part part="barretm82a1" index="9"></Part>) : false}
                {this.props.selectedWeapon === 'fnminimi' ? (<Part part="fnminimi" index="9"></Part>) : false}
                {this.props.selectedWeapon === 'xm214minigun' ? (<Part part="xm214minigun" index="9"></Part>) : false}
                {this.props.granadeChecked ? (<Part part="granade" index="8"></Part>) : false}
                <Part color={this.props.shirtColor} part="hips" index="7"></Part>
                <Part color={this.props.shirtColor} part="chest" index="6"></Part>
                <Part color={this.props.skinColor} part="hand2" index="5"></Part>
                <Part color={this.props.shirtColor} part="forearm2" index="4"></Part>
                <Part color={this.props.pantsColor} part="calf1" index="3"></Part>
                <Part color={this.props.pantsColor} part="calf2" index="3"></Part>
                <Part color={this.props.pantsColor} part="thigh2" index="2"></Part>
                <Part color={this.props.pantsColor} part="thigh1" index="2"></Part>
                <Part part="boot2" index="1"></Part>
                <Part part="boot1" index="1"></Part>
            </div>     
        );
    }
}

export default Gostek;