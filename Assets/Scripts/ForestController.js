#pragma strict

var minSpeed : float;
var maxSpeed : float;

var downGrowSpeed : float;
var growSpeed : float;

static var scalingSpeed : float;

function Start () 
{
	scalingSpeed = 0;
}

function Update () 
{
	scalingSpeed -= downGrowSpeed;
	scalingSpeed = Mathf.Clamp(scalingSpeed, minSpeed, maxSpeed);
	
}

public function Grow() 
{
	if (scalingSpeed < maxSpeed) 
	{
		scalingSpeed += growSpeed;
	}
}

public function Shrink() 
{
	if (scalingSpeed > minSpeed) {
		scalingSpeed -= 2*growSpeed;
	}
}
