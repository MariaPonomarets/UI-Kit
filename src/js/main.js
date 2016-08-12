
require('./calendar.js')();

window.onload = function () {
  //login
  document.getElementById('log-in').addEventListener('click', function () {
    var loggin = document.getElementById('login');
    var pas = document.getElementById('password');
    var error = document.getElementsByClassName('error-container')[0];
    if (loggin.value != '' && pas.value != '') {
      console.log('data send');
      loggin.value = '';
      pas.value = '';
      if (error.classList.contains('hide-elem') === false) {
        error.classList.add('hide-elem')
      }
    }
    else {
      if (error.classList.contains('hide-elem') === true) {
        error.classList.remove('hide-elem')
      }
    }
  });
  
  //close dropdown on page
  var buttonClosDrpd = document.getElementById('arrow-open-close');
  var closeDrpd = document.getElementById('close-dropdown');
  var childLiCloseDrpd = document.getElementById("close-dropdown").getElementsByTagName("li");

  buttonClosDrpd.addEventListener('click', function () {
    if (buttonClosDrpd.innerHTML === 'arrow_drop_up') {
      closeDrpd.classList.remove('hide-elem');
      buttonClosDrpd.innerHTML = 'arrow_drop_down'
      document.getElementsByClassName('dropdown-container-close')[0].style.height = 'auto';
      buttonClosDrpd.classList.add('open');
      document.getElementsByClassName('title')[0].style.color = '#C9C9C9';

    }
    else {
      closeDrpd.classList.add('hide-elem')
      buttonClosDrpd.innerHTML = 'arrow_drop_up';
      document.getElementsByClassName('dropdown-container-close')[0].style.height = '62px';
      buttonClosDrpd.classList.remove('open');
      document.getElementsByClassName('title')[0].style.color = '#333333';

    }
  });
  
  for (var i = 0; i < childLiCloseDrpd.length; i++) {
    childLiCloseDrpd[i].addEventListener('click', function () {
      console.log(this);
      if (closeDrpd.classList.contains('hide-elem')===false) {
        closeDrpd.classList.add('hide-elem');
        buttonClosDrpd.innerHTML = 'arrow_drop_up';
        document.getElementsByClassName('dropdown-container-close')[0].style.height = '62px';
        buttonClosDrpd.classList.remove('open');
        document.getElementsByClassName('title')[0].innerHTML = this.getElementsByTagName('a')[0].innerHTML;
        document.getElementsByClassName('title')[0].style.color = '#333333';

        console.log(this.getElementsByTagName('a')[0].innerHTML);
      }
    });
  }

  //open dropdown on page
  var buttonClosDrpd2 = document.getElementById('arrow-open-close2');
  var closeDrpd2 = document.getElementById('close-dropdown2');
  var childLiCloseDrpd2 = document.getElementById("close-dropdown2").getElementsByTagName("li")
  buttonClosDrpd2.addEventListener('click', function () {
    if (buttonClosDrpd2.innerHTML === 'arrow_drop_down') {
     
      closeDrpd2.classList.add('hide-elem')
      buttonClosDrpd2.innerHTML = 'arrow_drop_up';
      document.getElementsByClassName('dropdown-container-close')[1].classList.remove('dropdown-open');
      buttonClosDrpd2.classList.remove('open');
      document.getElementsByClassName('title')[1].style.color = '#333333';
    }
    else {
      closeDrpd2.classList.remove('hide-elem');
      buttonClosDrpd2.innerHTML = 'arrow_drop_down'
      document.getElementsByClassName('dropdown-container-close')[1].classList.add('dropdown-open');
      buttonClosDrpd2.classList.add('open');
      document.getElementsByClassName('title')[1].style.color = '#C9C9C9';
    }
  })
  for (var i = 0; i < childLiCloseDrpd2.length; i++) {
    childLiCloseDrpd2[i].addEventListener('click', function () {
      console.log(this);
      if (closeDrpd2.classList.contains('hide-elem') === false) {
        closeDrpd2.classList.add('hide-elem');
        buttonClosDrpd2.innerHTML = 'arrow_drop_up';
        document.getElementsByClassName('dropdown-container-close')[1].classList.remove('dropdown-open');
        buttonClosDrpd2.classList.remove('open');
        document.getElementsByClassName('title')[1].style.color = '#333333';
        document.getElementsByClassName('title')[1].innerHTML = this.getElementsByTagName('a')[0].innerHTML;
      }
    });
    childLiCloseDrpd2[i].addEventListener('mouseout', function () {
      for (var k = 0; k < childLiCloseDrpd2.length; k++) {
        if (childLiCloseDrpd2[k].classList.contains('active') === true) {
          childLiCloseDrpd2[k].classList.remove('active');
        }
      }
    });
    childLiCloseDrpd2[i].addEventListener('mouseover', function () {
      for (var k = 0; k < childLiCloseDrpd2.length; k++) {
        if (childLiCloseDrpd2[k].classList.contains('active') === true) {
          childLiCloseDrpd2[k].classList.remove('active');
        }
        this.classList.add('active');
      }
    });
  }
 
}