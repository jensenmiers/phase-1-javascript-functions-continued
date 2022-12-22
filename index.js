function saturdayFun(para1 = 'roller-skate') {
    return `This Saturday, I want to ${para1}!`
}

saturdayFun()
//

const mondayWork = function (para2 = 'go to the office') {
    return `This Monday, I will ${para2}.`
}

function wrapAdjective(para3 = '*') {
    function spec(para4 = 'special') {
        return `You are ${para3}+${para4}+${para3}!`
    }
}
wrapAdjective()()