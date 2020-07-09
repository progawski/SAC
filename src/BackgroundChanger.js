import React, {Component} from "react";
import { Col, Row, Button, FormGroup, Label, Input} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

class BackgroundChanger extends Component{
    render(){
        return(     
            <Row className="align-items-center justify-content-between my-3">
                <Col xs={3} className="text-right p-0 pr-1">
                    <Button color="primary" onClick={this.props.onClickPrevious}><FontAwesomeIcon icon={faAngleLeft} size={'lg'}/></Button>
                </Col>
                <Col xs={6} className="p-0">  
                    <FormGroup className="mb-0">
                        <Input type="select" value={this.props.bgMap} onChange={this.props.onChangeMap}>
                            <option value="Ash">Ash</option>
                            <option value="B2b">B2b</option>
                            <option value="Blade">Blade</option>
                            <option value="Campeche">Campeche</option>
                            <option value="Cobra">Cobra</option>
                            <option value="Death">Death</option>
                            <option value="Division">Division</option>
                            <option value="Dropdown">Dropdown</option>
                            <option value="Equinox">Equinox</option>
                            <option value="Guardian">Guardian</option>
                            <option value="Hormone">Hormone</option>
                            <option value="Icebeam">Icebeam</option>
                            <option value="Kampf">Kampf</option>
                            <option value="Lanubya">Lanubya</option>
                            <option value="Laos">Laos</option>
                            <option value="Maya">Maya</option>
                            <option value="Mfm">MFM</option>
                            <option value="Nuubia">Nuubia</option>
                            <option value="Raspberry">Raspberry</option>
                            <option value="Rotten">Rotten</option>
                            <option value="Ruins">Ruins</option>
                            <option value="Run">Run</option>
                            <option value="Scorpion">Scorpion</option>
                            <option value="Snakebite">Snakebite</option>
                            <option value="Spark">Spark</option>
                            <option value="Steel">Steel</option>
                            <option value="Triumph">Triumph</option>
                            <option value="Viet">Viet</option>
                            <option value="Voland">Voland</option>
                            <option value="Wretch">Wretch</option>
                            <option value="X">X</option>
                        </Input>
                    </FormGroup>
                </Col>
                <Col xs={3} className="text-left p-0 pl-1">
                    <Button color="primary" onClick={this.props.onClickNext}><FontAwesomeIcon icon={faAngleRight} size={'lg'}/></Button>
                </Col>
            </Row>
        );
    }
}

export default BackgroundChanger;