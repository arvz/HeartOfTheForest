#pragma strict

var minMinSize : float;
var maxMinSize : float;
var minMaxSize : float;
var maxMaxSize : float;

function Start () 
{
	GetComponent(ScalerScript).minScale = Random.Range(minMinSize, maxMinSize);
	GetComponent(ScalerScript).maxScale = Random.Range(minMaxSize, maxMaxSize);
	
	GetComponent(ScalerScript).array = RandomTree();
}

function RandomTree() : Texture[]
{
	var num : int = Random.Range(1,5);
	
	switch (num)
	{
		case (1):
			return ArrayFactory.winterTree1;
		case (2):
			return ArrayFactory.winterTree2;
		case (3):
			return ArrayFactory.winterTree3;
		case (4):
			return ArrayFactory.winterTree4;
		default:
			return ArrayFactory.winterTree1;
	}
	
	return ArrayFactory.winterTree1;
}