#pragma strict

var pivot : Transform;
var speed : float;

function Start () 
{

}

function Update () 
{
	transform.RotateAround (Vector3.zero, Vector3.forward, -speed * Time.deltaTime);
}