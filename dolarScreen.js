import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button, ImageBackground } from 'react-native';

const TelaDolar = () => {
  const [dolar, setDolar] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCotacao = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
      const data = await response.json();
      setDolar(data.USDBRL.bid);
    } catch (error) {
      console.error('Erro ao buscar cotação:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCotacao();
  }, []);

  return (
    <ImageBackground
      source={require('../assets/lulu.jpg')} 
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Valor do Dólar</Text>
        <Image source={require('../assets/dolar.png')} style={styles.image} />
        <Text style={styles.value}>
          {dolar ? `R$ ${parseFloat(dolar).toFixed(2)}` : 'Carregando...'}
        </Text>
        <Button title="Atualizar" onPress={fetchCotacao} disabled={loading} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
background: {

flex: 1,
resizeMode: 'cover',
justifyContent: 'center',
alignItems: 'center',
},
overlay: {
backgroundColor: 'rgba(0, 0, 0, 0.5)', 
padding: 20,
borderRadius: 10,
alignItems: 'center',
},
    
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 16,
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 16,
  },
  value: {
    fontSize: 20,
    marginTop: 8,
    color: 'orange',
    fontWeight: 'bold',
  },
});

export default TelaDolar;
