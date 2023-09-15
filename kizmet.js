var diceHeld = new Array(0, 0, 0, 0, 0);
var cube = new Array();
var diRoll = 0;
var turns = 0;

function test()
{
  //alert("WOW!!");
  document.getElementById("here").innerHTML = "Bazinga!";
  di1=Math.floor((Math.random()*6)+1)
  document.getElementById("di1").innerHTML = di1;
}

function Roll()
{	
 //document.getElementById('show').innerHTML = cubeOne;
 if(diceHeld[0] == 0)
 {
	cube[0] =  Math.floor((Math.random()*6)+1);
	 switch(cube[0])
	{
	case 1:
		document.getElementById("diOne").src="oneB.jpg";
		break;
	case 2:
		document.getElementById("diOne").src="twoR.jpg";
		break;
	case 3:
		document.getElementById("diOne").src="threeG.jpg";
		break;
	case 4:
		document.getElementById("diOne").src="fourG.jpg";
		break;
	case 5:
		document.getElementById("diOne").src="fiveR.jpg";
		break;
	case 6:
		document.getElementById("diOne").src="sixB.jpg";
		break;
	}
 }
 if(diceHeld[1] == 0)
 {
	cube[1] =  Math.floor((Math.random()*6)+1);
	 switch(cube[1])
		{
		case 1:
			document.getElementById("diTwo").src="oneB.jpg";
			break;
		case 2:
			document.getElementById("diTwo").src="twoR.jpg";
			break;
		case 3:
			document.getElementById("diTwo").src="threeG.jpg";
			break;
		case 4:
			document.getElementById("diTwo").src="fourG.jpg";
			break;
		case 5:
			document.getElementById("diTwo").src="fiveR.jpg";
			break;
		case 6:
			document.getElementById("diTwo").src="sixB.jpg";
			break;
	}
 }
 if(diceHeld[2] == 0)
 {
	cube[2] =  Math.floor((Math.random()*6)+1);
	 switch(cube[2])
		{
		case 1:
			document.getElementById("diThree").src="oneB.jpg";
			break;
		case 2:
			document.getElementById("diThree").src="twoR.jpg";
			break;
		case 3:
			document.getElementById("diThree").src="threeG.jpg";
			break;
		case 4:
			document.getElementById("diThree").src="fourG.jpg";
			break;
		case 5:
			document.getElementById("diThree").src="fiveR.jpg";
			break;
		case 6:
			document.getElementById("diThree").src="sixB.jpg";
			break;
	}
 }

  if(diceHeld[3] == 0)
 {
	cube[3] =  Math.floor((Math.random()*6)+1);
	 switch(cube[3])
	{
	case 1:
		document.getElementById("diFour").src="oneB.jpg";
		break;
	case 2:
		document.getElementById("diFour").src="twoR.jpg";
		break;
	case 3:
		document.getElementById("diFour").src="threeG.jpg";
		break;
	case 4:
		document.getElementById("diFour").src="fourG.jpg";
		break;
	case 5:
		document.getElementById("diFour").src="fiveR.jpg";
		break;
	case 6:
		document.getElementById("diFour").src="sixB.jpg";
		break;
	}
 }
  if(diceHeld[4] == 0) //0 = not held
 {
	cube[4] =  Math.floor((Math.random()*6)+1);
	 switch(cube[4])
	{
	case 1:
		document.getElementById("diFive").src="oneB.jpg";
		break;
	case 2:
		document.getElementById("diFive").src="twoR.jpg";
		break;
	case 3:
		document.getElementById("diFive").src="threeG.jpg";
		break;
	case 4:
		document.getElementById("diFive").src="fourG.jpg";
		break;
	case 5:
		document.getElementById("diFive").src="fiveR.jpg";
		break;
	case 6:
		document.getElementById("diFive").src="sixB.jpg";
		break;
	}
 }
diRoll ++;
document.getElementById('show').innerHTML = "Roll: "+diRoll;

if(diRoll == 3)
{
	document.getElementById('btnRoll').disabled = true;
}
	/* for debugging
	document.getElementById('numberOne').innerHTML = cube[0];
	document.getElementById('numberTwo').innerHTML = cube[1];
	document.getElementById('numberThree').innerHTML = cube[2];
	document.getElementById('numberFour').innerHTML = cube[3];
	document.getElementById('numberFive').innerHTML = cube[4];
	//end debugging*/
}//end of Roll function


