import { Component } from "react";

export class Notification extends Component {
    render() {

        return <h3>{this.props.message}</h3>
    }
}