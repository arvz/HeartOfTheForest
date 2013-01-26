#pragma strict

var minRotation : float;
var maxRotation : float;

var minSway : float;
var maxSway : float;

var swayAmount : float;

private var swayDirection: String;

function Start () {
	
	swayAmount = Random.Range(minSway, maxSway);
	
	swayDirection = "right";
	minRotation = transform.eulerAngles.z - swayAmount;
	maxRotation = transform.eulerAngles.z + swayAmount;
	
	if (minRotation < 0)
		minRotation = 0.05;
}

function Update () 
{
	print("Direction: " + swayDirection);

	if (transform.eulerAngles.z >= 0.98*maxRotation)
		swayDirection = "left";
	else if (transform.eulerAngles.z <= minRotation + (0.02*minRotation))
		swayDirection = "right";
	
	if (swayDirection == "left")
		transform.eulerAngles.z = Mathf.Lerp(transform.eulerAngles.z, minRotation, Time.deltaTime/9);
	else if (swayDirection == "right")
		transform.eulerAngles.z = Mathf.Lerp(transform.eulerAngles.z, maxRotation, Time.deltaTime/9);

}