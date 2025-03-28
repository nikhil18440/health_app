import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/Feather";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <Text style={styles.header}>Profile</Text>

      {/* Profile Card */}
      <View style={styles.profileCard}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/32.jpg" }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Jenny Wilson</Text>
        <Text style={styles.profileEmail}>wilson09@gmail.com</Text>

        {/* Info Boxes */}
        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Gender</Text>
            <Text style={styles.infoValue}>Male</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Age</Text>
            <Text style={styles.infoValue}>20 yrs</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Weight</Text>
            <Text style={styles.infoValue}>76 kg</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Height</Text>
            <Text style={styles.infoValue}>174 cm</Text>
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Track with Watch</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Notifications</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      {/* <View style={styles.bottomNav}>
        <Icon name="home" size={24} color="#888" />
        <Icon name="bar-chart-2" size={24} color="#888" />
        <Icon name="user" size={24} color="#7F3DFF" />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    paddingTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  profileCard: {
    width: "90%",
    backgroundColor: "#2c2c2c",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: '50%',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color:'white'
  },
  profileEmail: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
    color:'white'
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  infoBox: {
    width: "45%",
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  infoLabel: {
    fontSize: 12,
    color: "#666",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  actionButton: {
    backgroundColor: "#7F3DFF",
    borderRadius: 10,
    paddingVertical: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  actionText: {
    color: "#FFF",
    fontWeight: "bold",
  },
  bottomNav: {
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
  },
});

export default ProfileScreen;
