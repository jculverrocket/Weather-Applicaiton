import React from "react";
import StationCard from "./StationCard";
//import { FlatList, Text, View } from 'react-native';


const StationList = (props) => {

    /*const Item = ({ title }) => (
      <View
        style={{
          backgroundColor: '#f9c2ff',
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
        }}>
        <Text>{title}</Text>
      </View>
    ); */

    return (
        <div>
        {
            props.stationData.map(data => {
                return (
                    <StationCard data={data}/>
            )})
        }
        </div>
    )
}


export default StationList;