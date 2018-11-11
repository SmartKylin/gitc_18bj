import Award1 from './images/award1.png'
import Award2 from './images/award2.png'
import Award3 from './images/award3.png'
import Award4 from './images/award4.png'
import Award5 from './images/award5.png'
import Award6 from './images/award6.png'
import Award7 from './images/award7.png'
import Award8 from './images/award8.png'
import Award9 from './images/award9.png'

const data = [
    {
        id: 117,
        src: Award1
    },
    {
        id: 118,
        src: Award2
    },
    {
        id: 119,
        src: Award3
    }, 
    {
        id: 120,
        src: Award4
    },
    {
        id: 121,
        src: Award5
    },
    {
        id: 122,
        src: Award6
    },
    {
        id: 123,
        src: Award7
    }, 
    {
        id: 124,
        src: Award8
    },
    {
        id: 125,
        src: Award9
    }
]
export const awardType = (id) => {
    return data.find(v => v.id == id).src
}