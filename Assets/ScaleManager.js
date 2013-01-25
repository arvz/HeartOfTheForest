#pragma strict

static var scalingSpeed : float;

function Start () 
{
	scalingSpeed = 0;
}

function Update () 
{
	scalingSpeed -= downSpeed;
	scalingSpeed = Mathf.Clamp(scalingSpeed, minSpeed, maxSpeed);
}

//function 