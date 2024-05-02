const btnW = document.getElementById('shareW');
const btnG = document.getElementById('shareG');
const resultPara = document.getElementById('shareResult');

// Share must be triggered by "user activation"
function gmailShareBtnClick(event) {
// General url for gmail:https://mail.google.com/mail/u/0/?fs=1&body=abc&tf=cm
  try {
  const selectedText1 = document.getElementById('ciphertext').value;
  if (!selectedText1.length) {
    resultPara.textContent = "No ciphertext to share";
    
  }
  else if (selectedText1.length) {
    // alert('hello');
    const whatsappShareUrl = "https://mail.google.com/mail/u/0/?fs=1&";
    const textBody = `${encodeURIComponent(selectedText1)}`;
    window.open(`${whatsappShareUrl}body="${textBody}"&tf=cm`);
    resultPara.textContent = "Encrypted data shared successfully";
  }

} catch (err) {
resultPara.textContent = `Error: ${err}`;
}
}

function whatsappShareBtnClick(event) {
  try {
  const selectedText1 = document.getElementById('ciphertext').value;
  if (!selectedText1.length) {
    resultPara.textContent = "No ciphertext to share";
    
  }
  else if (selectedText1.length) {
    // alert('hello');
    const whatsappShareUrl = "https://api.whatsapp.com/send";
    const text = `${encodeURIComponent(selectedText1)}`;
    window.open(`${whatsappShareUrl}?text="${text}"`);
  }
  resultPara.textContent = "Encrypted data shared successfully";
} catch (err) {
  resultPara.textContent = `Error: ${err}`;
}
}

  

btnW.addEventListener("click", whatsappShareBtnClick);
btnG.addEventListener("click", gmailShareBtnClick);


// const kder = document.getElementById('pkey');

function toggleHide(a) {
  // alert('hello');
  const head = document.getElementById(a);
  if (head.style.display === "none") {
    head.style.display = "block";
  } else {
    head.style.display = "none";
  }
}




  
//   const fileInput = document.querySelector("#fileText");
// //   const output = document.querySelector(".output");
  
//   fileInput.addEventListener("change", async () => {
//     const [file] = fileInput.files;
  
//     if (file) {
//         // let a=await file.text();
//         document.getElementById('plaintext').innerText = await file.text();
//     }
//   });

  let base64String = "";

		function imageUploaded() {
			let file = document.querySelector(
				'input[type=file]')['files'][0];
      const imageContainer = document.getElementById("imageContainer").innerHTML="<div></div>";

			let reader = new FileReader();
			// console.log("next");

			reader.onload = function () {
				base64String = reader.result.replace("data:", "")
					.replace(/^.+,/, "");

				imageBase64Stringsep = base64String;

				// alert(imageBase64Stringsep);
      document.getElementById('plaintext').value = base64String;
				// console.log(base64String);
			}
			reader.readAsDataURL(file);

		}

		// function displayString() {
    //     document.getElementById('plaintext').value = base64String;

		// }

// function to display the decrypted images
function displayImage(){
// Create an Image object
const image = new Image();
toggleHide('imageContainer');
// Set the Base64 string as the image source
image.src = `data:image/png;base64,${document.getElementById('plaintext').value}`;
//  console.log(`${document.getElementById('ciphertext').value.ct}`);
// console.log(document.getElementById('plaintext').value);
// image.src = `data:image/png;base64,${document.getElementById('plaintext')}`;
image.alt="Sorry the secret message can't converted in an image there is something missing in the message";

// Append the image to an existing HTML element (e.g., a div with id "imageContainer")
const imageContainer = document.getElementById("imageContainer");
imageContainer.firstElementChild.remove();

imageContainer.appendChild(image);


}