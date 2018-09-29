      async function first_model(){
      const mobilenet = await tf.loadModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');
      //The input size is [null, 224, 224, 3]
	  const input_s = mobilenet.inputs[0].shape;

	  //The output size is [null, 1000]
	  const output_s = mobilenet.outputs[0].shape;

	  //mobilenet.predict(tf.zeros([1, 224, 224, 3]))
	  //await pred.argMax().print();
      
      document.getElementById('output_field').innerText = 
      'Your model predicts:\n\n' + 
      mobilenet.predict(tf.zeros([1, 224, 224, 3]))}
      first_model();