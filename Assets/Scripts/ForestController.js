#pragma strict

var minScalingSpeed = -0.010;
var maxScalingSpeed = 0.020;

var scalingSpeed : float;

function Start () {
	scalingSpeed = 0;
}

function Update () {
	GameObject.Find("Tree1").GetComponent(ScalerScript).scalingSpeed = scalingSpeed;
}

public function GrowFaster () {
	Debug.Log("Grow faster");
	if (scalingSpeed < maxScalingSpeed) {
		scalingSpeed += 0.005;
	}
}

function GrowSlower() {
	Debug.Log("Grow slower");
	if (scalingSpeed > minScalingSpeed) {
		scalingSpeed -= 0.005;
	}
}
