import React, { useContext, useEffect, useState } from "react";
import { Text, View, Pressable, ActivityIndicator } from "react-native";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { AuthContext } from "../../context/AuthContext";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import styles from "./styles";

const Home = () => {
  const [firstName, setFirstName] = useState();
  const { userID, auth, loading, setLoading } = useContext(AuthContext);

  const db = getDatabase();
  const reference = ref(db, "users/" + userID);

  useEffect(() => {
    onValue(
      reference,
      (snapshot) => {
        if (snapshot.val() !== null) {
          setFirstName(snapshot.val().firstName);
        } else {
          setFirstName("");
        }
      },
      {
        onlyOnce: true,
      }
    );

    return () => {};
  }, []);

  const signOut = () => {
    setLoading(true);
    auth
      .signOut()
      .then((res) => setLoading(false))
      .catch((err) => setLoading(false));
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator animating={true} size="large" color="#FFF" />
        </View>
      ) : (
        <></>
      )}
      <View style={styles.gameChoiceContainer}>
        <Pressable style={styles.gameChoiceButton}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.gameChoiceButton}>
          <MaterialIcons name="post-add" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.gameChoiceButton}>
          <MaterialCommunityIcons name="post-outline" size={24} color="black" />
        </Pressable>
        <Pressable style={styles.gameChoiceButton} onPress={() => signOut()}>
          <FontAwesome name="sign-out" size={24} color="black" />
        </Pressable>
      </View>
    </View>
  );
};

export default Home;
