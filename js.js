const personal_info = [{
        id: 1,
        fullname: 'asghar sadeghi',
        majer: 'doctor',
        photo: '1*mk1-6aYaf_Bes1E3Imhc0A.jpg',
        descrition: 'sadfasdff sdf sdfs dfsdf sgs sdgas sadgas g'

    },
    {
        id: 2,
        fullname: 'saeid esfandiari',
        majer: 'engineer',
        photo: '1*mk1-6aYaf_Bes1E3Imhc0A.jpg',
        descrition: 'sadfasdff sdf sdfs dfsdf sgs sdgas sadgas g'

    },
    {
        id: 3,
        fullname: 'ghamar toloi',
        majer: 'tennsor',
        photo: '1*mk1-6aYaf_Bes1E3Imhc0A.jpg',
        descrition: 'sadfasdff sdf sdfs dfsdf sgs sdgas sadgas g'

    },
    {
        id: 4,
        fullname: 'danial  abasi',
        majer: 'worker',
        photo: '1*mk1-6aYaf_Bes1E3Imhc0A.jpg',
        descrition: 'sadfasdff sdf sdfs dfsdf sgs sdgas sadgas g'

    },
    {
        id: 5,
        fullname: 'mohsen chavoshi',
        majer: 'owner',
        photo: '1*mk1-6aYaf_Bes1E3Imhc0A.jpg',
        descrition: 'sadfasdff sdf sdfs dfsdf sgs sdgas sadgas g',

    }
];
var continer = document.getElementById('continer');


let i = 0;

window.addEventListener('DOMContentLoaded', function() {
    FnTakePersonalInfo();

})

function FnTakePersonalInfo() {
    continer.innerHTML = `
        <div class="title">
            <h1>our review</h1>
            <div class="under_line"></div>
        </div>
        <div class="MainPartof_personal_information">
            <div class="keeper_img">
                <img src="${personal_info[i].photo}" alt="" class="personal_img">
            </div>
            <div class="keeper_name_majer">
                <h2 class="fulname">${personal_info[i].fullname}</h2>
                <h3 class="majer">${personal_info[i].majer}</h3>
            </div>
            <div class="descritionOfYourself">
                <textarea name="" id="" cols="100" rows="10">
                ${personal_info[i].descrition}
                </textarea>
            </div>
            <div class="btn_keeper">
                <button class="btn_right_left" id="btn_left"> < </button>
                <button class="btn_right_left" id="btn_right"> > </button>
            </div>
            <div class="btn_keeper_surprise">
                <button class="btn_surprise" id="btn_surprise">surprise me</button>
            </div>
        </div> 
    `;
    var btn_right = document.getElementById('btn_right');
    var btn_left = document.getElementById('btn_left');
    var btn_surprise = document.getElementById('btn_surprise');
    btn_surprise.addEventListener("click", function() {
        i = Math.floor(Math.random() * personal_info.length);
        FnTakePersonalInfo();
    })
    btn_right.addEventListener('click', function() {
        i++;

        FnChangeInfo();

    });
    btn_left.addEventListener('click', function() {
        i--;
        FnChangeInfo();

    });



}

function FnChangeInfo() {
    if (i < personal_info.length && i > 0) {
        FnTakePersonalInfo();

    } else {
        i = 0;
        FnTakePersonalInfo();

    }
}