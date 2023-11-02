import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./config.js";



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
        window.location='./login.html'
    }
  });

  const logout = document.querySelector('.btn');
  logout.addEventListener('click',()=>{
    signOut(auth).then(() => {
        console.log('logout successfully');
        
        window.location = 'login.html'
      }).catch((error) => {
        console.log(error);
      });
  })

  