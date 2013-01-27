#pragma strict

var minMinSize : float;
var maxMinSize : float;
var minMaxSize : float;
var maxMaxSize : float;

function Start () 
{
	GetComponent(ScalerScript).minScale = Random.Range(minMinSize, maxMinSize);
	GetComponent(ScalerScript).maxScale = Random.Range(minMaxSize, maxMaxSize);
	
	GetComponent(ScalerScript).array = RandomVine();
}

function RandomVine() : Texture[]
{
	var num : int = Random.Range(1,3);
	
	switch (num)
	{
		case (1):
			return ArrayFactory.winterVine1;
		case (2):
			return ArrayFactory.winterVine2;
		default:
			return ArrayFactory.winterVine1;
	}
	
	return ArrayFactory.winterVine1;
}