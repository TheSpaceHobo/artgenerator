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
  'He',
  'She'
]
function generated(){
  color1 = colors[Math.floor(Math.random()*colors.length)];
  color2 = colors[Math.floor(Math.random()*colors.length)];
  gender = genders[Math.floor(Math.random()*genders.length)];
  currentclothes = clothes[Math.floor(Math.random()*clothes.length)];
  currentbodytype = bodytype[Math.floor(Math.random()*bodytype.length)];
  weapon = weapons[Math.floor(Math.random()*weapons.length)];
  currenthaircolor = haircolors[Math.floor(Math.random()*haircolors.length)]
  return(
    'Your character has ' + currenthaircolor + ' hair, is wearing '
     + currentclothes + ' that are/is ' + color1 + ' and ' + color2 + ', has a(n) '
     + currentbodytype + ' body type. ' + gender + ' weilds (a) '
     + weapon + ' that are/is ' + color2 + ' and ' + color1 + '.'

  )
}
$('#generatebutton').click(function(){

  $('#prompt').html(generated);
})
