// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

// const { width } = Dimensions.get('window');

// export default function HomePage() {
//   return (
//     <View style={styles.container}>
//       {/* Hero Section */}
//       <View style={styles.heroSection}>
//         <Text style={styles.heroTitle}>Achieve Your Fitness Goals</Text>
//         <Text style={styles.heroSubtitle}>Stay fit, stay healthy with personalized workout plans</Text>
//         <TouchableOpacity style={styles.button} activeOpacity={0.8}>
//           <Text style={styles.buttonText}>Get Started</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Features Section */}
//       <View style={styles.featuresContainer}>
//         <View style={styles.card}>
//           <Text style={styles.icon}>💪</Text>
//           <Text style={styles.cardTitle}>Custom Workouts</Text>
//           <Text style={styles.cardText}>Personalized workout plans tailored to your goals.</Text>
//         </View>
//         <View style={styles.card}>
//           <Text style={styles.icon}>🏃‍♂️</Text>
//           <Text style={styles.cardTitle}>Activity Tracking</Text>
//           <Text style={styles.cardText}>Track your daily progress and stay motivated.</Text>
//         </View>
//         <View style={styles.card}>
//           <Text style={styles.icon}>❤️</Text>
//           <Text style={styles.cardTitle}>Health Insights</Text>
//           <Text style={styles.cardText}>Monitor your health and improve your lifestyle.</Text>
//         </View>
//       </View>

//       {/* Call to Action */}
//       <View style={styles.ctaSection}>
//         <Text style={styles.ctaText}>Start Your Fitness Journey Today</Text>
//         <TouchableOpacity style={styles.button} activeOpacity={0.8}>
//           <Text style={styles.buttonText}>Join Now</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f3f4f6',
//     alignItems: 'center',
//   },
//   heroSection: {
//     backgroundColor: '#3b82f6',
//     width: '100%',
//     paddingVertical: 50,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },
//   heroTitle: {
//     fontSize: width > 400 ? 28 : 24,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//   },
//   heroSubtitle: {
//     fontSize: 16,
//     color: 'white',
//     marginVertical: 10,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: 'white',
//     paddingVertical: 12,
//     paddingHorizontal: 24,
//     borderRadius: 25,
//     marginTop: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   buttonText: {
//     color: '#3b82f6',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   featuresContainer: {
//     marginVertical: 20,
//     width: '90%',
//     alignItems: 'center',
//   },
//   card: {
//     backgroundColor: 'white',
//     width: '90%',
//     padding: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginVertical: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   icon: {
//     fontSize: 40,
//     marginBottom: 10,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   cardText: {
//     textAlign: 'center',
//     color: '#4b5563',
//     marginTop: 5,
//   },
//   ctaSection: {
//     backgroundColor: '#3b82f6',
//     width: '100%',
//     paddingVertical: 30,
//     alignItems: 'center',
//   },
//   ctaText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//   },
// });
