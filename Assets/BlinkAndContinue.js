#pragma strict

function Start () {
	InvokeRepeating("ToggleBlink",1,1);
}

function Update()
{
	if (Input.GetKeyDown("space"))
		AutoFade.LoadLevel(1,1,3,Color.white);
}

function ToggleBlink()
{
	if (guiTexture.enabled)
		guiTexture.enabled = false;
	else
		guiTexture.enabled = true;
}