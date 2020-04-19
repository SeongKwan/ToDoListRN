import React, { Component } from 'react';
import { Button } from "react-native";
import { observer, inject } from "mobx-react";

@inject('apiKeysStore')
@observer
class Controller extends Component {
    render() {
        return (
            <>
                <Button
                    title="Counter +1"
                    onPress={() => this.props.apiKeysStore.pressCounter()}
                    />
                <Button
                    color="#f194ff"
                    title="Clear Coutner"
                    onPress={() => this.props.apiKeysStore.clear()}
                />
            </>
        );
    }
}

export default Controller;