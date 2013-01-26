#pragma strict

var minSpeed : float;
var maxSpeed : float;

private var speed : float;
var rotationSpeed : float;
var wrapAroundX : float;

function Start()
{
	speed = Random.Range(minSpeed, maxSpeed);
}

function Update () 
{
	transform.Translate(Vector3((speed * Time.deltaTime), 0, Random.Range(-0.5, 0.6)));
	
	if (transform.position.x >= 1100)
		transform.position.x = -1100;
}