import React from "react";
import {TextInput, View} from "react-native";
import Styles from "./Styles";

const Input = (props) => {

    return (
        <View>
            <TextInput
                style={Styles.input}
                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
                value={props.value}
                placeholder={props.placeholder}
            />
        </View>
    );
};
export default Input;