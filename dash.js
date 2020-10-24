// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  var box = document.getElementById('box');

  

        const aentity = document.createElement('a-entity')
        fname = localStorage.getItem("filename")
        if (fname == "BrainStem.gltf") 
        { 
        
          aentity.setAttribute('gltf-model', url = "BrainStem/BrainStem.gltf")
        } 
        else if (fname == "CesiumMilkTruck.gltf") 
        {
          aentity.setAttribute('gltf-model', url = "CesiumMilkTruck/CesiumMilkTruck.gltf")
        }
        else if (fname == "Duck.gltf") 
        {
          
          aentity.setAttribute('gltf-model', url = "Duck/Duck.gltf")
        } 
        else if (fname == "model.gltf") 
        {
          
          aentity.setAttribute('gltf-model', url = "model/model.gltf")
        } 
        else if (fname == "stereo.gltf") 
        {
          
          aentity.setAttribute('gltf-model', url = "stereo/stereo.gltf")
        }  
        else 
        { 
          aentity.setAttribute('gltf-model', url = "sunflower/sunflower.gltf")
        }
        
        box.appendChild(aentity)
