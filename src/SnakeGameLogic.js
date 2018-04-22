import { ROWS, COLS } from "./config";
import { join } from "path";

function SnakeGameLogic() {
  // 각 마디의 좌표를 저장하는 배열
  this.joints = [{ x: 2, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 0 }];

  // 먹이의 좌표
  this.fruit = { x: 5, y: 5 };

  this.direction = "right";
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
    this.joints.pop();
  }
  if (this.direction === "down") {
    this.joints.unshift({ x: this.joints[0].x, y: this.joints[0].y + 1 });
    this.joints.pop();
  }
  if (this.direction === "left") {
    this.joints.unshift({ x: this.joints[0].x - 1, y: this.joints[0].y });
    this.joints.pop();
  }
  if (this.direction === "right") {
    this.joints.unshift({ x: this.joints[0].x + 1, y: this.joints[0].y });
    this.joints.pop();
  }



// 먹이좌표
  if (this.joints[0].x === this.fruit.x && this.joints[0].y === this.fruit.y) {
    console.log("먹엇다");
    // FIXME: 먹이를 먹은 순간 머리 부분에 두 개의 마디가 존재하게 됩니다. `console.log(this.joints)`를 통해 관찰해보세요.
    this.joints.push({ x: this.fruit.x, y: this.fruit.y });
    // FIXME: `Math.floor(Math.random() * COLS)`로 고칠 수 있습니다.
    this.fruit.x = Math.ceil(Math.random() * COLS - 1);
    this.fruit.y = Math.ceil(Math.random() * ROWS - 1);
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
