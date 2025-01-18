import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const placeholderMessages = [
  "Hello! How can I assist you?",
  "Here is some helpful information.",
  "Let me check that for you.",
  "Can you provide more details?",
  "Thank you for your patience!",
];

const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { firstMessage, category } = route.params || {}; 
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [inputHeight, setInputHeight] = useState(48);
  const [viewHeight, setViewHeight] = useState(106);


  useEffect(() => {
    const loadMessages = async () => {
      if (!category) return;
      try {
        const storedData = await AsyncStorage.getItem(category);
        if (storedData) {
          setMessages(JSON.parse(storedData));
        }
      } catch (error) {
        console.error(`Error loading messages for category ${category}:`, error);
      }
    };

    loadMessages();
  }, [category]);

  
  useEffect(() => {
    const saveMessages = async () => {
      if (!category) return;
      try {
        await AsyncStorage.setItem(category, JSON.stringify(messages));
      } catch (error) {
        console.error(`Error saving messages for category ${category}:`, error);
      }
    };

    saveMessages();
  }, [messages, category]);

  useEffect(() => {
    if (firstMessage && firstMessage.length > 0) {
      setMessages([{ id: "1", text: firstMessage, sender: "bot" }]);
    }
  }, [firstMessage]);


  const sendMessage = () => {
    if (!text.trim()) return;

    const userMessage = {
      id: `${Date.now()}`,
      text: text.trim(),
      sender: "user",
    };
    setMessages((prev) => [userMessage, ...prev]);
    setText("");

    const botMessage =
      placeholderMessages[
        Math.floor(Math.random() * placeholderMessages.length)
      ];
    setTimeout(() => {
      setMessages((prev) => [
        { id: `${Date.now() + 1}`, text: botMessage, sender: "bot" },
        ...prev,
      ]);
    }, 1000);
  };


  const handleInputFocus = () => {
    if (!category) {
      const randomPlaceholder =
        placeholderMessages[
          Math.floor(Math.random() * placeholderMessages.length)
        ];
      setMessages([{ id: Date.now().toString(), text: randomPlaceholder, sender: "bot" }]);
    }
  };




  const clearChats = async () => {
    try {
      await AsyncStorage.clear(); 
      console.log("All chats cleared from AsyncStorage.");
      alert("All chats have been cleared!");
    } catch (error) {
      console.error("Failed to clear chats:", error);
    }
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setViewHeight(84);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setViewHeight(106);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#1C1D22" }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            flex: 1,
            backgroundColor: "#1C1D22",
          }}
        >
          <View
            style={{
              marginTop: 63,
              marginBottom: 24,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              position: "static",
              paddingHorizontal: 16,
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
                marginLeft: 32,
              }}
            >
              Chat
            </Text>
            <View style={{ flexDirection: "row", gap: 10 }}>
            <TouchableOpacity onPress={clearChats} >
              <Image
                source={require("../image/icon-filter.png")}
                style={{ width: 24, height: 24 }}
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
                <Image
                  source={require("../image/icon-download.png")}
                  style={{ width: 24, height: 24 }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                paddingLeft: 16,
              }}
            >
              <FlatList
                data={messages.filter(
                  (message) => message.text !== undefined && message.text !== ""
                )}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View
                    style={{
                      marginLeft: item.sender === "user" ? 0 : 8,
                      marginRight: item.sender === "user" ? 8 : 0,
                      alignSelf:
                        item.sender === "user" ? "flex-end" : "flex-start",

                      marginBottom: 8,
                    }}
                  >
                    {item.sender === "user" ? (
                      <LinearGradient
                        colors={["#448ACA", "#5C34B1"]}
                        start={{ x: -0.32, y: 0 }}
                        end={{ x: 1.22, y: 1 }}
                        seAngle={true}
                        angle={172.45}
                        style={{
                          paddingHorizontal: 16,
                          paddingVertical: 6,

                          borderTopLeftRadius: 16,
                          borderBottomRightRadius: 4,
                          borderTopRightRadius: 16,
                          borderBottomLeftRadius: 16,
                          width: 342,
                        }}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontFamily: "Inter_400Regular",
                            fontSize: 16,
                            lineHeight: 22,
                          }}
                        >
                          {item.text}
                        </Text>
                        <View
                          style={{ flexDirection: "row", marginTop: 8, gap: 8 }}
                        >
                          <View
                            style={{
                              paddingHorizontal: 12,
                              paddingVertical: 6,
                              gap: 6,
                              borderRadius: 8,
                              flexDirection: "row",
                              backgroundColor: "rgba(255, 255, 255, 0.18)",
                              width: 76,
                              height: 28,
                            }}
                          >
                            <Image
                              source={require("../image/copy.png")}
                              style={{ width: 16, height: 16 }}
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                lineHeight: 16,
                                color: "#FFFFFF",
                                fontFamily: "Inter_400Regular",
                              }}
                            >
                              Copy
                            </Text>
                          </View>
                          <View
                            style={{
                              paddingHorizontal: 12,
                              paddingVertical: 6,
                              gap: 6,
                              borderRadius: 8,
                              flexDirection: "row",
                              backgroundColor: "rgba(255, 255, 255, 0.18)",
                              width: 76,
                              height: 28,
                            }}
                          >
                            <Image
                              source={require("../image/copy.png")}
                              style={{ width: 16, height: 16 }}
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                lineHeight: 16,
                                color: "#FFFFFF",
                                fontFamily: "Inter_400Regular",
                              }}
                            >
                              Copy
                            </Text>
                          </View>
                        </View>
                      </LinearGradient>
                    ) : (
                      <View
                        style={{
                          backgroundColor: "#333338",
                          padding: 12,
                          borderTopLeftRadius: 16,
                          borderBottomRightRadius: 16,
                          borderTopRightRadius: 16,
                          borderBottomLeftRadius: 4,
                          paddingHorizontal: 16,
                          paddingVertical: 12,
                          minHeight: 50,
                        }}
                      >
                        <Text
                          style={{
                            color: "#fff",
                            fontFamily: "Inter_400Regular",
                            fontSize: 16,
                            lineHeight: 22,
                          }}
                        >
                          {item.text}
                        </Text>
                        <View
                          style={{ flexDirection: "row", marginTop: 8, gap: 8 }}
                        >
                          <View
                            style={{
                              paddingHorizontal: 12,
                              paddingVertical: 6,
                              gap: 6,
                              borderRadius: 8,
                              flexDirection: "row",
                              backgroundColor: "rgba(255, 255, 255, 0.18)",
                              width: 76,
                              height: 28,
                            }}
                          >
                            <Image
                              source={require("../image/copy.png")}
                              style={{ width: 16, height: 16 }}
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                lineHeight: 16,
                                color: "#FFFFFF",
                                fontFamily: "Inter_400Regular",
                              }}
                            >
                              Copy
                            </Text>
                          </View>
                          <View
                            style={{
                              paddingHorizontal: 12,
                              paddingVertical: 6,
                              gap: 6,
                              borderRadius: 8,
                              flexDirection: "row",
                              backgroundColor: "rgba(255, 255, 255, 0.18)",
                              width: 76,
                              height: 28,
                            }}
                          >
                            <Image
                              source={require("../image/share.png")}
                              style={{ width: 16, height: 16 }}
                            />
                            <Text
                              style={{
                                fontSize: 12,
                                lineHeight: 16,
                                color: "#FFFFFF",
                                fontFamily: "Inter_400Regular",
                              }}
                            >
                              Share
                            </Text>
                          </View>
                        </View>
                      </View>
                    )}
                  </View>
                )}
                inverted
              />

              <View
                style={{
                  position: "relative",
                  width: 390,
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                  borderBlockEndColor: "#1C1D22",
                  left: -16,
                  borderColor: "rgba(51, 51, 56, 1)",
                  borderWidth: 1,
                  paddingTop: 16,
                  height: viewHeight,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 16,
                  }}
                >
                  <View style={{ position: "relative" }}>
                    <TextInput
                      style={{
                        backgroundColor: "rgba(51, 51, 56, 1)",
                        borderRadius: 12,
                        color: "#93939F",
                        fontFamily: "Inter_400Regular",
                        fontSize: 16,
                        lineHeight: 22,
                        textAlignVertical: "top",
                        height: inputHeight,
                        maxHeight: 120,
                        width: 302,
                        paddingTop: 12,
                        paddingLeft: text.trim() ? 16 : 48,
                        paddingRight: 40,
                        paddingBottom: 15,
                      }}
                      multiline={true}
                      placeholder="Enter text here..."
                      placeholderTextColor="rgba(147, 147, 159, 1)"
                      value={text}
                      onFocus={handleInputFocus}
                      onChangeText={(value) => {
                        setText(value);
                        if (value) {
                          setInputHeight((prevHeight) => {
                            const calculatedHeight =
                              value.split("\n").length * 22 + 16;
                            return Math.min(
                              Math.max(calculatedHeight, 48),
                              120
                            );
                          });
                        } else {
                          setInputHeight(48);
                        }
                      }}
                      onContentSizeChange={(event) => {
                        const newHeight = event.nativeEvent.contentSize.height;
                        const maxHeight = 120;
                        setInputHeight(
                          Math.min(Math.max(newHeight, 48), maxHeight)
                        );
                      }}
                      maxLength={125}
                    />
                  </View>
                  {!text.trim() && (
                    <TouchableOpacity
                      onPress={() => {
                        setText("");
                        setInputHeight(48);
                      }}
                      style={{
                        position: "absolute",
                        left: 32,
                        bottom: 12,
                        display: text.trim() ? "none" : "flex",
                      }}
                    >
                      <Image
                        source={require("../image/icon-input.png")}
                        style={{
                          width: 24,
                          height: 24,
                        }}
                      />
                    </TouchableOpacity>
                  )}

                  <TouchableOpacity
                    onPress={() => {
                      setText("");
                      setInputHeight(16);
                    }}
                    style={{
                      opacity: text.trim() !== "" ? 1 : 0,
                    }}
                  >
                    <Image
                      source={require("../image/delete.png")}
                      style={{
                        width: 24,
                        height: 24,
                        right: 32,
                      }}
                    />
                  </TouchableOpacity>
                  {text.trim() === "" ? (
                    <LinearGradient
                      colors={["#448ACA", "#5C34B1"]}
                      start={{ x: 0.11, y: 0 }}
                      end={{ x: 0.92, y: 1 }}
                      seAngle={true}
                      angle={121.54}
                      style={{
                        position: "absolute",
                        borderRadius: 16,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        width: 48,
                        height: 48,
                        left: 326,
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
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setText("");
                        sendMessage();
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
                          borderRadius: 16,
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "row",
                          width: 48,
                          height: 48,
                          right: -30,
                          bottom: -24,
                        }}
                      >
                        <Image
                          source={require("../image/send_icon.png")}
                          style={{
                            width: 24,
                            height: 24,
                          }}
                        />
                      </LinearGradient>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;
