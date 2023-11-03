import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth, db } from "./config.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


// on auth start
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: 'Login in successfully'
    })

  } else {
    window.location = './login.html'
  }
});

const logout = document.querySelector('.btn');
logout.addEventListener('click', () => {
  signOut(auth).then(() => {
    console.log('logout successfully');

    window.location = 'login.html'
  }).catch((error) => {
    console.log(error);
  });
})
// on auth end

// html id come
const form = document.querySelector('#form')
const title = document.querySelector('#title')
const des = document.querySelector('#description')
const card = document.querySelector('#card');
// html id stop
const arry = []

// arry push function start
async function getDataFromFirestore() {
  
  const querySnapshot = await getDocs(collection(db, "posts"));
  querySnapshot.forEach((doc) => {
    arry.push(doc.data());
  });
  console.log(arry);
  arry.map((item) => {
    card.innerHTML += `
    <div class="card">
    <div class="card-body">
    <p><span class="h4">Title : </span> <span class="main-t">${item.Title}</span></p>
    <p><span class="h4">Description : </span> <span class="main-d">${item.Description}</span> </p>
    </div>
    </div>`
  })
}
// arry push function end
getDataFromFirestore()

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  card.innerHTML = ''
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      Title: title.value,
      Description: des.value
    });
    title.value=''
    des.value=''
    console.log("Document written with ID: ", docRef.id);
    getDataFromFirestore()

  } catch (e) {
    console.error("Error adding document: ", e);
  }
})



