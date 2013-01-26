#pragma strict

function Update () 
{
	renderer.material.color.a = Mathf.Lerp(renderer.material.color.a, 0, Time.deltaTime * 5);
}

function GlowNow()
{
	renderer.material.color.a = 1;
}