(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
window.onload = function () {
  //checkbox and radio
  var arrCheckBox = document.querySelectorAll('.checkbox');

  for (var i = 0; i < arrCheckBox.length; i++) {
    arrCheckBox[i].addEventListener('click', function () {
      if (this.classList.contains('selected') === true) {
        this.classList.remove('selected');
      }
      else {
        this.classList.add('selected');
      }
    });
  }
  var arrRadio = document.querySelectorAll('.radio');

  for (var i = 0; i < arrRadio.length; i++) {
    arrRadio[i].addEventListener('click', function () {
      for (var k = 0; k < arrRadio.length; k++) {
        if (arrRadio[k].classList.contains('selected-radio') === true) {
          arrRadio[k].classList.remove('selected-radio');
        }
      }
      this.classList.add('selected-radio');

    });
  }

  //login
  document.getElementById('log-in').addEventListener('click', function (event) {
    event.stopImmediatePropagation();
    event.preventDefault;
    var loggin = document.getElementById('login');
    var pas = document.getElementById('password');
    var error = document.getElementsByClassName('error-container')[0];
    if (loggin.value != '' && pas.value != '') {
      console.log('data send');
      loggin.value = 'John D|';
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
      if (closeDrpd.classList.contains('hide-elem') === false) {
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

  setInterval(function () {
    //slider1
    var buble = document.getElementById('range-val');
    var val1 = document.getElementById('slider1').value;
    var tmp1 = 0;

    if (val1 == 0) {
      tmp1 = -1;
    }
    else {
      tmp1 = val1 * 0.92

    }
    var margin = tmp1 + '%;';
    buble.style = 'margin-left:' + margin;
    buble.innerHTML = val1;

    //slider3
    var val = document.getElementById('slider3').value + '%';
    var tmp = 'linear-gradient(to right, #FFA940 ' + val + ', rgba(255, 255, 255, 0) 0%)';
    document.getElementById('slider3').style.backgroundImage = tmp;
    //slider2
    var sl1 = document.getElementById('slider2');
    var sl2 = document.getElementById('slider2A');
    var startPos = (sl1.value / 100) * 470;
    var endPos = (sl2.value / 100) * 470;
    var widthProggress = endPos - startPos + 'px';
    sl1.style.backgroundSize = widthProggress;
    var startInPix = startPos + 'px';
    sl1.style.backgroundPosition = startInPix;
  }, 10);

  //video;
  var player = document.getElementsByTagName('video')[0];
  var play = document.getElementById('play');
  var stop = document.getElementById('stop');
  var progress = document.getElementById('progress-bar');
  var fullscreen = document.getElementById('full-screen');
  var valum = document.getElementById('valum');
  var valOff = document.getElementById('volum-off');
  var curr = player.currentTime;
  var dur = player.duration;
  progress.max = dur;
  var time;
  //play-stop
  play.addEventListener('click', playVideo);
  function playVideo() {
    player.play();
    stop.classList.remove('hide-elem');
    play.classList.add('hide-elem');
    time = setInterval(startProgress, 1000);
  };
  stop.addEventListener('click', stopVideo);
  function stopVideo() {
    player.pause();
    play.classList.remove('hide-elem');
    stop.classList.add('hide-elem');
    clearInterval(time);
  }

  //fullscreen

  fullscreen.addEventListener('click', function () {
    if (player.requestFullscreen) {
      player.requestFullscreen();
    } else if (player.mozRequestFullScreen) {
      player.mozRequestFullScreen();
    } else if (player.webkitRequestFullscreen) {
      player.webkitRequestFullscreen();
    }
  });

  //muted
  valum.addEventListener('click', volumchange);
  valOff.addEventListener('click', volumchange);
  function volumchange() {
    if (player.volume > 0) {
      player.volume = 0;
      valOff.classList.remove('hide-elem');
      valum.classList.add('hide-elem');
    } else {
      player.volume = 0.5;
      valOff.classList.add('hide-elem');
      valum.classList.remove('hide-elem');
    }
  }
  //progress
  progress.addEventListener('change', progressVideo);
  function progressVideo() {
    if (player.paused === true) {
      player.currentTime = progress.value;
      updateProgress();

    }
    else {
      stopVideo();
      player.currentTime = progress.value;
      updateProgress();

      playVideo();

    }
  }
  function startProgress() {
    progress.value = player.currentTime;
    updateProgress();
  }
  // setInterval(updateProgress,10)
  function updateProgress() {
    var tmp = progress.value / progress.max;
    var perc = 100 * tmp + '%';
    var line = 'linear-gradient(to right, #ff7f68 ' + perc + ', rgba(255, 255, 255, 0) 0%)';
    document.getElementById('progress-bar').style.backgroundImage = line;
  }

}
},{}]},{},[1]);
