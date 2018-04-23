import { ROWS, COLS } from "./config";
import { join } from "path";

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }];

  // 먹이의 좌표
  this.fruit = this.loop();

  this.direction = "right";
}
// 먹이좌표가 몸통에서 안생기게 하는 함수
 SnakeGameLogic.prototype.loop = function() {
  let randomNumber = {x: null, y: null };
  do {
    randomNumber.x = Math.ceil(Math.random() * COLS - 1);
    randomNumber.y = Math.ceil(Math.random() * ROWS - 1);
  } while (this.joints.some(data => data.x === randomNumber.x || data.y === randomNumber.y));
  return randomNumber;
}

SnakeGameLogic.prototype.up = function() {
  // 위쪽 화살표 키를 누르면 실행되는 함수
  console.log("up");
  // this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y - 1 });
  // this.joints.pop();
  this.direction = "up";
};

SnakeGameLogic.prototype.down = function() {
  // 아래쪽 화살표 키를 누르면 실행되는 함수
  console.log("down");
  // this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y + 1 });
  // this.joints.pop();
  this.direction = "down";
};

SnakeGameLogic.prototype.left = function() {
  // 왼쪽 화살표 키를 누르면 실행되는 함수
  console.log("left");
  // this.joints.unshift({ x: this.joints[0].x - 1, y: this.joints[0].y });
  // this.joints.pop();
  this.direction = "left";
};

SnakeGameLogic.prototype.right = function() {
  // 오른쪽 화살표 키를 누르면 실행되는 함수
  console.log("right");
  // this.joints.unshift({ x: this.joints[0].x + 1, y: this.joints[0].y });
  // this.joints.pop();
  this.direction = "right";
};

SnakeGameLogic.prototype.nextState = function() {
  // 한 번 움직여야 할 타이밍마다 실행되는 함수
  // 게임이 아직 끝나지 않았으면 `true`를 반환
  // 게임이 끝났으면 `false`를 반환
  console.log(`nextState`);

  // 컨트롤
  if (this.direction === "up") {
    this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y - 1 });
    // this.joints.pop();
  }
  if (this.direction === "down") {
    this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y + 1 });
    // this.joints.pop();
  }
  if (this.direction === "left") {
    this.joints.unshift({ x: this.joints[0].x - 1, y: this.joints[0].y });
    // this.joints.pop();
  }
  if (this.direction === "right") {
    this.joints.unshift({ x: this.joints[0].x + 1, y: this.joints[0].y });
    // this.joints.pop();
  }
  // 몸통에 부딛히면 죽는다.
  let newjoin = this.joints.slice(1);
  console.log(newjoin);
  if (
    newjoin.some(
      item => item.x === this.joints[0].x && item.y === this.joints[0].y
    )
  ) {
    return false;
  }

  // 먹이좌표
  if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
    console.log("먹엇다");
    // this.joints.push({ x: this.fruit.x, y: this.fruit.y });
    this.fruit = this.loop();
  } else {
    this.joints.pop();
  }


  // 벽에 부딛히면 게임끝
  if (
    this.joints[0].x >= COLS ||
    this.joints[0].y >= ROWS ||
    this.joints[0].x < 0 ||
    this.joints[0].y < 0
  ) {
    return false;
  }
  return true;
};

export default SnakeGameLogic;

//머리가 몸통에 부딪혔는지를 판단

//새머리
// const newHead = {x:10, y:10};
// //기존 몸통
// const joints = [
//   {x:12, y :10},
//   {x:11, y :10},
//   {x:10, y :10},
// ]
//과제  some 메소드를써서 몸통에 부딪혓는지 확인하기
// joints.some(item => item.x === newHead.x && item.y === newHead.y)

// for (let item of joints){
//   if(item.x === newHead.x && item.y === newHead.y){
//     return joints
//   }
// }

// 과일랜덤하게 생성헀으면 뱀에 몸통에 랜덤하게생성된 과일에 위치하고 같은 객체가 있으면 랜덤을 다시돌려줘라.
