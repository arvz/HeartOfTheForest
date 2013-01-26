#pragma strict

var pivot : Transform;
var speed : float;

function FixedUpdate () 
{
	renderer.material.color.a += 0.02;
	
}

function LateUpdate () 
{
	transform.RotateAround (pivot.localPosition, Vector3.forward, -speed * Time.deltaTime);
}
