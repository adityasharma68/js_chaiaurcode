// basic Syntax, Switch case is easier than if else condition, when we have a multiple condition to cheak against a single variable then a switch case is easier than the if else condition.

// switch (key) {
//     case value:
    
//         break;

//     default:
//         break;
// }

const month =  4

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break; //**IMP INTERVIEW TYPE QUES., break help to break the control bcz if we are not use then it cheak next value also except default value

    default:
        console.log("Default case match");
        
        break;
}

