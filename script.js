var generated;
var colors = [
  'red',
  'blue',
  'black',
  'white',
  'gray',
  'green',
  'light blue',
  'light green',
  'light red',
  'mahogany',
  'brown',
  'gold',
  'silver',
  'crimson',
  'pine green'
];
var hair = [
  'pony-tail',
  'long',
  'short',
  'bald',
  'to shoulders'
];
var haircolors = [
  'red',
  'brown',
  'blonde',
  'brunette',
  'black',
  'white'
];
var weapons = [
  'pistol',
  'dual-pistols',
  'daggers',
  'sword',
  'rifle',
  'throwing knives'
];
var clothes = [
  'casual clothes',
  'fancy clothes',
  'armor'
];
var bodytype = [
  'skinny',
  'chubby',
  'average'
];
var genders = [
  'he',
  'she'
]
function generated(){
  return(
    'Your character has ' + haircolors[Math.floor(Math.random()*haircolors.length)] + ' hair, is wearing '
     + clothes[Math.floor(Math.random()*clothes.length)] + ' that are/is ' + colors[Math.floor(Math.random()*colors.length)] + ' and ' + colors[Math.floor(Math.random()*colors.length)] + ', has a(n) '
     + bodytype[Math.floor(Math.random()*bodytype.length)] + ' body type ' + genders[Math.floor(Math.random()*genders.length)] + ' weilds (a) '
     + weapons[Math.floor(Math.random()*weapons.length)] + ' that are/is ' + colors[Math.floor(Math.random()*colors.length)] + ' and ' + colors[Math.floor(Math.random()*colors.length)] + '.'

  )
}
$('#generatebutton').click(function(){

  $('#prompt').html(generated);
})