function handYes(idee)
{
	document.getElementById(idee).style.cursor = "pointer";
}

function elHoldo(idee, indx)
{
	if(diceHeld[indx] == 0)
	{
		document.getElementById(idee).innerHTML = "HELD"; //  ***I need a global var to decide if held or not***
		$('#'+idee).css('background-color', 'red');
		diceHeld[indx] = 1;
	}
	else
	{
		document.getElementById(idee).innerHTML = "HOLD"; //  ***I need a global var to decide if held or not***
		$('#'+idee).css('background-color', 'green');
		diceHeld[indx] = 0;		
	}
	// just testing -> document.getElementById("show").innerHTML = diceHeld[0];
}

function clrHold()
{
	turns++;
	document.getElementById('hold1').innerHTML = "HOLD";
	document.getElementById('hold2').innerHTML = "HOLD";
	document.getElementById('hold3').innerHTML = "HOLD";
	document.getElementById('hold4').innerHTML = "HOLD";
	document.getElementById('hold5').innerHTML = "HOLD";
	$('#hold1').css('background-color','green');
	$('#hold2').css('background-color','green');
	$('#hold3').css('background-color','green');
	$('#hold4').css('background-color','green');
	$('#hold5').css('background-color','green');
	for(x=0; x<=5; x++)
	{
		diceHeld[x] = 0;
	}
	document.getElementById('diOne').src = "blank.jpg";
	document.getElementById('diTwo').src = "blank.jpg";
	document.getElementById('diThree').src = "blank.jpg";
	document.getElementById('diFour').src = "blank.jpg";
	document.getElementById('diFive').src = "blank.jpg";
	for(y=0; y<=5; y++)
	{
		cube[y] = 0;
	}
	
	if(turns == 15)
	{
		//document.getElementById('show').innerHTML = "GAME OVER - (Ctrl-F5 to play again)";
		document.getElementById('GT').innerHTML = grandTotal;
		alert("your score is "+document.getElementById('GT').innerHTML);
		if(Number(document.getElementById('GT').innerHTML) > Number(document.getElementById('Tscore4').innerHTML))
		{
			document.newHi.newHigh.value = Number(document.getElementById('GT').innerHTML);
			alert("your score broke into the top five with "+document.newHi.newHigh.value);
			document.getElementById('show').innerHTML += 
			"<br /><span style='color:green'>your score broke into the top five with "+document.newHi.newHigh.value+"!</span>";
			$("#theFinish").show(400);
			
		}else{
			var missedBY = Number(document.getElementById('Tscore4').innerHTML) - Number(document.getElementById('GT').innerHTML);
			alert("you missed the top five by "+missedBY);
			location.reload();
		}
	}
}
function showPrompt()
{
	var player = prompt("Enter your name", "kizWiz");
	var score = document.newHi.newHigh.value;
	ajaxGo(player, score);
	
}

var totalTop = 0;   /******** A heap of initialisation of globals ********/
var totalBottom = 0;    /* Ha! Heap... no pun intended :) */
var grandTotal = 0;
var valBonus = 0;
var vasStar = 0; //for use with extra kizmet bonus
var doOnes = 1;
var doTwos = 1;
var doThrees = 1;
var doFours = 1;
var doFives = 1;
var doSixes = 1;
var do2pair = 1;
var do3kind = 1;
var do4kind = 1;
var do5kind = 1;
var doChance = 1;
var doStraight = 1;
var doFlush = 1;
var doFH = 1;
var doFHcolour = 1;


function fiddleBonus()
{
	if(totalTop > 62 && totalTop < 71)
	{
		valBonus = 35;
	}
	if(totalTop > 70 && totalTop < 78)
	{
		valBonus = 55;
	}
	if(totalTop > 77)
	{
		valBonus = 75;
	}
}
function starYazee()
{
//give 100 point bonus for any extra kizmets (5 of a kind)

}

