#pragma strict

static var summerTree1 : Texture[];
static var summerTree2 : Texture[];
static var summerTree3 : Texture[];
static var summerTree4 : Texture[];

static var summerBush1 : Texture[];
public var summerBush1Copy : Texture[];
static var summerBush2 : Texture[];

function Awake () 
{
	summerTree1 = new Texture[18];
	summerTree2 = new Texture[18];
	summerTree3 = new Texture[18];
	summerTree4 = new Texture[18];
	
	LoadArray(summerTree1, "Tree", 1);
	LoadArray(summerTree2, "Tree", 2);
	LoadArray(summerTree3, "Tree", 3);
	LoadArray(summerTree4, "Tree", 4);
	
	summerBush1 = new Texture[7];
	summerBush2 = new Texture[6];
	
	LoadArray(summerBush1, "Bush", 1);
	LoadArray(summerBush2, "Bush", 2);
	
	summerBush1Copy = summerBush1;
}

function LoadArray(array : Texture[], type : String, number : int)
{
	for (var i = 1; i <= array.length; i++)
	{
		if (i < 10)
			array[i-1] = Resources.Load("Sprites/"+type+number+"/"+type+number+"0"+i) as Texture;
		else
			array[i-1] = Resources.Load("Sprites/"+type+number+"/"+type+number+i) as Texture; 
	}
}
