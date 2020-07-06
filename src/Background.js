import React, {Component} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Button } from "reactstrap";



class Background extends Component{
    constructor(props){
        super(props);

        const ash = require('./img/ctf_Ash.png');
        const b2b = require('./img/ctf_B2b.png');
        const blade = require('./img/ctf_Blade.png');
        const campeche = require('./img/ctf_Campeche.png');
        const cobra = require('./img/ctf_Cobra.png');
        const death = require('./img/ctf_Death.png');
        const division = require('./img/ctf_Division.png');
        const dropdown = require('./img/ctf_Dropdown.png');
        const equinox = require('./img/ctf_Equinox.png');
        const guardian = require('./img/ctf_Guardian.png');
        const hormone = require('./img/ctf_Hormone.png');
        const icebeam = require('./img/ctf_Icebeam.png');
        const kampf = require('./img/ctf_Kampf.png');
        const lanubya = require('./img/ctf_Lanubya.png');
        const laos = require('./img/ctf_Laos.png');
        const maya = require('./img/ctf_Maya.png');
        const mfm = require('./img/ctf_MFM.png');
        const nuubia = require('./img/ctf_Nuubia.png');
        const raspberry = require('./img/ctf_Raspberry.png');
        const rotten = require('./img/ctf_Rotten.png');
        const ruins = require('./img/ctf_Ruins.png');
        const run = require('./img/ctf_Run.png');
        const scorpion = require('./img/ctf_Scorpion.png');
        const snakebite = require('./img/ctf_Snakebite.png');
        const spark = require('./img/ctf_Spark.png');
        const steel = require('./img/ctf_Steel.png');
        const triumph = require('./img/ctf_Triumph.png');
        const viet = require('./img/ctf_Viet.png');
        const voland = require('./img/ctf_Voland.png');
        const wretch = require('./img/ctf_Wretch.png');
        const x = require('./img/ctf_X.png');
        

        this.state = {
            index: 0,
            mapList: [ash, b2b, blade, campeche, cobra, death, division, dropdown,
                      equinox, guardian, hormone, icebeam, kampf, lanubya, laos, maya,
                      mfm, nuubia, raspberry, rotten, ruins, run, scorpion, snakebite,
                      spark, steel, triumph, viet, voland, wretch, x]
        };

        this.onClickPrevious = this.onClickPrevious.bind(this);
        this.onClickNext = this.onClickNext.bind(this);

    }

    onClickNext(){
        if(this.state.index + 1 === this.state.mapList.length){
            this.setState({
                index: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1
            })
        }
    }

    onClickPrevious(){
        if(this.state.index - 1 === -1){
            this.setState({
                index: this.state.mapList.length - 1
            })
        } else {
            this.setState({
                index: this.state.index - 1
            })
        }
    }

    render(){
        var style = {
            /*ackgroundImage: 'url(' + this.state.mapList[this.state.index] + ')', */
            position: 'relative',
            display: 'block',
            width: 200,
            height: 200,
            borderRadius: 50 + '%'
        }
        return(     
            <div>
                <img src={this.state.mapList[this.state.index]} style={style}></img>
                <Col className="text-center my-3">
                    <Button onClick={this.onClickPrevious}><FontAwesomeIcon icon={faAngleLeft}/></Button>
                    <Button className="ml-2" onClick={this.onClickNext}><FontAwesomeIcon icon={faAngleRight}/></Button>
                </Col>
            </div>
        );
    }
}

export default Background;