alert("عبدالعزيز الوزان");
console.log("عبدالعزيز الوزان");
console.log("انا في الصف العاشر");
console.log("%cHello", "color: green; font-size: 30px");
// hgg:

let budget = 20;
console.log(budget > 30 && budget < 80);

budget += 30;
console.log(budget > 30 && budget < 80);

let grade = prompt("enter your grade");
if (grade >= 90 && grade < 100) {
  console.log("لقد حصلت على امتياز");
} else if (grade >= 80) {
  console.log("لقد حصلت على جيد جداً🤩");
} else if (grade >= 70) {
  console.log("لقد حصلت على جيد🙂");
} else if (grade >= 60) {
  console.log("لقد حصلت على مقبول😕");
} else if (grade >= 50) {
  console.log("لقد حصلت على ضعيف☹️");
} else {
  console.log("راسب💔");
}
