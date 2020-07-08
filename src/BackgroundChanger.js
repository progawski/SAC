import React, {Component} from "react";
import { Col, Row, Button, FormGroup, Label, Input} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

class BackgroundChanger extends Component{
    render(){
        return(     
            <Row>
                <Col xs={3}>
                    <Button onClick={this.props.onClickPrevious}><FontAwesomeIcon icon={faAngleLeft}/></Button>
                </Col>
                <Col xs={6}>  
                    {/* <FormGroup>
                        <Label for="bgMap">Map</Label>
                        <Input type="select" value={this.state.selectedBgMap} id="bgMap" onChange={this.bgMap}>
                            <option value="ash">Ash</option>
                            <option value="b2b">B2b</option>
                            <option value="blade">Blade</option>
                        </Input>
                    </FormGroup>    */}
                </Col>
                <Col xs={3}>
                    <Button onClick={this.props.onClickNext}><FontAwesomeIcon icon={faAngleRight}/></Button>
                </Col>
            </Row>
        );
    }
}

export default BackgroundChanger;