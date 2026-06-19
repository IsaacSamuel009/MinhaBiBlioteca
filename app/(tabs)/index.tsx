import { Image } from 'expo-image';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7BbQuLrBhCIRx3OK-X_CsDXOSQsc4OU8IpA&s',
          }}
          style={styles.logo}
        />

        <Text style={styles.title}>📗 Biblioteca IFMA 📗</Text>
      </View>

      {/* Dados do aluno */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>👨‍🎓 Meu IFMA</Text>

        <Text style={styles.info}>
          Nome: Isaac Samuel Da Silva Guedes
        </Text>

        <Text style={styles.info}>
          Curso: Informática
        </Text>

        <Text style={styles.info}>
          Ingresso: 2024
        </Text>

        <Text style={styles.info}>
          Disciplinas favoritas: Sociologia, História e Filosofia
        </Text>
      </View>

      {/* Livro 1 */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>📖 Livro 1</Text>

        <Image
          source={{
            uri: 'https://m.media-amazon.com/images/I/61Ie6kt-czL.jpg',
          }}
          style={styles.bookImage}
        />

        <Text style={styles.bookTitle}>
          Doenças que Mudaram a História
        </Text>

        <Text style={styles.author}>
          Autor: Guido Carlos Levi
        </Text>
      </View>

      {/* Livro 2 */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>📖 Livro 2</Text>

        <Image
          source={{
            uri: 'https://m.media-amazon.com/images/I/81EULWTz2PL.jpg',
          }}
          style={styles.bookImage}
        />

        <Text style={styles.bookTitle}>
          Ponciá Vicêncio
        </Text>

        <Text style={styles.author}>
          Autora: Conceição Evaristo
        </Text>
      </View>

      {/* Livro 3 */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>📖 Livro 3</Text>

        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfdh9AYpt9Smfgzdl54jSbIUG78dGd5pmyHQ&s',
          }}
          style={styles.bookImage}
        />

        <Text style={styles.bookTitle}>
          Sequestro em Copacabana
        </Text>

        <Text style={styles.author}>
          Autor: Oliveira Dell'Anno
        </Text>
      </View>

      {/* Mensagem */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          🚀 Mensagem Motivacional
        </Text>

        <Text style={styles.quote}>
          "O preço para a mudança de classe social é a vida."
        </Text>

        <Text style={styles.quoteAuthor}>
          — Sael
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    padding: 15,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },

  logo: {
    width: 90,
    height: 90,
    borderRadius: 15,
    marginRight: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#006400',
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 15,
    marginBottom: 18,
    elevation: 5,
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },

  info: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },

  bookImage: {
    width: 180,
    height: 260,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'contain',
  },

  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B5E20',
    textAlign: 'center',
  },

  author: {
    fontSize: 15,
    color: '#555',
    marginTop: 5,
    textAlign: 'center',
  },

  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#333',
    textAlign: 'center',
  },

  quoteAuthor: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#006400',
    alignSelf: 'flex-end',
  },
});