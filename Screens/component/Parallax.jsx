import { useState } from "react";
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from "react-native";
import Animated, { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

const PAGE_WIDTH = Dimensions.get("window").width;

const list = [
  {
    id: "1",
    title: "First Item",
    color: "#26292E",
    img: require("./image/1.jpg"),
  },
  {
    id: "2",
    title: "Second Item",
    color: "#899F9C",
    img: require("./image/2.jpg"),
  },
  {
    id: "3",
    title: "Third Item",
    color: "#B3C680",
    img: require("./image/3.jpg"),
  },
  {
    id: "4",
    title: "Fourth Item",
    color: "#5C6265",
    img: require("./image/4.jpg"),
  },
  {
    id: "5",
    title: "Fifth Item",
    color: "#F5D399",
    img: require("./image/5.jpg"),
  },
];

function Parallax() {
  const [isVertical, setIsVertical] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [pagingEnabled, setPagingEnabled] = useState(true);
  const [snapEnabled, setSnapEnabled] = useState(true);
  const progressValue = useSharedValue(0);

  const carouselRef = useSharedValue(null); // Reference to the carousel

  const baseOptions = isVertical
    ? {
        vertical: true,
      }
    : {
        vertical: false,
        width: PAGE_WIDTH,
        height: PAGE_WIDTH * 0.6,
      };

  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Carousel
        ref={(ref) => (carouselRef.current = ref)} // Assign carousel reference
        width={PAGE_WIDTH}
        height={PAGE_WIDTH * 0.6}
        vertical={false}
        loop
        pagingEnabled={pagingEnabled}
        snapEnabled={snapEnabled}
        autoPlay={autoPlay}
        autoPlayInterval={1500}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={list}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignSelf: "center",
              backgroundColor: item?.color,
              borderRadius: 15,
            }}
          >
            <Image style={styles.img} source={item.img} />
          </View>
        )}
      />

      {/* Buttons to Link to Carousel Items */}
      <View style={styles.buttonContainer}>
        {list.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  Math.round(progressValue.value) === index
                    ? "#567BCC"
                    : "#D3D3D3",
              },
            ]}
            onPress={() => {
              carouselRef.current.scrollTo({ index, animated: true });
            }}
          />
        ))}
      </View>
    </View>
  );
}

export default Parallax;

const styles = StyleSheet.create({
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});