#pragma strict

var minMinSize : float;
var maxMinSize : float;
var minMaxSize : float;
var maxMaxSize : float;



function Start () 
{
	GetComponent(ScalerScript).minScale = Random.Range(minMinSize, maxMinSize);
	GetComponent(ScalerScript).maxScale = Random.Range(minMaxSize, maxMaxSize);
	
	GetComponent(ScalerScript).treeArray = RandomTree();
}

function RandomTree() : Texture[]
{
	var num : int = Random.Range(1,5);
	Debug.Log("Using Tree " + num);
	
	switch (num)
	{
		case (1):
			return TreeArrays.summerTree1;
		case (2):
			return TreeArrays.summerTree2;
		case (3):
			return TreeArrays.summerTree3;
		case (4):
			return TreeArrays.summerTree4;
		default:
			return TreeArrays.summerTree1;
	}
	
	return TreeArrays.summerTree1;
}