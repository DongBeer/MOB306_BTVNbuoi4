import { SafeAreaView, View, StyleSheet, Image } from "react-native";
import { ListviewScreen } from "./src/listview";
import { ScrollViewScreen } from "./src/scrollview";
import ImgView from "./src/ImageView";
const App = () => {
  return (
    <SafeAreaView style={{}}>
      <ListviewScreen />
      {/* <ScrollViewScreen /> */}
      {/* <ImgView /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