function scrOnes()
{
	if(diRoll > 0 && doOnes == 1)
	{
		var valOnes = 0;
		for(x=0; x<=4; x++)
		{
			if(cube[x] == 1)
			{
				valOnes++;
			}
		}
		/*  for testing 
		 end testing */
		totalTop += valOnes;
		fiddleBonus();
		grandTotal = totalBottom + totalTop + valBonus;
		document.getElementById('ones').innerHTML = valOnes;
		document.getElementById('totalTop').innerHTML = totalTop;
		document.getElementById('bonus').innerHTML = valBonus;
		document.getElementById('GT').innerHTML = grandTotal;
		diRoll = 0;
		document.getElementById('btnRoll').disabled = false;
		doOnes = 0;
		document.getElementById('cube1').src = "X.png";
		document.getElementById('show').innerHTML = "Roll: ";
		clrHold();
	}
}
/*******/
function scrTwos()
{
	if(diRoll > 0 && doTwos == 1)
	{
		var valTwos = 0;
		for(x=0; x<=4; x++)
		{
			if(cube[x] == 2)
			{
				valTwos+=2;
			}
		}
		totalTop += valTwos;
		fiddleBonus();
		grandTotal = totalBottom + totalTop + valBonus;
		document.getElementById('twos').innerHTML = valTwos;
		document.getElementById('totalTop').innerHTML = totalTop;
		document.getElementById('bonus').innerHTML = valBonus;
		document.getElementById('GT').innerHTML = grandTotal;
		diRoll = 0;
		document.getElementById('btnRoll').disabled = false;
		doTwos = 0;
		document.getElementById('cube2').src = "X.png";
		document.getElementById('show').innerHTML = "Roll: ";
		clrHold();
	}
}

function scrThrees()
{
	if(diRoll > 0 && doThrees == 1)
	{
		var valThrees = 0;
		for(x=0; x<=4; x++)
		{
			if(cube[x] == 3)
			{
				valThrees += 3;
			}
		}
		totalTop += valThrees;
		fiddleBonus();
		grandTotal = totalBottom + totalTop + valBonus;
		document.getElementById('threes').innerHTML = valThrees;
		document.getElementById('totalTop').innerHTML = totalTop;
		document.getElementById('bonus').innerHTML = valBonus;
		document.getElementById('GT').innerHTML = grandTotal;
		diRoll = 0;
		document.getElementById('btnRoll').disabled = false;
		doThrees = 0;
		document.getElementById('cube3').src = "X.png";
		document.getElementById('show').innerHTML = "Roll: ";
		clrHold();
	}
}

function scrFours()
{
	if(diRoll > 0 && doFours == 1)
	{
		var valFours = 0;
		for(x=0; x<=4; x++)
		{
			if(cube[x] == 4)
			{
				valFours += 4;
			}
		}
		totalTop += valFours;
		fiddleBonus();
		grandTotal = totalBottom + totalTop + valBonus;
		document.getElementById('fours').innerHTML = valFours;
		document.getElementById('totalTop').innerHTML = totalTop;
		document.getElementById('bonus').innerHTML = valBonus;
		document.getElementById('GT').innerHTML = grandTotal;
		diRoll = 0;
		document.getElementById('btnRoll').disabled = false;
		doFours = 0;
		document.getElementById('cube4').src = "X.png";
		document.getElementById('show').innerHTML = "Roll: ";
		clrHold();
	}
}

function scrFives()
{
	if(diRoll > 0 && doFives == 1)
	{
		var valFives = 0;
		for(x=0; x<=4; x++)
		{
			if(cube[x] == 5)
			{
				valFives += 5;
			}
		}
		totalTop += valFives;
		fiddleBonus();
		grandTotal = totalBottom + totalTop + valBonus;
		document.getElementById('fives').innerHTML = valFives;
		document.getElementById('totalTop').innerHTML = totalTop;
		document.getElementById('bonus').innerHTML = valBonus;
		document.getElementById('GT').innerHTML = grandTotal;
		diRoll = 0;
		document.getElementById('btnRoll').disabled = false;
		doFives = 0;
		document.getElementById('cube5').src = "X.png";
		document.getElementById('show').innerHTML = "Roll: ";
		clrHold();
	}
}

function scrSixes()
{
	if(diRoll > 0 && doSixes == 1)
	{
		var valSixes = 0;
		for(x=0; x<=4; x++)
		{
			if(cube[x] == 6)
			{
				valSixes += 6;
			}
		}
		totalTop += valSixes;
		fiddleBonus();
		grandTotal = totalBottom + totalTop + valBonus;
		document.getElementById('sixes').innerHTML = valSixes;
		document.getElementById('totalTop').innerHTML = totalTop;
		document.getElementById('bonus').innerHTML = valBonus;
		document.getElementById('GT').innerHTML = grandTotal;
		diRoll = 0;
		document.getElementById('btnRoll').disabled = false;
		doSixes = 0;
		document.getElementById('cube6').src = "X.png";
		document.getElementById('show').innerHTML = "Roll: ";
		clrHold();
	}
}

