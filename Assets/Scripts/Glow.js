#pragma strict

var fadeOutSpeed : float;

function Update () 
{
	renderer.material.color.a = Mathf.Lerp(renderer.material.color.a, 0, Time.deltaTime * fadeOutSpeed);
}

function GlowNow()
{
	renderer.material.color.a = 1;
}