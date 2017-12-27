const Snake=function(head,body) {
  this.head=head;
  this.body=body;
}

Snake.prototype={
  getBody:function() {
    return this.body;
  },
  getHead:function() {
    return this.head;
  },
  move:function() {
    this.body.push(this.head);
    this.head=this.head.next();
    return this.body.shift();
  },
  grow:function() {
    this.body.unshift(new Position(Infinity,Infinity,this.direction));
  },
  turnLeft:function() {
    this.head=this.head.turnLeft();
  },
  turnRight:function() {
    this.head=this.head.turnRight();
  },
  hitsTheBoundary:function() {
    return this.hitsRightWall() || this.hitsLowerWall() || this.hitsUpperWall() || this.hitsLeftWall();
  },
  hitsRightWall:function() {
    return this.head['x']==numberOfCols;
  },
  hitsLeftWall:function() {
    return this.head['x']==-1;
  },
  hitsUpperWall:function() {
    return this.head['y']==-1;
  },
  hitsLowerWall:function() {
    return this.head['y'] == numberOfRows;
  }
}
