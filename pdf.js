import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import PDFView from 'react-native-pdf';
import Tts from 'react-native-tts';

const App = () => {
  const [pdfText, setPdfText] = useState('');

  useEffect(() => {
    // Initialize Text to Speech
    Tts.setDefaultLanguage('en-US');
    Tts.setDefaultRate(0.5);
  }, []);

  // Function to handle PDF loading
  const handlePdfLoad = (source) => {
    // Extract text from the PDF (you can implement a library or API to extract text from the file)
    // For demonstration, this is just a static string.
    setPdfText("This is a sample text extracted from the PDF.");
  };

  const handleReadAloud = () => {
    if (pdfText) {
      Tts.speak(pdfText);
    }
  };

  return (
    <View style={styles.container}>
      <PDFView
        source={{uri: 'http://www.pdf995.com/samples/pdf.pdf', cache: true}}
        onLoadComplete={(pageCount) => console.log(`number of pages: ${pageCount}`)}
        onPageChanged={(page, numberOfPages) => console.log(`current page: ${page}`)}
        onError={(error) => console.log(error)}
        style={{ flex: 1 }}
      />
      <Button title="Read Aloud" onPress={handleReadAloud} />
      <Text style={{ marginTop: 10 }}>{pdfText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default App;
