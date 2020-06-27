import React, {Component} from "react"
import Part from "./Part.js";
import MaskedInput from 'react-text-mask';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";
import Switch from "react-switch";

class Avatar extends Component{

    constructor(props){
        super(props);

        this.state = {
            skinColor: "#DAAA70",
            shirtColor: "#894230",
            pantsColor: "#57891F",
            hairColor: "#000000",
            color: "#DAAA70",
            selectedPart: 'skin',
            selectedHeadgear: 'helmet',
            selectedHairstyle: 'army',
            selectedWeapon: 'deserteagles',
            granadeChecked: true
        };

        this.colorValue = this.colorValue.bind(this);
        this.bodyPart = this.bodyPart.bind(this);
        this.headgear = this.headgear.bind(this);
        this.hairstyle = this.hairstyle.bind(this);
        this.granade = this.granade.bind(this);
        this.weapon = this.weapon.bind(this);

    }

    colorValue(e){
        this.setState({
            color: '#' + e.target.value.toUpperCase()
        });
        if(this.state.selectedPart === 'skin'){
            this.setState({
                skinColor: '#' + e.target.value
            });  
        }
        if(this.state.selectedPart === 'hair'){
            this.setState({
                hairColor: '#' + e.target.value
            });  
        }
        if(this.state.selectedPart === 'shirt'){
            this.setState({
                shirtColor: '#' + e.target.value
            });  
        }
        if(this.state.selectedPart === 'pants'){
            this.setState({
                pantsColor: '#' + e.target.value
            });  
        }
    }

    bodyPart(e){
        this.setState({
            selectedPart: e.target.value,
        });
        if(e.target.value === 'skin'){
            this.setState({
                color: this.state.skinColor
            });    
        }
        if(e.target.value === 'hair'){
            this.setState({
                color: this.state.hairColor
            });    
        }
        if(e.target.value === 'shirt'){
            this.setState({
                color: this.state.shirtColor
            }); 
        }
        if(e.target.value === 'pants'){
            this.setState({
                color: this.state.pantsColor
            }); 
        }
    }

    headgear(e){
        this.setState({
            selectedHeadgear: e.target.value,
        });
    }

    hairstyle(e){
        this.setState({
            selectedHairstyle: e.target.value,
        });
    }

    weapon(e){
        this.setState({
            selectedWeapon: e.target.value,
        });
    }

    granade(granadeChecked){
        this.setState({
            granadeChecked
        });
    }

