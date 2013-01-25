#pragma strict

var maxScale : float;
var scalingSpeed : float;
var scalingVector : Vector3;
var treeTextures : Texture[];

private var arrayIndex : int;

function Start () 
{
	arrayIndex = 0;
}

function Update () 
{
	scalingSpeed -= 0.000015;
	scalingVector = Vector3(scalingSpeed, scalingSpeed, 0);
	
	transform.localScale += scalingVector;
	transform.localScale = Vector3(Mathf.Clamp(transform.localScale.x, 0.25, 2.5), Mathf.Clamp(transform.localScale.y, 0.25, 2.5), 0.25);
	
}