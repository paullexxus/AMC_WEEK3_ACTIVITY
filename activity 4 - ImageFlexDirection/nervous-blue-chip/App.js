import React from 'react';
import {StyleSheet, TextInput, View, Image} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('Name: ');
  const [age, onChangeAge] = React.useState('Age: ');
  const [address, onChangeAddress] = React.useState('Address: ');
  const [school, onChangeSchool] = React.useState('School: ');
  const [course, onChangeCourse] = React.useState('Course: ');
  const [email, onChangeEmail] = React.useState('Email: ');
  const [number, onChangeContact] = React.useState('Contact Number: ');
  const [value, onChangeAboutMe] = React.useState('About Me: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{uri: 'https://static.vecteezy.com/system/resources/previews/000/571/577/original/skull-bone-icon-vector.jpg'}} />
          <TextInput style={styles.input}
          onChangeText={onChangeName}
          value={name} />
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{uri: 'https://th.bing.com/th/id/OIP.pwuc6qRSPgmtcW42_jGQZQHaHa?pid=ImgDet&w=194&h=194&c=7'}} />
          <TextInput style={styles.input}
          onChangeText={onChangeAge}
          value={age} />
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{uri: 'https://th.bing.com/th/id/OIP.8tK7gh0ue9Sqg-I1tZ35jQHaHa?pid=ImgDet&w=194&h=194&c=7;'}} />
          <TextInput style={styles.input}
          onChangeText={onChangeAddress}
          value={address} />
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{uri: 'https://th.bing.com/th/id/OIP.vaWnhQLqOa7rpqyJKZ45xQHaHa?pid=ImgDet&w=194&h=194&c=7'}} />
          <TextInput style={styles.input}
          onChangeText={onChangeSchool}
          value={school} />
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{uri: 'https://th.bing.com/th/id/OIP.SLU0c-QkQ-wJqz2a21GQPgHaHa?pid=ImgDet&w=194&h=194&c=7'}} />
          <TextInput style={styles.input}
          onChangeText={onChangeCourse}
          value={course} />
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{uri: 'https://th.bing.com/th/id/OIP.GT8ldXncdfJkQYfQ3D33kAHaIt?pid=ImgDet&w=194&h=227&c=7'}} />
          <TextInput style={styles.input}
          onChangeText={onChangeEmail}
          value={email} />
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{uri: 'https://th.bing.com/th/id/OIP.4RHh2gSGo9BtPqfcOmcMkAHaHa?pid=ImgDet&w=194&h=194&c=7'}} />
          <TextInput style={styles.input}
          onChangeText={onChangeContact}
          value={number} />
        </View>
        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{uri: 'https://th.bing.com/th/id/OIP.bSbm9wX-qOUmwWLJsgzziAHaHa?pid=ImgDet&w=194&h=194&c=7'}} />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={onChangeAboutMe}
            value={value}
            style={styles.textInput}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 12,
  },
  input: {
    height: 40,
    flex: 1,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
  textInput: {
    padding: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
});

export default TextInputExample;