function scr2pair()
{
	if(diRoll > 0 && do2pair == 1)
	{
		var val2pair = 0;
		var is2pair = false;
		//document.getElementById('d1').innerHTML = "false: just starting"
		var numCount = new Array(0, 0, 0, 0, 0, 0);
		for(b=0; b<=4; b++)     
		{  
			for(c=1; c<=6; c++)
			{
				if(cube[b] == c)
				{
					numCount[c-1] += 1;
				}
			}
		}
		if(numCount[0] > 3 ||  //check for 4 of a kind which counts as 2 pair...
			numCount[1] > 3 ||
			numCount[2] > 3 ||
			numCount[3] > 3 ||
			numCount[4] > 3 ||
			numCount[5] > 3)
		{
			is2pair = true;
			//document.getElementById('d2').innerHTML = "true: 4 of a kind";  //for debugging
		}
		else
		{
			if(numCount[0] > 1 && numCount[5] > 1)
			{
				is2pair = true;
				//document.getElementById('d2').innerHTML = "true: ones and sixes";
			}
			else
			{
				if(numCount[1] > 1 && numCount[4] > 1)
				   {
					 is2pair = true;  
					 //document.getElementById('d2').innerHTML = "true; twos and fives";
					}
					else
					{
						if(numCount[2] > 1 && numCount[3] > 1)
						{
							is2pair = true;
							//document.getElementById('d2').innerHTML = "true: threes and fours";
						}
					}
			}
		}
		if (is2pair)
		{
			for(t=0; t<=4; t++)
			{
				val2pair += cube[t];
				document.getElementById('show').innerHTML = "dice "+t+" = "+cube[t];
			}
		}
		totalBottom += val2pair;
		grandTotal = totalBottom + totalTop + valBonus;
		document.getElementById('twoPair').innerHTML = val2pair;
		document.getElementById('GT').innerHTML = grandTotal;
		diRoll = 0;
		document.getElementById('btnRoll').disabled = false;
		do2pair = 0;
		document.getElementById('cube2pair').src = "X.png";
		document.getElementById('show').innerHTML = "Roll: ";
		clrHold();
	}
}

function scr3kind()
{
	if(diRoll > 0 && do3kind == 1)
	{
		var val3kind = 0;
		var is3kind = false;
		var numCount = new Array(0, 0, 0, 0, 0, 0);
		for(b=0; b<=4; b++)     
		{  
			for(c=1; c<=6; c++)
			{
				if(cube[b] == c)
				{
					numCount[c-1] += 1;
				}
			}
		}
		if(numCount[0] > 2 ||  //check for 4 of a kind which counts as 2 pair...
			numCount[1] > 2 ||
			numCount[2] > 2 ||
			numCount[3] > 2 ||
			numCount[4] > 2 ||
			numCount[5] > 2)
		{
			is3kind = true;
		}
		if(is3kind)
		{
			for(z=0; z<=4; z++)
			{
				val3kind += cube[z];
			}
		}
		totalBottom += val3kind;
		grandTotal = totalBottom + totalTop + valBonus;
		document.getElementById('threeKind').innerHTML = val3kind;
		document.getElementById('GT').innerHTML = grandTotal;
		diRoll = 0;
		document.getElementById('btnRoll').disabled = false;
		do3kind = 0;
		document.getElementById('3kind').src = "X.png";
		document.getElementById('show').innerHTML = "Roll: ";
		clrHold();
	}
}

function scr4kind()
{
	if(diRoll > 0 && do4kind == 1)
	{
		var val4kind = 0;
		var is4kind = false;
		var numCount = new Array(0, 0, 0, 0, 0, 0);
		for(b=0; b<=4; b++)     
		{  
			for(c=1; c<=6; c++)
			{
				if(cube[b] == c)
				{
					numCount[c-1] += 1;
				}
			}
		}
		if(numCount[0] > 3 ||  //check for 4 of a kind which counts as 2 pair...
			numCount[1] > 3 ||
			numCount[2] > 3 ||
			numCount[3] > 3 ||
			numCount[4] > 3 ||
			numCount[5] > 3)
		{
			is4kind = true;
		}
		if(is4kind)
		{
			for(z=0; z<=4; z++)
			{
				val4kind += cube[z];
			}
			val4kind += 25;
		}
		totalBottom += val4kind;
		grandTotal = totalBottom + totalTop + valBonus;
		document.getElementById('fourKind').innerHTML = val4kind;
		document.getElementById('GT').innerHTML = grandTotal;
		diRoll = 0;
		document.getElementById('btnRoll').disabled = false;
		do4kind = 0;
		document.getElementById('4kind').src = "X.png";
		document.getElementById('show').innerHTML = "Roll: ";
		clrHold();
	}
}

