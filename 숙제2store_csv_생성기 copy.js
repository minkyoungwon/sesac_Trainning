


// fs 불러와서 writeFile 해서 csv 파일 만드는것
const { v4: uuidv4 } = require("uuid")
const fs = require("fs")

fs.writeFile("store.csv",`${store_100(100)}`, (err) => {
    if (err) console.log(`err`, err);
        else console.log("파일 만들어짐");
})

// 주소는 userid에서 쓰는 AddresData_random 가져와서 써버림
function store_100(n) {
    let a = []
    for (i=0; i<n; i++) {
        a.push(`${uuidv4()}, ${type()}, ${store_name()}, ${AddresData_random()}`)
}
        return a.join(`\n`)
}

function type() {
    const store_type = ["스타벅스","이디야","커피빈","투썸"]
    const random_store_type = store_type[Math.floor(Math.random()* store_type.length)]
    return `${random_store_type}`
}

function store_name() {
    const store_name = ["홍대","잠실","신촌","송파","장한평","새싹옆동네"]
    const random_store_name = store_name[Math.floor(Math.random() * store_name.length)]
    const store_number = Math.floor(Math.random() * (10 - 1) + 1 )
    return `${random_store_name}_${store_number}호점`
}

// console.log(`${type()} 과 ${store_name()}`)


function AddresData_random() {
    const Region1 = ["서울", "대전", "대구", "부산", "울산"]
    const Region2 = {
        "서울": ["강동구", "강남구", "강서구", "강북구"],
        "대구": ["유성구", "서구", "중구", "동구"],
        "대전": ["서구", "북구", "동구", "중구"],
        "부산": ["북구", "동구", "서구", "해운대구"],
        "울산": ["중구", "남구", "동구", "북구"]
    }
    const addresNumber1 = Math.floor(Math.random() * (99 - 1) + 1);
    const addresNumber2 = Math.floor(Math.random() * (9 - 1) + 1);

    // 상위 문자열 랜덤쓰 Upper
    const random_Upper_region = Region1[Math.floor(Math.random() * Region1.length)];
    // 하위 문자열 랜덤쓰 lower
    const random_lower_region = Region2[random_Upper_region][Math.floor(Math.random() * Region2[random_Upper_region].length)];

    return `${random_Upper_region}-${random_lower_region} ${addresNumber1} - ${addresNumber2}`
}
// console.log(AddresData_random())



