import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const TelaEuro = () => {
  const [euro, setEuro] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCotacao = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/last/EUR-BRL');
      const data = await response.json();
      setEuro(data.EURBRL.bid);
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
    <View style={styles.container}>
      <Text style={styles.title}>Valor Do Euro</Text>
      <Image source={require('../assets/euro.png')} style={styles.image} />
      <Text style={styles.value}>
        {euro ? `R$ ${parseFloat(euro).toFixed(2)}` : 'Carregando...'}
      </Text>
      <Button title="Atualizar" onPress={fetchCotacao} disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
  },
});

export default TelaEuro;