function scr5kind()//find a way to give 25 point bonus for extra 5 of a kinds.  
{
	if(diRoll > 0 && do5kind == 1)
	{
		var val5kind = 0;
		var is5kind = false;
		var numCount = new Array(0, 0, 0, 0, 0, 0);
		for(b=0; b<=4; b++)     
		{  
			for(c=1; c<=6; c++)
			{
				if(cube[b] == c)
				{
					numCount[c-1] += 1;
				}
			}
		}
		if(numCount[0] > 4 ||  //check for 4 of a kind which counts as 2 pair...
			numCount[1] > 4 ||
			numCount[2] > 4 ||
			numCount[3] > 4 ||
			numCount[4] > 4 ||
			numCount[5] > 4)
		{
			is5kind = true;
		}
		if(is5kind)
		{
			for(z=0; z<=4; z++)
			{
				val5kind += cube[z];
			}
			val5kind += 50;
		}
		totalBottom += val5kind;
		grandTotal = totalBottom + totalTop + valBonus;
		document.getElementById('fiveKind').innerHTML = val5kind;
		document.getElementById('GT').innerHTML = grandTotal;
		diRoll = 0;
		document.getElementById('btnRoll').disabled = false;
		do5kind = 0;
		document.getElementById('5kind').src = "X.png";
		document.getElementById('show').innerHTML = "Roll: ";
		clrHold();
	}
}

function scrChance()
{
	if(diRoll > 0 && doChance == 1)
	{
		var valChance = 0;
		for(z=0; z<=4; z++)
		{
			valChance += cube[z];
		}
		totalBottom += valChance;
		grandTotal = totalBottom + totalTop + valBonus;
		document.getElementById('chance').innerHTML = valChance;
		document.getElementById('GT').innerHTML = grandTotal;
		diRoll = 0;
		document.getElementById('btnRoll').disabled = false;
		doChance = 0;
		document.getElementById('xchance').src = "X.png";
		document.getElementById('show').innerHTML = "Roll: ";
		clrHold();
	}
}

function scrStraight()
{
	if(diRoll > 0 && doStraight == 1)
	{
		var valStraight = 0;
		var isStraight = false;
		var numCount = new Array(0, 0, 0, 0, 0, 0);
		for(b=0; b<=4; b++)     
		{  
			for(c=1; c<=6; c++)
			{
				if(cube[b] == c)
				{
					numCount[c-1] += 1;
				}
			}
		}
		if(numCount[1] == 1 &&  
			numCount[2] == 1 &&
			numCount[3] == 1 &&
			numCount[4] == 1)
		{
			isStraight = true;
		}
		if(isStraight)
		{
			valStraight = 30;
		}
		totalBottom += valStraight;
		grandTotal = totalBottom + totalTop + valBonus;
		document.getElementById('straight').innerHTML = valStraight;
		document.getElementById('GT').innerHTML = grandTotal;
		diRoll = 0;
		document.getElementById('btnRoll').disabled = false;
		doStraight = 0;
		document.getElementById('xstraight').src = "X.png";
		document.getElementById('show').innerHTML = "Roll: ";
		clrHold();
	}
}

