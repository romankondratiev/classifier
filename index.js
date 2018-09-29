async function first_model(){
      const mobilenet = await tf.loadModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');
      const input_s = mobilenet.inputs[0].shape;
	const output_s = mobilenet.outputs[0].shape;
      document.getElementById('output_field').innerText = 
            'Your model predicts:\n\n' + mobilenet.predict(tf.zeros([1, 224, 224, 3]))
}

first_model();
