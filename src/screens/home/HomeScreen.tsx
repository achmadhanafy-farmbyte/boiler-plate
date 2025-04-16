import {Typography} from '@components/atom';
import {Container} from '@components/template';
import {RouteProp } from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import {RootNavigationParams} from 'src/navigation/navigationType';
import {useGetHotCoffeesQuery} from 'src/redux/api/example/coffeeApi';
import {useAppDispatch, useAppSelector} from 'src/redux/store';
import {setOrderCart} from 'src/redux/slices/orderSlice';
import { PrimaryButton } from '@components/molecule';
import { useRootNavigation } from 'src/hooks/useRootNavigation';
import { SCREEN_CONS } from '@utils/constant/screen.constant';

type HomeScreenRouteProp = RouteProp<RootNavigationParams, 'HOME'>;

type HomeScreenProps = {
  route?: HomeScreenRouteProp;
};

function HomeScreen({route}: HomeScreenProps) {
  const {data} = useGetHotCoffeesQuery({categories: 'hot'});
  const dispatch = useAppDispatch();
  const {orderList} = useAppSelector((state)=>state.order)
  const {width} = useWindowDimensions()
  const navigation = useRootNavigation()

  return (
    <Container headerConfig={{title: 'Coffee Menu'}}>
      <FlatList
        data={data}
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
              <TextInput
                onEndEditing={e =>
                  dispatch(
                    setOrderCart({
                      ...item,
                      quantity: Number(e.nativeEvent.text),
                    }),
                  )
                }
                keyboardType="number-pad"
                placeholder="Quantity"
                style={styles.textInput}
              />
            </View>
          </View>
        )}
      />
      <View style={[styles.floatingButton, { width}]}>
      {!!orderList?.length && (
        <PrimaryButton text='Continue' onPress={()=>navigation.navigate(SCREEN_CONS.ORDER_LIST)}/>
      )}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  iconPlus: {marginLeft: 10},
  inputContainer: {flexDirection: 'row', alignItems: 'center'},
  container: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 200
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
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    width: 70,
    borderRadius: 16,
    marginLeft: 10,
    padding: 5,
  },
  floatingButton: {position:'absolute',bottom:120, alignItems:'center'}
});

export default HomeScreen;