function scrFlush()
{
	if(diRoll > 0 && doFlush == 1)
	{
		var valFlush = 0;
		var numCount = new Array(0, 0, 0, 0, 0, 0);
		for(b=0; b<=4; b++)     
		{  
			for(c=1; c<=6; c++)
			{
				if(cube[b] == c)
				{
					numCount[c-1] += 1;
				}
			}
		}
		if(numCount[0] + numCount[5] == 5 ||
			numCount[1] + numCount[4] == 5 ||
			numCount[2] + numCount[3] == 5)
		{
			valFlush = 35;
		}
		totalBottom += valFlush;
		grandTotal = totalBottom + totalTop + valBonus;
		document.getElementById('flush').innerHTML = valFlush;
		document.getElementById('GT').innerHTML = grandTotal;
		diRoll = 0;
		document.getElementById('btnRoll').disabled = false;
		doFlush = 0;
		document.getElementById('xflush').src = "X.png";
		document.getElementById('show').innerHTML = "Roll: ";
		clrHold();
		
	}
	
}
function scrFH()
{
	if(diRoll > 0 && doFH == 1)
	{
		var valFH = 0;
		var anyThreeKind = false;
		var anyTwoKind = false;
		var numCount = new Array(0, 0, 0, 0, 0, 0);
		for(b=0; b<=4; b++)     
		{  
			for(c=1; c<=6; c++)
			{
				if(cube[b] == c)
				{
					numCount[c-1] += 1;
				}
			}
		}
		for(x=0; x<=5; x++)
		{
			if(numCount[x] == 3)
			{
				anyThreeKind = true;
			}
			if(numCount[x] == 2)
			{
				anyTwoKind = true;
			}
		}
		if(anyThreeKind && anyTwoKind)
		{
			for(z=0; z<=4; z++)
			{
				valFH += cube[z];
			}
			valFH += 15;			
		}
		totalBottom += valFH;
		grandTotal = totalBottom + totalTop + valBonus;
		document.getElementById('fullHouse').innerHTML = valFH;
		document.getElementById('GT').innerHTML = grandTotal;
		diRoll = 0;
		document.getElementById('btnRoll').disabled = false;
		doFH = 0;
		document.getElementById('FH').src = "X.png";
		document.getElementById('show').innerHTML = "Roll: ";
		clrHold();
		
	}
}

function scrFHcolour()
{
	if(diRoll > 0 && doFHcolour == 1)
	{
		var valFHcolour = 0;
		var anyThreeKind = false;
		var anyTwoKind = false;
		var isFlush = false;
		var numCount = new Array(0, 0, 0, 0, 0, 0);
		for(b=0; b<=4; b++)     
		{  
			for(c=1; c<=6; c++)
			{
				if(cube[b] == c)
				{
					numCount[c-1] += 1;
				}
			}
		}
		for(x=0; x<=5; x++)
		{
			if(numCount[x] == 3)
			{
				anyThreeKind = true;
			}
			if(numCount[x] == 2)
			{
				anyTwoKind = true;
			}
		}
		if(numCount[0] + numCount[5] == 5 ||
			numCount[1] + numCount[4] == 5 ||
			numCount[2] + numCount[3] == 5)
		{
			isFlush = true;
		}
		if(anyThreeKind && anyTwoKind && isFlush)
		{
			for(z=0; z<=4; z++)
			{
				valFHcolour += cube[z];
			}
			valFHcolour += 20;			
		}
		
		totalBottom += valFHcolour;
		grandTotal = totalBottom + totalTop + valBonus;
		document.getElementById('fullHouseColour').innerHTML = valFHcolour;
		document.getElementById('GT').innerHTML = grandTotal;
		diRoll = 0;
		document.getElementById('btnRoll').disabled = false;
		doFHcolour = 0;
		document.getElementById('fhColour').src = "X.png";
		document.getElementById('show').innerHTML = "Roll: ";
		clrHold();
		
	}
}
function chkNav()
{
//alert("it got called");  
try
    {
    // Firefox, Opera 8.0+, Safari
    xmlHttp=new XMLHttpRequest();
    }
  catch (e)
    {
    // Internet Explorer
    try
      {
      xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
      }
    catch (e)
      {
      try
        {
        xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
      catch (e)
        {
        alert("Your browser does not support AJAX!");
        return false;
        }
      }
    }
}
function ajaxGo(pl, sc)

  {
	//alert(pl+" - "+sc);

  chkNav();

    xmlHttp.onreadystatechange=function()

      {

      if(xmlHttp.readyState==4)

        {

        document.getElementById('answer').innerHTML=xmlHttp.responseText;

        }

      }

    var params = "?num="+sc+"&name="+pl;

    xmlHttp.open("GET","newScore.php" + params,true);

    xmlHttp.send(null);
	
	//setTimeout(location.reload(true),3000);

  }

/***************************************
Below here is jQuery stuff to fiddle the page
***************************************/
$(document).ready(function()
{
	var hid = true;
	var showHide = "Hide";
	
	$("#highScore").hide();
	$("#theFinish").hide();
	$("#showHighScore").click(function()
	{
		if(hid)
		{
			$("#highScore").show(750);
			showHide = "Hide";
			hid = false;
		}else
		{
			$("#highScore").hide(750);
			showHide = "Show";
			hid = true;
		}
	$("#HSshow").text(showHide+" High Scores");
		
	});
});






