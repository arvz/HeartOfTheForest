#pragma strict

var speed : float;
var rotationSpeed : float;

function Update () 
{
	transform.Translate(Vector3((speed * Time.deltaTime), 0, Random.Range(-0.5, 0.1)));
}