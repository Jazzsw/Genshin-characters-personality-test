
takeQuiz.addEventListener('click', function(){
    mainPage.style.display = 'none'
    page2.style.display = 'block'

mondstat.addEventListener('click', function(){
    albedo.push(1)
    amber.push(1)
    barbara.push(1)
    bennett.push(1)
    diluc.push(1)
    diona.push(1)
    eula.push(1)
    fischl.push(1)
    jean.push(1)
    kaeya.push(1)
    klee.push(1)
    lisa.push(1)
    mona.push(1)
    noelle.push(1)
    razor.push(1)
    rosaria.push(1)
    sucrose.push(1)
    venti.push(1)
    three()

})
liyue.addEventListener('click', function(){
    beidou.push(1)
    chongyun.push(1)
    ganyu.push(1)
    hutao.push(1)
    keqing.push(1)
    ningguang.push(1)
    qiqi.push(1)
    xiangling.push(1)
    xiao.push(1)
    xingqiu.push(1)
    xingyan.push(1)
    yanfei.push(1)
    zhongli.push(1)
    three()
})
inazuma.addEventListener('click', function(){
    kazuha.push(1)
    ayaka.push(1)
    sara.push(1)
    shogun.push(1)
    kokomi.push(1)
    sayu.push(1)
    yoimiya.push(1)
    three()
})
other.addEventListener('click', function(){
    traveler.push(1)
    childe.push(1)
    aloy.push(1)
    fischl.push(1)
    three()
})
 })
 //=======END OF PAGE ONE==========

 function three(){
    page2.style.display = 'none'
    page3.style.display = 'block'
    

yes.addEventListener('click', function(){
amber.push(1)
barbara.push(1)
chongyun.push(1)
eula.push(1)
fischl.push(1)
ganyu.push(1)
jean.push(1)
kaeya.push(1)
keqing.push(1)
sara.push(1)
lisa.push(1)
ningguang.push(1)
noelle.push(1)
shogun.push(1)
kokomi.push(1)
xingqiu.push(1)
yanfei.push(1)
four()
})
no.addEventListener('click', function(){
beidou.push(1)
bennett.push(1)
diona.push(1)
kazuha.push(1)
ayaka.push(1)
klee.push(1)
razor.push(1)
childe.push(1)
venti.push(1)
xiangling.push(1)
xingyan.push(1)
yoimiya.push(1)
zhongli.push(1)
xiao.push(1)
four()
})

dontcare.addEventListener('click', function(){
albedo.push(1)
aloy.push(1)
diluc.push(1)
hutao.push(1)
mona.push(1)
qiqi.push(1)
rosaria.push(1)
sayu.push(1)
sucrose.push(1)
traveler.push(1)
four()
})

 }

 function four(){
    page3.style.display = 'none'
    page4.style.display = 'block'
    

wit.addEventListener('click', function(){
albedo.push(1)
ayaka.push(1)
ningguang.push(1)
razor.push(1)
sayu.push(1)
sucrose.push(1)
xingqiu.push(1)
yanfei.push(1)
yoimiya.push(1)
klee.push(1)
five()
})
combat.addEventListener('click', function(){ 
aloy.push(1)
beidou.push(1)
diluc.push(1)
eula.push(1)
jean.push(1)
kazuha.push(1)
kaeya.push(1)
keqing.push(1)
sara.push(1)
childe.push(1)
xiao.push(1)
zhongli.push(1)
traveler.push(1)
five()
})
friends.addEventListener('click', function(){
amber.push(1)
barbara.push(1)
bennett.push(1)
diona.push(1)
hutao.push(1)
lisa.push(1)
noelle.push(1)
kokomi.push(1)
xiangling.push(1)
five()
})
magic.addEventListener('click', function(){ 
chongyun.push(1)
fischl.push(1)
ganyu.push(1)
mona.push(1)
qiqi.push(1)
shogun.push(1)
rosaria.push(1)
venti.push(1)
xingyan.push(1)
five()
})
 }
 
 function five(){
    page4.style.display = 'none'
    page5.style.display = 'block'
    

explore.addEventListener('click', function(){ 
aloy.push(1)
amber.push(1)
kazuha.push(1)
razer.push(1)
childe.push(1)
traveler.push(1)
venti.push(1)
zhongli.push(1)
six()
})
study.addEventListener('click', function(){ 
albedo.push(1)
chongyun.push(1)
fischl.push(1)
hutao.push(1)
kaeya.push(1)
ayaka.push(1)
lisa.push(1)
mona.push(1)
ningguang.push(1)
noelle.push(1)
sucrose.push(1)
xiao.push(1)
xingqiu.push(1)
yanfei.push(1)
six()
})
sleep.addEventListener('click', function(){  
barbara.push(1)
bennett.push(1)
diona.push(1)
klee.push(1)
qiqi.push(1)
shogun.push(1)
sayu.push(1)
six() 
})

skill.addEventListener('click', function(){
beidou.push(1)
diluc.push(1)
eula.push(1)
ganyu.push(1)
jean.push(1)
keqing.push(1)
rosaria.push(1)
kokomi.push(1)
xiangling.push(1)
xingyan.push(1)
yoimiya.push(1)
sara.push(1)
six()
})


localStorage.addEventListener('click', function(){
    page5.style.display = 'none'
    var lolh = document.createElement('h2')
    var loltxt = document.createTextNode('Good for u. No need to continue, you are 100% Okremias')
    lolh.appendChild(loltxt)
    lolh.style.textAlign = 'center'
    lolh.color ='#6C6EA0'
})
 }

 function six(){
    page5.style.display = 'none'
    page6.style.display = 'block'
 
  
earth.addEventListener('click', function(){
   albedo.push(1)
   chongyun.push(1)
   diluc.push(1)
   diona.push(1)
   mona.push(1)
   ningguang.push(1)
   razor.push(1)
   zhongli.push(1)
cal()
})

air.addEventListener('click', function(){
ayaka.push(1)
beidou.push(1)
fischl.push(1)
lisa.push(1)
rosaria.push(1)
sayu.push(1)
traveler.push(1)
venti.push(1)
xingqiu.push(1)
xingyan.push(1)
yoimiya.push(1)
cal()
})

water.addEventListener('click', function(){
  barbara.push(1)
  bennett.push(1)
  eula.push(1)
  hutao.push(1)
  jean.push(1)
  kazuha.push(1)
  keqing.push(1)
  qiqi.push(1)
  childe.push(1)
  xiangling.push(1)
  cal()
    
})
fire.addEventListener('click', function(){ 
amber.push(1)
ganyu.push(1)
kaeya.push(1)
klee.push(1)
noelle.push(1)
sucrose.push(1)
xiao.push(1)
yanfei.push(1)
cal()
})

 }

 function cal(){
     page6.style.display = 'none'
     
     
names.push('Albedo')
numbers.push(albedo.length)
names.push('Aloy')
numbers.push(aloy.length)
names.push('Amber') 
numbers.push(amber.length)
names.push('Barbara') 
numbers.push(barbara.length)
names.push('Beidou')
numbers.push(beidou.length)
names.push('Bennett')
numbers.push(bennett.length)
names.push('Chongyun')
numbers.push(chongyun.length)
names.push('Diluc') 
numbers.push(diluc.length)
names.push('Diona') 
numbers.push(diona.length)
names.push('Eula') 
numbers.push(eula.length)
names.push('Fischl')
numbers.push(fischl.length) 
names.push('Ganyu') 
numbers.push(ganyu.length)
names.push('Hu tao') 
numbers.push(hutao.length)
names.push('Jean')
numbers.push(jean.length)
names.push('Kazuha')
numbers.push(kazuha.length)
names.push('Kaeya')
numbers.push(kaeya.length)
names.push('Ayaka')
numbers.push(ayaka.length)
names.push('Keqing')
numbers.push(keqing.length)
names.push('Klee') 
numbers.push(klee.length)
names.push('Sara')
numbers.push(sara.length)
names.push('Lisa')
numbers.push(lisa.length)
names.push('Mona')
numbers.push(mona.length)
names.push('Ningguang') 
numbers.push(ningguang.length)
names.push('Noelle')
numbers.push(noelle.length)
names.push('Qi qi') 
numbers.push(qiqi.length)
names.push('Raiden Shogun')
numbers.push(shogun.length)
names.push('Razor')
numbers.push(razor.length)
names.push('Rosaria')
numbers.push(rosaria.length)
names.push('Kokomi')
numbers.push(kokomi.length)
names.push('Sayu')
numbers.push(sayu.length)
names.push('Sucrose') 
numbers.push(sucrose.length)
names.push('Childe')
numbers.push(childe.length)
names.push('Traveler')
numbers.push(traveler.length)
names.push('Venti')
numbers.push(venti.length)
names.push('Xiangling')
numbers.push(xiangling.length)
names.push('Xiao') 
numbers.push(xiao.length)
names.push('Xingqiu')
numbers.push(xingqiu.length)
names.push('Xingyan')
numbers.push(xingyan.length)
names.push('Yanfei')
numbers.push(yanfei.length)
names.push('Yoimiya')
numbers.push(yoimiya.length)
names.push('Zhongli')
numbers.push(zhongli.length)

console.log(numbers)

var max = (Math.max(...numbers))
console.log(max)
var winners = []
var winnum = []


for(var j = 0; j<numbers.length; j++){
    if(numbers[j] == max){
        winners.push(names[j])
        winnum.push((max/5)*100)
    }
}


for(var k = 0; k<winners.length; k++){
    if(k==0){
var final = document.createElement('h3')
   var txt0 = document.createTextNode('You are most like') 
final.className = 'question'
   final.appendChild(txt0)
   document.body.appendChild(final)
    }
   var res = document.createElement('h2')
   var txt = document.createTextNode('-' + winners[k] + '-')
   res.style.color = '#011638'
   res.style.textAlign = 'center'
   res.appendChild(txt)
   document.body.appendChild(res)

}
console.log(winners)
console.log(winnum)

 }