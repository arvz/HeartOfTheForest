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
		scalingSpeed += growSpeed;
		
	GameObject.Find("GlowingNut").GetComponent(Glow).GlowNow();
}

public function GrowCheat()
{
	if (scalingSpeed < maxSpeed)
		scalingSpeed += growSpeed*100;
}

public function Shrink() 
{
	GameObject.Find("BadBeat").GetComponent(Glow).GlowNow();
	if (scalingSpeed > minSpeed) {
		scalingSpeed -= 2*growSpeed;
	}
}
