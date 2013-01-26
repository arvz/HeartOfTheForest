#pragma strict

var speed : float;
var rotationSpeed : float;
var wrapAroundX : float;

function Update () 
{
	transform.Translate(Vector3((speed * Time.deltaTime), 0, Random.Range(-0.5, 0.1)));
	
	if (transform.position.x >= 1100)
		transform.position.x = -1100;
}