import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,  
  ScrollView,
  StatusBar,
  
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Defs, Rect, RadialGradient, Stop } from "react-native-svg";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";


const ExploreScreen = () => {
  const navigation = useNavigation();
  const [text, setText] = useState("");
  const [activeIcon, setActiveIcon] = useState(null);

  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const icons = [
    { id: 1, source: require("../image/explore.png") },
    { id: 2, source: require("../image/task.png") },
    { id: 3, source: require("../image/history.png") },
  ];

  const data = {
    aiAssistants: [
      { name: "Lawyer", image: require("../image/Lawyer.png") },
      { name: "Teacher", image: require("../image/Assistant1.png") },
      { name: "Engineer", image: require("../image/Assistant2.png") },
      { name: "Developer", image: require("../image/Lawyer.png") },
      { name: "Designer", image: require("../image/Assistant1.png") },
      { name: "Doctor", image: require("../image/Assistant2.png") },
      { name: "Engineer", image: require("../image/Lawyer.png") },
      { name: "Artist", image: require("../image/Assistant1.png") },
      { name: "Chef", image: require("../image/Assistant2.png") },
      { name: "Mechanic", image: require("../image/Lawyer.png") },
      { name: "Lawyer", image: require("../image/Lawyer.png") },
      { name: "Teacher", image: require("../image/Assistant1.png") },
      { name: "Engineer", image: require("../image/Assistant2.png") },
      { name: "Developer", image: require("../image/Lawyer.png") },
      { name: "Designer", image: require("../image/Assistant1.png") },
      { name: "Doctor", image: require("../image/Assistant2.png") },
      { name: "Engineer", image: require("../image/Lawyer.png") },
      { name: "Artist", image: require("../image/Assistant1.png") },
      { name: "Chef", image: require("../image/Assistant2.png") },
      { name: "Engineer", image: require("../image/Lawyer.png") },
    ],
    popularPrompts: [
      {
        id: "gradient1",
        conicColors: ["#F7D96D", "#FA8661", "#F7D96D", "#FA8661", "#F7D96D"],
        linearColors: ["rgba(250, 134, 97, 0.07)", "rgba(247, 217, 109, 0.07)"],
        content: {
          image: require("../image/orangeIcon.png"),
          textLarge: "Ask me anything!",
          textSmall: "Versatile, intelligent AI Assistant",
        },
      },
      {
        id: "gradient2",
        conicColors: ["#70D8F9", "#806CF6", "#70D8F9", "#806CF6", "#70D8F9"],
        linearColors: [
          "rgba(128, 108, 246, 0.07)",
          "rgba(112, 216, 249, 0.07)",
        ],
        content: {
          image: require("../image/blueIcon.png"),
          textLarge: "Homework Helper",
          textSmall: "Help with ANY HW",
        },
      },
      {
        id: "gradient3",
        conicColors: ["#8CE7FB", "#85F5B1", "#8CE7FB", "#85F5B1", "#8CE7FB"],
        linearColors: [
          "rgba(133, 245, 177, 0.07)",
          "rgba(140, 231, 251, 0.07)",
        ],
        content: {
          image: require("../image/greenIcon.png"),
          textLarge: "Personal diet Planner",
          textSmall: "Personal diet plan based on calories",
        },
      },
      {
        id: "gradient4",
        conicColors: ["#F7D96D", "#FA8661", "#F7D96D", "#FA8661", "#F7D96D"],
        linearColors: ["rgba(250, 134, 97, 0.07)", "rgba(247, 217, 109, 0.07)"],
        content: {
          image: require("../image/orangeIcon.png"),
          textLarge: "Ask me anything!",
          textSmall: "Versatile, intelligent AI Assistant",
        },
      },
      {
        id: "gradient5",
        conicColors: ["#70D8F9", "#806CF6", "#70D8F9", "#806CF6", "#70D8F9"],
        linearColors: [
          "rgba(128, 108, 246, 0.07)",
          "rgba(112, 216, 249, 0.07)",
        ],
        content: {
          image: require("../image/blueIcon.png"),
          textLarge: "Homework Helper",
          textSmall: "Help with ANY HW",
        },
      },
      {
        id: "gradient6",
        conicColors: ["#8CE7FB", "#85F5B1", "#8CE7FB", "#85F5B1", "#8CE7FB"],
        linearColors: [
          "rgba(133, 245, 177, 0.07)",
          "rgba(140, 231, 251, 0.07)",
        ],
        content: {
          image: require("../image/greenIcon.png"),
          textLarge: "Personal diet Planner",
          textSmall: "Personal diet plan based on calories",
        },
      },
      {
        id: "gradient7",
        conicColors: ["#F7D96D", "#FA8661", "#F7D96D", "#FA8661", "#F7D96D"],
        linearColors: ["rgba(250, 134, 97, 0.07)", "rgba(247, 217, 109, 0.07)"],
        content: {
          image: require("../image/orangeIcon.png"),
          textLarge: "Ask me anything!",
          textSmall: "Versatile, intelligent AI Assistant",
        },
      },
      {
        id: "gradient8",
        conicColors: ["#70D8F9", "#806CF6", "#70D8F9", "#806CF6", "#70D8F9"],
        linearColors: [
          "rgba(128, 108, 246, 0.07)",
          "rgba(112, 216, 249, 0.07)",
        ],
        content: {
          image: require("../image/blueIcon.png"),
          textLarge: "Homework Helper",
          textSmall: "Help with ANY HW",
        },
      },
      {
        id: "gradient9",
        conicColors: ["#8CE7FB", "#85F5B1", "#8CE7FB", "#85F5B1", "#8CE7FB"],
        linearColors: [
          "rgba(133, 245, 177, 0.07)",
          "rgba(140, 231, 251, 0.07)",
        ],
        content: {
          image: require("../image/greenIcon.png"),
          textLarge: "Personal diet Planner",
          textSmall: "Personal diet plan based on calories",
        },
      },
      {
        id: "gradient10",
        conicColors: ["#F7D96D", "#FA8661", "#F7D96D", "#FA8661", "#F7D96D"],
        linearColors: ["rgba(250, 134, 97, 0.07)", "rgba(247, 217, 109, 0.07)"],
        content: {
          image: require("../image/orangeIcon.png"),
          textLarge: "Ask me anything!",
          textSmall: "Versatile, intelligent AI Assistant",
        },
      },
      {
        id: "gradient11",
        conicColors: ["#70D8F9", "#806CF6", "#70D8F9", "#806CF6", "#70D8F9"],
        linearColors: [
          "rgba(128, 108, 246, 0.07)",
          "rgba(112, 216, 249, 0.07)",
        ],
        content: {
          image: require("../image/blueIcon.png"),
          textLarge: "Homework Helper",
          textSmall: "Help with ANY HW",
        },
      },
      {
        id: "gradient12",
        conicColors: ["#8CE7FB", "#85F5B1", "#8CE7FB", "#85F5B1", "#8CE7FB"],
        linearColors: [
          "rgba(133, 245, 177, 0.07)",
          "rgba(140, 231, 251, 0.07)",
        ],
        content: {
          image: require("../image/greenIcon.png"),
          textLarge: "Personal diet Planner",
          textSmall: "Personal diet plan based on calories",
        },
      },
      {
        id: "gradient13",
        conicColors: ["#F7D96D", "#FA8661", "#F7D96D", "#FA8661", "#F7D96D"],
        linearColors: ["rgba(250, 134, 97, 0.07)", "rgba(247, 217, 109, 0.07)"],
        content: {
          image: require("../image/orangeIcon.png"),
          textLarge: "Ask me anything!",
          textSmall: "Versatile, intelligent AI Assistant",
        },
      },
      {
        id: "gradient14",
        conicColors: ["#70D8F9", "#806CF6", "#70D8F9", "#806CF6", "#70D8F9"],
        linearColors: [
          "rgba(128, 108, 246, 0.07)",
          "rgba(112, 216, 249, 0.07)",
        ],
        content: {
          image: require("../image/blueIcon.png"),
          textLarge: "Homework Helper",
          textSmall: "Help with ANY HW",
        },
      },
    ],
    helpfulTips: Array(5).fill(
      `Create engaging post, captions in Instagram\nCreate engaging`
    ),
  };

  const createChat = (type, content) => {
    const category =
      type === "aiAssistants"
        ? "aiAssistants"
        : type === "popularPrompts"
        ? "popularPrompts"
        : "advices";
  
    const firstMessage =
      type === "aiAssistants"
        ? `Hello! I'm your ${content.name}. How can I help you?`
        : type === "popularPrompts"
        ? `Let's discuss: ${content.content.textLarge}`
        : `${content}`;
  
    navigation.navigate("Chat", { firstMessage, category });
  };

  return (
    
        <SafeAreaProvider>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: "#1C1D22",
              paddingTop: StatusBar.currentHeight,
              paddingBottom: -100
            }}
            edges={["bottom"]}
          >
            <View
              style={{
                marginTop: 63,
                marginBottom: 24,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: 358,
                position: "static",
                marginLeft: 16,
              }}
            >
              <Image
                source={require("../image/Settings.png")}
                style={{ width: 24, height: 24 }}
              />
              <Text
                style={{
                  fontFamily: "Inter_500Medium",
                  fontSize: 20,
                  lineHeight: 24,
                  color: "#fff",
                  marginLeft: 40,
                }}
              >
                Explore
              </Text>
              <View>
                <LinearGradient
                  colors={["#59B0FF", "#925FFF"]}
                  start={{ x: 0.05, y: 1 }}
                  end={{ x: 0.85, y: 1 }}
                  seAngle={true}
                  angle={151.65}
                  style={{
                    position: "absolute",
                    top: -1,
                    left: -1,
                    right: 0,
                    bottom: 0,
                    borderRadius: 48,
                    width: 67,
                    height: 32,
                  }}
                />
                <LinearGradient
                  colors={["#448ACA", "#5C34B1"]}
                  start={{ x: 0.11, y: 0 }}
                  end={{ x: 0.92, y: 1 }}
                  seAngle={true}
                  angle={121.54}
                  style={{
                    borderRadius: 48,
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row",
                    width: 65,
                    height: 30,
                    gap: 7,
                  }}
                >
                  <Image
                    source={require("../image/star.png")}
                    style={{ width: 24, height: 24 }}
                  />
                  <Text
                    style={{
                      fontFamily: "Inter_600SemiBold",
                      color: "#fff",
                      fontSize: 16,
                      lineHeight: 22,
                      color: "#fff",
                    }}
                  >
                    10
                  </Text>
                </LinearGradient>
              </View>
            </View>
            <ScrollView>
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    backgroundColor: "#1C1D22",
                    paddingTop: 8,
                    paddingLeft: 16,
                    paddingBottom: 21,
                  }}
                >
                  <View style={{ position: "relative" }}>
                    <Image
                      source={require("../image/Vector.png")}
                      style={{
                        width: 18,
                        height: 18,
                        position: "absolute",
                        left: 16,
                        top: 16,
                        zIndex: 100,
                      }}
                    />
                    <TextInput
                      style={{
                        backgroundColor: "rgba(51, 51, 56, 1)",
                        borderRadius: 12,
                        borderWidth: 0,
                        paddingVertical: 13,
                        paddingLeft: 48,
                        fontSize: 16,
                        width: 358,
                      }}
                      placeholder=""
                      placeholderTextColor="rgba(147, 147, 159, 1)"
                      keyboardAppearance="light"
                    />
                    <Text
                      style={{
                        position: "absolute",
                        left: 48,
                        top: 13,
                        color: "rgba(147, 147, 159, 1)",
                        fontFamily: "Inter_400Regular",
                        fontSize: 16,
                        lineHeight: 22,
                      }}
                    >
                      Search
                    </Text>
                  </View>

                  <View style={{ marginTop: 16 }}>
                    <LinearGradient
                      colors={["#59B0FF", "#925FFF"]}
                      start={{ x: 0.55, y: 0 }}
                      end={{ x: 0.85, y: 1 }}
                      style={{
                        position: "absolute",
                        borderRadius: 12,
                        height: 82,
                        width: 358,
                      }}
                    />
                    <LinearGradient
                      colors={["#4A33A8", "#3354AB"]}
                      start={{ x: 0.11, y: 0 }}
                      end={{ x: 0.92, y: 1 }}
                      seAngle={true}
                      angle={121.54}
                      style={{
                        height: 80,
                        borderRadius: 12,
                        width: 356,
                        left: 0.9,
                        top: 0.9,
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          justifyContent: "center",
                          marginLeft: 16,
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "Inter_500Medium",
                            color: "#fff",
                            fontSize: 16,
                            lineHeight: 22,
                          }}
                        >
                          Start Your free 3-day premium
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Inter_400Regular",
                            color: "#fff",
                            fontSize: 14,
                            lineHeight: 22,
                            opacity: 0.8,
                          }}
                        >
                          Click to get started now.
                        </Text>
                        <Image
                          source={require("../image/present.png")}
                          style={{
                            width: 98,
                            height: 76,
                            borderBottomRightRadius: 12,
                            position: "absolute",
                            right: 0,
                            bottom: 0,
                          }}
                        />
                        <Image
                          source={require("../image/present1.png")}
                          style={{
                            width: 42,
                            height: 42,
                            position: "absolute",
                            right: 90,
                            bottom: 0,
                          }}
                        />
                      </View>
                    </LinearGradient>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: 24,
                      marginBottom: 8,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Inter_500Medium",
                        fontSize: 20,

                        lineHeight: 24,
                        color: "#fff",
                      }}
                    >
                      AI assistants
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 7,
                        right: 16,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Inter_400Regular",
                          fontSize: 14,
                          lineHeight: 16,
                          color: "rgba(203, 203, 215, 1)",
                        }}
                      >
                        See All
                      </Text>
                      <Image
                        source={require("../image/Icon.png")}
                        style={{ width: 16, height: 16 }}
                      />
                    </View>
                  </View>
                  <FlatList
                    horizontal
                    style={{ height: 122 }}
                    data={data.aiAssistants}
                    keyExtractor={(item, index) => `ai-${index}`}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={{
                          marginRight: 8,
                          height: 228,
                        }}
                        onPress={() => createChat("aiAssistants", item)}
                      >
                        <Image
                          source={item.image}
                          style={{ width: 110, height: 110, borderRadius: 16 }}
                        />
                        <View style={{ bottom: 14 }}>
                          <LinearGradient
                            colors={["#59B0FF", "#925FFF"]}
                            start={{ x: 0.05, y: 0 }}
                            end={{ x: 0.85, y: 1 }}
                            seAngle={true}
                            angle={151.65}
                            style={{
                              position: "absolute",
                              top: -1,
                              bottom: 0,
                              right: 0,
                              left: 0,
                              padding: 1,
                              borderRadius: 48,
                              bottom: 14,
                              width: 110,
                              height: 26,
                            }}
                          />
                          <LinearGradient
                            colors={["#448ACA", "#5C34B1"]}
                            start={{ x: 0.11, y: 0 }}
                            end={{ x: 0.92, y: 1 }}
                            seAngle={true}
                            angle={121.54}
                            style={{
                              borderRadius: 48,
                              alignItems: "center",
                              justifyContent: "center",
                              left: 1,
                              width: 108,
                              height: 24,
                            }}
                          >
                            <Text
                              style={{
                                color: "#fff",
                                fontFamily: "Inter_500Medium",
                              }}
                            >
                              {item.name}
                            </Text>
                          </LinearGradient>
                        </View>
                      </TouchableOpacity>
                    )}
                  />

                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 24,
                      marginBottom: 8,
                      padding: 0,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Inter_500Medium",
                        fontSize: 20,
                        lineHeight: 24,
                        color: "#fff",
                      }}
                    >
                      Popular Promts
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 7,
                        right: 16,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Inter_400Regular",
                          fontSize: 14,
                          lineHeight: 16,
                          color: "rgba(203, 203, 215, 1)",
                        }}
                      >
                        See All
                      </Text>
                      <Image
                        source={require("../image/Icon.png")}
                        style={{ width: 16, height: 16 }}
                      />
                    </View>
                  </View>

                  <FlatList
                    horizontal
                    data={data.popularPrompts}
                    style={{ height: 117 }}
                    keyExtractor={(item, index) => `ai-${index}`}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        style={{
                          marginRight: 8,
                          height: 150,
                        }}
                        onPress={() => createChat("popularPrompts", item)}
                      >
                        <View style={{ width: 169, height: 46 }}>
                          <Svg
                            height="116"
                            width="169"
                            style={{ position: "absolute", top: 0, left: 0 }}
                          >
                            <Defs>
                              <RadialGradient
                                id={`conicGradient-${item.id}`}
                                cx="50%"
                                cy="50%"
                                r="50%"
                                fx="50%"
                                fy="50%"
                              >
                                {item.conicColors.map((color, idx) => (
                                  <Stop
                                    key={idx}
                                    offset={`${
                                      (idx / (item.conicColors.length - 1)) *
                                      100
                                    }%`}
                                    stopColor={color}
                                    stopOpacity="1"
                                  />
                                ))}
                              </RadialGradient>
                            </Defs>
                            <Rect
                              x="0.5"
                              y="0.5"
                              width="168"
                              height="115"
                              fill="none"
                              stroke={`url(#conicGradient-${item.id})`}
                              strokeWidth="1"
                              rx="12"
                            />
                          </Svg>
                          <LinearGradient
                            colors={item.linearColors}
                            start={{ x: 0.52, y: 0 }}
                            end={{ x: 0.91, y: 1 }}
                            style={{
                              position: "absolute",
                              top: 1,
                              left: 1,
                              borderRadius: 12,
                              width: 167,
                              height: 114,
                              padding: 11.4,
                              justifyContent: "flex-start",
                              alignItems: "flex-start",
                            }}
                          >
                            <Image
                              source={item.content.image}
                              style={{ width: 32, height: 32, marginBottom: 8 }}
                            />
                            <Text
                              style={{
                                fontFamily: "Inter_600SemiBold",
                                color: "#fff",
                                fontSize: 14,
                                lineHeight: 18,
                                textAlign: "left",
                              }}
                            >
                              {item.content.textLarge}
                            </Text>
                            <Text
                              style={{
                                color: "#fff",
                                fontSize: 12,
                                lineHeight: 16,
                                fontFamily: "Inter_400Regular",
                              }}
                            >
                              {item.content.textSmall}
                            </Text>
                          </LinearGradient>
                        </View>
                      </TouchableOpacity>
                    )}
                  />

                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 8,
                      marginTop: 12,
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Inter_500Medium",
                        fontSize: 20,
                        lineHeight: 24,
                        color: "#fff",
                      }}
                    >
                      Advices
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 7,
                        right: 16,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Inter_400Regular",
                          fontSize: 14,
                          lineHeight: 16,
                          color: "rgba(203, 203, 215, 1)",
                        }}
                      >
                        See All
                      </Text>
                      <Image
                        source={require("../image/Icon.png")}
                        style={{ width: 16, height: 16 }}
                      />
                    </View>
                  </View>
                  <FlatList
                    horizontal
                    data={data.helpfulTips}
                    keyExtractor={(item, index) => `tip-${index}`}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => createChat("helpfulTips", item)}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            marginBottom: 0,
                            marginRight: 8,
                            borderRadius: 8,
                            alignItems: "center",
                            backgroundColor: "rgba(51, 51, 56, 1)",
                            padding: 12,
                          }}
                        >
                          <Image
                            source={require("../image/heartIcon.png")}
                            style={{
                              width: 32,
                              height: 32,
                            }}
                          />
                          <Text
                            style={{
                              fontFamily: "Inter_400Regular",
                              color: "rgba(203, 203, 215, 1)",
                              fontSize: 12,
                              lineHeight: 16,
                              marginLeft: 8,
                            }}
                          >
                            {item}
                          </Text>
                        </View>
                        <View
                          style={{
                            flexDirection: "row",
                            marginTop: 8,
                            marginRight: 8,
                            borderRadius: 8,
                            alignItems: "center",
                            backgroundColor: "rgba(51, 51, 56, 1)",
                            padding: 12,
                          }}
                        >
                          <Image
                            source={require("../image/heartIcon.png")}
                            style={{
                              width: 32,
                              height: 32,
                            }}
                          />
                          <Text
                            style={{
                              fontFamily: "Inter_400Regular",
                              color: "rgba(203, 203, 215, 1)",
                              fontSize: 12,
                              lineHeight: 16,
                              marginLeft: 8,
                            }}
                          >
                            {item}
                          </Text>
                        </View>
                        <View
                          style={{
                            width: 346,
                            flexDirection: "row",
                            marginRight: 8,
                            borderRadius: 8,
                            marginTop: 8,
                            alignItems: "center",
                            backgroundColor: "rgba(51, 51, 56, 1)",
                            padding: 12,
                          }}
                        >
                          <Image
                            source={require("../image/heartIcon.png")}
                            style={{
                              width: 32,
                              height: 32,
                            }}
                          />
                          <Text
                            style={{
                              fontFamily: "Inter_400Regular",
                              color: "rgba(203, 203, 215, 1)",
                              fontSize: 12,
                              fontWeight: 400,
                              lineHeight: 16,
                              marginLeft: 8,
                            }}
                          >
                            {item}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    )}
                  />
                  <View style={{ top: -10 }}>
                    <View
                      style={{
                        position: "relative",
                        width: 390,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                        borderBlockEndColor: "#1C1D22",
                        marginTop: 32,
                        left: -16,
                        borderColor: "rgba(51, 51, 56, 1)",
                        borderWidth: 1,
                        paddingTop: 16,
                        height: 151,
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <View>
                          <LinearGradient
                            colors={["#59B0FF", "#925FFF"]}
                            start={{ x: 0.05, y: 0 }}
                            end={{ x: 0.85, y: 1 }}
                            style={{
                              borderRadius: 12,
                              width: 302,
                              height: 48,
                              left: 16,
                            }}
                          >
                            <View
                              style={{
                                width: 302,
                                height: 48,
                                borderRadius: 12,
                                boxShadow:
                                  "0px 0px 8px 0px rgba(92, 52, 178, 0.7)",
                              }}
                            >
                              <TextInput
                                style={{
                                  backgroundColor: "rgba(51, 51, 56, 1)",
                                  borderRadius: 12,
                                  paddingLeft: 48,
                                  fontFamily: "Inter_400Regular",
                                  fontSize: 16,
                                  lineHeight: 22,
                                  paddingBottom: 6,
                                  width: 300,
                                  height: 46,
                                  top: 1,
                                  left: 1,
                                }}
                                placeholder="Enter text here..."
                                placeholderTextColor="rgba(147, 147, 159, 1)"
                                value={text}
                                onChangeText={setText}
                                onFocus={() => {
                                  if (!text.trim()) {
                                    const newChat = {
                                      id: Date.now(),
                                      name: "New Chat",
                                      messages: [],
                                    };
                                    navigation.navigate("Chat", {
                                      chat: newChat,
                                    });
                                  }
                                }}
                              />
                            </View>
                          </LinearGradient>
                          <Image
                            source={require("../image/icon-input.png")}
                            style={{
                              width: 24,
                              height: 24,
                              position: "absolute",
                              left: 32,
                              bottom: 12,
                            }}
                          />
                        </View>
                        <TouchableOpacity
                          style={{
                            paddingHorizontal: 17,
                            paddingVertical: 15,
                            borderRadius: 16,
                          }}
                          onPress={() => {
                            if (text.trim()) {
                              createChat("custom", { name: text });
                              setText("");
                            }
                          }}
                        >
                          <LinearGradient
                            colors={["#448ACA", "#5C34B1"]}
                            start={{ x: 0.11, y: 0 }}
                            end={{ x: 0.92, y: 1 }}
                            seAngle={true}
                            angle={121.54}
                            style={{
                              position: "absolute",
                              left: 8,
                              top: -9,
                              borderRadius: 16,
                              alignItems: "center",
                              justifyContent: "center",
                              flexDirection: "row",
                              width: 48,
                              height: 48,
                              marginLeft: 16,
                            }}
                          >
                            <Image
                              source={require("../image/micro-icon.png")}
                              style={{
                                width: 24,
                                height: 24,
                              }}
                            />
                          </LinearGradient>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          backgroundColor: "#1C1D22",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: "#1C1D22",
                            flexDirection: "row",
                            gap: 55,
                          }}
                        >
                          {icons.map((icon) => (
                            <TouchableOpacity
                              key={icon.id}
                              onPress={() => setActiveIcon(icon.id)}
                            >
                              <Image
                                source={icon.source}
                                style={[
                                  {
                                    tintColor:
                                      activeIcon === icon.id ? "white" : "gray",
                                  },
                                ]}
                              />
                            </TouchableOpacity>
                          ))}
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </SafeAreaProvider>
     
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({});
