import React, {Component} from "react";
import Avatar from "./Avatar.js";
import BackgroundChanger from "./BackgroundChanger.js";
import MaskedInput from 'react-text-mask';
import { Card, Col, Row, Form, FormGroup, Label, Input, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";
import Switch from "react-switch";
import { SketchPicker, PhotoshopPicker } from "react-color";

class Creator extends Component{

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
            granadeChecked: true,
            bgMap: 'Ash',
            index: 0,
            mapList: ['Ash', 'B2b', 'Blade', 'Campeche', 'Cobra', 'Death', 'Division', 'Dropdown',
                      'Equinox', 'Guardian', 'Hormone', 'Icebeam', 'Kampf', 'Lanubya', 'Laos', 'Maya',
                      'Mfm', 'Nuubia', 'Raspberry', 'Rotten', 'Ruins', 'Run', 'Scorpion', 'Snakebite',
                      'Spark', 'Steel', 'Triumph', 'Viet', 'Voland', 'Wretch', 'X']
        };

        this.colorValue = this.colorValue.bind(this);
        this.bodyPart = this.bodyPart.bind(this);
        this.headgear = this.headgear.bind(this);
        this.hairstyle = this.hairstyle.bind(this);
        this.granade = this.granade.bind(this);
        this.weapon = this.weapon.bind(this);
        this.onClickPrevious = this.onClickPrevious.bind(this);
        this.onClickNext = this.onClickNext.bind(this);
        this.onChangeMap = this.onChangeMap.bind(this);

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

    onClickNext(){
        if(this.state.index + 1 === this.state.mapList.length){
            this.setState({
                index: 0,
                bgMap: this.state.mapList[0]
            })
        } else {
            this.setState({
                index: this.state.index + 1,
                bgMap: this.state.mapList[this.state.index+1]
            })
        }
    }

    onClickPrevious(){
        if(this.state.index - 1 === -1){
            this.setState({
                index: this.state.mapList.length - 1,
                bgMap: this.state.mapList[this.state.mapList.length - 1]
            })
        } else {
            this.setState({
                index: this.state.index - 1,
                bgMap: this.state.mapList[this.state.index-1]
            })
        }
    }

    onChangeMap(e){
        this.setState({
            index: this.state.mapList.indexOf(e.target.value),
            bgMap: e.target.value
        })
    }

    handleChangeComplete = (color) => {
        this.setState({
            color: color.hex 
        });
        if(this.state.selectedPart === 'skin'){
            this.setState({
                skinColor: color.hex
            });  
        }
      };


    render(){
        return(
            <Card className="m-auto p-3 shadow">
                
                    <Avatar {...this.state}/>
                    <BackgroundChanger onClickNext={this.onClickNext} onClickPrevious={this.onClickPrevious} bgMap={this.state.bgMap} onChangeMap={this.onChangeMap}/>
                    <SketchPicker 
                    color={ this.state.color}
                    onChangeComplete={ this.handleChangeComplete }
                    />
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
            </Card>
        );
    }
}

export default Creator;