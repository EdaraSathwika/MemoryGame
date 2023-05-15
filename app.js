const cardArray=[
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    }
]
cardArray.sort(()=>0.5-Math.random())
const gridDisplay=document.querySelector('#grid')
const resultDisplay=document.querySelector('#result')
let cardsChosen=[]
let cardChosenId=[]
const cardsWon=[]
function createBoard()
{
    
    for(let i=0;i<cardArray.length;i++)
    {
        const card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipCard)
        gridDisplay.append(card)
     
    }
}
createBoard()
function checkMatch()
{
    const cards=document.querySelectorAll('img')
//When we found a match
const opOne=cardChosenId[0]
const opTwo=cardChosenId[1]
if(opOne==opTwo)
{
    alert('You clicked same card!')
    cards[cardChosenId[0]].setAttribute('src','images/blank.png')
    cards[cardChosenId[1]].setAttribute('src','images/blank.png')
}
    else if(cardsChosen[0]==cardsChosen[1]){
    alert('You found a Match!')
    cards[cardChosenId[0]].setAttribute('src','images/white.png')
    cards[cardChosenId[1]].setAttribute('src','images/white.png')
    cards[cardChosenId[0]].removeEventListener('click',flipCard)
    cards[cardChosenId[1]].removeEventListener('click',flipCard)
    cardsWon.push(cardsChosen)
    }
    else
    {
        cards[cardChosenId[0]].setAttribute('src','images/blank.png')
    cards[cardChosenId[1]].setAttribute('src','images/blank.png') 
    alert('Sorry Try again')
    }
    resultDisplay.textContent=cardsWon.length
    cardsChosen=[]
    cardChosenId=[]
    if(cardsWon.length===6)
    resultDisplay.textContent='Congratulations! You have completed all of them'

}
function flipCard()
{
    const cardId=this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length===2)
    setTimeout(checkMatch,500)

}