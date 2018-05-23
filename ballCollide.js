let hit = false;
let resetId = 0;
const resetBall = () => {
  clearTimeout(resetId);
  slct('#ball').body.position.set(0, 0.6, -4);
  slct('#ball').body.velocity.set(0, 5, 0);
  slct('#ball').body.angularVelocity.set(0, 0, 0);
  hit = false;
  resetId = setTimeout(resetBall, 6000);
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
  }
});

setTimeout(resetBall, 3000);