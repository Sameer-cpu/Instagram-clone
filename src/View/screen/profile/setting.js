import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Iconhandilar, iconhandilar} from '../../../Model/brain/iconHandilar';
import {theme} from '../../../Model/constants';
import {InputField} from '../../Components/textInput';
import {settingData} from '../../Data/settingData';
import {social} from '../../Data/social';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
const {width} = Dimensions.get('window');
export const Setting = () => {
  return (
    <ScrollView>
      <View style={styles.mainView}>
        <InputField
          placeholder="Search "
          rest={styles.inputContainer}
          width={width / 1.1}
          icon={true}
        />
        <View>
          <FlatList
            data={settingData}
            keyExtractor={index => `${index}`}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={styles.itemBox}
                  onPress={() => {
                    {
                      alert('currently this screen is not available');
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

                  <Text style={styles.itemTitle}>{item.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <View style={styles.fbBox}>
          <Text style={styles.fb}>FACEBOOK</Text>

          {social.map(item => {
            return (
              <Iconhandilar
                rest={{
                  type: item.type,
                  iconName: item.icon,
                  styles: styles.brndIcons,
                }}
              />
            );
          })}
        </View>
        <View style={styles.accountCenterBox}>
          <Text style={styles.accountCenterBoxTitle}>Account Center</Text>
          <Text style={styles.accountCenterBoxPara}>
            Controls settings for connected experiences across Instagram, the
            Facebook app and Messanger, includes story and post sharing logging
            in.
          </Text>
        </View>
      </View>
      <View style={styles.logins}>
        <Text style={styles.loginsTitle}>Logins</Text>
        <TouchableOpacity
          style={styles.logButon}
          onPress={() => {
            alert('Some thing went wrong');
          }}>
          <Text style={styles.accountCenterBoxTitle}>Add Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logButon}
          onPress={() => {
            alert('Some thing went wrong');
          }}>
          <Text style={styles.accountCenterBoxTitle}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {flex: 1},
  inputContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: theme.color.lightGrey,
  },
  itemTitle: {
    padding: 15,
    fontSize: 16,
    flex: 1,
    marginRight: 15,
  },
  icon: {
    fontSize: 18,
    padding: 15,
  },
  itemBox: {
    flexDirection: 'row',
    width,
  },
  fbBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  fb: {
    letterSpacing: 4,
    marginRight: 10,
  },
  brndIcons: {
    padding: 5,
  },
  accountCenterBox: {
    padding: 15,
  },
  accountCenterBoxTitle: {
    color: theme.color.lightBlue,
    fontSize: 16,
    paddingVertical: 10,
  },
  accountCenterBoxPara: {
    fontSize: 14,
    color: theme.color.grey,
  },
  logins: {
    padding: 15,
  },
  loginsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  logButon: {
    paddingVertical: 10,
  },
});
