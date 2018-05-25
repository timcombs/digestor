let hit = false;
let resetId = 0;

// recenter ball when it goes off plane or 15 sec elapses
const resetBall = () => {
  clearTimeout(resetId);
  slct('#ball').body.position.set(0, 0.6, -4);
  slct('#ball').body.velocity.set(0, 15, 0);
  slct('#ball').body.angularVelocity.set(0, 0, 0);
  hit = false;
  resetId = setTimeout(resetBall, 15000);
};

let score = 0;
hit = false;
resetId = 0;
on(slct('#weapon'), 'collide', (e) => {
  const ball = slct('#ball');
  if(e.detail.body.id === ball.body.id && !hit){
    hit = true;
    score = score + 1;
    clearTimeout(resetId);
    resetId = setTimeout(resetBall, 2000);

    // updates score
    slct('#score').setAttribute('text', 'value', 'SOCRE ' +score);

  }
});

setTimeout(resetBall, 3000);