class Chain{
    constructor(bodyA, pointB){
        var option={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10,
        }
        this.chain = Constraint.create(option);
        this.pointB = pointB;
        // this.bodyA = bodyA;
        World.add(world, this.chain);
    }

    fly(){
        this.chain.bodyA = null;
    }
    
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            line(pointA.x,pointA.y, pointB.x, pointB.y);
        }    
    }
}