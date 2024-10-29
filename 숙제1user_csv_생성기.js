// import { v4 as uuidv4 } from "uuid";
// import { v4 as uuidv4 } from 'uuid';
const { v4: uuidv4 } = require("uuid")

const fs = require('fs');

fs.writeFile("user.csv", `${user_100(1000)}`, (err) => {
    if (err) console.log("Error", err);
    else console.log("File 만들어짐");
})


function user_100(n) {
    let data = []
    for (let i = 0; i < n; i++) {
        data.push(`${uuidv4()}, ${NameData()}, ${GenderData()}, ${BirthData()}, ${AddresData_random()}`)
        
    }
    return data.join("\n");
}


// console.log(`uuidv4(), NameData(), GenderData(), BirthData(), AddresData_random()`)
// console.log(NameData())
// console.log(GenderData())
// console.log(BirthData())
// console.log(AddresData_random())


// 랜덤 이름 데이터 생성기
function NameData() {
    // last_name = 순환 = 이름은 가운데 10개 끝에 10개 랜덤으로 돌리기
    // middle_name = 순환
    // first_name = 순환 = 김이박민
    const first_name = ["김", "이", "박", "민"]
    const middle_name = ["일", "이", "삼", "넷", "오"]
    const last_name = ["나", "는", "돌", "이", "다"]
    const random_first_name = first_name[Math.floor(Math.random() * first_name.length)]
    const random_middle_name = middle_name[Math.floor(Math.random() * middle_name.length)]
    const random_last_name = last_name[Math.floor(Math.random() * last_name.length)]
    return `${random_first_name}${random_middle_name}${random_last_name}`
}
// console.log(NameData())


function GenderData() {
    const gender = ["남", "여", "성별을 알수없음"]
    const RandomGender = gender[Math.floor(Math.random() * gender.length)]
    return `${RandomGender}`
}

// console.log(GenderData())

function BirthData() {
    // month = 1~12
    // day = 1~30 인데 
    // month가 2일때는 1~29까지만 // 윤년 계산 하지 않음
    // month 가 2,4,6,9,11 일떈 1~30
    // year = 1970 ~ 2005
    // 공식 사이트는 이렇게 나오는게 이게되네??
    // function getRandomArbitrary(min, max) {
    //     return Math.random() * (max - min) + min;}
    const random_year = Math.floor(Math.random() * (2005 - 1970) + 1970);
    let random_day = Math.floor(Math.random() * 30) + 1
    const random_month = Math.floor(Math.random() * 12) + 1

    if (random_month == 2) {
        random_day = Math.floor(Math.random() * 29) + 1
    }
    else if ([4, 6, 9, 11].includes(random_month)) {
        random_day = Math.floor(Math.random() * 30) + 1
    }
    else if
        ([1, 3, 5, 7, 9, 12].includes(random_month)) {
        random_day = Math.floor(Math.random() * 31) + 1
    }

    return `${random_year}년 ${random_month}월 ${random_day}일`
}

// console.log(BirthData())

function AddresData_random() {
    //  서울 강 동서남북
    //  대전 유성구, 서구, 중구 , 동구
    //  대구 서구 북구 동구 중구
    //  부산 북구 동구 서구 해운대구
    //  울산 중구 남구 동구 북구
    //  주소 = random xx -x  주소 랜덤하게 나오게하자
    const Region1 = ["서울", "대전", "대구", "부산", "울산"]
    const Region2 = {
        "서울": ["강동구", "강남구", "강서구", "강북구"],
        "대구": ["유성구", "서구", "중구", "동구"],
        "대전": ["서구", "북구", "동구", "중구"],
        "부산": ["북구", "동구", "서구", "해운대구"],
        "울산": ["중구", "남구", "동구", "북구"]
    }
    // const seoul = ["강동구","강남구","강서구","강북구"]
    // const daejeon = ["유성구","서구","중구","동구"] 
    // const daegu = ["서구","북구","동구","중구"]
    // const busan = ["북구","동구","서구","해운대구"]
    // const ulsan = ["중구","남구","동구","북구"]
    const addresNumber1 = Math.floor(Math.random() * (99 - 1) + 1);
    const addresNumber2 = Math.floor(Math.random() * (9 - 1) + 1);
    // 상위 문자열을 랜덤하게 선택
    const random_Upper_region = Region1[Math.floor(Math.random() * Region1.length)];

    // 하위 문자열을 랜덤하게 선택
    const random_lower_region = Region2[random_Upper_region][Math.floor(Math.random() * Region2[random_Upper_region].length)];

    return `${random_Upper_region}-${random_lower_region} ${addresNumber1} - ${addresNumber2}`

}

// console.log(AddresData_random())

