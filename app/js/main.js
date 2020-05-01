'use strict'
//1

let task1Start = document.querySelector('.task1 form button');

task1Start.onclick = () => {
    let userNameValue = document.querySelector(".task1 form input[name ='name']").value,
        userMessageValue = document.querySelector(".task1 form textarea[name ='userText']").value,
        outContent = document.createElement('div'),
        actionDate = new Date,
        userDataObj = {};
    console.log(actionDate.getDay);

    function addNull(check) {
        if (check < 10) {
            return '0' + check;
        }
        return check;
    }

    function insertTime(timeObj) {
        let t = `Add at: ${addNull(timeObj.getHours())}:${addNull(timeObj.getMinutes())}:${addNull(timeObj.getSeconds())}  ${addNull(timeObj.getDate())}.${addNull(timeObj.getMonth() + 1)}.${timeObj.getFullYear()}`;
        return t;
    }

    userDataObj.UserName = userNameValue;
    userDataObj.UserMessage = userMessageValue;
    outContent.innerHTML = '<div>' + userDataObj.UserName + '</div><div>' + insertTime(actionDate) + '</div> <div> ' + userDataObj.UserMessage + '</div></div>';
    document.querySelector('.content').append(outContent);
};

//2

let nextQue = document.getElementById('nextQue'),
    testEnd = document.getElementById('testEnd'),
    testObj1 = document.forms[1].que1,
    testObj2 = document.forms[1].que1,
    result;

nextQue.onclick = () => {
    if (testObj1[0].checked || testObj1[1].checked) {
        document.querySelector('.question1').style.display = 'none';
        document.querySelector('.question2').style.display = 'grid';
        result = document.querySelector("input[name = 'que1']:checked").value;
    }
}

testEnd.onclick = () => {
    if (testObj2[0].checked || testObj2[1].checked) {
        result = (+result) + (+document.querySelector("input[name = 'que2']:checked").value);
        document.querySelector('.question2').style.display = 'none';
        document.createElement('div').innerText = result;
        document.querySelector('.task2').innerHTML = ' <div class="centerPlz">Result:' + result + ' correct answers to 2 questions </div> ';
    }
};

//3
let showText = document.forms[2].mybut,
    textAlignValue = document.forms[2].alignText,
    fontStyleValue = document.forms[2].textStyle;

let textAlignArr = ['left', 'right', 'justify'];

showText.onclick = function () {

    let outputText = document.createElement('div');
    outputText.style.textAlign = textAlignArr[textAlignValue.value];
    outputText.style.border = '3px solid rgb(177, 177, 177)';
    outputText.style.padding = '10px';
    if (fontStyleValue[0].checked) outputText.style.fontWeight = document.querySelector('#bbold:checked').value;
    if (fontStyleValue[1].checked) outputText.style.textDecoration = document.querySelector('#uunderline:checked').value;
    if (fontStyleValue[2].checked) outputText.style.fontStyle = document.querySelector('#iitalic:checked').value;
    outputText.innerHTML = '<div> Result:</div>' + '<div style="border: black 1px solid; min-height: 50px;">' + document.getElementById('someText').value + '</div>';

    document.forms[2].append(outputText);
};

//4
let books = document.querySelectorAll('.item'),
    buttonAdd = document.querySelectorAll('.item button'),
    buySomething = document.getElementById('buySomething');


buttonAdd.forEach.call(buttonAdd, function (el) {
    el.addEventListener('click', takeButtons);
})

function takeButtons() {
    books.forEach.call(books, function (el2) {
        el2.addEventListener('click', function takeBook() {

            console.log(this.querySelector('.book-name').innerText);
            document.getElementById('outBookName').value = this.querySelector('.book-name').innerText;
            document.querySelector("input[name='quantity']").value = 1;

        }, {once: true});
    });
};
buySomething.addEventListener('click', function (e) {
    e.preventDefault();
    let customModal = document.createElement('div'),
        modalText = document.createElement('div'),
        userName = document.forms[3].name,
        userSelectedBook = document.forms[3].outBookName,
        userAddress = document.forms[3].address,
        userDateDelivery = document.forms[3].date;

    customModal.classList.add('modalFromJs');
    modalText.classList.add('modal-text');
    customModal.append(modalText);
    document.body.append(customModal);
    //  document.html.style.overflowY = 'hidden';    почему не работает)
    document.body.style.position = 'relative';
    modalText.innerHTML = `<div>${userName.value} thank for order! </div> <div> Book " ${userSelectedBook.value} " will be delivered on ${userDateDelivery.value}  to ${userAddress.value} </div>  `;

});

//5

let presentStudents = [[[], [], []], [[], [], []]],
    groupTakeButton = document.getElementById('group-take'),
    saveDataButton = document.getElementById('saveData'),
    refreshSelect = document.querySelectorAll(".task5-form > select, #group-take"),
    selectGroup,
    selectLesson,
    topicName,
    studentStatus,
    outStudentData = document.querySelectorAll(".out-cell"),
    outTopicInfo = document.getElementById('topic-info-out');

function addValues() {
    selectGroup = +document.getElementById("groups").value;
    selectLesson = +document.getElementById("lessons").value;
    topicName = document.getElementById('topic-info-in').value;
    studentStatus = document.querySelectorAll(".students-info input[type='checkbox']");
    console.log(selectGroup, selectLesson, topicName, studentStatus);
}

function f5_select() {
    selectGroup = +document.getElementById("groups").value;
    selectLesson = +document.getElementById("lessons").value;
}


refreshSelect.forEach.call(refreshSelect, function (el) {
    el.addEventListener('mouseenter', f5_select);
});
function insertData(){
    saveDataButton.style.display = 'none';
    outTopicInfo.innerText = presentStudents[selectGroup][selectLesson][0];
    let k = 0;
    for (let i = 1; presentStudents[selectGroup][selectLesson].length > i; i++) {
        outStudentData[k].innerHTML = ` ${presentStudents[selectGroup][selectLesson][i]}`;
        k++;
    }
}
groupTakeButton.onclick = () => {
    if (presentStudents[selectGroup][selectLesson].length > 0) {
       insertData();
    } else {
        let returnTopic = document.createElement('input');
        returnTopic.id = 'topic-info-in';
        returnTopic.type = 'text';
        outTopicInfo.innerHTML = ' ';
        outTopicInfo.append(returnTopic);
        saveDataButton.style.display = 'block';
        outStudentData.forEach(function (el) {
            el.innerHTML = '<input type="checkbox">';
        })
    }
}

saveDataButton.onclick = () => {
    addValues();
    if (presentStudents[selectGroup][selectLesson].length === 0) {
        presentStudents[selectGroup][selectLesson][0] = topicName;
        studentStatus.forEach(function (p) {

            if (p.checked === false) {
                presentStudents[selectGroup][selectLesson].push(' - ');
            } else {
                presentStudents[selectGroup][selectLesson].push('Present!');
            }
        });
    }
    if (presentStudents[selectGroup][selectLesson].length > 0) {
        insertData();
    }
};





