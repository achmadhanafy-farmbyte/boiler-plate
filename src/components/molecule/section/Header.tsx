import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Typography } from '@components/atom';

export interface HeaderProps {
    title: string
    isBackButton?: boolean
}

const Header = ({title, isBackButton}:HeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {(isBackButton && navigation.canGoBack()) && (
        <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.backButton}>
        <Icon name="arrowleft" size={24} color="#333" />
      </TouchableOpacity>
      )}
      <Typography style={styles.title}>{title}</Typography>
      <View style={{ width: 24 }} />
    </View>
  );
};

export default Header

const styles = StyleSheet.create({
    header: {
      height: 56,
      paddingHorizontal: 16,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // Bottom shadow only
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 3,
      shadowOffset: { width: 0, height: 3 },
      elevation: 3, // For Android
      zIndex: 10,
    },
    backButton: {
      padding: 8,
    },
    title: {
      fontSize: 20,
      fontWeight: '600',
      color: '#333',
    },
  });
  