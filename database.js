// Tao Object Cham Cong Thang
const congThangTu = [
    {
        date: '01',
        value: 1
    },
    {
        date: '02',
        value: 1
    },
    {
        date: '03',
        value: 1
    },
    {
        date: '04',
        value: 1
    },
    {
        date: '05',
        value: 1.5
    },
    {
        date: '06',
        value: 1.5
    },
    {
        date: '07',
        value: 1.5
    },
    {
        date: '08',
        value: 1.5
    },
    {
        date: '09',
        value: 1.5
    },
    {
        date: '10',
        value: 1
    },
    {
        date: '11',
        value: 1
    },
    {
        date: '12',
        value: 1
    },
    {
        date: '13',
        value: 1
    },
    {
        date: '14',
        value: 1
    },
    {
        date: '15',
        value: 1
    },
    {
        date: '16',
        value: 1
    },
    {
        date: '17',
        value: 1.5
    },
    {
        date: '18',
        value: 1.5
    },
    {
        date: '19',
        value: 1.5
    },
    {
        date: '20',
        value: 1.5
    },
    {
        date: '21',
        value: 1
    },
    {
        date: '22',
        value: 1
    },
    {
        date: '23',
        value: 1
    },
    {
        date: '24',
        value: 1
    },
    {
        date: '25',
        value: 1
    },
    {
        date: '26',
        value: 1.5
    },
    {
        date: '27',
        value: 1.5
    },
    {
        date: '28',
        value: 1.5
    },
    {
        date: '29',
        value: 2
    },
    {
        date: '30',
        value: 2
    }
]

const congThangNam = [
    {
        date: 1,
        value: 2
    }
]

let tongCong = 0;
for(var i = 0; i < congThangTu.length; i++){
    tongCong += congThangTu[i].value
}
export {tongCong};

// export value
