var name = 5;

var letter = "Dear " + name + "\n\
Lorem Ipsum is simply dummy text of the printing and typesetting industry. " + name + " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, egoing when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of " + name + " Lorem Ipsum.";

// console.log(letter);

var letter = `Dear ${name} Lorem Ipsum is simply dummy text of the printing and typesetting industry. ${name} Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, egoing when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of ${name} Lorem Ipsum.` ;

console.log(letter);

// 물결 무늬 있는 곳 ~ -> ``