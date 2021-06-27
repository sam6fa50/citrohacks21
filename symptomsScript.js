var bpvar = "";

function submit()
        {
            bpvar = document.getElementById('bodyParts').value.toLowerCase();

            if (bpvar != "mental health" || bpvar != "head" || bpvar != "heart" || bpvar != "bones" || bpvar != "lungs")
            {
                document.getElementById('errorCode').innerHTML = "Sorry, please enter one of the following: Head, Heart, Bones, Lungs, or Mental Health";
            }
            else if (bpvar == "mental health" || bpvar == "head" || bpvar == "heart" || bpvar == "bones" || bpvar == "lungs")
            {
                document.getElementById('errorCode').innerHTML = "";
            }
        } 