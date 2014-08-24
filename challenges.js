
var requireUserCountWithinTime = function(userCount, timeLimit) {
    return {
        description: "Transport <span class='emphasis-color'>" + userCount + "</span> people in <span class='emphasis-color'>" + timeLimit.toFixed(0) + "</span> seconds or less",
        evaluate: function(world) {
            if(world.elapsedTime >= timeLimit*1000 || world.transportedCounter >= userCount) {
                return world.elapsedTime <= timeLimit*1000 && world.transportedCounter >= userCount;
            } else {
                return null;
            }
        }
    }
};


var requireUserCountWithMaxWaitTime = function(userCount, maxWaitTime) {
    return {
        description: "Transport <span class='emphasis-color'>" + userCount + "</span> people and let noone wait more than <span class='emphasis-color'>" + maxWaitTime.toFixed(0) + "</span> seconds",
        evaluate: function(world) {
            if(world.maxWaitTime >= maxWaitTime*1000 || world.transportedCounter >= userCount) {
                return world.maxWaitTime <= maxWaitTime*1000 && world.transportedCounter >= userCount;
            } else {
                return null;
            }
        }
    }
};


var challenges = [
     {options: {floorCount: 3, elevatorCount: 1, spawnRate: 0.3}, condition: requireUserCountWithinTime(15, 60)}
    ,{options: {floorCount: 5, elevatorCount: 1, spawnRate: 0.4}, condition: requireUserCountWithinTime(20, 60)}
    ,{options: {floorCount: 4, elevatorCount: 2, spawnRate: 0.5}, condition: requireUserCountWithinTime(25, 60)}
    ,{options: {floorCount: 8, elevatorCount: 2, spawnRate: 0.6}, condition: requireUserCountWithinTime(28, 60)}
    ,{options: {floorCount: 6, elevatorCount: 4, spawnRate: 1.7}, condition: requireUserCountWithinTime(100, 65)}
    ,{options: {floorCount: 6, elevatorCount: 2, spawnRate: 1.0}, condition: requireUserCountWithMaxWaitTime(40, 10)}
];
