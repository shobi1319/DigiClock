import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Format time based on 24-hour or 12-hour setting
  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: !is24Hour,
  });

  // Format date to show full weekday and date
  const formattedDate = time.toLocaleDateString([], {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  // Toggle between 24-hour and 12-hour format
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
});

export default DigitalClock;
