var check = function () {
   if (document.getElementById('password').value ===
      document.getElementById('confirm_password').value) {
      document.getElementById('password').style.border =
         document.getElementById('confirm_password').style.border = '3px solid green';
   } else {
      document.getElementById('password').style.border =
         document.getElementById('confirm_password').style.border = '3px solid red';
   }
}




