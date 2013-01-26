#pragma strict

var minScale : float;
var maxScale : float;
var speedMultiplier : float;

var array : Texture[];

private var complete : boolean;

function Start () 
{
	complete = false;
}

function Update () 
{
	if (!complete)
	{
		var speed = ForestController.scalingSpeed * speedMultiplier;
		var scalingVector : Vector3 = Vector3(speed, speed, speed);

		var localScale : Vector3 = transform.localScale + scalingVector;
		localScale = Vector3(Mathf.Clamp(localScale.x, minScale, maxScale), 
							   		   Mathf.Clamp(localScale.y, minScale, maxScale), 
								       Mathf.Clamp(localScale.z, minScale, maxScale));
		transform.localScale = localScale;
								   
		UpdateSprite();
		
		if (transform.localScale.x == maxScale)
			complete = true;
	}
}

//Updates the sprite texture according to its size
function UpdateSprite()
{
	var arrayIndex = ((transform.localScale.x - minScale)/(maxScale-minScale)) * ((array.length)-1);
	transform.Find("Plane").GetComponent(MeshRenderer).material.mainTexture = array[arrayIndex];
}
