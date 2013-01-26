#pragma strict

var minScale : float;
var maxScale : float;
var speedMultiplier : float;

var array : Texture[];

private var scalingVector : Vector3;
private var arrayIndex : int;
private var complete : boolean;

function Start () 
{
	arrayIndex = 0;
	complete = false;
}

function Update () 
{
	if (!complete)
	{
		var speed = ForestController.scalingSpeed * speedMultiplier;
		scalingVector = Vector3(speed, speed, speed);
		
		transform.localScale += scalingVector;
		transform.localScale = Vector3(Mathf.Clamp(transform.localScale.x, minScale, maxScale), 
							   		   Mathf.Clamp(transform.localScale.y, minScale, maxScale), 
								       Mathf.Clamp(transform.localScale.z, minScale, maxScale));
								   
		UpdateSprite();
		
		if (transform.localScale.x == maxScale)
			complete = true;
	}
}

//Updates the sprite texture according to its size
function UpdateSprite()
{
	arrayIndex = ((transform.localScale.x - minScale)/(maxScale-minScale)) * ((array.length)-1);
	transform.Find("Plane").GetComponent(MeshRenderer).material.mainTexture = array[arrayIndex];
}