var doctors = {
    "head": {"Doctor A": ["111-111-1111", "doctora@domain.com", "Concussion"], 
    "Doctor B": ["111-111-1112", "doctorb@domain.com", "Migraine"], 
    "Doctor C": ["111-111-1113", "doctorc@domain.com", "Concussion"]}, 

    "heart": [{"Doctor D": ["111-111-1114", "doctord@domain.com", "Coronary Artery Disease"], 
    "Doctor E": ["111-111-1115", "doctore@domain.com", "Heart Valve Disease"], 
    "Doctor F": ["111-111-1116", "doctorf@domain.com", "Heart Rhythm Problems"]}], 

    "lungs": [{"Doctor G": ["111-111-1117", "doctorg@domain.com", "Lung Cancer"], 
    "Doctor H": ["111-111-1118", "doctorh@domain.com", "Asthma"], 
    "Doctor I": ["111-111-1119", "doctori@domain.com", "Cystic Fibrosis"]}], 

    "bones": [{"Doctor J": ["111-111-1120", "doctorj@domain.com", "Osteoporosis"], 
    "Doctor K": ["111-111-1121", "doctork@domain.com", "Bursitis"], 
    "Doctor L": ["111-111-1122", "doctorl@domain.com", "Bursisitis"]}], 

    "mental health": [{"Doctor M": ["111-111-1123", "doctorm@domain.com", "Depression"], 
    "Doctor N": ["111-111-1124", "doctorn@domain.com", "Anxiety"], 
    "Doctor O": ["111-111-1125", "doctoro@domain.com", "Depression"]}]
};

var symptomsList = Object.keys(doctors);
var appropriateDoctors = Object.values(doctors);


for (let i in symptomsList)
{
    if (symptomsList[i] == bpvar)
    {
        appropriateDoctors = Object.values(doctors)[i];
        appropriateDoctors = Object.values(appropriateDoctors)[i];
        console.log(Object.values(doctors)[i]);

        for (let j in appropriateDoctors)
        {
            console.log(Object.keys(appropriateDoctors)[j]);
            for (let k in appropriateDoctors)
            {
                console.log(Object.values(appropriateDoctors)[k]);
            }
        }
    }
}

/* 
for (let key in doctors) 
{
    var x = "mental health";
    if (x === key) 
    {
        var y = doctors.key;
        for (let subkey in y) 
        {
            console.log(subkey);
            var z =  y.subkey;
            for (let values in z) 
            {
                console.log(values);
            }
        }
    }
}
 */
var symptomsList = Object.keys(doctors);