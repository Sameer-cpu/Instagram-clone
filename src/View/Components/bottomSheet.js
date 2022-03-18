import React, {useRef, useState, forwardRef, useImperativeHandle} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, FlatList} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Iconhandilar} from '../../Model/brain/iconHandilar';
import {theme} from '../../Model/constants';

export const BottomSheet = forwardRef(({navigation = null}, ref) => {
  const modalizeRef = useRef(null);
  const [sheetData, setSheetData] = useState([]);
  const [sheetDataTitle, setSheetDataTitle] = useState(false);

  useImperativeHandle(ref, () => ({
    openModel({data = [], title = false}) {
      setSheetData(data);
      setSheetDataTitle(title);
      modalizeRef.current.open();
    },
  }));

  // useEffect(() => {
  //   if (NEW_FEEDS.isOpen) {
  //     modalizeRef.current.open();
  //   } else {
  //     modalizeRef.current.close();
  //   }
  // }, [NEW_FEEDS.isOpen]);
  return (
    <Modalize onClosed={() => {}} ref={modalizeRef} handlePosition="inside">
      <>
        {sheetDataTitle && (
          <View style={styles.titleBox}>
            <Text style={styles.title}>Create New</Text>
          </View>
        )}
        <FlatList
          data={sheetData}
          keyExtractor={item => `${item.subTitle}`}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.itemBox}
                onPress={() => {
                  {
                    item.navigateTo.length >= 1
                      ? navigation.navigate(`${item.navigateTo}`)
                      : alert('currently this screen is not available');
                  }
                }}>
                <View>
                  <Iconhandilar
                    rest={{
                      type: item.type,
                      iconName: item.icon,
                      styles: styles.icon,
                    }}
                  />
                </View>

                <Text
                  style={{
                    ...styles.itemTitle,
                    borderBottomColor: sheetDataTitle
                      ? theme.color.lightGrey
                      : 'transparent',
                  }}>
                  {item.subTitle}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </>
    </Modalize>
  );
});
const styles = StyleSheet.create({
  titleBox: {
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomColor: theme.color.lightGrey,
    borderBottomWidth: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  itemBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 18,
    padding: 15,
  },
  itemTitle: {
    padding: 15,
    fontSize: 16,
    borderBottomWidth: 1,
    flex: 1,
    marginRight: 15,
  },
});
