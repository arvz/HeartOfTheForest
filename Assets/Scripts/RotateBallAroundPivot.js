#pragma strict

var pivot : Transform;
var speed : float;

function Start () 
{

}

function Update () 
{
	transform.RotateAround (pivot.localPosition, Vector3.forward, -speed * Time.deltaTime);
}
