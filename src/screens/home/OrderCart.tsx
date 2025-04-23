import {Typography} from '@components/atom';
import {Container} from '@components/template';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  FlatList,
  Image,
  View,
} from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import {useAppSelector} from 'src/redux/store';


function OrderListScreen() {
  const {orderList} = useAppSelector((state)=>state.order)
  const {t} = useTranslation();


  return (
    <Container headerConfig={{title: t("orderList"), isBackButton: true}}>
      <FlatList
        data={orderList}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Image source={{uri: item.image}} style={styles.image} />
            <View style={styles.content}>
              <Typography style={styles.title}>{item.title}</Typography>
              <Typography style={styles.description}>
                {item.description}
              </Typography>
            </View>
            <View style={styles.inputContainer}>
              <Typography style={styles.description}>{t("quantity")}:</Typography>
              <Typography style={styles.description}>{item.quantity}</Typography>
            </View>
          </View>
        )}
      />
    </Container>
  );
}

const styles = StyleSheet.create((theme)=>({
  iconPlus: {marginLeft: 10},
  inputContainer: {flexDirection: 'row', alignItems: 'center', marginLeft:16},
  container: {
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
    elevation: 4,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: 70,
    borderRadius: 16,
    marginLeft: 10,
    padding: 5,
  },
}));

export default OrderListScreen