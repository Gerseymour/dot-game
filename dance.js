$(() => {

  let points = 0;
  dancerArr =[];

  $('#dance').on('click', function () {
    dancerArr.forEach( el => {
      el.dancing();
    });
  });
  $('#rest').on('click', function () {
    dancerArr.forEach( el => {
      el.takeABreak();
    });
  });
  $('#regular').on('click', function () {
    const dancer = new Dancer();
    dancer.setPosition(randomStagePosition()[0], randomStagePosition()[1]);
    $('#stage').append(dancer.$node);
    dancerArr.push(dancer);
  });
  $('#tapper').on('click', function () {
    const tapper = new Tapper();
    tapper.setPosition(randomStagePosition()[0], randomStagePosition()[1]);
    $('#stage').append(tapper.$node);
    dancerArr.push(tapper);
  });
  $('#rainbow').on('click', function () {
    const rainbow = new Rainbow();
    rainbow.setPosition(randomStagePosition()[0], randomStagePosition()[1]);
    $('#stage').append(rainbow.$node);
    dancerArr.push(rainbow);
  });
  $('#start').on('click',function () {
    for (let i = 0; i < 10; i ++) {
      const rainbow = new Rainbow();
      rainbow.$node.on('mouseover', loseGame);
      rainbow.setPosition(randomStagePosition()[0], randomStagePosition()[1]);
      $('#stage').append(rainbow.$node);
      dancerArr.push(rainbow);
    }
    dancerArr.forEach( el => {
      el.dancing();
    });
    const beer = new Beer();
    beer.setPosition(randomStagePosition()[0], randomStagePosition()[1]);
    beer.$node.on('mouseover', drink);
    $('#stage').append(beer.$node);
  });

  class Dancer {
    constructor () {
      this.$node = $('<div class="dancer"></div>');
    }
    setPosition (top, left) {
      this.left = left;
      this.top = top;
      this.$node.css({top, left});
    }

    dancing () {
      if (this.oldTop) {
        this.setPosition(this.oldTop,this.left);
      }
      clearInterval(this.goingDown);
      let count = 20;
      let num;
      this.danceInterval = setInterval(() => {
        if (count === 20) {
          count = 0;
          num = (Math.floor(Math.random() * 8));
        }
        switch (num) {
        case 0:
          if (this.top + 1 >= $('#stage').height - 20) {
            count = 20;
            break;
          }
          this.setPosition(this.top+1,this.left);
          if (this.top + 1 >= $('#stage').height() -20) {
            count = 20;
            break;
          }
          count++;
          break;
        case 1:
          if (this.top - 1 <= 0) {
            count = 20;
            break;
          }

          this.setPosition(this.top-1,this.left);
          count++;
          break;
        case 2:
          if (this.left + 1 >= $('#stage').width() - 20) {
            count = 20;
            break;
          }
          this.setPosition(this.top,this.left+1);
          count++;
          break;
        case 3:
          if (this.left - 1 <= 0) {
            count = 20;
            break;
          }
          this.setPosition(this.top,this.left-1);
          count++;
          break;
        case 4:
          if (this.top + 1 >= $('#stage').height() - 20 || this.left + 1 >= $('#stage').width() - 20) {
            count = 20;
            break;
          }
          this.setPosition(this.top+1,this.left+1);
          count++;
          break;
        case 5:
          if (this.top - 1 <= 0 || this.left + 1 >= $('#stage').width() - 20) {
            count = 20;
            break;
          }
          this.setPosition(this.top-1,this.left+1);
          count++;
          break;
        case 6:
          if (this.top + 1 >= $('#stage').height() - 20 || this.left - 1 <= 0) {
            count = 20;
            break;
          }
          this.setPosition(this.top+1,this.left-1);
          count++;
          break;
        case 7:
          if (this.top - 1 <= 0 || this.left - 1 <= 0) {
            count = 20;
            break;
          }
          this.setPosition(this.top-1,this.left-1);
          count++;
          break;
        default:
        }
      }
      , 5);
    }



    takeABreak () {
      this.oldTop = this.top;
      clearInterval(this.danceInterval);

      this.goingDown = setInterval (() => {
        this.setPosition(this.top+1,this.left);

        if (this.top > ($('#stage').height())-20) {
          clearInterval(this.goingDown);
        }
      }, 2);



    }
  }


  class Tapper extends Dancer {
    constructor (top, left) {
      super(top, left);
      this.$node.addClass('blink');
    }
  }

  class Rainbow extends Dancer {
    constructor (top, left) {
      super(top, left);
      this.$node.addClass('rainbow');
    }
  }

  class Beer extends Dancer {
    constructor (top, left) {
      super(top, left);
      this.$node.addClass('beer');
      this.$node.removeClass('dancer');
    }
  }

  function randomStagePosition () {
    let coordArr = [];
    coordArr.push(Math.floor(Math.random() * ($('#stage').height()-30)));
    coordArr.push(Math.floor(Math.random() * ($('#stage').width()-30)));
    return coordArr;

  }

  function loseGame () {
    alert('You lost, your score is:' + points);
    location.reload();
  }

  function drink () {
    points++
    $('#points').text(`${points}`)
    for (let i = 0; i < 10; i ++) {
      const rainbow = new Rainbow();
      rainbow.$node.on('mouseover', loseGame);
      rainbow.setPosition(randomStagePosition()[0], randomStagePosition()[1]);
      $('#stage').append(rainbow.$node);
      dancerArr.push(rainbow);
    }
    dancerArr.forEach( el => {
      el.dancing();
    });
    this.remove();
    const beer = new Beer();
    beer.setPosition(randomStagePosition()[0], randomStagePosition()[1]);
    beer.$node.on('mouseover', drink);
    $('#stage').append(beer.$node);
  }


});

