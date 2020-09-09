(function(window, undefined) {
var dictionary = {
"2f196579-398b-4690-abe0-9d1c4d4940a3": "เพื่อน",
"78916770-54d9-4169-bd93-ea0cee1b53f9": "หน้าแรก",
"250d14a4-5a49-4dd5-a79b-a0cb5c939743": "ค้นหาเพื่อน",
"d78c87e2-1a33-4da7-a89d-b53a7ee7e746": "123",
"ca8c0b5f-7d6a-4d09-a1ca-cc9d29265d70": "การจัดการรายชื่อผู้ติดต่อ",
"256607f7-f80a-405d-b950-4e91ea6ac060": "5-ช่วยเหลือ",
"cea6e964-f2d2-4b95-aa1e-ed7fd96f9fb4": "4-ท้าทาย",
"87799f83-edf4-4ad4-b6bd-972827f8b846": "2-แจ้งเตือน",
"b0599c6d-64c7-4cdf-8195-fa2d97e72e3b": "Sing in",
"e9c80754-163d-453f-9a3b-b87c69a17243": "การท้าทาย",
"076ecfbc-dc3a-4685-ab09-3e502cd5b688": "3-รายชื่อผู้ติดต่อ",
"4295ef3d-0c03-4446-86ed-2a73c5f2f08c": "BeCHANGE",
"93adc9b4-1cb7-4464-bb78-d94bfcb2c10a": "ตั้งค่า",
"0c863a2c-208a-41ee-b353-43504db23c5d": "4-ความสำเร็จ",
"3880ddf1-d4e7-4d36-813c-543ce0dae1e3": "ความสำเร็จ",
"88df5214-9920-428e-838a-509bbd4554b7": "แจ้งเตือน",
"fa197263-4593-4b36-820e-8c5f64c9ac7c": "สถิติการใช้งาน",
"bf976139-1e35-4d79-a6ca-725e2dc704b2": "การเปิดปิด",
"303c6d16-2f01-45d4-b690-f63e4615ca6c": "1-ลืมรหัส",
"3d603d02-ce3b-45d9-aefb-eb2df2234712": "สมัครสมาชิก",
"9ec61798-1b3c-408a-81c7-12c999e23e87": "3-facebook",
"b31de7dc-0f47-4319-ab94-d43ca10f64d8": "ข้อมูลสุขภาพ",
"37828431-47fa-40e4-9453-bf464a7fb0bd": "สถานะการแจ้งเตือน",
"e194a328-5dcb-40fc-9a81-3a77666ac647": "1-แจ้งเตือน",
"955a66e0-7c60-41f9-8b29-78f13e80d90c": "กิจกรรม",
"f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
"bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
};

var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
window.lookUpURL = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, url;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
url = folder + "/" + canvas;
}
return url;
};

window.lookUpName = function(fragment) {
var matches = uriRE.exec(fragment || "") || [],
folder = matches[2] || "",
canvas = matches[3] || "",
name, canvasName;
if(dictionary.hasOwnProperty(canvas)) { /* search by name */
canvasName = dictionary[canvas];
}
return canvasName;
};
})(window);