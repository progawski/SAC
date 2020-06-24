import React, {Component} from "react"
import BodyColor from "./BodyColor.js";
import { Card } from "reactstrap";

class Creator extends Component{
    

    render(){


        return(
            <Card className="m-auto p-3 shadow">
                <BodyColor></BodyColor>
            </Card>
        );
    }
}

export default Creator;