import React, {Component} from "react"
import Body from "./Body.js";
import MaskedInput from 'react-text-mask';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";
import Switch from "react-switch";
import Weapon from "./Weapon.js";

class Avatar extends Component{

    constructor(props){
        super(props);

        this.state = {
            skinColor: "#DAAA70",
            shirtColor: "#894230",
            pantsColor: "#57891F",
            color: "#DAAA70",
            selectedPart: 'skin',
            granadeChecked: true
        };

        this.colorValue = this.colorValue.bind(this);
        this.bodyPart = this.bodyPart.bind(this);
        this.granade = this.granade.bind(this);

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

    granade(granadeChecked){
        this.setState({
            granadeChecked
        });
    }

    render(){
        return(
            <div>
                <div className="avatar mx-auto my-4">    
                    <Body color={this.state.skinColor} part="head" index="12"></Body>
                    <Body color={this.state.shirtColor} part="chest" index="7"></Body>
                    <Body color={this.state.shirtColor} part="shoulder1" index="12"></Body>
                    <Body color={this.state.shirtColor} part="forearm1" index="13"></Body>
                    <Body color={this.state.skinColor} part="hand1" index="14"></Body>
                    <Body color={this.state.shirtColor} part="forearm2" index="5"></Body>
                    <Body color={this.state.skinColor} part="hand2" index="6"></Body>
                    <Body color={this.state.shirtColor} part="hips" index="10"></Body>
                    <Body color={this.state.pantsColor} part="thigh1" index="4"></Body>
                    <Body color={this.state.pantsColor} part="calf1" index="9"></Body>
                    <Body part="boot1" index="1"></Body>
                    <Body color={this.state.pantsColor} part="thigh2" index="3"></Body>
                    <Body color={this.state.pantsColor} part="calf2" index="8"></Body>
                    <Body part="boot2" index="2"></Body>
                    {this.state.granadeChecked ? (<Weapon part="granade" index="15"></Weapon>) : false}
                </div>
                <Form>
                    <Row form>
                        <Col md={6}>
                        <FormGroup>
                            <Label for="bodyPart">Part:</Label>
                            <Input type="select" value={this.state.selectedPart} id="bodyPart" onChange={this.bodyPart}>
                                <option value="skin">Skin</option>
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
                        <div className="mb-2">Granade: </div>
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
                        width={48}
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