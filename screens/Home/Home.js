import React, { useContext } from "react";
import { View, ActivityIndicator } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import styles from "./styles";

const Home = (props) => {
  //const [posts, setPosts] = useState([]);
  const { userID, auth, loading, setLoading } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator animating={true} size="large" color="#FFF" />
        </View>
      ) : (
        <></>
      )}
    </View>
  );
};

export default Home;
