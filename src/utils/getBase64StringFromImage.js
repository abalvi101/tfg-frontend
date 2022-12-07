const getBase64StringFromImage = (image, callback) => {
  let base64 = '2';

  const reader = new FileReader();
  reader.onloadend = () => {
      // console.log(reader.result);
      // Logs data:image/jpeg;base64,wL2dvYWwgbW9yZ...

      // Convert to Base64 string
      // base64 = reader.result.replace('data:', '').replace(/^.+,/, '');
      // callback(base64);
      callback(reader.result)
      // Logs wL2dvYWwgbW9yZ...
  };
  reader.readAsDataURL(image);

};

export default getBase64StringFromImage; 