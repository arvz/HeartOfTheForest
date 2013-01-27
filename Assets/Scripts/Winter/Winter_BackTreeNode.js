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
			return ArrayFactory.winterBackTree1;
		case (2):
			return ArrayFactory.winterBackTree2;
		case (3):
			return ArrayFactory.winterBackTree3;
		default:
			return ArrayFactory.winterBackTree1;
	}
	
	return ArrayFactory.winterBackTree1;
}