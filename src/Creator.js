import React, {Component} from "react"
import Avatar from "./Avatar.js";
import { Card } from "reactstrap";

class Creator extends Component{
    render(){
        return(
            <Card className="m-auto p-3 shadow">
                <Avatar></Avatar>
            </Card>
        );
    }
}

export default Creator;