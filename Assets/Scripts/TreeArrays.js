#pragma strict

static var summerTree1 : Texture[];
static var summerTree2 : Texture[];
static var summerTree3 : Texture[];
static var summerTree4 : Texture[];

function Awake () 
{
	summerTree1 = new Texture[18];
	summerTree2 = new Texture[18];
	summerTree3 = new Texture[18];
	summerTree4 = new Texture[18];
	
	LoadTrees(summerTree1, 1, 18);
	LoadTrees(summerTree2, 2, 18);
	LoadTrees(summerTree3, 3, 18);
	LoadTrees(summerTree4, 4, 18);

}

function LoadTrees(array : Texture[], number : int, size : int)
{
	for (var i = 1; i <= size; i++)
	{
		if (i < 10)
			array[i-1] = Resources.Load("Sprites/Tree"+number+"/Tree"+number+"0"+i) as Texture;
		else
			array[i-1] = Resources.Load("Sprites/Tree"+number+"/Tree"+number+i) as Texture; 
	}
}
