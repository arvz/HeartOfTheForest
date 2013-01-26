#pragma strict

var pivot : Transform;
var speed : float;

function Start () 
{

}

function FixedUpdate () {
	renderer.material.color.a += 0.02;
}

function Update () 
{
	transform.RotateAround (pivot.localPosition, Vector3.forward, -speed * Time.deltaTime);
}
