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
			return ArrayFactory.springBackTree1;
		case (2):
			return ArrayFactory.springBackTree2;
		case (3):
			return ArrayFactory.springBackTree3;
		default:
			return ArrayFactory.springBackTree1;
	}
	
	return ArrayFactory.springBackTree1;
}