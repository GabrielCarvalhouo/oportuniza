import React from "react";
import { StyleSheet, Touchable, View} from "react-native";

const teste = () => {
  return (
    <View style={styles.container}>
    <View style={styles.content}>
      <View style={styles.flex0} />
      <View style={styles.flex1} />
      <View style={styles.flex0} />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent:'center'

  },
  content:{
    maxWidth:700,
    height:360
  },
  flex1:{
    minHeight:250,
    maxHeight: 310,
    backgroundColor:'#0000FF'
  },
  flex0:{
    backgroundColor:'red',
    height:50
  }
});

export default teste;