    render(){
        return(
            <div>
                <div className="avatar mx-auto my-4">  
                    {this.state.selectedHeadgear === 'helmet' ? (<Part color={this.state.shirtColor} part="helmet" index="15"></Part>) : false}
                    {this.state.selectedHeadgear === 'cap' ? <Part color={this.state.shirtColor} part="cap" index="15"></Part> : false}
                    {this.state.selectedHairstyle === 'dreadlocks' && this.state.selectedHeadgear === 'none' ? <Part color={this.state.hairColor} part="hair_dreadlocks" index="14"></Part> : false}
                    {this.state.selectedHairstyle === 'mrtstyle' ? <Part color={this.state.hairColor} part="hair_mrtstyle" index="14"></Part> : false}
                    {this.state.selectedHairstyle === 'normal' && this.state.selectedHeadgear === 'none' ? <Part color={this.state.hairColor} part="hair_normal" index="14"></Part> : false}
                    {this.state.selectedHairstyle === 'punk' && this.state.selectedHeadgear === 'none' ? <Part color={this.state.hairColor} part="hair_punk" index="14"></Part> : false}
                    <Part color={this.state.skinColor} part="head" index="13"></Part>
                    <Part color={this.state.skinColor} part="hand1" index="12"></Part>
                    <Part color={this.state.shirtColor} part="forearm1" index="11"></Part>
                    <Part color={this.state.shirtColor} part="shoulder1" index="10"></Part>
                    {this.state.selectedWeapon === 'deserteagles' ? (<Part part="deserteagles" index="9"></Part>) : false}
                    {this.state.selectedWeapon === 'hkmp5' ? (<Part part="hkmp5" index="9"></Part>) : false}
                    {this.state.selectedWeapon === 'ak74' ? (<Part part="ak74" index="9"></Part>) : false}
                    {this.state.selectedWeapon === 'steyraug' ? (<Part part="steyraug" index="9"></Part>) : false}
                    {this.state.selectedWeapon === 'spas12' ? (<Part part="spas12" index="9"></Part>) : false}
                    {this.state.selectedWeapon === 'ruger77' ? (<Part part="ruger77" index="9"></Part>) : false}
                    {this.state.selectedWeapon === 'm79' ? (<Part part="m79" index="9"></Part>) : false}
                    {this.state.selectedWeapon === 'barretm82a1' ? (<Part part="barretm82a1" index="9"></Part>) : false}
                    {this.state.selectedWeapon === 'fnminimi' ? (<Part part="fnminimi" index="9"></Part>) : false}
                    {this.state.selectedWeapon === 'xm214minigun' ? (<Part part="xm214minigun" index="9"></Part>) : false}
                    {this.state.granadeChecked ? (<Part part="granade" index="8"></Part>) : false}
                    <Part color={this.state.shirtColor} part="hips" index="7"></Part>
                    <Part color={this.state.shirtColor} part="chest" index="6"></Part>
                    <Part color={this.state.skinColor} part="hand2" index="5"></Part>
                    <Part color={this.state.shirtColor} part="forearm2" index="4"></Part>
                    <Part color={this.state.pantsColor} part="calf1" index="3"></Part>
                    <Part color={this.state.pantsColor} part="calf2" index="3"></Part>
                    <Part color={this.state.pantsColor} part="thigh2" index="2"></Part>
                    <Part color={this.state.pantsColor} part="thigh1" index="2"></Part>
                    <Part part="boot2" index="1"></Part>
                    <Part part="boot1" index="1"></Part>
                    
                </div>
                <Form>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="bodyPart">Part:</Label>
                            <Input type="select" value={this.state.selectedPart} id="bodyPart" onChange={this.bodyPart}>
                                <option value="skin">Skin</option>
                                <option value="hair">Hair</option>
                                <option value="shirt">Shirt</option>
                                <option value="pants">Pants</option>
                            </Input>
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="color">Color:</Label>
                            <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>#</InputGroupText>
                            </InputGroupAddon>
                            <MaskedInput
                            className="form-control"
                            id="color"
                            onChange={this.colorValue}
                            mask={[/[0-9A-Fa-f]/, /[0-9A-Fa-f]/, /[0-9A-Fa-f]/, /[0-9A-Fa-f]/, /[0-9A-Fa-f]/, /[0-9A-Fa-f]/]}
                            guide={false}
                            value={this.state.color}
                            spellCheck={false}
                            />
                            </InputGroup>
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="hairstyle">Hairstyle:</Label>
                            <Input type="select" value={this.state.selectedHairstyle} id="hairstyle" onChange={this.hairstyle}>
                                <option value="army">Army</option>
                                <option value="dreadlocks">Dreadlocks</option>
                                <option value="mrtstyle">Mr. T Style</option>
                                <option value="normal">Normal</option>
                                <option value="punk">Punk</option>
                            </Input>
                        </FormGroup>
                        </Col>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="headgear">Headgear:</Label>
                            <Input type="select" value={this.state.selectedHeadgear} id="headgear" onChange={this.headgear}>
                                <option value="none">None</option>
                                <option value="cap">Cap</option>
                                <option value="helmet">Helmet</option>
                            </Input>
                        </FormGroup>
                        </Col>
                    </Row>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="weapon">Weapon:</Label>
                                <Input type="select" value={this.state.selectedWeapon} id="weapon" onChange={this.weapon}>
                                    <option value="deserteagles">Desert Eagles</option>
                                    <option value="hkmp5">HK MP5</option>
                                    <option value="ak74">Ak-74</option>
                                    <option value="steyraug">Steyr AUG</option>
                                    <option value="spas12">Spas-12</option>
                                    <option value="ruger77">Ruger 77</option>
                                    <option value="m79">M79</option>
                                    <option value="barretm82a1">Barret M82A1</option>
                                    <option value="fnminimi">FN Minimi</option>
                                    <option value="xm214minigun">XM214 Minigun</option>
                                </Input>
                            </FormGroup>
                            </Col>
                        <Col md={6}>
                            <FormGroup>
                                <div className="mb-3">Granade: </div>
                                <Switch
                                checked={this.state.granadeChecked}
                                onChange={this.granade}
                                onColor="#86d3ff"
                                onHandleColor="#2693e6"
                                handleDiameter={25}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                height={20}
                                width={50}
                                className="react-switch"
                                id="granadeToggle"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
                    
                    
                    
            </div>
        );
    }
}

export default Avatar;