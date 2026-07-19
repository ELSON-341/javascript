let friend = {
    name: 'jóse',
    sex: 'M',
    wieght: 85.4,
    toGainWeight(w=0){
        console.log('Engordou')
        this.wieght += w
    }
}
friend.toGainWeight(2)
console.log(`${friend.name} pesa ${friend.wieght}kg`)