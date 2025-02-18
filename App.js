import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const App = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!/^\d{10}$/.test(phone)) {
      setError('Số điện thoại không đúng định dạng. Vui lòng nhập lại');
    } else {
      setError('');
      Alert.alert('Thành công', 'Bạn đã nhập đúng số điện thoại!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <Text style={styles.label}>Nhập số điện thoại</Text>
      <Text style={styles.subtitle}>
        Dùng số điện thoại để đăng nhập hoặc đăng 
        ký tài khoản OneHousing Pro
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Nhập số điện thoại"
        value={phone}
        onChangeText={setPhone}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.03,
  },
  label: {
    fontSize: width * 0.045,
    fontWeight: '600',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: width * 0.04,
    color: '#555',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: width * 0.045,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: width * 0.04,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0057FF',
    paddingVertical: height * 0.02,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  buttonText: {
    color: '#fff',
    fontSize: width * 0.045,
    fontWeight: '600',
  },
});

export default App;
