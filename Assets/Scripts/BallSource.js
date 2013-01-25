#pragma strict

var ballSpeed : float;
var interval : float;

private var lastSpawnTime : float;

function Start () {

}

function Update () {
	if (Time.time > lastSpawnTime + interval) {
		var b = GameObject.Find("Ball");
		var newBall = Instantiate(b);
		newBall.GetComponent(RotateBallAroundPivot).speed = ballSpeed;
		lastSpawnTime = Time.time;
	}
}

// Destroy balls which have come all the way round.
function OnTriggerStay (other : Collider) {
	Debug.Log("dstroy");
	Destroy(other.gameObject);
}

