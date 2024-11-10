import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: !is24Hour,
  });

  const formattedDate = time.toLocaleDateString([], {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const toggleFormat = () => setIs24Hour((prev) => !prev);

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>{formattedDate}</Text>
      <Text style={styles.timeText}>{formattedTime}</Text>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleFormat}>
        <Text style={styles.toggleButtonText}>
          {is24Hour ? 'Switch to 12-Hour' : 'Switch to 24-Hour'}
        </Text>
      </TouchableOpacity>

      {/* Developer Section */}
      <View style={styles.developerSection}>
        <Image
          source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQEcAr_NwjOmwA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1668787145006?e=2147483647&v=beta&t=jxnLkmNOUzQh4_gRK4eRQAbO149TY5JIA62a1jc43cw' }} // 
          style={styles.avatar}
        />
        <Text style={styles.developerName}>Shoaib 1319</Text> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#0f3460',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  dateText: {
    color: '#e94560',
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 10,
  },
  timeText: {
    color: '#ffffff',
    fontSize: 48,
    fontWeight: 'bold',
  },
  toggleButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1a1a2e',
    borderRadius: 8,
  },
  toggleButtonText: {
    color: '#e94560',
    fontSize: 16,
  },
  developerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  developerName: {
    color: '#ffffff',
    fontSize: 18,
  },
});

export default DigitalClock;
