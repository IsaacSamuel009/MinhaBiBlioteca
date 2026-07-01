// app/(tabs)/index.tsx
import { Image } from 'expo-image';
import { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// ---------- Tipos e dados ----------

type Book = {
  id: string;
  title: string;
  author: string;
  image: string;
};

const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Doenças que Mudaram a História',
    author: 'Guido Carlos Levi',
    image: 'https://m.media-amazon.com/images/I/61Ie6kt-czL.jpg',
  },
  {
    id: '2',
    title: 'Ponciá Vicêncio',
    author: 'Conceição Evaristo',
    image: 'https://m.media-amazon.com/images/I/81EULWTz2PL.jpg',
  },
  {
    id: '3',
    title: 'Sequestro em Copacabana',
    author: "Oliveira Dell'Anno",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfdh9AYpt9Smfgzdl54jSbIUG78dGd5pmyHQ&s',
  },
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - 30; // 15 de padding de cada lado

// ---------- Componente: card individual do livro ----------

function BookCard({ book }: { book: Book }) {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>📖 {book.title}</Text>

      <Image
        source={{ uri: book.image }}
        style={styles.bookImage}
        contentFit="contain"
      />

      <Text style={styles.bookTitle}>{book.title}</Text>
      <Text style={styles.author}>Autor(a): {book.author}</Text>
    </View>
  );
}

// ---------- Componente: carrossel com indicadores ----------

function BookCarousel({ books }: { books: Book[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  function handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const index = Math.round(
      event.nativeEvent.contentOffset.x / CARD_WIDTH
    );
    setActiveIndex(index);
  }

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={books}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH}
        decelerationRate="fast"
        onScroll={handleScroll}
        scrollEventThrottle={16}
        renderItem={({ item }) => (
          <View style={{ width: CARD_WIDTH }}>
            <BookCard book={item} />
          </View>
        )}
      />

      {/* Indicadores (bolinhas) */}
      <View style={styles.dotsContainer}>
        {books.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === activeIndex && styles.dotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

// ---------- Tela principal ----------

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

        <View style={styles.headerText}>
          <Text style={styles.title}>Biblioteca IFMA</Text>
          <Text style={styles.subtitle}>Olá 👋</Text>
          <Text style={styles.description}>
            Bem-vindo à biblioteca digital.
          </Text>
        </View>
      </View>

      {/* Dados do aluno */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>👨‍🎓 Meu IFMA</Text>
        <Text style={styles.info}>Nome: Isaac Samuel Da Silva Guedes</Text>
        <Text style={styles.info}>Curso: Informática</Text>
        <Text style={styles.info}>Ingresso: 2024</Text>
        <Text style={styles.info}>
          Disciplinas favoritas: Sociologia, História e Filosofia
        </Text>
      </View>

      {/* Carrossel de livros */}
      <Text style={styles.carouselTitle}>📚 Meus Livros</Text>
      <BookCarousel books={BOOKS} />

      {/* Mensagem motivacional */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🚀 Mensagem Motivacional</Text>
        <Text style={styles.quote}>
          O preço para a mudança de classe social é a vida.
        </Text>
        <Text style={styles.quoteAuthor}>— Sael</Text>
      </View>
    </ScrollView>
  );
}

// ---------- Estilos ----------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9',
    padding: 15,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 15,
    marginRight: 15,
  },
  headerText: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006400',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 2,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
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
  carouselTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1B5E20',
    marginBottom: 10,
  },
  bookImage: {
    width: 180,
    height: 260,
    borderRadius: 10,
    marginBottom: 10,
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
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    marginTop: -8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#C8E6C9',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#006400',
    width: 20,
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