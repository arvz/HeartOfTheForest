#pragma strict

var minMinSize : float;
var maxMinSize : float;
var minMaxSize : float;
var maxMaxSize : float;

function Start () 
{
	GetComponent(ScalerScript).minScale = Random.Range(minMinSize, maxMinSize);
	GetComponent(ScalerScript).maxScale = Random.Range(minMaxSize, maxMaxSize);
	
	GetComponent(ScalerScript).array = RandomBackTree();
}

function RandomBackTree() : Texture[]
{
	var num : int = Random.Range(1,4);
	
	switch (num)
	{
		case (1):
			return ArrayFactory.summerBackTree1;
		case (2):
			return ArrayFactory.summerBackTree2;
		case (3):
			return ArrayFactory.summerBackTree3;
		default:
			return ArrayFactory.summerBackTree1;
	}
	
	return ArrayFactory.summerBackTree1;
}