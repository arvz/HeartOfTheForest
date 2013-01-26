#pragma strict

var minMinSize : float;
var maxMinSize : float;
var minMaxSize : float;
var maxMaxSize : float;

function Start () 
{
	GetComponent(ScalerScript).minScale = Random.Range(minMinSize, maxMinSize);
	GetComponent(ScalerScript).maxScale = Random.Range(minMaxSize, maxMaxSize);
	
	GetComponent(ScalerScript).array = RandomBush();
}

function RandomBush() : Texture[]
{
	var num : int = Random.Range(1,2);
	
	switch (num)
	{
		case (1):
			return ArrayFactory.summerBush1;
		case (2):
			return ArrayFactory.summerBush2;
		default:
			return ArrayFactory.summerBush1;
	}
	
	return ArrayFactory.summerBush1;
}